import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

export const SelectCity = () => {
  return <p className={cn("link2", st.select_city)}>Челябинск</p>;
};
