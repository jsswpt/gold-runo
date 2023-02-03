export type PaginationElement = {
  onNavigate?: (arg: number) => void;
  count: number;
};

export type PaginationItem = {
  isActive: boolean;
  value: number;
  onNavigate?: () => void;
};
