import React from 'react';

const IconWrapper = ({ icon: Icon, size = 24, ...props }) => {
  return <Icon size={size} {...props} />;
};

export default IconWrapper;
