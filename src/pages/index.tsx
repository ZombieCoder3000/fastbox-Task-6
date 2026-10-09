import React from "react";
import PageTitle from "@/components/common/page-title";
import { Container } from "@/style/wrapper";

const Home: React.FC = () => {
  return (
    <Container className="text-brand">
      <PageTitle title="FastBox"  />
    </Container>
  );
};

export default Home;
