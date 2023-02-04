import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ColorT } from "../../../shared/ui/color-item/color-item.type";
import { ColorItem } from "@/shared/ui/color-item/color-item";

type SelectColor = {
  colors: ColorT[];
  initialColor: ColorT;
  onColorSelect?: (arg: ColorT) => void;
};

export const SelectColor = (props: SelectColor) => {
  const [currentColor, setCurrentColor] = useState(props.initialColor);

  useEffect(() => {
    setCurrentColor(props.initialColor);
  }, [props.initialColor]);

  return (
    <div className={st.select_color_wrapper}>
      <div className={st.select_color_name}>
        <p className={cn("body2", st.color_name)}>{currentColor.name}</p>
      </div>
      <div className={st.select_color_colors}>
        {props.colors.map((item) => (
          <ColorItem
            isActive={currentColor.color === item.color}
            {...item}
            onColorPick={(arg) => setCurrentColor(arg)}
            key={item.color}
          />
        ))}
      </div>
    </div>
  );
};
