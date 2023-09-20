import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

export function Table({ children }: TableProps) {
  return <table>{children}</table>;
}

export default Table;