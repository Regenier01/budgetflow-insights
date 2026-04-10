import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, BookOpen, ChevronDown, LayoutDashboard } from 'lucide-react';
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
    <div className="min-h-screen bg-[#fdfcfb]">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-primary text-white shadow-lg">
        <div className="container flex h-16 items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 font-black text-white shrink-0">
            <div className="bg-orange-500 p-1.5 rounded-lg shadow-inner">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="hidden md:inline uppercase tracking-tighter text-lg">Vera Cruz <span className="text-orange-400">BI</span></span>
          </Link>
          
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap',
                  location.pathname === to
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                'flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest transition-all text-white/70 hover:bg-white/10 hover:text-white outline-none',
                location.pathname.startsWith('/atividade') && 'bg-white/20 text-white'
              )}>
                <BarChart3 className="h-4 w-4" />
                <span>Atividades</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 rounded-xl border-none shadow-2xl p-2">
                {ATIVIDADES.map((ativ) => (
                  <DropdownMenuItem key={ativ.key} asChild className="rounded-lg focus:bg-orange-50 focus:text-orange-600">
                    <Link to={`/atividade/${ativ.key}`} className="cursor-pointer w-full font-bold py-2.5">
                      {ativ.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <main className="container py-10">{children}</main>
    </div>
  );
}