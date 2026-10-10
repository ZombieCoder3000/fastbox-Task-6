import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LandingNav from "@/components/navigation/landing-nav";
import { APP_NAME, ROUTES } from "@/constants";
import type { WithChildren } from "@/infrastructure/services/interface/common.types";
import { Caption } from "@/style/text";
import {
  AppShell,
  FooterWrapper,
  MainContent,
  StickyHeader,
} from "@/style/wrapper";

type LandingLayoutProps = WithChildren & {
  title?: string;
};

const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
  title = `${APP_NAME} | Fast delivery across Africa`,
}) => {
  return (
    <AppShell>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Built for Africa, designed for speed. FastBox delivers on our promises with cutting-edge technology."
        />
      </Head>
      <StickyHeader>
        <Link href={ROUTES.HOME} aria-label={APP_NAME}>
          <Image
            src="/images/logo.png"
            alt={APP_NAME}
            width={180}
            height={44}
            priority
          />
        </Link>
        <LandingNav />
      </StickyHeader>
      <MainContent>{children}</MainContent>
      <FooterWrapper>
        <Caption>© {APP_NAME}</Caption>
      </FooterWrapper>
    </AppShell>
  );
};

export default LandingLayout;
