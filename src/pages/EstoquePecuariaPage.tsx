import { EstoqueDashboard } from '@/components/estoque/EstoqueDashboard';
import { ArrowLeft } from 'lucide-react';
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

      <EstoqueDashboard />
    </div>
  );
}
