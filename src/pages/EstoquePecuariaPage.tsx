import { ArrowLeft, Package } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function EstoquePecuariaPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const handleBack = () => {
    const params = new URLSearchParams();
    params.set('tipo', 'todos');
    if (returnTo) params.set('returnTo', returnTo);
    navigate(`/atividade/PECUARIA?${params.toString()}`);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4">
        <div>
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-semibold mb-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Pecuária
          </button>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-1 bg-orange-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600/70">
              Pecuária — Estoque
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Estoque</h1>
          <p className="text-sm text-slate-500 font-medium">
            Controle de estoque da atividade pecuária
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-orange-100 bg-white shadow-sm">
        <div className="px-6 py-5 flex items-center justify-between border-b border-orange-100 bg-orange-500 rounded-t-2xl">
          <div className="flex items-center gap-3 text-white">
            <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
              <Package className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                Painel
              </p>
              <h2 className="text-sm font-bold">Estoque Pecuária</h2>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white bg-white/15 px-3 py-1.5 rounded-full">
            Em construção
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
          <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
            <Package className="h-7 w-7 text-orange-500" />
          </div>
          <h3 className="text-lg font-black text-slate-900">Tela em construção</h3>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            Em breve esta área trará a visão detalhada do estoque da atividade pecuária.
          </p>
        </div>
      </div>
    </div>
  );
}
