import HeaderBackground from '../../assets/headerBackground.png';
import Logo from '../../assets/Logo.png';
import { HeaderWrapper, LogoWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={HeaderBackground} />
      <LogoWrapper>
        <img src={Logo} />
      </LogoWrapper>
    </HeaderWrapper>
  );
};
