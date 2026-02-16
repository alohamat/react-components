import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  title: string;
  code?: string
  description?: string;
  route?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal = ({
  title,
  description,
  route,
  code,
  onClose,
  children,
}: ModalProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            relative w-full max-w-3xl max-h-[90vh]
            bg-white/10 backdrop-blur-lg
            border border-white/20 rounded-2xl
            shadow-2xl text-white
            flex flex-col overflow-hidden
          "
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              {description && (
                <p className="text-gray-300 mt-1 text-sm">{description}</p>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-sm text-gray-400 mb-3">PREVIEW</h3>

              {children ? (
                <div className="flex justify-center flex-col gap-4">
                  {children}
                </div>
              ) : (
                <p className="text-gray-400 text-sm italic">
                  (No preview available)
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 p-6 border-t border-white/10">
            <button
              onClick={() =>
                window.open(code, "_blank")
              }
              className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-all text-sm cursor-pointer"
            >
              See code
            </button>

            {route && (
              <button
                onClick={() => navigate(route)}
                className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition-all text-sm"
              >
                See in page
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};