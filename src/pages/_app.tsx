import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { getLayoutsForPath } from "@/navigation/route-layouts";
import StoreProvider from "@/redux/store-provider";
import GlobalStyle from "@/style/globalStyle";
import { theme } from "@/style/theme";
import "@/style/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const layouts = getLayoutsForPath(router.pathname);

  const wrapped = layouts.reduceRight(
    (children, LayoutComponent) => (
      <LayoutComponent>{children}</LayoutComponent>
    ),
    <Component {...pageProps} />,
  );

  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        {wrapped}
      </StoreProvider>
    </ThemeProvider>
  );
};

export default MyApp;
