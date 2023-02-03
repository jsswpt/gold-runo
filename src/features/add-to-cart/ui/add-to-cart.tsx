import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.css";
import cn from "classnames";
import { Button } from "@/shared/ui";

export const AddToCart = () => {
  return (
    <Button color="default" fullWidth>
      В корзину
    </Button>
  );
};
