import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.style';

const Tag = ({ color }) => {
  return <S.Tagas color={color}>Tag</S.Tagas>;
};

Tag.propTypes = {
  color: PropTypes.any,
};

Tag.defaultProps = {
  color: 'grey',
};

export default Tag;
