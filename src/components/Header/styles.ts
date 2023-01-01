import styled from 'styled-components';

import Logo from '../../assets/Logo.png';

export const HeaderWrapper = styled.div`
  img {
    height: fit-content;
    width: 100%;
    height: 100%;
  }
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  img {
    margin: 0 auto;
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* transform: translateY(-50%); */
`;
