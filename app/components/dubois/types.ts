export interface StudentData {
  count: number;
  categories: Category[];
}

export interface Category {
  displayName: string;
  color: string;
  students: Student[];
}

export interface Student {
  name: string;
  location: string;
  year: number;
}

export interface ResponseData {
  id: string;
  gender: string;
  selection: string;
  lines: Array<string>;
  x: number;
  y: number;
}
