interface Props {
  // A schema.org object, serialized into a JSON-LD script tag.
  data: object;
}

export default function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` keeps a stray "</script>" inside any string value from
      // closing the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
