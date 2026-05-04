export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#050a14] text-white flex justify-center">

      <div className="w-full max-w-100% grid grid-cols-1 lg:grid-cols-5">

        {/* COLUNA 1 (ESQUERDA) */}
        <div className="hidden lg:block">
          <div className="glass-panel w-full h-full opacity-30" />
        </div>

        {/* COLUNAS 2-4 (CENTRO) */}
        <div className="lg:col-span-3 w-full min-h-screen flex flex-col relative px-10">
          {children}
        </div>

        {/* COLUNA 5 (DIREITA) */}
        <div className="hidden lg:block">
          <div className="glass-panel w-full h-full opacity-30" />
        </div>

      </div>
    </div>
  );
}