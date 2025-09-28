import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import type { ReactNode } from "react";
import Home from "../assets/Home";

type DashboardProps = {
  children?: ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black overflow-hidden flex flex-col">
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

      <div className="relative flex flex-1 z-10 p-6">
        {children}
      </div>
      <div className="self-end">
        <Button innerContent={<Home />} click={() => navigate("/")}/>
      </div>
    </main>
  );
}

export default Dashboard;
