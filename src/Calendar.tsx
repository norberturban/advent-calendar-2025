import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import pineTree from "/src/assets/pine_tree_branches.png";

import Modal from "./Modal";
import Day from "./Day";

const AdventCalendar2025 = () => {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Winter stickers for each day
  // const winterStickers = [
  //   "❄️",
  //   "🎁",
  //   "⭐",
  //   "🎄",
  //   "☃️",
  //   "🕯️",
  //   "🔔",
  //   "🦌",
  //   "🎅",
  //   "🤶",
  //   "🧣",
  //   "🎿",
  //   "⛷️",
  //   "🏂",
  //   "🍪",
  //   "🥛",
  //   "🎵",
  //   "🎶",
  //   "✨",
  //   "🌟",
  //   "🎀",
  //   "🧤",
  //   "❄️",
  //   "🎁",
  // ];

  // Scattered positions with better spacing to avoid overlap
  const windowPositions = [
    { top: "8%", left: "5%" },
    { top: "5%", left: "25%" },
    { top: "12%", left: "48%" },
    { top: "8%", left: "70%" },
    { top: "6%", left: "85%" },
    { top: "28%", left: "8%" },
    { top: "25%", left: "32%" },
    { top: "30%", left: "55%" },
    { top: "28%", left: "75%" },
    { top: "32%", left: "88%" },
    { top: "50%", left: "3%" },
    { top: "48%", left: "22%" },
    { top: "52%", left: "43%" },
    { top: "48%", left: "65%" },
    { top: "50%", left: "85%" },
    { top: "70%", left: "10%" },
    { top: "68%", left: "30%" },
    { top: "72%", left: "50%" },
    { top: "70%", left: "70%" },
    { top: "68%", left: "86%" },
    { top: "88%", left: "15%" },
    { top: "85%", left: "38%" },
    { top: "88%", left: "60%" },
    { top: "85%", left: "82%" },
  ];

  const calendarDays = [
    {
      day: 1,
      content: (
        <>
          <p>Az én kis ajándékom neked ebben a különleges időszakban.</p>
          <p>Tudd, hogy különleges vagy számomra.</p>
        </>
      ),
    },
    {
      day: 2,
      content: (
        <>
          <p>Második nap tartalma.</p>
          <p>Boldog ünnepeket!</p>
        </>
      ),
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full cursor-pointer transition-all duration-300 ${
              isDarkMode
                ? "bg-[#e8b02b] text-gray-900 hover:bg-[#ffc53a]"
                : "bg-[#414753] text-white hover:bg-[#575e6f]"
            }`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <div className="w-screen h-screen">
          <img
            className={`w-full h-full object-cover object-center ${
              isDarkMode ? "brightness-65" : ""
            }`}
            src={pineTree}
          />

          {/* <GingerbreadMan /> */}

          <div className="absolute inset-0 p-8">
            {/* <div
              className="w-6 h-6 rounded-full"
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle, #fffff8 0%, #ffb347 55%, #ff8c42 85%)"
                  : "radial-gradient(circle, #ff8c42 85%)",
                boxShadow: isDarkMode
                  ? "0 0 40px 15px rgba(255, 179, 71, 0.8)"
                  : "none",
              }}
            ></div> */}

            {/* Advent Calendar Windows Container */}
            {/* On mobile: grid layout (ordered), On desktop: absolute positioning (scattered) */}
            <div className="absolute inset-0 pl-4 pr-4 md:p-0 ">
              {/* Mobile: Grid layout */}
              <div className="grid grid-cols-4 gap-2 md:hidden h-full overflow-y-auto py-16 overflow-x-hidden">
                {Array.from({ length: 24 }, (_, i) => (
                  <Day
                    key={i}
                    classNames="relative aspect-square bg-[#8e4326] bg-opacity-80 rounded-lg flex items-center justify-center text-white font-bold text-lg hover:bg-[#b7552f] transition-transform cursor-pointer shadow-lg"
                    i={i}
                    setContent={setContent}
                    setIsModalOpen={setIsModalOpen}
                    calendarDays={calendarDays}
                  />
                ))}
              </div>

              {/* Desktop: Scattered absolute positioning */}
              <div className="hidden md:block relative w-full h-full">
                {Array.from({ length: 24 }, (_, i) => (
                  <Day
                    key={i}
                    classNames="absolute bg-[#8e4326] bg-opacity-90 rounded-lg flex items-center justify-center text-white font-bold hover:scale-110 transition-transform cursor-pointer shadow-xl"
                    i={i}
                    setContent={setContent}
                    setIsModalOpen={setIsModalOpen}
                    calendarDays={calendarDays}
                    style={{
                      top: windowPositions[i].top,
                      left: windowPositions[i].left,
                      width: "80px",
                      height: "80px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} content={content} />
      )}
    </>
  );
};

export default AdventCalendar2025;
