import { Button } from "../../ActionButtons/ActionButtons";
import { GoPlusCircle } from "react-icons/go";
import { Language } from "../../Language/Language";
import "./Head.scss";

export const Head = ({ onReset }) => {
  return (
    <article className="head_cont">
      <section className="languge_and_format">
        <Language />
        <div className="format_cont">
            <input type="checkbox" name="format" id="format" className="format" />
            <p className="format_text">ფორმატის შენარჩუნება</p>
        </div>
      </section>
      <Button variant="create_new" onClick={onReset}>
        <GoPlusCircle />
        ახლის გახსნა
      </Button>
    </article>
  );
};
