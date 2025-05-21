
import { ReactNode } from 'react';

interface AccessibilityWrapperProps {
  children: ReactNode;
  ariaLabel?: string;
  role?: string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  className?: string;
}

const AccessibilityWrapper = ({
  children,
  ariaLabel,
  role,
  ariaLive,
  className = '',
}: AccessibilityWrapperProps) => {
  const accessibilityProps = {
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(role && { role }),
    ...(ariaLive && { 'aria-live': ariaLive }),
  };

  return (
    <div className={className} {...accessibilityProps}>
      {children}
    </div>
  );
};

export default AccessibilityWrapper;
