// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const types = [
  {
    name: "error",
    color: "#F9C8C8",
    img: "./../frown.png",
    message: "This is error alert box",
  },
  {
    name: "warning",
    color: "#F9D9C8",
    img: "./../alert-triangle.png",
    message: "This is warning alert box",
  },
  {
    name: "info",
    color: "#F9EBC8",
    img: "./../alert-circle.png",
    message: "This is info alert box",
  },
  {
    name: "success",
    color: "#CEF7CD",
    img: "./../check-circle.png",
    message: "This is success alert box",
  },
];

function Alert({ type }) {
  const alertType = types.find((t) => t.name === type);

  return (
    <>
      <div
        css={css`
          background-color: ${alertType.color};
          width: 650px;
          height: 76px;
          margin: 5px;
          border-radius: 10px;
          color: #444444;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;
        `}
      >
        <img
          src={alertType.img}
          css={css`
            width: 24px;
            height: 24px;
            padding: 0 0 0 15px;
          `}
          alt={`${alertType.name} icon`}
        ></img>
        {alertType.message}
      </div>
    </>
  );
}

export default Alert;
