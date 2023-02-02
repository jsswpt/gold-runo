import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

export const Divider = () => {
  return <hr className={st.divider} />;
};
