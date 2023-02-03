import st from "./styles.module.scss";
import cn from "classnames";
import {
  Button,
  ButtonLink,
  Container,
  Divider,
  Pagination,
  ProductCard,
} from "@/shared/ui";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { FilterAndSortProducts } from "@/widgets";
import { motion } from "framer-motion";
import { Products as ProductsSection } from "./sections/products";
import { Three } from "./sections/three";
import { Welcome } from "./sections/welcome";

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

      <Welcome />
      <FilterAndSortProducts />
      <Container>
        <Divider />
      </Container>
      <ProductsSection />
      <Three />
    </motion.main>
  );
};
