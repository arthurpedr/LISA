import { useDarkMode } from "../../Context/ThemeContext";

const Darkmode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-[#5F45FF] dark:bg-transparent border-2 border-[#5F45FF] w-[60px] h-[56px] text-[white] 
        font-[600] text-[25px] px-6 py-3 rounded-md transition-all duration-300 hover:ring-0 cursor-pointer flex justify-center items-center shadow-md hover:shadow-[#5F45FF]/90"
      type="button"
    >
      {darkMode ? "𖤓" : "⏾"}
    </button>
  );
};

export default Darkmode;
