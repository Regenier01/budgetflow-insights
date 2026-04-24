import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import pecuariaIcon from '@/assets/icons/pecuaria.png';
import agricolaIcon from '@/assets/icons/agricola.png';
import seringalIcon from '@/assets/icons/seringal.png';
import canaIcon from '@/assets/icons/cana.png';
import admIcon from '@/assets/icons/adm.png';
import encargosIcon from '@/assets/icons/encargos.png';
import outrasIcon from '@/assets/icons/outras-receitas.png';
import resumoIcon from '@/assets/icons/resumo.png';
import rateiosIcon from '@/assets/icons/rateios.png';

type Tile = {
  label: string;
  to: string;
  icon: string;
  variant?: 'primary' | 'secondary';
};

const tiles: Tile[] = [
  { label: 'Resumo Receitas e Custos', to: '/dashboard', icon: resumoIcon },
  { label: 'Pecuária', to: '/atividade/PECUARIA?returnTo=%2F', icon: pecuariaIcon },
  { label: 'Agrícola', to: '/atividade/AGRICOLA?returnTo=%2F', icon: agricolaIcon },
  { label: 'Seringal', to: '/atividade/SERINGAL?returnTo=%2F', icon: seringalIcon },
  { label: 'Cana', to: '/atividade/CANA?returnTo=%2F', icon: canaIcon },
  { label: 'Despesas Administrativas e Tributárias', to: '/atividade/DESP_ADM_TRIB?returnTo=%2F', icon: admIcon },
  { label: 'Encargos Financeiros', to: '/atividade/ENCARGOS?returnTo=%2F', icon: encargosIcon },
  { label: 'Outras Receitas', to: '/atividade/OUTRAS_RECEITAS_EVENTUAIS?returnTo=%2F', icon: outrasIcon },
];

const rateiosTile: Tile = {
  label: 'Rateios',
  to: '/atividade/RATEIOS?returnTo=%2F',
  icon: rateiosIcon,
  variant: 'secondary',
};

function TileCard({ tile, small = false }: { tile: Tile; small?: boolean }) {
  return (
    <Link
      to={tile.to}
      className="group flex flex-col items-center gap-3 focus:outline-none"
    >
      <div
        className={cn(
          'relative flex items-center justify-center rounded-2xl bg-white transition-all duration-300',
          'shadow-sm ring-1 ring-slate-200/70 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:ring-orange-300',
          small ? 'h-20 w-20' : 'h-28 w-28 sm:h-32 sm:w-32'
        )}
      >
        <img
          src={tile.icon}
          alt={tile.label}
          loading="lazy"
          width={small ? 80 : 128}
          height={small ? 80 : 128}
          className={cn('object-contain p-2', small ? 'h-16 w-16' : 'h-24 w-24 sm:h-28 sm:w-28')}
        />
      </div>
      <div
        className={cn(
          'rounded-lg px-4 py-2 text-center text-white shadow-md transition-all duration-300',
          'bg-orange-500 group-hover:bg-orange-600',
          small ? 'text-[11px] font-bold max-w-[120px]' : 'text-xs sm:text-sm font-bold max-w-[180px] sm:max-w-[200px]'
        )}
      >
        {tile.label}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-10rem)] -mt-10 -mx-4 sm:-mx-8 px-4 sm:px-10 py-12 overflow-hidden">
      {/* Topographic background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary)/0.12), transparent 40%), radial-gradient(circle at 80% 80%, hsl(24 95% 53% / 0.10), transparent 45%)",
        }}
      />

      {/* Header banner */}
      <header className="flex flex-col items-center gap-3 pb-12">
        <div className="rounded-full bg-primary px-10 py-3 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Orçado X Realizado
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl sm:text-6xl font-black text-orange-500 italic tracking-tighter">
              LAGE
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.4em] text-primary/80 uppercase">
            Grupo Otávio Lage
          </span>
        </div>
      </header>

      {/* Rateios — top-left small tile */}
      <div className="absolute left-6 sm:left-10 top-44 sm:top-48">
        <TileCard tile={rateiosTile} small />
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-14 justify-items-center">
          {tiles.map((tile) => (
            <TileCard key={tile.to} tile={tile} />
          ))}
        </div>
      </div>

      {/* Decorative bottom waves */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute -bottom-6 -left-10 right-10 h-20 bg-primary/90 rotate-[-3deg] rounded-tr-[120px]" />
        <div className="absolute -bottom-2 left-20 -right-10 h-16 bg-orange-500 rotate-[2deg] rounded-tl-[140px]" />
      </div>
    </div>
  );
}
