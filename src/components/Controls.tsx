import { motion } from "motion/react";

type Props = { index: number; total: number; onPrev: () => void; onNext: () => void };

export default function Controls({ index, total, onPrev, onNext }: Props) {
  return (
    <footer className="controls">
      <button className="btn" disabled={index === 0} onClick={onPrev}>Anterior</button>
      <div className="progress">
        <motion.div className="progress-bar" animate={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>
      <span className="counter">{index + 1} / {total}</span>
      <button className="btn" disabled={index === total - 1} onClick={onNext}>Próximo</button>
    </footer>
  );
}