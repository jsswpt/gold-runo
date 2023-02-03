import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui";

export const Three = () => {
  return (
    <section className={st.section_three}>
      <Container className={st.three_container}></Container>
    </section>
  );
};
