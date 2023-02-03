import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { PaginationItem } from "./pagination.type";

export const PaginationButton = (props: PaginationItem) => {
  return (
    <button
      disabled={props.isActive}
      onClick={() => props.onNavigate && props.onNavigate()}
      className={cn(
        st.pagination_item,
        props.isActive && st.pagination_item__active
      )}
    >
      {props.value}
    </button>
  );
};
