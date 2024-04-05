import { useState } from "react";
import { useDashboard } from "../../DashboardContext/useDashboard";

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    transactions: [{}],
    isInitialLoading: false,
    isLoading: false,
    isFilterModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
