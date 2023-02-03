import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { motion } from "framer-motion";
import { Container, ProductPhotoViewer, SaleBadge } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";

import { MdStar } from "react-icons/md";
import Link from "next/link";
import { AddToCart } from "..";
export const Product = () => {
  return (
    <motion.main>
      <div className={st.breadcrumbs_wrap}>
        <Container>
          <Breadcrumbs
            breadcrumbs={[
              { title: "YORCOM", to: "/" },
              { title: "Диваны", to: "/products/sofas" },
              { title: "Прямые диваны", to: "/products/sofas" },
              { title: "Финка", to: "/products/sofas" },
            ]}
          />
        </Container>
      </div>
      <section className={st.section_info}>
        <Container className={st.info_container}>
          <div className={st.info_left}>
            <ProductPhotoViewer
              photos={[
                {
                  alt: "photo1",
                  src: "https://static.insales-cdn.com/images/products/1/5488/559355248/fde9f819-baa2-45dc-8.jpg",
                },
                {
                  alt: "photo2",
                  src: "https://static.insales-cdn.com/images/products/1/5485/559355245/9875dce6-36d5-4985-b.jpg",
                },
                {
                  alt: "photo3",
                  src: "https://static.insales-cdn.com/images/products/1/5487/559355247/f59b434f-ebd0-4e8e-8.jpg",
                },
                {
                  alt: "photo4",
                  src: "https://static.insales-cdn.com/images/products/1/5486/559355246/e4967420-e2a6-43f5-8.jpg",
                },
              ]}
            />
            <div className={st.info_left_wrap__description}></div>
            <div className={st.info_left_wrap__specifications}></div>
          </div>
          <div className={st.info_right}>
            <div className={st.info_right__name}>
              <div className={st.name__short_name}>
                <h1 className={st.product_short_name}>Финка</h1>
              </div>
              <div className={st.name__full_name}>
                <p className={st.product_full_name}>Диван Финка</p>
              </div>
            </div>
            <div className={st.info_right__rating}>
              <div className={st.rating_stars_wrapper}>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className={st.rating_reviews}>
                <Link href="" className={st.reviews_link}>
                  5 отзывов
                </Link>
              </div>
            </div>
            <div className={st.info_right__price}>
              <p className={cn("h3", st.product_price)}>34 990 ₽</p>
              <p className={cn("subtitle2", st.product_old_price)}>34 990 ₽</p>
              <SaleBadge>10%</SaleBadge>
            </div>
            <div className={st.info_right__color}></div>
            <div className={st.info_right__filling}></div>
            <div className={st.info_right__delievery}></div>
            <div className={st.info_right__button}>
              <AddToCart />
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
};
