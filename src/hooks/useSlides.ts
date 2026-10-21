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

  useEffect(() => {
    let x0 = 0;
    let y0 = 0;
    const onStart = (e: TouchEvent) => {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(".code-card, .code-out")) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      go(dx < 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [go]);

  return { index, dir, go };
}