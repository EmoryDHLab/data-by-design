import {
  ContentData,
  ProcessedContent,
} from "../../lib/docs-cms/packages/google-docs-components";
import { Component } from "react";

interface Props {
  rootElement?: string;
  content: ProcessedContent;
  components: { [name: string]: Component };
  tableComponent?: [Object, boolean];
  inlineSlotFormat: RegExp;
  ignoreCss: string[];
  elementClasses: {
    [element: string]: string | object | Array<string | object>;
  };
  slotComponents: { [name: string]: Component };
}

function capitalize(str: string) {
  if (str.length < 2) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

function skewerCaseToCamelCase(str: string) {
  return str
    .split("-")
    .map((s, i) => (i > 0 ? capitalize(s) : s))
    .join("");
}

export default function DocsRenderer({
  rootElement = "div",
  content,
  components = {},
  tableComponent,
  inlineSlotFormat = /\[\^(\d*[a-zA-z]+\d*)](?:(.+)\[\/\1])*/g,
  ignoreCss = [],
  elementClasses = {},
  slotComponents,
}: Props) {
  function fromContent(data: ContentData) {
    if (typeof data === "string") {
      const inlineSlotMatches = data.matchAll(inlineSlotFormat);

      const insertions = [];
      for (const match of inlineSlotMatches) {
        if (match.index == undefined) continue;
        const slotName = match[1];
        const inner = match[2];
        if (slotName in slotComponents) {
          const ResolvedSlot = slotComponents[slotName];
          if (ResolvedSlot) {
            const start = match.index;
            const end = start + match[0].length;
            insertions.push({
              start,
              end,
              component: <ResolvedSlot>{inner}</ResolvedSlot>,
            });
          }
        }
      }

      if (!insertions.length) return data;
      const returnArr: Array<string | VNode> = [];
      let lastIndex = 0;
      insertions
        .sort((a, b) => a.start - b.start)
        .forEach(({ start, end, component }) => {
          if (lastIndex != start) {
            returnArr.push(data.slice(lastIndex, start));
          }
          returnArr.push(component);
          lastIndex = end;
        });
      if (lastIndex != data.length) returnArr.push(data.slice(lastIndex));
      return returnArr;
    }
    if ("element" in data) {
      let style = {};
      if (data.style) {
        style = Object.fromEntries(
          Object.entries(data.style)
            .filter(([key]) => !ignoreCss.includes(key))
            .map(([key, entry]) => {
              return [skewerCaseToCamelCase(key), entry];
            })
        );
      }

      let className;
      if (data.element in elementClasses) {
        className = elementClasses[data.element];
      }

      return (
        <data.element style={style} className={className} {...data.attrs}>
          {data.children.map(fromContent)}
        </data.element>
      );
    }

    if ("component" in data) {
      if (!(data.component in components)) return null;
      const Component = components[data.component];
      return <Component className={data.className} {...data.props} />;
    }
  }

  return <>{content.map(fromContent)}</>;
}
