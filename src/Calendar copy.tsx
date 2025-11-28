import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const AdventCalendar2025 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Winter stickers for each day
  const winterStickers = [
    "❄️",
    "🎁",
    "⭐",
    "🎄",
    "☃️",
    "🕯️",
    "🔔",
    "🦌",
    "🎅",
    "🤶",
    "🧣",
    "🎿",
    "⛷️",
    "🏂",
    "🍪",
    "🥛",
    "🎵",
    "🎶",
    "✨",
    "🌟",
    "🎀",
    "🧤",
    "❄️",
    "🎁",
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900"
          : "bg-gradient-to-b from-blue-100 via-blue-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div>
          {/* Title */}
          <h1
            className={`merienda-text text-5xl md:text-6xl font-bold text-center mb-8 transition-all duration-500 ${
              isDarkMode
                ? "text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.8)]"
                : "text-red-600"
            }`}
          >
            Advent Calendar 2025
          </h1>

          {/* Theme Toggle */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-[#414753] text-white cursor-pointer hover:bg-[#414753cc]"
              }`}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        {/* Calendar Container with Light Bulbs */}
        <div className="relative">
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 p-8 transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-br from-red-900/40 to-green-900/40 backdrop-blur-sm border-2 border-yellow-400/30"
                : "bg-white shadow-2xl border-4 border-red-300"
            }`}
          >
            Test
          </div>
          {/* Calendar Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 p-8 transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-br from-red-900/40 to-green-900/40 backdrop-blur-sm border-2 border-yellow-400/30"
                : "bg-white shadow-2xl border-4 border-red-300"
            }`}
          >
            {[...Array(24)].map((_, index) => {
              const day = index + 1;

              return (
                <div
                  key={day}
                  className={`flex flex-col items-center justify-center gap-2 h-30 cursor-pointer transform transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-red-800 to-green-800 hover:from-red-700 hover:to-green-700 border-2 border-yellow-400/50 shadow-lg"
                      : "bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 border-2 border-red-600 shadow-lg"
                  }`}
                >
                  <span className="text-3xl md:text-4xl">
                    {winterStickers[index]}
                  </span>
                  <span
                    className={`text-xl md:text-2xl font-bold transition-colors ${
                      isDarkMode ? "text-yellow-300" : "text-white"
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventCalendar2025;
