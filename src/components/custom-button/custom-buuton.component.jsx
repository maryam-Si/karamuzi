import React from 'react';

import '../custom-button/custom-button.styles.scss';
const CustomButton = ({ children, peygiry, ...otherProps }) => (
    <button
      className={`${peygiry ? 'peygiry' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
  export default CustomButton;