import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui";

export const Welcome = () => {
  return (
    <section className={st.section_welcome}>
      <Container className={st.title_container}>
        <h1 className={cn("h1", st.products_title)}>Диваны</h1>
      </Container>
    </section>
  );
};
