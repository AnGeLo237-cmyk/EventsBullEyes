export default function RoleTabs({ roles, activeRoleId, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 bg-slate-200/50 p-1.5 rounded-[2rem] border border-slate-200 backdrop-blur-md">
      {roles.map((role) => {
        const isActive = role.id === activeRoleId;
        return (
          <button
            key={role.id}
            onClick={() => onChange(role.id)}
            className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ease-out ${
              isActive 
                ? "bg-white text-slate-900 shadow-md scale-105" 
                : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            {role.label}
          </button>
        );
      })}
    </div>
  );
}