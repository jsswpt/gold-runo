import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type SaleBadge = {
  children?: React.ReactNode;
};

export const SaleBadge = (props: SaleBadge) => {
  return (
    <div className={st.sale_badge}>
      <p className={st.sale_title}>{props.children}</p>
    </div>
  );
};
