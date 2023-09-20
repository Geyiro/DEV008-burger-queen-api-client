import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

export function Body({ children }: BodyProps) {
  return <tbody>{children}</tbody>;
}

export default Body;
