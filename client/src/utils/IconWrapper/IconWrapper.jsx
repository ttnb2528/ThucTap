import React from 'react';

const IconWrapper = ({ icon: Icon, size = 20, ...props }) => {
  return <Icon size={size} {...props} />;
};

export default IconWrapper;
