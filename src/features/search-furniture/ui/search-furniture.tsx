import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { BiSearch } from "react-icons/bi";
import { Input } from "@/shared/ui";

export const SearchFurniture = () => {
  return (
    <Input
      placeholder="Найти мебель"
      textAlign="center"
      icon={<BiSearch />}
      className={st.search_input}
    />
  );
};
