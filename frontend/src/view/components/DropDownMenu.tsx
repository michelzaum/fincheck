/* eslint-disable react-refresh/only-export-components */
import * as RadixDropDownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../app/utils/cn';

function DropDownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropDownMenu.Root>
      {children}
    </RadixDropDownMenu.Root>
  )
}

function DropDownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropDownMenu.Trigger className='outline-none'>
      {children}
    </RadixDropDownMenu.Trigger>
  )
}

interface DropDownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

function DropDownMenuContent({ children, className }: DropDownMenuContentProps) {
  return (
    <RadixDropDownMenu.Portal>
      <RadixDropDownMenu.Content className={cn(
        `rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] data-[side=bottom]:animate-slide-up-and-fade z-50`,
        className,
      )}>
        {children}
      </RadixDropDownMenu.Content>
    </RadixDropDownMenu.Portal>
  )
}

interface DropDownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

function DropDownMenuItem({ children, className, onSelect }: DropDownMenuItemProps) {
  return (
    <RadixDropDownMenu.Item
      onSelect={onSelect}
      className={cn(
      `min-h-10 outline-none flex items-center py-2 px-4 text-gray-800 text-sm data-[highlighted]:bg-gray-50
      rounded-2xl transition-colors cursor-pointer`,
      className,
    )}
    >
      {children}
    </RadixDropDownMenu.Item>
  )
}

export const DropDownMenu = {
  Root: DropDownMenuRoot,
  Trigger: DropDownMenuTrigger,
  Content: DropDownMenuContent,
  Item: DropDownMenuItem,
};
