import { InputHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

interface Input extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large";
  textAlign?: "center" | "start";
  icon?: React.ReactNode;
  iconAlign?: "start" | "end";
}

export const Input = (props: Input) => {
  const { size, textAlign, icon, iconAlign, className, ...restProps } = props;
  return (
    <div className={cn(st.input_wrapper)}>
      {icon && (
        <div
          className={cn(st.icon_wrap, {
            [st.icon_start]: iconAlign === "start" || !iconAlign,
            [st.icon_end]: iconAlign === "end",
          })}
        >
          {icon}
        </div>
      )}
      <input
        {...restProps}
        className={cn(st.input, "body1", className, {
          [st.small]: size === "small",
          [st.medium]: size === "medium" || !size,
          [st.large]: size === "large",

          [st.text_start]: textAlign === "start" || !textAlign,
          [st.text_center]: textAlign === "center",
        })}
      />
    </div>
  );
};
