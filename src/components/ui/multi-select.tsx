import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Check, ChevronDown, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const normalizeForSearch = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  /** Valores selecionados. Array vazio significa "todos". */
  selected: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  /** Rótulo exibido quando nenhum item está selecionado (todos). */
  allLabel?: string;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  align?: 'start' | 'center' | 'end';
  /** Exibe campo de busca para filtrar as opções da lista. */
  searchable?: boolean;
  searchPlaceholder?: string;
}

/**
 * Multi-select inspirado no Excel: clique simples seleciona apenas o item;
 * Ctrl/⌘ + clique alterna o item no conjunto selecionado (permite intervalos
 * como "abril-maio"). Selecionar "Todos" limpa a seleção.
 */
export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Selecionar',
  allLabel = 'Todos',
  className,
  triggerClassName,
  contentClassName,
  align = 'start',
  searchable = true,
  searchPlaceholder = 'Filtrar...',
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const selectedSet = React.useMemo(() => new Set(selected), [selected]);
  const isAll = selected.length === 0;

  const filteredOptions = React.useMemo(() => {
    const query = normalizeForSearch(search);
    if (!query) return options;
    return options.filter(
      (opt) =>
        normalizeForSearch(opt.label).includes(query) ||
        normalizeForSearch(opt.value).includes(query)
    );
  }, [options, search]);

  React.useEffect(() => {
    if (open && searchable) {
      const id = window.setTimeout(() => searchInputRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
  }, [open, searchable]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setSearch('');
  };

  const triggerLabel = React.useMemo(() => {
    if (isAll) return allLabel;
    if (selected.length === 1) {
      const found = options.find((opt) => opt.value === selected[0]);
      return found?.label || selected[0];
    }
    const labels = selected
      .map((value) => options.find((opt) => opt.value === value)?.label || value);
    if (labels.length <= 2) return labels.join(', ');
    return `${labels.length} selecionados`;
  }, [isAll, selected, options, allLabel]);

  const toggleItem = (
    value: string,
    event: React.MouseEvent | React.KeyboardEvent
  ) => {
    const multi = event.ctrlKey || event.metaKey || event.shiftKey;

    if (!multi) {
      if (selected.length === 1 && selected[0] === value) {
        onChange([]);
      } else {
        onChange([value]);
      }
      return;
    }

    if (selectedSet.has(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleAllClick = () => {
    onChange([]);
  };

  return (
    <div className={className}>
      <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
        <PopoverPrimitive.Trigger asChild>
          <button
            type="button"
            className={cn(
              'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              triggerClassName
            )}
          >
            <span className="line-clamp-1 text-left">
              {triggerLabel || placeholder}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-70" />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align={align}
            sideOffset={4}
            className={cn(
              'z-50 min-w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
              contentClassName
            )}
          >
            <div className="border-b border-slate-100 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Ctrl+clique para múltiplos
            </div>
            {searchable && (
              <div
                className="border-b border-slate-100 px-2 py-2"
                onPointerDown={(event) => event.stopPropagation()}
              >
                <div className="relative">
                  <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <Input
                    ref={searchInputRef}
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={searchPlaceholder}
                    className="h-8 pl-7 text-xs"
                    onKeyDown={(event) => event.stopPropagation()}
                  />
                </div>
              </div>
            )}
            <div className="max-h-72 overflow-y-auto py-1">
              <button
                type="button"
                onClick={handleAllClick}
                className={cn(
                  'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
                  isAll && 'font-semibold text-slate-900'
                )}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  {isAll && <Check className="h-4 w-4" />}
                </span>
                {allLabel}
              </button>
              {filteredOptions.length === 0 ? (
                <p className="px-3 py-2 text-center text-xs text-slate-500">
                  Nenhum resultado para &quot;{search}&quot;
                </p>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = selectedSet.has(option.value);
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={(event) => toggleItem(option.value, event)}
                      className={cn(
                        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
                        isSelected && 'bg-accent/40 font-medium text-slate-900'
                      )}
                    >
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        {isSelected && <Check className="h-4 w-4" />}
                      </span>
                      <span className="truncate text-left">{option.label}</span>
                    </button>
                  );
                })
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  );
}
