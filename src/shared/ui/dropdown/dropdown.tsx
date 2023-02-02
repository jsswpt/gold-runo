import { useEffect, useState, createRef, useRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Menu } from "../menu/menu";

type Dropdown = {
  anchorEl: React.ReactNode;
  children?: React.ReactNode;
};

export const Dropdown = (props: Dropdown) => {
  const [isChecked, setIsChecked] = useState(false);

  const menuRef = createRef<HTMLDivElement>();
  const buttonRef = useRef<HTMLDivElement>(null);

  const clickHandler = (e: MouseEvent) => {
    const path = e.composedPath();

    if (
      !path.includes(buttonRef.current!) &&
      !path.includes(menuRef.current!)
    ) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);
  }, []);

  return (
    <div className={st.dropdown_wrapper}>
      <div onClick={() => setIsChecked((state) => !state)} ref={buttonRef}>
        {props.anchorEl}
      </div>

      <Menu
        ref={menuRef}
        initial={{ height: 0, overflowY: "hidden", opacity: 0 }}
        animate={
          isChecked
            ? { height: "29.375rem", overflowY: "auto", opacity: 1 }
            : { height: 0, overflowY: "hidden", opacity: 0 }
        }
        className={st.dropdown_menu}
      >
        {props.children}
      </Menu>
    </div>
  );
};
