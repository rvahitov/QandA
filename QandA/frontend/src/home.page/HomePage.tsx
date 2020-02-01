import React from 'react';
import { PrimaryButton } from '../Styles';
/** @jsx jsx **/
import { css, jsx } from '@emotion/core';

const containerCss = css`
  margin: 50px auto 20px auto;
  padding: 30px 20px;
  max-width: 600px;
`;

const css1 = css`
  margin: 50px auto 20px auto;
  padding: 30px 20px;
  max-width: 600px;
`;

const pageTitleCss = css`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0px 5px;
  text-align: center;
  text-transform: uppercase;
`;

export const HomePage: React.FC = () => (
  <div css={containerCss}>
    <div css={css1}>
      <h2 css={pageTitleCss}>Unanswered questions</h2>
      <PrimaryButton>Ask a question</PrimaryButton>
    </div>
  </div>
);
