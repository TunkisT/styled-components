import React from 'react';
import * as S from './Button.style';
import propTypes from 'prop-types';

function Button({ children, type }) {
  return <S.Btn type={type}>{children}</S.Btn>;
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
