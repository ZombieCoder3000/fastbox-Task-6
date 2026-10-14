import styled from "styled-components";
import Image from "next/image";
import { device } from "./device";

export const AppShell = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.layout.headerHeight};
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.md} {
    padding: 0 1.5rem;
  }

  @media ${device.lg} {
    padding: 0 2rem;
  }
`;

export const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin: 0 auto;
  padding: 1rem;

  @media ${device.md} {
    padding: 1.5rem;
  }

  @media ${device.lg} {
    padding: 2rem;
  }
`;

export const ContainerWrapper = styled.section`
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.section<{
  $justify?: string;
  $align?: string;
  $gap?: string;
  $wrap?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justify }) =>$justify ?? "flex-start"};
  align-items: ${({ $align }) =>$align ?? "center"};
  gap: ${({ $gap }) =>$gap ?? "1rem"};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
`;

export const Column = styled.section<{
  $justify?: string;
  $align?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) =>$justify ?? "flex-start"};
  align-items: ${({ $align }) =>$align ?? "stretch"};
  gap: ${({ $gap }) =>$gap ?? "1rem"};
`;

export const Grid = styled.section<{ $columns?: number; $gap?: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap }) =>$gap ?? "1rem"};

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(${({ $columns }) =>$columns ?? 3}, 1fr);
  }
`;

export const WrapperHorizontalCenterView = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WrapperVerticalCenterView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperVerticalSpaceView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperHorizontalSpaceView = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperVerticalView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const WrapperHorizontalView = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CardWrapper = styled.article`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const CardHeader = styled.header`
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardBody = styled.section`
  padding: 1.25rem;
`;

export const CardFooter = styled.footer`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const WrapItemCard = styled.article`
  width: 100%;
`;

export const WrapperCard = styled(WrapperVerticalView)`
  padding: 10px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
`;

export const WrapperCard_ = styled.article`
  flex-grow: 1;
  padding: 0 10px;
  margin-right: 10px;
  min-width: 0;
`;

export const WrapperCardView = styled(WrapperVerticalView)`
  border-radius: 10px;
  padding: 5px 0;
  width: 210px;
  margin: 6px;
`;

export const WrapperMiniCard = styled(WrapperHorizontalView)`
  display: flex;
  padding: 16px 10px;
  width: 214px !important;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  gap: 10px;
`;

export const MainCardWrapper = styled(WrapperVerticalView)`
  border-radius: 6px;
  width: 500px;
  height: 28vh;
  background-color: #f5f5fa;
  margin: 10px;
`;

export const OrdersCardWrapper = styled(WrapperVerticalView)`
  flex: 1;
  border-radius: 6px;
  width: 500px;
  height: 90vh;
  background-color: #f5f5fa;
  margin: 10px;
`;

export const WrapperActivityCardN = styled(WrapperVerticalView)`
  flex: 1;
  height: 428px;
  border-radius: 10px;
  background-color: #fff;
  padding: 14px;
  margin: 10px 0;
  border: 1px solid #e1e1e1;
`;

export const WrapperCardInfo = styled(WrapperVerticalSpaceView)`
  align-items: baseline;
  width: 70%;
  height: 60vh;
  border-radius: 6px;
  margin: 80px auto;
  padding: 20px;
`;


export const AuthShell = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  padding: 2.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const AuthCard = styled.article`
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media ${device.md} {
    padding: 2rem;
  }
`;

export const DashboardShell = styled.section`
  display: flex;
  flex: 1;
  align-items: flex-start;
  min-width: 0;
`;

export const DashboardContent = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
`;

export const DashboardToolbar = styled.header`
  position: sticky;
  top: ${({ theme }) => theme.layout.headerHeight};
  z-index: ${({ theme }) => theme.zIndex.toolbar};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.toolbarHeight};
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.md} {
    padding: 0 1.5rem;
  }

  @media ${device.lg} {
    display: none;
  }
`;

export const SidebarWrapper = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.sidebar};
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.layout.sidebarWidth};
  max-width: 85vw;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  transform: ${({ $isOpen }) =>$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.25s ease-in-out;

  @media ${device.lg} {
    position: sticky;
    top: ${({ theme }) => theme.layout.headerHeight};
    height: calc(100vh - ${({ theme }) => theme.layout.headerHeight});
    z-index: auto;
    flex-shrink: 0;
    transform: none;
  }
`;

export const SidebarOverlay = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  border: none;
  background-color: ${({ theme }) => theme.colors.overlay};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  transition: opacity 0.25s ease-in-out;

  @media ${device.lg} {
    display: none;
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.headerHeight};
  padding: 0 1.25rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 900;
  font-size: 1.25rem;
`;

export const SidebarNav = styled.nav`
  padding: 0.5rem 0.75rem 1.5rem;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;


export const ShieldWrapper = styled.section`
  position: relative;
`;

export const CircleWrapper = styled.section`
  position: relative;
  left: -57px;
`;

export const ImageComp = styled(Image)`
  position: relative;
  top: 80px;
`;

export const ImageComp2 = styled(Image)`
  position: absolute;
  right: -185px;
  top: 190px;
`;

export const ImageComp_ = styled(Image)`
  position: relative;
`;

export const ImageComp2_ = styled(Image)`
  position: absolute;
  right: -112px;
  top: 145px;
`;

export const WrapImagesHover = styled(WrapperHorizontalView)`
  position: absolute;
  top: -150px;
  left: 120px;
`;

export const Circle = styled.figure`
  width: 400px;
  height: 400px;
  background-color: #5250ba;
  border-radius: 50%;
  margin: 0;
`;

export const MCircle = styled.figure`
  width: 230px;
  height: 230px;
  background-color: #5250ba;
  border-radius: 50%;
  margin: 0;
`;

export const Wrapicons = styled(WrapperVerticalView)`
  width: 100%;
  padding: 10px 0;
`;

export const ImageWrap = styled.figure`
  width: 120px !important;
  height: 80px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  margin: 0 4px;
`;

export const Underline = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #fff;
  margin: 6px 0;
`;

export const HorizontalUnderline = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background-color: #fff;
  margin: 10px auto;
`;

export const HorizontalSeparator = styled.hr`
  width: 100%;
  height: 0.6px;
  border: none;
  background-color: #000;
  margin-bottom: 40px;
  margin-block: 20px;
`;

export const BottomWrapperCart = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BottomWrapperCartRow = styled.section`
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 35px;
  background-color: grey;
`;

export const BottomOpacity = styled.section`
  width: 78%;
  height: 50px;
  opacity: 0.89;
  margin: 0 auto;
  background-color: #fff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ImageWrapper = styled(WrapperVerticalView)`
  border-radius: 10px;
  background-color: #fff;
  height: 220px;
  width: 200px;
  margin: 0 auto;
`;

export const ProfileImgWrap = styled(WrapperVerticalView)`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  justify-content: center;
  border: 1px solid #000;
`;

export const DeviceWrapper = styled(WrapperHorizontalSpaceView)<{ $color?: string }>`
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ $color }) =>$color ?? "transparent"};
`;

export const CircleWrap = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  cursor: pointer;
`;

export const BottomSheetWrapper = styled.aside`
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  padding: 10px;
  right: 0;
  height: 80%;
  width: 75%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.3s ease-in-out;
`;

export const ScrollableHorizontalDiv = styled(WrapperHorizontalSpaceView)`
  flex: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollableVerticalDiv = styled(WrapperHorizontalSpaceView)`
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperDeviceInfo = styled(WrapperVerticalView)`
  padding: 16px 8px 0 10px;
  border-radius: 12px;
  background-color: #d9d9d9;
`;

export const ContainText = styled(WrapperHorizontalView)`
  width: 100px;
`;

export const WrapName = styled.header``;

export const WrapperFIleInput = styled(WrapperHorizontalView)`
  padding: 6px 0;
  background-color: #f5f5fa;
  border-radius: 6px;
  width: 100%;
  margin-inline: 5px;
`;

export const WrapperFIleInput_ = styled(WrapperHorizontalView)`
  padding: 0px 6px;
  background-color: #f5f5fa;
  border-radius: 6px;
  width: 200px;
`;

export const WrapperItemIcon = styled(WrapperVerticalCenterView)`
  width: 40px !important;
  height: 40px;
  margin: 10px;
  border-radius: 10px;
`;

export const WrapperSearch = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  width: 550px;
  background-color: #eaeaea;
  padding: 4px;
`;

export const WrapperImg = styled(WrapperVerticalCenterView)`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 6px;
  margin-inline: 4px;
`;

export const WrapperOrderImg = styled(WrapperVerticalCenterView)`
  width: 80px;
  height: 80px;
  margin-right: 6px;
  background-color: #eaeaea;
  border-radius: 6px;
`;

export const Circleborder = styled(WrapperVerticalCenterView)`
  width: 15px;
  height: 15px;
  border-radius: 12px;
  margin: 6px;
  border: 1px solid #000;
`;

export const CircleborderInner = styled(WrapperVerticalView)`
  width: 10px;
  height: 10px;
  border-radius: 30px;
  background-color: #000;
`;