import React from "react";
import {
  GradientText,
  HeroSection as HeroWrapper,
  HeroSubtitle,
  HeroTitle,
} from "@/style/landing";

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroTitle>
        Everything You Need for
        <GradientText>Seamless Deliveries</GradientText>
      </HeroTitle>
      <HeroSubtitle className="max-w-3xl">
        Built for Africa, designed for speed. FastBox delivers on our promises
        with cutting-edge technology.
      </HeroSubtitle>
    </HeroWrapper>
  );
};

export default HeroSection;
