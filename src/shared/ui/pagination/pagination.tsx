import { memo, useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { PaginationElement } from "./pagination.type";
import { PaginationButton } from "./pagination-item";
import { useRouter } from "next/router";

// исправить

export const Pagination = memo((props: PaginationElement) => {
  const { count, onNavigate } = props;
  const [activePag, setActivePag] = useState(1);

  const items = Array(count)
    .fill(0)
    .map((_, idx) => idx + 1);

  const navigate = (value: number) => {
    setActivePag(value);
    onNavigate && onNavigate(value);
  };

  return (
    <div className={st.pagination_wrapper}>
      {count < 6 &&
        items.map((item, idx) => (
          <PaginationButton
            onNavigate={() => navigate(item)}
            isActive={activePag === item}
            key={item}
            value={item}
          />
        ))}
      {count >= 6 && (
        <>
          {items
            .slice(
              activePag === 1
                ? activePag - 1
                : activePag >= 3
                ? activePag - 3
                : activePag >= 2
                ? activePag - 2
                : activePag - 1,
              activePag + 1 >= count ? count : activePag + 1
            )
            .map((item, idx) => (
              <PaginationButton
                onNavigate={() => navigate(item)}
                isActive={activePag === item}
                key={item}
                value={item}
              />
            ))}
          {activePag + 1 < count && (
            <>
              <div className={st.empty_pagination_item}>...</div>
              <PaginationButton
                isActive={false}
                value={count}
                onNavigate={() => navigate(count)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
});
