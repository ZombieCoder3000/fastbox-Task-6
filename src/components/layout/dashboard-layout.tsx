import React from "react";
import Button from "@/components/common/button";
import Sidebar from "@/components/navigation/sidebar";
import type { WithChildren } from "@/infrastructure/services/interface/common.types";
import { useAppDispatch } from "@/redux/hooks";
import { toggleSidebar } from "@/slices/general.slice";
import {
  Container,
  DashboardContent,
  DashboardShell,
  DashboardToolbar,
} from "@/style/wrapper";

const DashboardLayout: React.FC<WithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <DashboardShell>
      <Sidebar />
      <DashboardContent>
        <DashboardToolbar>
          <Button
            variant="outline"
            size="sm"
            aria-label="Toggle navigation"
            onClick={() => dispatch(toggleSidebar())}
          >
            Menu
          </Button>
        </DashboardToolbar>
        <Container>{children}</Container>
      </DashboardContent>
    </DashboardShell>
  );
};

export default DashboardLayout;
