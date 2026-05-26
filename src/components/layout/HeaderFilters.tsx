import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type HeaderFiltersContextValue = {
  setHeaderFilters: (node: ReactNode | null) => void;
};

export const HeaderFiltersContext = createContext<HeaderFiltersContextValue | null>(null);

export function useHeaderFiltersState() {
  const [headerFilters, setHeaderFilters] = useState<ReactNode | null>(null);
  const value = useMemo(() => ({ setHeaderFilters }), []);
  return { headerFilters, value };
}

/** Mounts filter controls into the app header (right side). */
export function HeaderFiltersSlot({ children }: { children: ReactNode }) {
  const ctx = useContext(HeaderFiltersContext);

  useLayoutEffect(() => {
    if (!ctx) return;
    ctx.setHeaderFilters(children);
    return () => ctx.setHeaderFilters(null);
  }, [children, ctx]);

  return null;
}
