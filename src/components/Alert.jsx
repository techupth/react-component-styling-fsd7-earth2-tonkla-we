/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import alertTriangle from "../assets/alert-triangle.png";
import alertCircle from "../assets/alert-circle.png";

import frown from "../assets/frown.png";
import checkCircle from "../assets/check-circle.png";

function Alert() {
  const textStyle = "padding: 5px 0 5px 20px;";
  const imageSyle = "  padding: 16px 0 5px 20px; height: 40px;";
  return (
    <>
      <div
        htmlFor=""
        css={css`
          width: 650px;
          background-color: #f9c8c8;
          display: flex;
          height: 76px;
          margin-bottom: 20px;
        `}
      >
        <img
          src={frown}
          alt=""
          css={css`
            ${imageSyle}
          `}
        />
        <h4
          css={css`
            ${textStyle}
          `}
        >
          This is error alert box
        </h4>
      </div>
      <div
        htmlFor=""
        css={css`
          width: 650px;
          background-color: #f9d9c8;
          display: flex;
          height: 76px;
          margin-bottom: 20px;
        `}
      >
        <img
          src={alertTriangle}
          alt=""
          css={css`
            ${imageSyle}
          `}
        />
        <h4
          css={css`
            ${textStyle}
          `}
        >
          This is warning alert box
        </h4>
      </div>
      <div
        htmlFor=""
        css={css`
          width: 650px;
          background-color: #f9ebc8;
          display: flex;
          height: 76px;
          margin-bottom: 20px;
        `}
      >
        <img
          src={alertCircle}
          alt=""
          css={css`
            ${imageSyle}
          `}
        />
        <h4
          css={css`
            ${textStyle}
          `}
        >
          This is info alert box
        </h4>
      </div>
      <div
        htmlFor=""
        css={css`
          width: 650px;
          background-color: #cef7cd;
          display: flex;
          height: 76px;
          margin-bottom: 20px;
        `}
      >
        <img
          src={checkCircle}
          alt=""
          css={css`
            ${imageSyle}
          `}
        />
        <h4
          css={css`
            ${textStyle}
          `}
        >
          This is success alert box
        </h4>
      </div>
    </>
  );
}

export default Alert;
