import React from 'react';
import { UserIcon } from '../icons';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../Styles';
/** @jsx jsx **/
import { css, jsx } from '@emotion/core';

const divCss = css`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid ${gray5};
  box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
`;

const qandACss = css`
  font-size: 24px;
  font-weight: bold;
  color: ${gray1};
  text-decoration: none;
`;

const searchCss = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 3px;
  color: ${gray2};
  background-color: white;
  width: 200px;
  height: 30px;
  :focus {
    outline-color: ${gray5};
  }
`;

const signInCss = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  background-color: transparent;
  color: ${gray2};
  text-decoration: none;
  cursor: pointer;
  span {
    margin-left: 10px;
  }
  :focus {
    outline-color: ${gray5};
  }
`;

export const Header: React.FC = () => (
  <div css={divCss}>
    <a href="./" css={qandACss}>
      Q & A
    </a>
    <input type="text" placeholder="Search" css={searchCss} />
    <a href="./signin" css={signInCss}>
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
