import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { components } from "../components/ComponentShowcase";
import Dashboard from "../layouts/Dashboard";
import Footer from "../components/Footer";
import { Modal } from "../components/Modal";

type ComponentInfo = {
  name: string;
  description: string;
  route: string;
  code?: string;
  image?: string;
  Component?: React.ComponentType;
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentInfo | null>(null);
  const [codeOpen, setCodeOpen] = useState(false);

  return (
    <Dashboard>
      {/* main content */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            My Components
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mt-4"
          >
            A collection of React + Tailwind components, with style and
            animations.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/components")}
            className="mt-8 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Explore components
          </motion.button>
        </div>

        {/* Components showcase */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {components.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                setModalOpen(true);
                setSelectedComponent(item);
              }}
            >
              <p className="text-white text-xl font-bold mb-2">{item.name}</p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.section>
        {modalOpen && selectedComponent && (
          <Modal
            title={selectedComponent.name}
            description={selectedComponent.description}
            route={selectedComponent.route}
            code={selectedComponent.code}
            onClose={() => setModalOpen(false)}
          >
            <button
              className="bg-white/20 hover:bg-white/30 transition-all p-2 rounded-md h-[10%] mr-4 cursor-pointer"
              onClick={() => {
                setCodeOpen(!codeOpen);
              }}
            >
              {codeOpen ? "Hide image" : "See image"}
            </button>
            {codeOpen && (
              <img src={selectedComponent.image} alt="Component image" />
            )}
          </Modal>
        )}
      </div>

      <Footer />
    </Dashboard>
  );
}
