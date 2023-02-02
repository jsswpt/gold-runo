import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Menu } from "../menu/menu";

type Dropdown = {
  anchorEl: React.ReactNode;
  children?: React.ReactNode;
};

export const Dropdown = (props: Dropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };
  return (
    <div className={st.dropdown_wrapper}>
      <div onClick={toggleIsOpen}>{props.anchorEl}</div>

      <Menu className={st.dropdown_menu} isOpen={isOpen}>
        {props.children}???
      </Menu>
    </div>
  );
};
