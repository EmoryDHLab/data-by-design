export const visWidth = (windowWidth = window.innerWidth) => {
  return (windowWidth / 3) * 2;
};

export const visHeight = (windowHeight = window.innerHeight) => {
  return (windowHeight / 6) * 5;
};

export const visSize = (
  windowHeight = window.innerHeight,
  windowWidth = window.innerWidth
) => {
  return {
    width: visWidth(windowWidth),
    height: visHeight(windowHeight),
  };
};

export const versionWidth = (windowWidth = window.innerWidth) => {
  return visWidth(windowWidth) / 5;
};

export const versionHeight = (windowHeight = window.innerHeight) => {
  return visHeight(windowHeight) / 14;
};

const versionSpacing = (windowWidth = window.innerWidth) => {
  return versionWidth(windowWidth) / 2;
};

const versionMidX = (index: number, windowWidth: number) => {
  return versionX(index) + versionWidth(windowWidth) / 2;
};

const versionBottomY = (windowHeight: number) => {
  return versionHeight(windowHeight) / 3 + versionHeight(windowHeight);
};

export const VIS_SIZE = visSize();

export const VERSION_WIDTH = versionWidth(window.innerWidth);
export const VERSION_HEIGHT = versionHeight(window.innerHeight);
export const VERSION_SPACING = versionSpacing(window.innerWidth);

const versionX = (index: number, windowWidth = window.innerWidth) => {
  return (
    versionWidth(windowWidth) * index +
    versionSpacing(windowWidth) * (1 + index)
  );
};

const versionY = (windowHeight = window.innerHeight) => {
  return versionHeight(windowHeight) / 3;
};

const personX = (offset: number, windowWidth = window.innerWidth) => {
  return visWidth(windowWidth) * offset;
};

const personY = (offset: number, windowHeight = window.innerHeight) => {
  return visHeight(windowHeight) * offset;
};

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
  ONE = "V.1",
  TWO = "V.2",
  THREE = "V.3",
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
  getX: (index: number, windowWidth: number) => number;
  getMidX: (index: number, windowWidth: number) => number;
  getY: (windowHeight: number) => number;
  getBottomY: (windowHeight: number) => number;
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
  xOffset: number;
  yOffset: number;
  getX: (offset: number, windowWidth: number) => number;
  getY: (offset: number, windowHeight: number) => number;
  opacity: number;
  none?: any;
};

export type TSelectedFilter = {
  id: string;
  label:
    | Locations
    | Departments
    | Institutions
    | Roles
    | "Select..."
    | "Select filter..."
    | "Clear filters";
};

export type TFilterOption = {
  id: number;
  label: string;
  key: "locations" | "departments" | "institutions" | "roles" | "none";
  options: TSelectedFilter[];
};

export const versionData: TVersionData = {
  [Versions.ONE]: {
    id: Versions.ONE,
    label: Versions.ONE,
    getX: versionX,
    getY: (windowHeight: number) => {
      return versionY(windowHeight);
    },
    getMidX: versionMidX,
    getBottomY: versionBottomY,
  },
  [Versions.TWO]: {
    id: Versions.TWO,
    label: Versions.TWO,
    getX: versionX,
    getY: versionY,
    getMidX: versionMidX,
    getBottomY: versionBottomY,
  },
  [Versions.THREE]: {
    id: Versions.THREE,
    label: Versions.THREE,
    getX: versionX,
    getY: (windowHeight: number) => {
      return versionY(windowHeight);
    },
    getMidX: versionMidX,
    getBottomY: versionBottomY,
  },
};

export const peopleData: TPerson[] = [
  {
    id: FirstNames.LK,
    firstName: FirstNames.LK,
    lastName: LastNames.LK,
    versions: [
      versionData[Versions.ONE],
      versionData[Versions.TWO],
      versionData[Versions.THREE],
    ],
    institutions: [Institutions.T, Institutions.E],
    roles: [Roles.R, Roles.W],
    departments: [Departments.E, Departments.L, Departments.MC, Departments.Q],
    positions: [Positions.F],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.17,
    xOffset: 0.17,
    getX: personX,
    y: VIS_SIZE.height * 0.65,
    yOffset: 0.65,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.TS,
    firstName: FirstNames.TS,
    lastName: LastNames.TS,
    versions: [versionData[Versions.TWO], versionData[Versions.THREE]],
    institutions: [Institutions.N, Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.G, Departments.I, Departments.Q],
    positions: [Positions.U, Positions.G, Positions.R],
    locations: [Locations.NY],
    x: VIS_SIZE.width * 0.25,
    xOffset: 0.25,
    getX: personX,
    y: VIS_SIZE.height * 0.75,
    yOffset: 0.75,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.JV,
    firstName: FirstNames.JV,
    lastName: LastNames.JV,
    versions: [versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.DV],
    departments: [Departments.ECDS],
    positions: [Positions.R],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.85,
    xOffset: 0.85,
    getX: personX,
    y: VIS_SIZE.height * 0.7,
    yOffset: 0.7,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.NY,
    firstName: FirstNames.NY,
    lastName: LastNames.NY,
    versions: [versionData[Versions.TWO], versionData[Versions.THREE]],
    institutions: [Institutions.N],
    roles: [Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.NY],
    x: VIS_SIZE.width * 0.65,
    xOffset: 0.65,
    getX: personX,
    y: VIS_SIZE.height * 0.45,
    yOffset: 0.45,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.DJ,
    firstName: FirstNames.DJ,
    lastName: LastNames.DJ,
    versions: [
      versionData[Versions.ONE],
      versionData[Versions.TWO],
      versionData[Versions.THREE],
    ],
    institutions: [Institutions.T],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.35,
    xOffset: 0.35,
    getX: personX,
    y: VIS_SIZE.height * 0.2,
    yOffset: 0.2,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.JF,
    firstName: FirstNames.JF,
    lastName: LastNames.JF,
    versions: [
      versionData[Versions.ONE],
      versionData[Versions.TWO],
      versionData[Versions.THREE],
    ],
    institutions: [Institutions.T, Institutions.B],
    roles: [Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U, Positions.G],
    locations: [Locations.ATL, Locations.BK],
    x: VIS_SIZE.width * 0.48,
    xOffset: 0.48,
    getX: personX,
    y: VIS_SIZE.height * 0.38,
    yOffset: 0.38,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.AM,
    firstName: FirstNames.AM,
    lastName: LastNames.AM,
    versions: [versionData[Versions.TWO], versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS, Departments.V],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.61,
    xOffset: 0.61,
    getX: personX,
    y: VIS_SIZE.height * 0.23,
    yOffset: 0.23,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.SL,
    firstName: FirstNames.SL,
    lastName: LastNames.SL,
    versions: [versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.D],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.92,
    xOffset: 0.92,
    getX: personX,
    y: VIS_SIZE.height * 0.36,
    yOffset: 0.36,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.MA,
    firstName: FirstNames.MA,
    lastName: LastNames.MA,
    versions: [versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.R, Roles.W],
    departments: [Departments.E],
    positions: [Positions.D],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.88,
    xOffset: 0.88,
    getX: personX,
    y: VIS_SIZE.height * 0.15,
    yOffset: 0.15,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.ZF,
    firstName: FirstNames.ZF,
    lastName: LastNames.ZF,
    versions: [versionData[Versions.TWO], versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.Q],
    positions: [Positions.U],
    locations: [Locations.SHI, Locations.ATL],
    x: VIS_SIZE.width * 0.51,
    xOffset: 0.51,
    getX: personX,
    y: VIS_SIZE.height * 0.62,
    yOffset: 0.62,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.YL,
    firstName: FirstNames.YL,
    lastName: LastNames.YL,
    versions: [versionData[Versions.THREE]],
    institutions: [Institutions.E],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.ECDS],
    positions: [Positions.R],
    locations: [Locations.SHI, Locations.BJ, Locations.ATL],
    x: VIS_SIZE.width * 0.76,
    xOffset: 0.76,
    getX: personX,
    y: VIS_SIZE.height * 0.57,
    yOffset: 0.57,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.SM,
    firstName: FirstNames.SM,
    lastName: LastNames.SM,
    versions: [versionData[Versions.TWO], versionData[Versions.THREE]],
    institutions: [Institutions.P],
    roles: [Roles.DE],
    departments: [],
    positions: [Positions.EX],
    locations: [Locations.LA],
    x: VIS_SIZE.width * 0.69,
    xOffset: 0.69,
    getX: personX,
    y: VIS_SIZE.height * 0.88,
    yOffset: 0.88,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.QT,
    firstName: FirstNames.QT,
    lastName: LastNames.QT,
    versions: [versionData[Versions.ONE]],
    institutions: [Institutions.T],
    roles: [Roles.DE],
    departments: [Departments.D],
    positions: [Positions.G],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.17,
    xOffset: 0.17,
    getX: personX,
    y: VIS_SIZE.height * 0.17,
    yOffset: 0.17,
    getY: personY,
    opacity: 1,
  },
  {
    id: FirstNames.AH,
    firstName: FirstNames.AH,
    lastName: LastNames.AH,
    versions: [versionData[Versions.ONE]],
    institutions: [Institutions.T],
    roles: [Roles.DE, Roles.DV],
    departments: [Departments.CS],
    positions: [Positions.U],
    locations: [Locations.ATL],
    x: VIS_SIZE.width * 0.25,
    xOffset: 0.25,
    getX: personX,
    y: VIS_SIZE.height * 0.35,
    yOffset: 0.35,
    getY: personY,
    opacity: 1,
  },
];

export const filterOptions: TFilterOption[] = [
  {
    id: 2,
    label: "Location",
    key: "locations",
    options: [
      ...Object.keys(Locations).map((opt) => {
        return { id: opt, label: Locations[opt as keyof typeof Locations] };
      }),
    ],
  },
  {
    id: 3,
    label: "Discipline",
    key: "departments",
    options: [
      ...Object.keys(Departments).map((opt) => {
        return { id: opt, label: Departments[opt as keyof typeof Departments] };
      }),
    ],
  },
  {
    id: 4,
    label: "Institution",
    key: "institutions",
    options: [
      ...Object.keys(Institutions).map((opt) => {
        return {
          id: opt,
          label: Institutions[opt as keyof typeof Institutions],
        };
      }),
    ],
  },
  {
    id: 5,
    label: "Role",
    key: "roles",
    options: [
      ...Object.keys(Roles).map((opt) => {
        return { id: opt, label: Roles[opt as keyof typeof Roles] };
      }),
    ],
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
