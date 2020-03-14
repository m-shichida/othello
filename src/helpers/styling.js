import { css } from 'styled-components';

export const colors = {
  boardColor: '#319242',
  black: '#000'
}

export const media = {
  pc: (...args) => css`
    @media only screen and (min-width: 1025px) {
      ${ css(...args) };
    }
  `,
  tablet: (...args) => css`
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      ${ css(...args) }
    }
  `,
  phone: (...args) => css`
    @media only screen and (min-width: 120px) and (max-width: 767px) {
      ${ css(...args) };
    }
  `
};
