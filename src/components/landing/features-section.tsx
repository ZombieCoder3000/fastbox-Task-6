import React from "react";
import { FEATURES } from "@/constants";
import { FeaturesWrapper } from "@/style/landing";
import { Container, Grid } from "@/style/wrapper";
import FeatureCard from "./feature-card";

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesWrapper id="features">
      <Container>
        <Grid $columns={3} $gap="1.5rem">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </Grid>
      </Container>
    </FeaturesWrapper>
  );
};

export default FeaturesSection;
