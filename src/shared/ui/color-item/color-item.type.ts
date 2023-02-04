export type ColorT = {
  color: string;
  name: string;
};

export interface ColorItemT extends ColorT {
  isActive: boolean;
  onColorPick: (arg: ColorT) => void;
}
