import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModelContext } from "../context/model-context";
import "./model.css";

const Model = ({ className, children }) => {
  const { showModel, closeModelHandler } = useModelContext();

  return (
    <Fragment>
      {showModel &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModelHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Model;
