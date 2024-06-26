/* eslint-disable react-refresh/only-export-components */
import * as RadixPopover from '@radix-ui/react-popover';
import { cn } from '../../app/utils/cn';

function PopoverRoot({ children }: { children: React.ReactNode }) {
  return (
    <RadixPopover.Root>
      {children}
    </RadixPopover.Root>
  )
}

function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RadixPopover.Trigger asChild>
      {children}
    </RadixPopover.Trigger>
  )
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content className={cn(
        `rounded-2xl p-4 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[99]
         data-[side=bottom]:animate-slide-up-and-fade
         data-[side=top]:animate-slide-down-and-fade
        `,
        className,
      )}>
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
