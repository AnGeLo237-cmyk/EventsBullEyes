// role-panel.js
import { 
  CheckCircle2, Zap, ArrowRight, BookOpen,
  MapPin, Calendar, Activity, BellRing,
  Compass, Ticket, Navigation, Star,
  Globe, Eye, TrendingUp, UserPlus,
  ShieldCheck, Gavel, Server, BarChart
} from "lucide-react";

// Dictionnaire dynamique des icônes
const IconMap = {
  MapPin, Calendar, Activity, BellRing,
  Compass, Ticket, Navigation, Star,
  Globe, Eye, TrendingUp, UserPlus,
  ShieldCheck, Gavel, Server, BarChart
};

export default function RolePanel({ role }) {
  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Colonne Gauche : Stratégie & Valeur */}
      <div className="bg-white/80 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4">
            <div 
              className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-2" 
              style={{ backgroundColor: role.accent }}
            >
              <Zap size={22} fill="currentColor" />
            </div>
            <div>
              <p className="inline-flex px-3 py-0.5 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                Module Premium
              </p>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">{role.title}</h3>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2"># Défi Métier</h4>
                <p className="text-[14px] text-slate-600 leading-relaxed italic font-medium">"{role.problem}"</p>
              </section>
              <section>
                <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2"># La Solution</h4>
                <p className="text-[15px] font-bold text-slate-900 leading-relaxed">{role.solution}</p>
              </section>
            </div>

            <div className="bg-slate-50/50 rounded-[2rem] p-6 border border-slate-100">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Fonctions Clés</h4>
              <div className="grid gap-3">
                {role.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-[13px] font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-8">
            {role.visualStats.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-tighter">{s.label}</p>
                <p className="text-xl font-black text-slate-900" style={{ color: role.accent }}>{s.value}</p>
              </div>
            ))}
          </div>
          <button className="h-11 px-8 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-black transition-colors shadow-lg">
            Appliquer <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Colonne Droite : Guide Dynamique Proportionnel */}
      <div 
        className="rounded-[2.5rem] p-1 shadow-2xl relative overflow-hidden transition-all duration-500"
        style={{ backgroundColor: role.accent }}
      >
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-t-[2.3rem] border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={18} className="text-white/70" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Guide Utilisateur</span>
          </div>
          <h4 className="text-xl font-black text-white leading-tight">{role.useCase}</h4>
        </div>

        <div className="p-6 space-y-4">
          {role.guideSteps.map((step, idx) => {
            const Icon = IconMap[step.icon] || Zap;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all"
              >
                <div className="flex-shrink-0 text-white/40">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-medium text-white/90 leading-snug">{step.text}</p>
              </div>
            );
          })}
        </div>
        
        {/* Effet décoratif de fond */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
      </div>
    </div>
  );
}