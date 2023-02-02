import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "default" | "inherit";
  variant?: "outlined" | "contained";
}

export const Button = (props: Button) => {
  const { size, color, variant, className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(st.button, className, {
        [st.small]: size === "small",
        [st.medium]: size === "medium" || !size,
        [st.large]: size === "large",

        [st.bg_default]:
          (variant === "contained" || !props.variant) &&
          (color === "default" || !color),
        [st.bg_inherit]:
          (variant === "contained" || !props.variant) && color === "inherit",

        [st.border_default]:
          variant === "outlined" && (color === "default" || !color),
        [st.border_inherit]: variant === "outlined" && color === "inherit",
      })}
    >
      {props.children}
    </button>
  );
};
