import Menu from '@components/Menu/Menu';
import { FC } from 'react';

const Layout: FC<{ children: unknown }> = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Layout;
