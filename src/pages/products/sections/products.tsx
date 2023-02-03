import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import {
  Container,
  ProductCard,
  ButtonLink,
  Button,
  Pagination,
} from "@/shared/ui";

export const Products = () => {
  return (
    <section className={st.section_products}>
      <Container>
        <div className={st.products_wrap_grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <div className={st.banner_wrap}>
        <Container className={st.banner_container}>
          <div className={st.banner_text_wrap}>
            <p className={st.banner_title}>Наша «Барселона»</p>
            <p className={st.banner_subtitle}>
              Стильная и комфортабельная модель
            </p>
          </div>
          <div className={st.banner_button_wrap}>
            <ButtonLink
              href="/product/id"
              size="large"
              color="inherit"
              bgOnHover="default"
            >
              Посмотреть
            </ButtonLink>
          </div>
        </Container>
      </div>
      <Container>
        <div className={st.products_wrap_grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <div className={st.pagination_wrap}>
        <Container className={st.pagination_container}>
          <div className={st.pagination_wrap_buttons}>
            <Button variant="outlined">Посмотреть ещё</Button>
          </div>
          <div className={st.pagination_wrap_pagination}>
            <Pagination count={10} />
          </div>
        </Container>
      </div>
    </section>
  );
};
