import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200';
  const variants = {
    primary:
      'bg-[#6FE3C1] text-gray-900 hover:shadow-lg hover:shadow-[#6FE3C1]/40',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline:
      'border-2 border-gray-300 text-gray-900 hover:bg-gray-50',
  };

  const element = (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (href) {
    return <a href={href}>{element}</a>;
  }

  return element;
}
