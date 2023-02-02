import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";
import { Container } from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { FilterAndSortProducts } from "@/widgets";

type Products = {
  category: string;
};

export const Products = (props: Products) => {
  return (
    <main>
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
      <div className={st.title_wrap}>
        <Container className={st.title_wrap_container}>
          <h1 className="h1">Диваны</h1>
        </Container>
      </div>
      <section className={st.section_products}>
        <Container className={st.products_container}>
          <FilterAndSortProducts />
        </Container>
      </section>
      {props.category}
    </main>
  );
};
