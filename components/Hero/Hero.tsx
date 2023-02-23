import { FC } from 'react';

const Hero: FC<{}> = () => (
  <div className="relative h-screen bg-emerald-300">
    <h1 className="absolute inset-1/2">Logo</h1>
    <p className="absolute inset-x-1/2 bottom-12">arrow down</p>
  </div>
);

export default Hero;
