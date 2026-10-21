import { AnimatePresence, motion } from "motion/react";
import Cover from "./components/Cover";
import ContentSlide from "./components/ContentSlide";
import Controls from "./components/Controls";
import ThemeToggle from "./components/ThemeToggle";
import { slides } from "./data/slides";
import { useSlides } from "./hooks/useSlides";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { index, dir, go } = useSlides(slides.length);
  const { theme, toggle } = useTheme();

  return (
    <div className="deck">
      <ThemeToggle theme={theme} onToggle={toggle} />
      <AnimatePresence mode="wait" custom={dir}>
        <motion.main
          key={index}
          className="slide-frame"
          initial={{ opacity: 0, x: dir * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -60 }}
          transition={{ duration: 0.25 }}
        >
          {index === 0 ? <Cover /> : <ContentSlide slide={slides[index]} />}
        </motion.main>
      </AnimatePresence>
      <Controls index={index} total={slides.length} onPrev={() => go(-1)} onNext={() => go(1)} />
    </div>
  );
}