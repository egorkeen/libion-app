import { ReactNode } from "react";
import styles from './GradientButton.module.scss';

interface IProps {
  type: "small" | "medium";
  children: ReactNode;
  props?: React.HTMLProps<HTMLButtonElement>;
}

const getClassByType = (type: "small" | "medium") => {
  let buttonClass = null;

  switch (type) {
    case "small":
      buttonClass = styles.smallGradientButton;
      break;
    case "medium":
      buttonClass = styles.gradientButton;
      break;
  }

  return buttonClass;
}

export const GradientButton = ({ type, children, ...props }: IProps) => {

  return (
    <button className={getClassByType(type)} {...props}>{children}</button>
  );
};