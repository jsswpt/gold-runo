import st from "./styles.module.scss";
import cn from "classnames";
import Link, { LinkProps } from "next/link";

interface Button extends LinkProps {
  size?: "small" | "medium" | "large";
  color?: "default" | "inherit";
  variant?: "outlined" | "contained";
  bgOnHover?: "default" | "inherit";
  href: string;
  className?: any;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export const ButtonLink = (props: Button) => {
  const {
    size,
    color,
    variant,
    className,
    fullWidth,
    bgOnHover,
    ...restProps
  } = props;
  return (
    <Link
      {...restProps}
      className={cn(st.button, className, {
        [st.fullWidth]: fullWidth,

        [st.small]: size === "small",
        [st.medium]: size === "medium" || !size,
        [st.large]: size === "large",

        [st.bg_default]:
          (variant === "contained" || !props.variant) &&
          (color === "default" || !color),
        [st.bg_inherit]:
          (variant === "contained" || !props.variant) && color === "inherit",

        [st.bg_on_hover_default]: bgOnHover === "default" || !bgOnHover,
        [st.bg_on_hover_inherit]: bgOnHover === "inherit",

        [st.border_default]:
          variant === "outlined" && (color === "default" || !color),
        [st.border_inherit]: variant === "outlined" && color === "inherit",
      })}
    >
      {props.children}
    </Link>
  );
};
