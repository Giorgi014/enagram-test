import { useEffect, useState } from "react";
import Diff from "diff-match-patch";
import { Arrows } from "../../Exports";
import { Button } from "../../ActionButtons/ActionButtons";
import { Textarea } from "./Textarea";
import { useLoader } from "../../Hooks/LoaderContext";
import "./Compare.scss";

export const Compare = ({ reset }) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [highlight1, setHighlight1] = useState(null);
  const [highlight2, setHighlight2] = useState(null);
  const [isCompared, setIsCompared] = useState(false);
  const { isLoading, setIsLoading } = useLoader();

  const compareTexts = () => {
    if (!text1 && !text2) {
      setHighlight1(null);
      setHighlight2(null);
      return;
    }
    if (!text1 || !text2) {
      setHighlight1(null);
      setHighlight2(null);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const dmp = new Diff();
      const diffs = dmp.diff_main(text1, text2);
      dmp.diff_cleanupSemantic(diffs);

      let parts1 = [];
      let parts2 = [];

      diffs.forEach(([type, text], index) => {
        if (type === -1) {
          parts1.push(
            <span key={`r${index}`} className="removed">
              {text}
            </span>
          );
        } else if (type === 1) {
          parts2.push(
            <span key={`a${index}`} className="added">
              {text}
            </span>
          );
        } else {
          parts1.push(<span key={`c1${index}`}>{text}</span>);
          parts2.push(<span key={`c2${index}`}>{text}</span>);
        }
      });

      setHighlight1(parts1);
      setHighlight2(parts2);
      setIsCompared(true);

      setIsLoading(false);
    }, 1000);
  };

  const handleText1Change = (e) => {
    if (isCompared) return;
    setText1(e.target.value);
    setHighlight1(null);
    setHighlight2(null);
  };

  const handleText2Change = (e) => {
    if (isCompared) return;
    setText2(e.target.value);
    setHighlight1(null);
    setHighlight2(null);
  };

  useEffect(() => {
    if (reset) {
      setText1("");
      setText2("");
      setHighlight1(null);
      setHighlight2(null);
      setIsCompared(false);
    }
  }, [reset]);

  if (isLoading) {
    return null;
  }

  return (
    <article className="compare_container">
      <section className="text_area_cont">
        <Textarea
          value={text1}
          highlight={highlight1}
          placeholder="დაიწყე წერა..."
          onChange={handleText1Change}
        />

        <img src={Arrows} alt="arrows" className="arrows" />

        <Textarea
          value={text2}
          highlight={highlight2}
          placeholder="დაიწყე წერა..."
          onChange={handleText2Change}
        />
      </section>

      <Button variant="comparison" onClick={compareTexts} disabled={isCompared}>
        შედარება
      </Button>
    </article>
  );
};
