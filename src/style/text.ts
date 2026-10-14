import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2.25rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.2;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Subheading = styled.h2`
  margin: 0;
  line-height: 1.25;
  font-size: 1.125rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Body = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Caption = styled.p`
  margin: 0;
  line-height: 1.4;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
