import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { CustomRadio } from "@/shared/ui";

export const SelectFilling = () => {
  const [currentFilling, setCurrentFilling] = useState(0);

  return (
    <div className={st.select_filling_wrapper}>
      <div className={st.select_filling_name}>
        <p className={cn("body2", st.filling_name)}>Выбрать наполнение:</p>
      </div>
      <div className={st.select_filling_fillings}>
        <CustomRadio id="НПБ" value={"НПБ"} />
        <CustomRadio id="ППУ" value={"ППУ"} />
        <CustomRadio id="ЗМЕЙКА" value={"ЗМЕЙКА"} />
        <CustomRadio id="ПБ" value={"ПБ"} />
      </div>
    </div>
  );
};
