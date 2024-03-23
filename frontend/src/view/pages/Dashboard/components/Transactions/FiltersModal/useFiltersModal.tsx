import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<null | string>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelecBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId
        ? null
        : bankAccountId
    ));
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    handleSelecBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
  }
}
