// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <>
      <div>
        {type === "primary" ? (
          <button
            css={css`
              color: white;
              background-color: #074ee8;
              border-radius: 4px;
              padding: 0 16px;
              margin: 5px;
              width: 172px;
              height: 50px;
            `}
          >
            Button
          </button>
        ) : (
          <button
            css={css`
              color: white;
              background-color: #07a4e8;
              border-radius: 4px;
              padding: 0 16px;
              margin: 5px;
              width: 172px;
              height: 50px;
            `}
          >
            Button
          </button>
        )}
      </div>
    </>
  );
}

export default Button;
