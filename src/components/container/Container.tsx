import React, { ReactNode } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
