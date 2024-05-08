import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModalController } from "./useFiltersModalController";
import { cn } from "../../../../../../app/utils/cn";

interface FilterModalProps {
  open: boolean;
  onClose(): void;
  onApplyFilters(filters: { bankAccountId: string | undefined; year: number; }): void;
}

export function FiltersModal({ open, onClose, onApplyFilters }: FilterModalProps) {
  const {
    handleSelecBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
  } = useFiltersModalController();

  return (
    <Modal open={open} title="Filtros" onClose={onClose}>
      <div>
        <span className='text-lg tracking-[-1px] font-bold text-gray-800'>
          Conta
        </span>

        <div className="space-y-2 mt-2">
          {accounts.map((account) => (
            <button
              key={account.id}
              onClick={() => handleSelecBankAccount(account.id)}
              className={cn(
                'p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors',
                account.id === selectedBankAccountId && '!bg-gray-200'
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className='text-lg tracking-[-1px] font-bold'>
          Ano
        </span>
        <div className="mt-2 w-52 flex items-center justify-between">
          <button className="h-12 w-12 flex items-center justify-center">
            <ChevronLeftIcon
              className="h-6 w-6"
              onClick={() => handleChangeYear(-1)}
            />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>
          <button className="h-12 w-12 flex items-center justify-center">
            <ChevronRightIcon
              className="h-6 w-6"
              onClick={() => handleChangeYear(+1)}
            />
          </button>
        </div>
      </div>
      <Button
        className="w-full mt-10"
        onClick={() => onApplyFilters({
          bankAccountId: selectedBankAccountId,
          year: selectedYear,
        })}
      >
        Aplicar filtro
      </Button>
    </Modal>
  )
}
