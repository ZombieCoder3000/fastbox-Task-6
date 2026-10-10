import React from "react";
import { useRouter } from "next/router";
import { APP_NAME } from "@/infrastructure/constants";
import { SIDEBAR_ITEMS } from "@/navigation/nav-items";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectIsSidebarOpen, setSidebarOpen } from "@/slices/general.slice";
import { NavLinkItem } from "@/style/nav";
import {
  NavList,
  SidebarHeader,
  SidebarNav,
  SidebarOverlay,
  SidebarWrapper,
} from "@/style/wrapper";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsSidebarOpen);
  const { pathname } = useRouter();

  const close = () => dispatch(setSidebarOpen(false));

  return (
    <>
      <SidebarOverlay
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        $isVisible={isOpen}
        onClick={close}
      />
      <SidebarWrapper aria-label="Sidebar" $isOpen={isOpen}>
        <SidebarHeader>{APP_NAME}</SidebarHeader>
        <SidebarNav aria-label="Main navigation">
          <NavList>
            {SIDEBAR_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLinkItem
                  href={item.href}
                  $active={
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                  }
                  onClick={close}
                >
                  {item.label}
                </NavLinkItem>
              </li>
            ))}
          </NavList>
        </SidebarNav>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
