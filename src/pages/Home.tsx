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
  to: '/rateios',
  icon: rateiosIcon,
};

function TileCard({ tile }: { tile: Tile }) {
  return (
    <Link
      to={tile.to}
      className="group flex w-full flex-col items-center gap-3 focus:outline-none"
    >
      <div
        className={cn(
          'relative flex items-center justify-center rounded-2xl bg-white/90 transition-all duration-300',
          'shadow-sm ring-1 ring-slate-200/70 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:ring-orange-300 backdrop-blur-[2px]',
          'h-24 w-24 sm:h-32 sm:w-32'
        )}
      >
        <div
          aria-hidden
          className={cn(
            'absolute inset-2 rounded-xl bg-gradient-to-br from-primary/12 via-primary/5 to-orange-400/15',
            'opacity-90 transition-opacity duration-300 group-hover:opacity-100'
          )}
        />
        <img
          src={tile.icon}
          alt={tile.label}
          loading="lazy"
          width={128}
          height={128}
          className={cn(
            'relative z-10 object-contain p-2',
            'h-20 w-20 sm:h-28 sm:w-28'
          )}
        />
      </div>
      <div
        className={cn(
          'rounded-lg px-4 py-2 text-center text-white shadow-md transition-all duration-300',
          'bg-orange-500 group-hover:bg-orange-600',
          'text-xs sm:text-sm font-bold w-full max-w-[230px] min-h-[48px] flex items-center justify-center'
        )}
      >
        {tile.label}
      </div>
    </Link>
  );
}

export default function Home() {
  const allTiles: Tile[] = [rateiosTile, ...tiles];

  return (
    <div className="relative min-h-[calc(100vh-10rem)] -mt-10 -mx-4 sm:-mx-8 px-4 sm:px-10 py-8 sm:py-10 pb-32 bg-gradient-to-b from-primary/[0.06] via-white to-orange-100/30 overflow-hidden">
      {/* Topographic background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary)/0.12), transparent 40%), radial-gradient(circle at 80% 80%, hsl(24 95% 53% / 0.10), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(120deg, hsl(var(--primary)/0.08) 0%, transparent 35%, hsl(24 95% 53% / 0.08) 100%)",
        }}
      />

      {/* Header banner */}
      <header className="flex flex-col items-center gap-2 pb-8 sm:pb-10">
        <div className="rounded-full bg-primary px-10 sm:px-14 py-3 sm:py-4 shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
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

      {/* Main grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 sm:gap-x-6 gap-y-8 sm:gap-y-10 justify-items-center items-start">
          {allTiles.map((tile) => (
            <TileCard key={tile.to} tile={tile} />
          ))}
        </div>
      </div>

      {/* Decorative bottom waves */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 -z-10">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-primary/90 rotate-[-2deg] rounded-tr-[180px]" />
          <div className="absolute -bottom-2 left-8 -right-8 h-20 bg-orange-500 rotate-[1deg] rounded-tl-[220px]" />
        </div>
      </div>
    </div>
  );
}
