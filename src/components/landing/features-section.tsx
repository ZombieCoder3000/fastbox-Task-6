import React from "react";
import { FEATURES } from "@/constants";
import {
  WrapperVerticalCenterView,
  WrapperVerticalView,
  Grid,
} from "@/style/wrapper";
import FeatureCard from "./feature-card";

const FeaturesSection: React.FC = () => {
  return (
    <WrapperVerticalCenterView className="py-10 md:py-14 w-full">
      <WrapperVerticalView
        className="w-full max-w-7xl px-4 md:px-6"
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <Grid $columns={3} $gap="1.5rem" className="gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </Grid>
      </WrapperVerticalView>
    </WrapperVerticalCenterView>
  );
};

export default FeaturesSection;