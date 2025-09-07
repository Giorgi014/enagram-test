import { useState } from "react";
import { Compare } from "./Compare/Compare";
import { Head } from "./Head/Head";
import "./TextComparison.scss";

const TextComparison = () => {
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <article className="text_comparison_container">
      <Head onReset={handleReset} />
      <Compare reset={reset} />
    </article>
  );
};

export default TextComparison;
