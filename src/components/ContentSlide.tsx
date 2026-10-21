import { motion } from "motion/react";
import type { Slide } from "../types/slide";
import CodeBlock from "./CodeBlock";

export default function ContentSlide({ slide }: { slide: Slide }) {
  const { title, sub, pts = [], code, out, ex } = slide;
  return (
    <div className="slide">
      <header>
        <h2 className="slide-title">{title}</h2>
        {sub && <p className="slide-sub">{sub}</p>}
      </header>
      <div className={`slide-body ${code ? "slide-body--split" : ""}`}>
        <ul className={`points ${code ? "" : "points--grid"}`}>
          {pts.map((p, i) => (
            <motion.li
              key={p}
              className={`point ${ex ? "point--exercise" : ""}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
            >
              {ex && <span className="point-num">{i + 1}.</span>}
              {p}
            </motion.li>
          ))}
        </ul>
        {code && <CodeBlock code={code} out={out} />}
      </div>
    </div>
  );
}