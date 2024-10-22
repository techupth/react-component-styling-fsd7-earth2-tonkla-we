/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button() {
  return (
    <>
      <div
        css={css`
          margin-bottom: 20px;
        `}
      >
        <label
          htmlFor=""
          css={css`
            margin-right: 100px;
          `}
        >
          Primary
        </label>
        <button
          css={css`
            background-color: #074ee8;
            border-radius: 4px;
            color: white;
            width: 140px;
            height: 50px;
          `}
        >
          Large
        </button>
      </div>
      <div>
        <label
          htmlFor=""
          css={css`
            margin-right: 80px;
          `}
        >
          Secondary
        </label>
        <button
          css={css`
            background-color: #07a4e8;
            border-radius: 4px;
            color: white;
            width: 140px;
            height: 50px;
          `}
        >
          Large
        </button>
      </div>
    </>
  );
}

export default Button;
