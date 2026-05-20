export enum Groupings {
  L = "locations",
  D = "departments",
  I = "institutions",
  R = "roles",
  P = "positions",
}

export enum FirstNames {
  LK = "Lauren",
  TS = "Tanvi",
  JV = "Jay",
  NY = "Nicholas",
  DJ = "Dan",
  JF = "Jianing",
  AM = "Anna",
  SL = "Shiyao",
  MA = "Margy",
  ZF = "Zhou",
  YL = "Yang",
  SM = "Silas",
  QT = "Qing",
  AH = "Adam",
  MO = "Morgan",
}

export enum LastNames {
  LK = "Klein",
  TS = "Sharma",
  JV = "Varner",
  NY = "Yang",
  DJ = "Jutan",
  JF = "Fu",
  AM = "Mola",
  SL = "Li",
  MA = "Adams",
  ZF = "Fang",
  YL = "Li",
  SM = "Munro",
  QT = "Tian",
  AH = "Hayward",
  MO = "Orangi",
}

export enum Versions {
  ONE = "V.1",
  TWO = "V.2",
  THREE = "V.3",
}

export enum Institutions {
  E = "Emory University",
  T = "Georgia Tech",
  N = "New York University",
  B = "UC Berkeley",
  P = "Polymode",
}

export enum Roles {
  DE = "Design",
  R = "Research",
  DV = "Development",
  W = "Writing",
}

export enum Departments {
  E = "English",
  L = "Literature, Media & Communication",
  Q = "Data & Decision Sciences",
  G = "Graphic Design",
  I = "Integrated Design & Media",
  ECDS = "Emory Center for Digital Scholarship",
  CS = "Computer Science",
  D = "Digital Media",
  V = "Visual Arts",
}

export enum Positions {
  F = "Faculty",
  U = "Undergraduate Student",
  G = "MS Student",
  R = "Research Staff",
  D = "PhD Student",
  EX = "Principal",
}

export enum Locations {
  ATL = "Atlanta",
  NY = "New York City",
  BK = "Berkeley",
  LA = "Los Angeles",
  SHI = "Shanghai",
  BJ = "Beijing",
}

type TVersion = {
  id: Versions;
  label: Versions;
  getX: (index: number, windowWidth: number) => number;
  getMidX: (index: number, windowWidth: number) => number;
  getY: (windowHeight: number) => number;
  getBottomY: (windowHeight: number) => number;
};

export type TVersionData = {
  [key: string]: TVersion;
};

type TGroupingXY = {
  x: number;
  y: number;
};

type TGroupingPositions = {
  [key in Groupings]: TGroupingXY;
};

export type TGroupingNode = {
  id: number;
  label: string;
  x: number;
  y: number;
  getX: (offset: number, windowWidth: number) => number;
  getY: (offset: number, windowHeight: number) => number;
  opacity: number;
};

export type TGroupingData = {
  [key in Groupings]: { [key: string]: TGroupingNode };
};

export type TPerson = {
  id: FirstNames;
  firstName: FirstNames;
  lastName: LastNames;
  label: `${FirstNames} ${LastNames}`;
  versions: TVersion[];
  institutions: TGroupingNode[];
  roles: TGroupingNode[];
  departments: TGroupingNode[];
  positions: TGroupingNode[];
  locations: TGroupingNode[];
  x: number;
  y: number;
  defaultX: number;
  defaultY: number;
  getX: (offset: number, windowWidth: number) => number;
  getY: (offset: number, windowHeight: number) => number;
  groupingsXY: TGroupingPositions;
  opacity: number;
  none?: any;
};

// export type TSelectedFilter = {
//   id: string;
//   label: Locations | Departments | Institutions | Roles;
// };

export type TFilterOption = {
  id: number;
  label: string;
  key: Groupings;
  nodes: TGroupingNode[];
};
