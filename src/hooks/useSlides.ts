import { useCallback, useEffect, useState } from "react";

export function useSlides(total: number) {
  const [[index, dir], setPage] = useState<[number, number]>([0, 1]);

  const go = useCallback(
    (d: number) => setPage(([p]) => [Math.min(total - 1, Math.max(0, p + d)), d]),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return { index, dir, go };
}