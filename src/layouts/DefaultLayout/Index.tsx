import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { LayoutContainer, OutletWrapper } from './style';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutContainer>
  );
}
