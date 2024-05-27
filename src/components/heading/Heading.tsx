import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  subClassName?: string;
}

export const Heading = ({
  headingLevel = "p",
  children,
  className,
  subClassName,
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);

  return (
    <Heading className={clsx(styles.title, subClassName)}>{children}</Heading>
  );
};
