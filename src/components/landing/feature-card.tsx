import React from "react";
import styled from "styled-components";
import type { GradientTone } from "@/infrastructure/services/interface/common.types";
import { WrapperCard, WrapperVerticalView } from "@/style/wrapper";

export interface FeatureItem {
  id: string | number;
  title: string;
  description: string;
  tone?: GradientTone;
  icon?: React.ReactNode;
}

const FeatureIconBox = styled.span<{ $tone?: GradientTone }>`
  background: ${({ theme, $tone }) =>
    $tone && $tone in theme.gradients
      ? theme.gradients[$tone]
      : theme.gradients.brand};
`;

interface FeatureCardProps {
  feature: FeatureItem | Record<string, any>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <WrapperCard className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <WrapperVerticalView
        className="p-4"
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <FeatureIconBox
          $tone={feature.tone}
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-white"
        >
          {feature.icon ?? null}
        </FeatureIconBox>
        <h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-neutral-500 leading-normal">
          {feature.description}
        </p>
      </WrapperVerticalView>
    </WrapperCard>
  );
};

export default FeatureCard;