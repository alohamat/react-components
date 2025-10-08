import type { ReactNode } from "react";

type DashboardProps = {
  children?: ReactNode;
};

function Dashboard({ children }: DashboardProps) {

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black overflow-hidden flex flex-col items-center justify-center px-6">
      {/* stars with random divs */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
        {children}
      
    </main>
  );
}

export default Dashboard;
