import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  CSSProperties,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ColorItemT } from "./color-item.type";

export const ColorItem = (props: ColorItemT) => {
  return (
    <div className={st.color_item_wrapper}>
      <input
        type="radio"
        name="color-picker"
        id={`color-item-${props.color}`}
        value={props.color}
        checked={props.isActive}
        hidden
      />
      <label
        htmlFor={`color-item-${props.color}`}
        className={st.color_item}
        onClick={() =>
          props.onColorPick({ color: props.color, name: props.name })
        }
        style={{ "--color": props.color } as CSSProperties}
      ></label>
    </div>
  );
};
