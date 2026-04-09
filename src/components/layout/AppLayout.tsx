import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Upload, BookOpen, ChevronDown, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ATIVIDADES } from '@/types/budget';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/instrucoes', label: 'Instruções', icon: BookOpen },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-sm">
        <div className="container flex h-14 items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-primary shrink-0">
            <BarChart3 className="h-5 w-5 text-accent" />
            <span className="hidden md:inline">Orçado vs Realizado</span>
          </Link>
          
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap',
                  location.pathname === to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-secondary hover:text-foreground outline-none',
                location.pathname.startsWith('/atividade') && 'bg-secondary text-foreground'
              )}>
                <BarChart3 className="h-4 w-4" />
                <span>Atividades</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {ATIVIDADES.map((ativ) => (
                  <DropdownMenuItem key={ativ.key} asChild>
                    <Link to={`/atividade/${ativ.key}`} className="cursor-pointer w-full">
                      {ativ.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <main className="container py-6">{children}</main>
    </div>
  );
}