import React from 'react';
import { Header } from './header.component/Header';
import { HomePage } from './home.page/HomePage';
import { fontFamily, fontSize, gray1 } from './Styles';
/** @jsx jsx **/
import { css, jsx } from '@emotion/core';

const App: React.FC = () => {
  return (
    <div
      className="App"
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray1};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
