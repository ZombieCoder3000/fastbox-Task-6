'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #f8fafc;
`;

const AuthContainer = styled.section`
  width: 100%;
  max-width: 28rem;
`;

const AuthHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const BrandLink = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: #2563eb;
  text-decoration: none;
`;

const AuthHeading = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #0f172a;
`;

const AuthSubtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #475569;
`;

const AuthCard = styled.article`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <AuthMain>
      <AuthContainer>
        <AuthHeader>
          <BrandLink href="/">FastBox</BrandLink>
          <AuthHeading>{title}</AuthHeading>
          {subtitle && <AuthSubtitle>{subtitle}</AuthSubtitle>}
        </AuthHeader>

        <AuthCard>{children}</AuthCard>
      </AuthContainer>
    </AuthMain>
  );
};

export default AuthLayout;