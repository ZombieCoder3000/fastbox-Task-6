import styled from "styled-components";
import type { GradientTone } from "@/infrastructure/services/interface/common.types";
import { device } from "./device";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1rem 2rem;

  @media ${device.md} {
    padding: 3.5rem 1.5rem 2.5rem;
  }

  @media ${device.lg} {
    padding: 4.5rem 2rem 3rem;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media ${device.md} {
    font-size: 3rem;
  }

  @media ${device.lg} {
    font-size: 4rem;
  }
`;

export const GradientText = styled.span`
  display: block;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const HeroSubtitle = styled.p`
  margin: 1.5rem 0 0;
  font-size: 1.0625rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};

  @media ${device.md} {
    font-size: 1.25rem;
  }

  @media ${device.lg} {
    font-size: 1.375rem;
  }
`;

export const FeaturesWrapper = styled.section`
  scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
`;

export const FeatureCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};

  @media ${device.md} {
    gap: 2.5rem;
  }
`;

export const FeatureIconBox = styled.span<{ $tone: GradientTone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.onPrimary};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $tone }) => theme.gradients[$tone]};
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const FeatureDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
`;
