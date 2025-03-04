
import React from 'react';
import { cn } from '@/lib/utils';

const GradientButton = ({
  className,
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'relative overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-[0.98]';
  
  const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const variantStyles = {
    default: 'text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/20',
    secondary: 'text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100',
    outline: 'text-blue-600 bg-transparent border border-blue-200 hover:border-blue-400 hover:bg-blue-50/50',
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
