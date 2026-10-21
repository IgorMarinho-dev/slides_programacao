import { motion } from "motion/react";
import type { ReactNode } from "react";

const CLASSES = ["", "tok-comment", "tok-string", "tok-keyword", "tok-number", "tok-func"];

function highlight(code: string): ReactNode[] {
  const re = /(#.*)|("[^"]*")|\b(if|else|and|or|not|True|False)\b|\b(\d+)\b|\b(print|len)\b/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    if (m.index > last) parts.push(code.slice(last, m.index));
    const group = m.findIndex((v, i) => i > 0 && v !== undefined);
    parts.push(<span key={m.index} className={CLASSES[group]}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  parts.push(code.slice(last));
  return parts;
}

type Props = { code: string; out?: string };

export default function CodeBlock({ code, out }: Props) {
  return (
    <div className="code-wrap">
      <pre className="code-card">{highlight(code)}</pre>
      {out && (
        <motion.pre
          className="code-out"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span className="code-out-label">Saída no terminal</span>
          {out}
        </motion.pre>
      )}
    </div>
  );
}