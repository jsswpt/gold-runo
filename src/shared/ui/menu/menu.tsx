import { useEffect, useMemo, useState, useCallback } from "react";

import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

import st from "./styles.module.scss";
import cn from "classnames";

interface Menu extends HTMLMotionProps<"div"> {
  isOpen: boolean;
}

export const Menu = (props: Menu) => {
  const { className, isOpen, ...restProps } = props;

  return (
    <motion.div
      {...restProps}
      initial={{ height: 0, overflowY: "hidden", opacity: 0 }}
      animate={
        isOpen
          ? { height: "29.375rem", overflowY: "auto", opacity: 1 }
          : { height: 0, overflowY: "hidden", opacity: 0 }
      }
      className={cn(st.menu, className)}
    >
      <div className={st.menu_inner}>{props.children}</div>
    </motion.div>
  );
};
