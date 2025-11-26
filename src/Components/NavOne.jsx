import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiLayers, FiCode } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const ProjectUILogo = ({ mobile = false, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center cursor-pointer select-none"
  >
    {!mobile ? (
      <>
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 8, scale: 1.12 }}
          transition={{ type: "spring", stiffness: 280 }}
          className="relative w-11 h-11 flex items-center justify-center
                     rounded-xl shadow-lg
                     bg-linear-to-br from-cyan-300 via-blue-400 to-cyan-500"
        >
          <FiLayers
            size={20}
            className="absolute text-white opacity-100 -translate-y-0.5"
          />
          <FiCode
            size={16}
            className="absolute text-white opacity-90 translate-y-1"
          />
          <HiOutlineSparkles
            size={12}
            className="absolute text-white opacity-95 top-1.5 right-1.5"
          />
        </motion.div>

        <div className="flex flex-col leading-tight ml-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-extrabold text-xl tracking-tight text-white"
          >
            ProjectUI
          </motion.span>

          <span className="text-sm font-medium text-gray-300">
            Pre-Built Power • Personalized Progress
          </span>
        </div>
      </>
    ) : (
      <span className="font-extrabold text-2xl tracking-tight text-white">
        ProjectUI
      </span>
    )}
  </div>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Work", "About", "Playground", "Resource"];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 flex items-center justify-between
                 bg-black/30 backdrop-blur-2xl
                 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.45)]
                 px-5 sm:px-7 py-3
                 w-[92%] sm:w-[84%] lg:w-[75%] max-w-5xl
                 rounded-2xl"
    >
      <ProjectUILogo />

      <ul className="hidden lg:flex gap-8 text-sm font-medium">
        {links.map((link, i) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 * i }}
          >
            <a
              href="#"
              className="relative group text-gray-200 hover:text-white transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 group-hover:w-full transition-all duration-300" />
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.a
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        href="#"
        className="hidden lg:block bg-white text-black px-5 py-1.5 rounded-full text-sm font-semibold shadow-md"
      >
        Login
      </motion.a>

      <button
        className="lg:hidden text-3xl text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full mt-4 w-full
                       bg-black/30 backdrop-blur-2xl
                       border border-white/10
                       rounded-3xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.45)]
                       lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="flex flex-col gap-5 text-lg font-medium"
            >
              {links.map((link) => (
                <motion.li
                  key={link}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block text-gray-200 hover:text-white transition"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-white text-black py-2 rounded-full font-semibold mt-2 shadow-md hover:bg-gray-100"
                >
                  Login
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 
                   w-[55%] sm:w-[60%] h-1.5 rounded-full 
                   bg-linear-to-r from-cyan-300/40 via-white/40 to-cyan-300/40 blur-md"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.nav>
  );
}
