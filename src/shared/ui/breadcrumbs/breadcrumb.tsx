import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { BreadcrumbItem } from "./breadcrumb.type";
import Link from "next/link";

export const Breadcrumb = (props: BreadcrumbItem) => {
  return props.isActive ? (
    <p className={cn(st.breadcrumb)}>{props.title}</p>
  ) : (
    <Link href={props.to} className={cn(st.breadcrumb, st.breadcrumb_active)}>
      {props.title}
    </Link>
  );
};
