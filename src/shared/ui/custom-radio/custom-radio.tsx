import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  InputHTMLAttributes,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

interface CustomRadio
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
  value?: string;
}

export const CustomRadio = (props: CustomRadio) => {
  const { value, ...restProps } = props;

  return (
    <div className={st.radio_wrapper}>
      <input
        {...restProps}
        type="radio"
        name="radio"
        value={value}
        id={`custom-radio-${props.id}`}
        hidden
      />
      <label htmlFor={`custom-radio-${props.id}`} className={st.radio}>
        {props.value}
      </label>
    </div>
  );
};
