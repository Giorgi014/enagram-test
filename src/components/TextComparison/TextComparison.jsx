import { Compare } from "./Compare/Compare";
import { Head } from "./Head/Head";
import "./TextComparison.scss";

const TextComparison = () => {
  return (
    <article className="text_comparison_container">
      <Head />
      <Compare />
    </article>
  );
};

export default TextComparison;
