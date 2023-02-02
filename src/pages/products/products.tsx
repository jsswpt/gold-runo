import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";
import { Container, Divider, ProductCard } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { FilterAndSortProducts } from "@/widgets";
import { motion } from "framer-motion";

type Products = {
  category: string;
};

export const Products = (props: Products) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={st.breadcrumbs_wrap}>
        <Container>
          <Breadcrumbs
            breadcrumbs={[
              { title: "YORCOM", to: "/" },
              { title: "Диваны", to: "/products/sofas" },
            ]}
          />
        </Container>
      </div>

      <section className={st.section_products}>
        <div className={st.products_wrap_title}>
          <Container className={st.title_container}>
            <h1 className={cn("h1", st.products_title)}>Диваны</h1>
          </Container>
        </div>
        <FilterAndSortProducts />
        <Container>
          <Divider />
        </Container>
        <div className={st.products_wrap_products}>
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
            </div>
          </Container>
        </div>
      </section>
    </motion.main>
  );
};
