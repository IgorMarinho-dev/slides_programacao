import { motion } from "motion/react";

export default function Cover() {
  return (
    <div className="cover">
      <motion.div
        className="cover-tag"
        initial={{ opacity: 0, rotate: -4, y: 30 }}
        animate={{ opacity: 1, rotate: -2, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
      >
        <span className="tok-keyword">if</span> aprendeu: <span className="tok-keyword">else</span> pratica
      </motion.div>
      <div>
        <h1 className="cover-title">Lógica de Programação</h1>
        <p className="cover-sub">Estruturas condicionais, operadores e listas, com exemplos em Python.</p>
      </div>
      <p className="cover-teachers">Professores: Igor Marinho e Vicenzo</p>
    </div>
  );
}