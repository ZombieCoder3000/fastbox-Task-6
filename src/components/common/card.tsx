'use client';

import React from 'react';
import styled from 'styled-components';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const StyledCard = styled.article`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Card = React.forwardRef<HTMLElement, CardProps>(({ children, ...props }, ref) => (
  <StyledCard ref={ref} {...props}>
    {children}
  </StyledCard>
));

Card.displayName = 'Card';
export default Card;
