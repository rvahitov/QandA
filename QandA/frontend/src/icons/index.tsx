import React from 'react';
import user from './user.svg';
/** @jsx jsx **/
import { css, jsx } from '@emotion/core';

export const UserIcon: React.FC = () => (
  <img
    src={user}
    alt="User"
    width="12px"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
