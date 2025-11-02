import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


type ModalProps = {
  title: string;
  description?: string;
  route?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal = ({
  title,
  description,
  route,
  onClose,
  children,
}: ModalProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl w-full text-white relative shadow-2xl"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            onClick={onClose}
          >
            ✕
          </button>


          {/* header */}
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {description && <p className="text-gray-300 mb-6">{description}</p>}

          {/* preview */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
            <h3 className="text-sm uppercase text-gray-400 mb-2">Preview</h3>
            {children ? (
              <div className="flex justify-center flex-col lg:flex-row">{children}</div>
            ) : (
              <p className="text-gray-400 text-sm italic">
                (No preview available)
              </p>
            )}
          </div>

          {/* actions */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => navigator.clipboard.writeText("<Navbar />")}
              className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-all text-sm cursor-pointer"
            >
              Copy code
            </button>
            <button
              onClick={() => navigate(`${route}`)}
              className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition-all text-sm cursor-pointer"
            >
              See in page
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
