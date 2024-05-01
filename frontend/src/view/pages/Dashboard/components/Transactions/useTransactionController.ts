import { useState } from "react";
import { useDashboard } from "../../DashboardContext/useDashboard";
import { useTransactions } from "../../../../../app/hooks/useTransactions";

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const { transactions } = useTransactions();

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    transactions,
    isInitialLoading: false,
    isLoading: false,
    isFilterModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
