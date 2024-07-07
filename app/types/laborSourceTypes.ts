type TLaborSourceKey =
  | "github"
  | "figma"
  | "ical"
  | "gdrive"
  | "zotero"
  | string;

type TLaborSourceLabel =
  | "GitHub"
  | "Figma"
  | "iCal"
  | "GDrive"
  | "Zotero"
  | string;

type TLaborSourceColor =
  | "descriptionPrimary"
  | "shanawdithitPrimary"
  | "peabodyPrimary"
  | "playfairPrimary"
  | "duboisPrimary"
  | string;

type TLaborActiveColor = "white" | "black" | string;

export type TLaborSource =
  | {
      key: TLaborSourceKey;
      label: TLaborSourceLabel;
      color: TLaborSourceColor;
      activeText: TLaborActiveColor;
      inactiveText: TLaborActiveColor;
    }
  | undefined;

export type TLaborSources = TLaborSource[];

export type TLaborDataRow = {
  Semester: string;
  Figma: string;
  GitHub: string;
  GDrive: string;
  iCal: string;
  Zotero: string;
  date: string | Date;
};

export type TLaborData = TLaborDataRow[];
