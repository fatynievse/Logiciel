/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import logo from "../assets/moritlogo.png";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
// const [showMenu, setShowMenu] = useState(false);

// const toggleMenu = () => {
//   setShowMenu(!showMenu);
// };

// const closeMenu = () => {
// };

const Navbar = () => {
  return (
    <div className=" md:flex items-center justify-between h-16 w-full bg-white p-8 text-neutral-200 z-20">
      <div className="flex-shrink-0">
        <img src={logo} className="w-32 h-10" alt="Logo" />
      </div>
      <div className="flex flex-grow justify-center items-center">
        <Tabs />
      </div>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && selected !== 1 && selected !== 4 && (
          <Content dir={dir} selected={selected} />
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const isSpecialTab = tab === 1 || tab === 4;

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? isSpecialTab
            ? "text-white bg-black"
            : "bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      {!isSpecialTab && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-full rounded-lg border border-neutral-600 bg-gradient-to-b from-blue-900 via-blue-900 to-blue-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const NosSolutions = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">GESTION COMMERCIALE</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">GESTION DE PAIE</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">COMPTABILITÉ GÉNÉRALE</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            More
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">SOLUTION WEB</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-red-100">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400 hover:text-red-100">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300 hover:text-red-100">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};


  const Matériel = () => {
    return (
      <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
        <a
          href="#"
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <FiHome className="mb-2 text-xl text-indigo-300" />
          <span className="text-xs">Startup</span>
        </a>
        <a
          href="#"
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
          <span className="text-xs">Scaleup</span>
        </a>
        <a
          href="#"
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <FiPieChart className="mb-2 text-xl text-indigo-300" />
          <span className="text-xs">Enterprise</span>
        </a>
      </div>
    );
  };

  const Ressources = () => {
    return (
      <div>
        <div className="grid grid-cols-2 gap-2">
          <a href="#">
            <img
              className="mb-2 h-14 w-full rounded object-cover"
              src="/imgs/blog/4.png"
              alt="Placeholder image"
            />
            <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
              quidem eos.
            </p>
          </a>
          <a href="#">
            <img
              className="mb-2 h-14 w-full rounded object-cover"
              src="/imgs/blog/5.png"
              alt="Placeholder image"
            />
            <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
              quidem eos.
            </p>
          </a>
        </div>
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
          <span>View more</span>
          <FiArrowRight />
        </button>
      </div>
    );
  };
  const Accueil = () => {
    return <></>;
  };
  const Infogérance = () => {
    return <></>;
  };
  const TABS = [
    {
      title: "Accueil",
      Component: Accueil,
    },
    {
      title: "Nos Solutions",
      Component: NosSolutions,
    },
    {
      title: "Matériel point de vente",
      Component: Matériel,
    },
    {
      title: "Infogérance",
      Component: Infogérance,
    },
    {
      title: "Ressources",
      Component: Ressources,
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

  export default Navbar;
