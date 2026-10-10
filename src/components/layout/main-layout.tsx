import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME, ROUTES } from "@/infrastructure/constants";
import type { WithChildren } from "@/infrastructure/services/interface/common.types";
import { Caption } from "@/style/text";
import {
  AppShell,
  FooterWrapper,
  MainContent,
  StickyHeader,
} from "@/style/wrapper";

type MainLayoutProps = WithChildren & {
  title?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = APP_NAME,
}) => {
  return (
    <AppShell>
      <Head>
        <title>{title}</title>
      </Head>
      <StickyHeader>
        <Link href={ROUTES.HOME} aria-label={APP_NAME}>
          <Image
            src="/images/logo.png"
            alt={APP_NAME}
            width={140}
            height={34}
            priority
          />
        </Link>
      </StickyHeader>
      <MainContent>{children}</MainContent>
      <FooterWrapper>
        <Caption>© {APP_NAME}</Caption>
      </FooterWrapper>
    </AppShell>
  );
};

export default MainLayout;
