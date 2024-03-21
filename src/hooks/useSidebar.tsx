import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  };
};
