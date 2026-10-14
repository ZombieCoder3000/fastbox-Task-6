'use client';

import React from 'react';
import styled from 'styled-components';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
}

const variantMap: Record<NonNullable<BadgeProps['variant']>, { bg: string; text: string }> = {
  primary: { bg: '#dbeafe', text: '#1e40af' },
  success: { bg: '#dcfce7', text: '#166534' },
  warning: { bg: '#fef3c7', text: '#92400e' },
  danger: { bg: '#fee2e2', text: '#991b1b' },
  neutral: { bg: '#f1f5f9', text: '#334155' },
};

const StyledBadge = styled.span<{ $variant: NonNullable<BadgeProps['variant']> }>`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  background-color: ${({ $variant }) => variantMap[$variant].bg};
  color: ${({ $variant }) => variantMap[$variant].text};
`;

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', ...props }) => (
  <StyledBadge $variant={variant} {...props}>
    {children}
  </StyledBadge>
);

export default Badge;
