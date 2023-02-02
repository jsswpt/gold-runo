import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { BreadcrumbItem } from "./breadcrumb.type";
import { Breadcrumb } from "./breadcrumb";

interface Breadcrumbs {
  breadcrumbs: Omit<BreadcrumbItem, "isActive">[];
}

export const Breadcrumbs = (props: Breadcrumbs) => {
  return (
    <div className={st.breadcrumbs}>
      {props.breadcrumbs.map((item, idx) => (
        <>
          <Breadcrumb
            {...item}
            key={idx}
            isActive={idx === props.breadcrumbs.length - 1 ? true : false}
          />
          {idx !== props.breadcrumbs.length - 1 && (
            <p className={st.breadcrumb_active}>/</p>
          )}
        </>
      ))}
    </div>
  );
};
