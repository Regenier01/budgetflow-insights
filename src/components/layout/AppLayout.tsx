import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const returnToParam = searchParams.get('returnTo');
  const returnTo = returnToParam ? decodeURIComponent(returnToParam) : null;
  const isActivityPage = location.pathname.startsWith('/atividade/');
  const safeReturnTo = returnTo && returnTo.startsWith('/') ? returnTo : '/';
  const showReturnNav = isActivityPage && Boolean(returnTo);
  const getReturnLabel = (target: string) => {
    const pathname = target.split('?')[0]?.split('#')[0] || '/';
    if (pathname === '/') return 'Home';

    const firstSegment = pathname.split('/').filter(Boolean)[0];
    if (!firstSegment) return 'Home';

    return firstSegment
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const returnLabel = getReturnLabel(safeReturnTo);
  const handleReturnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(safeReturnTo);
  };

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
            {showReturnNav && (
              <Link
                to={safeReturnTo}
                onClick={handleReturnClick}
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap text-white/70 hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{returnLabel}</span>
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main className="container py-10">{children}</main>
    </div>
  );
}
