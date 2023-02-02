import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";

export const Home = () => {
  return (
    <div className={st.page}>
      <Link href={"/products/sofas"}>Диваны</Link>
    </div>
  );
};
