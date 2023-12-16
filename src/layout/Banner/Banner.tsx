
import React from "react";
import Logo from "../../assets/Loucura de amor.png";

const Banner: React.FC = () => {
  return (
    <BannerContainer className="d-flex justify-content-center align-items-center">
      <img src={Logo} alt="Logo" className="img-fluid" width={400} />
    </BannerContainer>
  );
};

export default Banner;

import styled from "styled-components";

const BannerContainer = styled.header`
  width: 100vw;
  background: #fff;
  box-shadow: -11px 23px 15px -3px rgba(0, 0, 0, 0.1);
  
`;
