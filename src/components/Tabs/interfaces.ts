export interface IProps {
  onChange: (newTabsState: ITab[]) => void;
  tabs: ITab[];
}

export interface ITab {
  isActive: boolean;
  key: string;
  label: string;
  value: number;
}

export interface IStyles {
  activeElement?: number;
  tabCount: number;
}
