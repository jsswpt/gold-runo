import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, Container, Dropdown } from "@/shared/ui";

export const FilterAndSortProducts = () => {
  return (
    <div className={st.filter_and_sort_wrap}>
      <Container className={st.filter_and_sort_container}>
        <div className={st.filter_and_sort_left}>
          <Dropdown
            anchorEl={<Button color="default">Все фильтры</Button>}
          ></Dropdown>
          <Dropdown
            anchorEl={
              <Button color="default" variant="outlined">
                Цена
              </Button>
            }
          ></Dropdown>
          <Dropdown
            anchorEl={
              <Button color="default" variant="outlined">
                Размер
              </Button>
            }
          ></Dropdown>
          <Dropdown
            anchorEl={
              <Button color="default" variant="outlined">
                Тип ткани
              </Button>
            }
          ></Dropdown>
          <Dropdown
            anchorEl={
              <Button color="default" variant="outlined">
                Наполнение
              </Button>
            }
          ></Dropdown>
          <Dropdown
            anchorEl={<Button color="default">Модель дивана</Button>}
          ></Dropdown>
        </div>
        <div className={st.filter_and_sort_right}></div>
      </Container>
    </div>
  );
};
