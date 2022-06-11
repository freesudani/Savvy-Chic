export class Links {
  path: string;
  title: string;
  constructor(linksTitle: string, LinksPath: string) {
    this.title = linksTitle;
    this.path = LinksPath;
  }
}

export interface ArrangmentProps {
  setOpenSidebar: (arg: boolean) => void;
  openSidebar: boolean;
}

export interface CardColorProps {
  boxcolors: string[];
  colorPick: string;
  setColorPick: any;
}

export interface DealsProps {
  title: string;
  image: string;
  path: string;
}

export interface StoresProps {
  id: number;
  title: string;
  image: string;
  path: string;
}

export interface itemProps {
  id: number;
  title: string;
  image: string;
  path: string;
}

export interface StarProps {
  rating: number;
}

export interface MachinesProps {
  id: number;
  title: string;
  details: string;
  table: ("high" | "medium" | "low")[];
  image: string;
}
