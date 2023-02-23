import React, { FC } from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ size = 'md', label, ...props }) => (
  <button type="button" {...props} className="bg-slate-500">
    {label}
    {size}
  </button>
);

export default Button;
