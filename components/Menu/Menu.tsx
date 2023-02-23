import { FC } from 'react';
import Link from 'next/link';

const Menu: FC<{}> = () => (
  <div className="fixed flex flex-row justify-between w-full bg-slate-300">
    <div className="flex items-center justify-center w-28">Logo</div>
    <div className="flex flex-row">
      <Link href="#home" className="flex items-center h-20 px-8">
        <p>Home</p>
      </Link>
      <Link href="#about" className="flex items-center h-20 px-8">
        <p>About</p>
      </Link>
      <Link href="#contact" className="flex items-center h-20 px-8">
        <p>Contact</p>
      </Link>
    </div>
  </div>
);

export default Menu;
