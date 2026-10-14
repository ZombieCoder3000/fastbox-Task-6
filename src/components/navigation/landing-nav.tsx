import React from "react";
import { LANDING_NAV_ITEMS, ROUTES } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectIsMobileNavOpen,
  setMobileNavOpen,
  toggleMobileNav,
} from "@/slices/general.slice";
import {
  DesktopLinks,
  GetStartedLink,
  HeaderActions,
  HeaderLink,
  MenuToggle,
  MobileActions,
  MobileGetStarted,
  MobileLink,
  MobilePanel,
  MobileSignIn,
  SignInLink,
} from "@/style/nav";

const LandingNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsMobileNavOpen);

  const close = () => dispatch(setMobileNavOpen(false));

  return (
    <>
      <DesktopLinks aria-label="Primary navigation">
        {LANDING_NAV_ITEMS.map((item) => (
          <HeaderLink key={item.href} href={item.href}>
            {item.label}
          </HeaderLink>
        ))}
      </DesktopLinks>

      <HeaderActions>
        <SignInLink href={ROUTES.LOGIN}>Sign in</SignInLink>
        <GetStartedLink href={ROUTES.LOGIN}>Get Started</GetStartedLink>
        <MenuToggle
          type="button"
          $variant="outline"
          $size="sm"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => dispatch(toggleMobileNav())}
        >
          {isOpen ? "Close" : "Menu"}
        </MenuToggle>
      </HeaderActions>

      <MobilePanel aria-label="Mobile navigation" $isOpen={isOpen}>
        {LANDING_NAV_ITEMS.map((item) => (
          <MobileLink key={item.href} href={item.href} onClick={close}>
            {item.label}
          </MobileLink>
        ))}
        <MobileActions>
          <MobileSignIn href={ROUTES.LOGIN} onClick={close}>
            Sign in
          </MobileSignIn>
          <MobileGetStarted href={ROUTES.LOGIN} onClick={close}>
            Get Started
          </MobileGetStarted>
        </MobileActions>
      </MobilePanel>
    </>
  );
};

export default LandingNav;
