import { FC } from 'react';

const Hero: FC<{}> = () => (
  <div className="h-screen text-white border">
    <div className="flex items-center justify-center bg-transparent h-4/5">
      <h1 className="">Logo</h1>
    </div>
    <div className="flex items-center justify-center bg-transparent h-1/5">
      <p className="">arrow down</p>
    </div>
  </div>
);

export default Hero;
