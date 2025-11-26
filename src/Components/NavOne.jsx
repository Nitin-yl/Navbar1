import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLayers, FiCode } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { Home, Briefcase, FlaskConical, BookOpen } from "lucide-react";

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
  const links = ["Work", "About", "Playground", "Resource"];
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-9998
                    px-5 sm:px-7 py-3 w-[92%] sm:w-[84%] lg:w-[75%] max-w-5xl
                    rounded-2xl flex items-center justify-between border 
                    transition-all duration-300 backdrop-blur-2xl shadow-xl
                    ${
                      scrolled
                        ? "bg-black/60 border-white/20"
                        : "bg-black/30 border-white/10"
                    }`}
      >
        <div className="flex lg:hidden w-full items-center justify-between">
          <ProjectUILogo mobile />

          <a
            href="#"
            className="bg-white text-black px-4 py-1.5 rounded-full 
                       text-sm font-semibold shadow-md"
          >
            Get Started
          </a>
        </div>

        <div className="hidden lg:flex">
          <ProjectUILogo />
        </div>

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
                <span
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 
                                 group-hover:w-full transition-all duration-300"
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          href="#"
          className="hidden lg:block bg-white text-black px-5 py-1.5 
                     rounded-full text-sm font-semibold shadow-md"
        >
          Login
        </motion.a>

        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 
                     w-[55%] sm:w-[60%] h-1.5 rounded-full 
                     bg-linear-to-r from-cyan-300/40 via-white/40 to-cyan-300/40 blur-md"
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.nav>

      <div
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
                   w-[92%] px-4 py-3 rounded-2xl
                   bg-black/30 backdrop-blur-2xl 
                   border border-white/10
                   shadow-[0_8px_40px_rgba(0,0,0,0.55)]
                   flex items-center justify-between 
                   z-9999 pointer-events-auto"
      >
        {[
          { name: "Home", icon: <Home size={18} /> },
          { name: "Work", icon: <Briefcase size={18} /> },
          { name: "Playground", icon: <FlaskConical size={18} /> },
          { name: "Resource", icon: <BookOpen size={18} /> },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="flex flex-col items-center gap-1 relative"
          >
            <span
              className={`transition ${
                active === item.name
                  ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
                  : "text-gray-300"
              }`}
            >
              {item.icon}
            </span>

            <span
              className={`text-[11px] font-medium transition ${
                active === item.name ? "text-cyan-300" : "text-gray-300"
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
