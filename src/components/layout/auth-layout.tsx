import React from "react";
import Head from "next/head";
import Image from "next/image";
import { APP_NAME } from "@/constants";
import type { WithChildren } from "@/infrastructure/services/interface/common.types";
import { AuthCard, AuthShell } from "@/style/wrapper";

type AuthLayoutProps = WithChildren & {
  title?: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = `${APP_NAME} | Sign in`,
}) => {
  return (
    <AuthShell>
      <Head>
        <title>{title}</title>
      </Head>
      <Image
        src="/images/logo.png"
        alt={APP_NAME}
        width={160}
        height={39}
        priority
      />
      <AuthCard>{children}</AuthCard>
    </AuthShell>
  );
};

export default AuthLayout;
