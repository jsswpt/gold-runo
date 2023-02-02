import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={st.page}
    >
      <Link href={"/products/sofas"}>Диваны</Link>
    </motion.div>
  );
};
