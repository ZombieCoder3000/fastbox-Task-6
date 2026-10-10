import React from "react";
import {
  ClockIcon,
  DollarIcon,
  MapPinIcon,
  ShieldIcon,
  SmartphoneIcon,
  ZapIcon,
} from "@/assets/icons/feature-icons";
import type {
  FeatureIconName,
  FeatureItem,
} from "@/infrastructure/services/interface/common.types";
import {
  FeatureCardWrapper,
  FeatureDescription,
  FeatureIconBox,
  FeatureTitle,
} from "@/style/landing";

const ICONS: Record<FeatureIconName, React.FC> = {
  zap: ZapIcon,
  shield: ShieldIcon,
  mapPin: MapPinIcon,
  dollar: DollarIcon,
  clock: ClockIcon,
  smartphone: SmartphoneIcon,
};

const FeatureCard: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
  const Icon = ICONS[feature.icon];

  return (
    <FeatureCardWrapper>
      <FeatureIconBox $tone={feature.tone}>
        <Icon />
      </FeatureIconBox>
      <FeatureTitle>{feature.title}</FeatureTitle>
      <FeatureDescription>{feature.description}</FeatureDescription>
    </FeatureCardWrapper>
  );
};

export default FeatureCard;
