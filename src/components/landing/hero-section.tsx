import React from "react";
import styled from "styled-components";
import {
  WrapperVerticalCenterView,
  WrapperVerticalView,
} from "@/style/wrapper";

const GradientText = styled.span`
  display: block;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const HeroSection: React.FC = () => {
  return (
    <WrapperVerticalCenterView className="py-12 md:py-16 lg:py-20">
      <WrapperVerticalView
        className="text-center mx-auto max-w-4xl px-4"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900">
          Everything You Need for
          <GradientText>Seamless Deliveries</GradientText>
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-neutral-500 max-w-2xl leading-relaxed">
          Built for Africa, designed for speed. FastBox delivers on our promises
          with cutting-edge technology.
        </p>
      </WrapperVerticalView>
    </WrapperVerticalCenterView>
  );
};

export default HeroSection;