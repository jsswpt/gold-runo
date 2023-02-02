import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../container/container";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className={st.top_nav}>
      <Container className={st.top_nav_container}>
        <ul className={st.top_nav__list}>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Новинки
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Акции
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Диваны
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Кресла
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Кровати
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Стулья
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Столы
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Матрасы
            </Link>
          </li>
          <li className={st.top_nav__list_item}>
            <Link href="/products/sofas" className={cn("link1", st.link)}>
              Пуфы
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
