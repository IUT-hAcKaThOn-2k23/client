import React from 'react';

interface HeaderCompanyLogoProps {}

const HeaderCompanyLogo: React.FC<HeaderCompanyLogoProps> = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{'app logo'}</h2>
    </div>
  );
};

export default HeaderCompanyLogo;
