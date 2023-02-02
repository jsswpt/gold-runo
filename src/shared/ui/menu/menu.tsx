import { forwardRef } from "react";

import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

import st from "./styles.module.scss";
import cn from "classnames";

interface Menu extends HTMLMotionProps<"div"> {
  isOpen: boolean;
}

export const Menu = forwardRef<HTMLDivElement, Menu>((props: Menu, ref) => {
  const { className, isOpen, ...restProps } = props;

  return (
    <motion.div ref={ref} {...restProps} className={cn(st.menu, className)}>
      <div className={st.menu_inner}>{props.children}</div>
    </motion.div>
  );
});
