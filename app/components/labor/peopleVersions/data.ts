enum FirstNames {
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
}

enum LastNames {
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
}

enum Versions {
  P = "Prototype",
  A = "Alpha",
  F = "Final",
}

enum Institutions {
  E = "Emory",
  T = "Georgia Tech",
  N = "NYU",
  B = "Berkeley",
  P = "Polymode",
}

enum Roles {
  DE = "Design",
  R = "Research",
  DV = "Development",
  W = "Writing",
}

enum Departments {
  E = "English",
  L = "Literature",
  MC = "Media & Communication",
  Q = "Quantitative Theory & Methods",
  G = "Graphic Design",
  I = "Integrated Design & Media",
  ECDS = "Emory Center for Digital Scholarship",
  CS = "Computer Science",
  D = "Digital Media",
  V = "Visual Arts",
}

enum Positions {
  F = "Faculty",
  U = "Undergraduate",
  G = "MS Student",
  R = "Research Staff",
  D = "PhD Student",
  EX = "External Contributor",
}

enum Locations {
  ATL = "Atlanta",
  NY = "New York",
  BK = "Berkeley",
  LA = "Los Angeles",
  SHI = "Shanghai",
  BJ = "Beijing",
}

export type TVersion = {
  id: Versions;
  label: Versions;
  x: number;
  y: number;
};

type TVersionData = {
  [key: string]: TVersion;
};

export type TPerson = {
  id: FirstNames;
  firstName: FirstNames;
  lastName: LastNames;
  versions: TVersion[];
  institutions: Institutions[];
  roles: Roles[];
  departments: Departments[];
  positions: Positions[];
  locations: Locations[];
  x: number;
  y: number;
  opacity: number;
  none?: any;
};

export type TSelectedFilter = {
  id: string;
  label: Locations | Departments | Institutions | Roles | "Select..." | "Select filter..." | "Clear filters";
}

export type TFilterOption = {
  id: number;
  label: string;
  key: "locations" | "departments" | "institutions" | "roles" | "none";
  options: TSelectedFilter[];
};

export const versionsData: TVersionData = {
  [Versions.P]: {
    id: Versions.P,
    label: Versions.P,
    x: 60,
    y: 90,
  },
  [Versions.A]: {
    id: Versions.A,
    label: Versions.A,
    x: 180,
    y: 90,
  },
  [Versions.F]: {
    id: Versions.F,
    label: Versions.F,
    x: 300,
    y: 90,
  },
};

export const peopleData: TPerson[] = [
  {
    id: FirstNames.LK,
    firstName: FirstNames.LK,
    lastName: LastNames.LK,
    versions: [
      versionsData[Versions.P],
      versionsData[Versions.A],
      versionsData[Versions.F],
    ],
    institutions: [Institutions.T, Institutions.E],
    roles: [Roles.R, Roles.W],
    departments: [Departments.E, Departments.L, Departments.MC, Departments.Q],
    positions: [Positions.F],
    locations: [Locations.ATL],
    x: 99,
    y: 158,
    opacity: 1,
  },
  {
    id: FirstNames.TS,
    firstName: FirstNames.TS,
    lastName: LastNames.TS,
    versions: [versionsData[Versions.A], versionsData[Versions.F]],
    institutions: [Institutions.N, Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.G, Departments.I, Departments.Q],
    positions: [Positions.U, Positions.G, Positions.R],
    locations: [Locations.NY],
    x: 235,
    y: 152,
    opacity: 1,
  },
  {
    id: FirstNames.JV,
    firstName: FirstNames.JV,
    lastName: LastNames.JV,
    versions: [versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.DV],
    departments: [Departments.ECDS],
    positions: [Positions.R],
    locations: [Locations.ATL],
    x: 303,
    y: 112,
    opacity: 1,
  },
  {
    id: FirstNames.NY,
    firstName: FirstNames.NY,
    lastName: LastNames.NY,
    versions: [versionsData[Versions.A], versionsData[Versions.F]],
    institutions: [Institutions.N],
    roles: [Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.NY],
    x: 242,
    y: 123,
    opacity: 1,
  },
  {
    id: FirstNames.DJ,
    firstName: FirstNames.DJ,
    lastName: LastNames.DJ,
    versions: [
      versionsData[Versions.P],
      versionsData[Versions.A],
      versionsData[Versions.F],
    ],
    institutions: [Institutions.T],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: 124,
    y: 115,
    opacity: 1,
  },
  {
    id: FirstNames.JF,
    firstName: FirstNames.JF,
    lastName: LastNames.JF,
    versions: [
      versionsData[Versions.P],
      versionsData[Versions.A],
      versionsData[Versions.F],
    ],
    institutions: [Institutions.T, Institutions.B],
    roles: [Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U, Positions.G],
    locations: [Locations.ATL, Locations.BK],
    x: 151,
    y: 158,
    opacity: 1,
  },
  {
    id: FirstNames.AM,
    firstName: FirstNames.AM,
    lastName: LastNames.AM,
    versions: [versionsData[Versions.A], versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS, Departments.V],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: 187,
    y: 154,
    opacity: 1,
  },
  {
    id: FirstNames.SL,
    firstName: FirstNames.SL,
    lastName: LastNames.SL,
    versions: [versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.D],
    locations: [Locations.ATL],
    x: 292,
    y: 140,
    opacity: 1,
  },
  {
    id: FirstNames.MA,
    firstName: FirstNames.MA,
    lastName: LastNames.MA,
    versions: [versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.R, Roles.W],
    departments: [Departments.E],
    positions: [Positions.D],
    locations: [Locations.ATL],
    x: 320,
    y: 129,
    opacity: 1,
  },
  {
    id: FirstNames.ZF,
    firstName: FirstNames.ZF,
    lastName: LastNames.ZF,
    versions: [versionsData[Versions.A], versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.Q],
    positions: [Positions.U],
    locations: [Locations.SHI, Locations.ATL],
    x: 196,
    y: 118,
    opacity: 1,
  },
  {
    id: FirstNames.YL,
    firstName: FirstNames.YL,
    lastName: LastNames.YL,
    versions: [versionsData[Versions.F]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.ECDS],
    positions: [Positions.R],
    locations: [Locations.SHI, Locations.BJ, Locations.ATL],
    x: 268,
    y: 158,
    opacity: 1,
  },
  {
    id: FirstNames.SM,
    firstName: FirstNames.SM,
    lastName: LastNames.SM,
    versions: [versionsData[Versions.A], versionsData[Versions.F]],
    institutions: [Institutions.P],
    roles: [Roles.DE],
    departments: [],
    positions: [Positions.EX],
    locations: [Locations.LA],
    x: 151,
    y: 129,
    opacity: 1,
  },
  {
    id: FirstNames.QT,
    firstName: FirstNames.QT,
    lastName: LastNames.QT,
    versions: [versionsData[Versions.P]],
    institutions: [Institutions.T],
    roles: [Roles.DE],
    departments: [Departments.D],
    positions: [Positions.G],
    locations: [Locations.ATL],
    x: 46,
    y: 118,
    opacity: 1,
  },
  {
    id: FirstNames.AH,
    firstName: FirstNames.AH,
    lastName: LastNames.AH,
    versions: [versionsData[Versions.P]],
    institutions: [Institutions.T],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: 65,
    y: 147,
    opacity: 1,
  },
];

export const filterOptions: TFilterOption[] = [
  { id: 1, label: "Filter by...", key: "none", options: [{ id: "none", label: "Select filter..."}]},
  {
    id: 2,
    label: "Location",
    key: "locations",
    options: [{ id: 'none', label: "Clear filters" }, ...Object.keys(Locations).map((opt) => {
      return { id: opt, label: Locations[opt as keyof typeof Locations] };
    })],
  },
  {
    id: 3,
    label: "Discipline",
    key: "departments",
    options: [{ id: 'none', label: "Clear filters" }, ...Object.keys(Departments).map((opt) => {
      return { id: opt, label: Departments[opt as keyof typeof Departments] };
    })],
  },
  {
    id: 4,
    label: "Institution",
    key: "institutions",
    options: [{ id: 'none', label: "Clear filters" }, ...Object.keys(Institutions).map((opt) => {
      return { id: opt, label: Institutions[opt as keyof typeof Institutions] };
    })],
  },
  {
    id: 5,
    label: "Role",
    key: "roles",
    options: [{ id: 'none', label: "Clear filters" }, ...Object.keys(Roles).map((opt) => {
      return { id: opt, label: Roles[opt as keyof typeof Roles] };
    })],
  },
];

// export const nodes: Array<TPerson | TVersion> = [...versionsData, ...peopleData];

// export const links = peopleData
//   .map((person) => {
//     return person.versions.map((version) => {
//       const versionData = versionsData.find((v) => v.id == version);
//       return {
//         source: person.id,
//         sourceX: person.x,
//         sourceY: person.y,
//         target: version,
//         targetX: versionData?.x,
//         targetY: versionData?.y
//       };
//     });
//   })
//   .flat();
