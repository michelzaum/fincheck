import { ExitIcon } from '@radix-ui/react-icons';
import { DropDownMenu } from './DropDownMenu';
import { useAuth } from '../../app/hooks/useAuth';

export function UserMenu() {
  const { signout, user } = useAuth();
  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger>
        <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
            {user?.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </DropDownMenu.Trigger>

      <DropDownMenu.Content className='w-32'>
        <DropDownMenu.Item
          className='flex items-center justify-between'
          onSelect={signout}
        >
          Sair
          <ExitIcon className='h-4 w-4' />
        </DropDownMenu.Item>
      </DropDownMenu.Content>
    </DropDownMenu.Root>
  )
}
