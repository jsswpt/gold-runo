import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../../shared/ui";

import Image from "next/image";
import Logo from "shared/assets/media/imgs/logo.png";

import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";
import { SearchFurniture, SelectCity } from "@/features";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        <div className={cn(st.header_wrap, st.header_wrap__logo)}>
          <Link href="/" className={st.header_logo_wrapper}>
            <Image src={Logo} alt="Logo" className={st.header_logo} />
          </Link>
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__search)}>
          <SearchFurniture />
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__info)}>
          <SelectCity />
          <a href="tel:+79000928086" className={cn(st.phone, "body1")}>
            +7 (900) 092-80-86
          </a>
        </div>
        <div className={cn(st.header_wrap, st.header_wrap__actions)}>
          <Link href="" className={cn(st.header_actions_icon)}>
            <BiUser />
          </Link>
          <Link href="" className={cn(st.header_actions_icon)}>
            <BiHeart />
          </Link>
          <Link href="" className={cn(st.header_actions_icon)}>
            <BiShoppingBag className={cn(st.header_actions_icon)} />
          </Link>
        </div>
      </Container>
    </header>
  );
};
