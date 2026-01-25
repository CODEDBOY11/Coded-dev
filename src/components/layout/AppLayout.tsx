import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.19)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.19)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        {/* GLOBAL GRID BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
          />
          {/* Soft fade so it doesn't overpower */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* CONTENT */}
        <main className="relative z-10">{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
