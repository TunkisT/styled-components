import React from 'react';
import * as S from './Button.style';
import propTypes from 'prop-types';

function Button({ children, type, primary }) {
  return (
    <S.Btn primary={primary} type={type}>
      {children}
    </S.Btn>
  );
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  primary: propTypes.any,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
