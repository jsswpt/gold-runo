import { useEffect, useMemo, useState, useCallback, useRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button } from "../button/button";
import Link from "next/link";
import { ButtonLink } from "../button/button-link";
import { SaleBadge } from "../sale-badge/sale-badge";
import { motion } from "framer-motion";

export const ProductCard = () => {
  return (
    <motion.article
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.64 }}
      className={st.product_card}
    >
      <div className={st.product_img}></div>
      <div className={st.product_body}>
        <div className={st.product_wrap_name}>
          <p className={cn("subtitle1", st.product_name)}>Диван Клик-Кляк</p>
        </div>
        <div className={st.product_wrap_price}>
          <p
            className={cn(
              "subtitle1",
              st.product_price,
              st.product_current_price
            )}
          >
            34 990 ₽
          </p>
          <p className={cn("body1", st.product_price, st.product_old_price)}>
            34 990 ₽
          </p>
          <SaleBadge>-10%</SaleBadge>
        </div>
        <div className={st.product_wrap_buttons}>
          <ButtonLink
            href="/product/id"
            bgOnHover="default"
            color="default"
            variant="outlined"
          >
            Посмотреть
          </ButtonLink>
        </div>
      </div>
    </motion.article>
  );
};
