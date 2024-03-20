import { PlusIcon } from "@radix-ui/react-icons";
import { DropDownMenu } from "../../../../components/DropDownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropDownMenu.Root>
        <DropDownMenu.Trigger>
          <button className="bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center text-white">
            <PlusIcon className="w-6 h-6" />
          </button>
        </DropDownMenu.Trigger>

        <DropDownMenu.Content>
          <DropDownMenu.Item className="gap-2">
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropDownMenu.Item>
          <DropDownMenu.Item className="gap-2">
            <CategoryIcon type="income" />
            Nova Receita
          </DropDownMenu.Item>
          <DropDownMenu.Item className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropDownMenu.Item>
        </DropDownMenu.Content>
      </DropDownMenu.Root>
    </div>
  )
}
