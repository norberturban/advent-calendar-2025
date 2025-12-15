import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import pineTree from "/src/assets/pine_tree_branches.png";

import Modal from "./Modal";
import Day from "./Day";

const AdventCalendar2025 = () => {
  const [content, setContent] = useState<{
    day: number;
    content: React.ReactNode;
    senderText: string;
    validFrom: Date;
  } | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

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

  const bulbPositions = [
    { top: "2%", left: "3%" },
    { top: "16%", left: "20%" },
    { top: "10%", left: "40%" },
    { top: "6%", left: "63%" },
    { top: "16.5%", left: "93%" },
    { top: "24%", left: "10%" },
    { top: "38%", left: "32%" },
    { top: "30%", left: "50%" },
    { top: "23%", left: "73%" },
    { top: "39%", left: "80%" },
    { top: "40%", left: "5%" },
    { top: "48%", left: "17%" },
    { top: "48%", left: "43%" },
    { top: "48%", left: "60%" },
    { top: "60%", left: "85%" },
    { top: "65%", left: "10%" },
    { top: "61%", left: "28%" },
    { top: "66%", left: "54%" },
    { top: "72%", left: "65%" },
    { top: "78%", left: "86%" },
    { top: "83%", left: "16%" },
    { top: "85%", left: "30%" },
    { top: "92%", left: "55%" },
    { top: "85%", left: "75%" },
  ];

  const bulbPositionsMobile = [
    { top: "2%", left: "3%" },
    { top: "16%", left: "24%" },
    { top: "6.5%", left: "36%" },
    { top: "5%", left: "63%" },
    { top: "16.5%", left: "96%" },
    { top: "24%", left: "10%" },
    { top: "38%", left: "32%" },
    { top: "30%", left: "50%" },
    { top: "23%", left: "73%" },
    { top: "39%", left: "80%" },
    { top: "40%", left: "5%" },
    { top: "48%", left: "17%" },
    { top: "48%", left: "43%" },
    { top: "48%", left: "60%" },
    { top: "57%", left: "80%" },
    { top: "65%", left: "10%" },
    { top: "57%", left: "25%" },
    { top: "66%", left: "47%" },
    { top: "72%", left: "65%" },
    { top: "75%", left: "86%" },
    { top: "83%", left: "16%" },
    { top: "85%", left: "30%" },
    { top: "92%", left: "55%" },
    { top: "87%", left: "96%" },
  ];

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
          Megjött a karácsonyi naptár, azaz az adventi kalendár, ahol 24 ablak
          alatt, napról napra egy-egy újabb meglepetés, újabb nyitás vár 🎁
        </>
      ),
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-01T00:00:00"),
    },
    {
      day: 2,
      content: (
        <>
          Hideg estéken a meleg szoba sem tudna meghittséget, melegséget hozni
          számomra, ha a szívemet nem melengetné szerelmünk lángja! 🕯️
        </>
      ),
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-02T00:00:00"),
    },
    {
      day: 3,
      content: (
        <>
          Cicák általános viselkedése: figyelmet igényel, szüksége van rengeteg
          törődésre és simogatásra, mozgásra vágyik, valamint szeret játszani és
          kíváncsi természetű. Nini, ez nem te vagy? 😺
        </>
      ),
      senderText: "❤️ Tőlem, neked ❤️",
      validFrom: new Date("2025-12-03T00:00:00"),
    },
    {
      day: 4,
      content: (
        <>
          <p>
            Újabb nap telik el, múlik el újra, rohan az év előre, szinte itt a
            vége.
          </p>
          <p>
            De minden egyes napot becsülöm, mert itt vagy nekem, velem, életem
            része ❤️
          </p>
        </>
      ),
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-04T00:00:00"),
    },
    {
      day: 5,
      content: (
        <>
          Mámorban, lehetsz a közelemben vagy a távolban. Melegséget viszont
          csak melletted érzek, ha ölelhetlek, csókolhatlak téged ⭐
        </>
      ),
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-05T00:00:00"),
    },
    {
      day: 6,
      content: (
        <>
          <p>
            Mai nap a Mikulás napja, ha jó voltál, akkor finomságokkal tele a
            csizma.
          </p>
          <p>
            Ellenben virgács várhat, reméljük az éven nem éreztél rosszaságra
            sok vágyat! 🎅
          </p>
        </>
      ),
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-06T00:00:00"),
    },
    {
      day: 7,
      content: (
        <>
          Együtt veled, szállni a fellegek felett, fogni a két kezed, csak fogd
          szorosan és el ne engedd, elképesztően SZERETLEK! 😘
        </>
      ),
      senderText: "❤️ Tőlem, neked! ❤️",
      validFrom: new Date("2025-12-07T00:00:00"),
    },
    {
      day: 8,
      content: (
        <>
          <p>Egy érzés, egy szó, egy vágy, mely szárnyra kel bennem,</p>
          <p>Mert benned talált otthonra minden egyes porcikám,</p>
          <p>S ha hozzád bújik szívem, elcsitul bennem a világ 💘</p>
        </>
      ),
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-08T00:00:00"),
    },
    {
      day: 9,
      content: (
        <>
          <p>Az élet hosszúnak tűnik, de a döntések rövidek.</p>
          <p>Egy pillanat alatt sok minden történhet.</p>
          <p>
            Mi jól döntöttünk és számunkra minden nap bővül tovább a történet 💞
          </p>
        </>
      ),
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-09T00:00:00"),
    },
    {
      day: 10,
      content: (
        <>
          <p>
            A főzés nem egyszerű feladat, de egy jó recept mindent megváltoztat.
          </p>
          <p>
            Számunkra van már bevált recept, fűszerezzük tovább a világunkat 🥰
          </p>
        </>
      ),
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-10T00:00:00"),
    },
    {
      day: 11,
      content: (
        <>
          <p>
            Emlékek, amiket együtt élünk át és amik örökre a szívünkben élnek.
          </p>
          <p>
            Emlékek, amik megszépítik a mindennapjainkat és színesebb az élet.
          </p>
          <p>Emlékek, összekötnek minket 💑</p>
        </>
      ),
      senderText: "❤️ Tőlem, neked! ❤️",
      validFrom: new Date("2025-12-11T00:00:00"),
    },
    {
      day: 12,
      content: (
        <>
          <p>Mindkét kezed ökölbe, nagyujjak kinyújtva, összeérintve.</p>
          <p>Mutatóujjak kinyújtva, majd hajlítva, körömnél érintkezve.</p>
          <p>Többi ujjak kinyújtva, ezt küldöm neked, meglepetésbe 🎁</p>
        </>
      ),
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-12T00:00:00"),
    },
    {
      day: 13,
      content: (
        <>
          <p>
            A szerelem kimondva egy szó, átélni viszont felemelően jó, kiváló.
          </p>
          <p>
            Köszönöm, hogy ezt veled tehetem, te vagy a szívem, a lelkem, az
            életem ❤️
          </p>
        </>
      ),
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-13T00:00:00"),
    },
    {
      day: 14,
      content: (
        <>
          <p>
            Virágot a virágnak, tarja a mondás, mert igaz te virágom, mindig
            örülsz egy virágnak.
          </p>
          <p>
            Legyen akár egy szál vagy csokor, mindig megcsillan az öröm,
            látszódik a mosoly 🌺
          </p>
        </>
      ),
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-14T00:00:00"),
    },
    {
      day: 15,
      content: (
        <>
          Bárhol is legyünk, ketten együtt, akár csak ölelkezünk vagy
          szerelmeskedünk, akár az érzelmeinkben elmerülünk vagy a fellegekbe
          elrepülünk! ✈️
        </>
      ),
      senderText: "❤️ Tőlem, neked! ❤️",
      validFrom: new Date("2025-12-15T00:00:00"),
    },
    {
      day: 16,
      content: (
        <>
          Táncoljunk a szív ritmusára, szálljunk levegőbe a boldogságtól,
          aldujunk egymás karjaiban a mámortól, olvadjunk össze a vágytól 😊
        </>
      ),
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-16T00:00:00"),
    },
    {
      day: 17,
      content: (
        <>
          Nevessél nekem minden egyes nap, hogy a boldogságodat ismerjem és a
          szívemben örökkön éljenek eme pillanatok 🥰
        </>
      ),
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-17T00:00:00"),
    },
    {
      day: 18,
      content: (
        <>
          Szívem szíveddel együtt dobban, hol halkan, s hol hangosabban, a
          világon pedig téged és csakis téged SZERETLEK a leges leges legjobban
          😍
        </>
      ),
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-18T00:00:00"),
    },
    {
      day: 19,
      content: (
        <>
          A sors sok mindenki számára ismeretlen, én is csak részben ismerem,
          tudom merre viszi a szívem, merre tereli az életem és ezeket veled
          oszthatom meg édes egyetlenem 💘
        </>
      ),
      senderText: "❤️ Tőlem, neked! ❤️",
      validFrom: new Date("2025-12-19T00:00:00"),
    },
    {
      day: 20,
      content: <div>Content for Day 20</div>,
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-20T00:00:00"),
    },
    {
      day: 21,
      content: <div>Content for Day 21</div>,
      senderText: "Szerelmed ❤️",
      validFrom: new Date("2025-12-21T00:00:00"),
    },
    {
      day: 22,
      content: <div>Content for Day 22</div>,
      senderText: "Kicsimnek ❤️",
      validFrom: new Date("2025-12-22T00:00:00"),
    },
    {
      day: 23,
      content: <div>Content for Day 23</div>,
      senderText: "❤️ Tőlem, neked! ❤️",
      validFrom: new Date("2025-12-23T00:00:00"),
    },
    {
      day: 24,
      content: <div>Content for Day 24</div>,
      senderText: "Életem értelmének ❤️",
      validFrom: new Date("2025-12-24T00:00:00"),
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
              <div className="grid grid-cols-4 gap-4 md:hidden h-full overflow-y-auto py-16 pt-18 overflow-x-hidden">
                {Array.from({ length: 24 }, (_, i) => (
                  <Day
                    key={i}
                    calendarDay={calendarDays[i]}
                    classNames="relative aspect-square bg-[#8e4326] bg-opacity-80 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-transform"
                    currentDateTime={currentDateTime}
                    setContent={setContent}
                    setIsModalOpen={setIsModalOpen}
                    //style={{ zIndex: 1 }}
                  />
                ))}
                {Array.from({ length: 24 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      top: bulbPositionsMobile[i].top,
                      left: bulbPositionsMobile[i].left,
                      background: isDarkMode
                        ? "radial-gradient(circle, #fffff8 0%, #ffb347 55%, #ff8c42 85%)"
                        : "radial-gradient(circle, #ff8c42 85%)",
                      boxShadow: isDarkMode
                        ? "0 0 40px 15px rgba(255, 179, 71, 0.8)"
                        : "none",
                      opacity: isDarkMode ? 1 : 0.7,
                    }}
                  ></div>
                ))}
              </div>

              {/* Desktop: Scattered absolute positioning */}
              <div className="hidden md:block relative w-full h-full">
                {Array.from({ length: 24 }, (_, i) => (
                  <Day
                    key={i}
                    classNames="absolute bg-[#8e4326] bg-opacity-90 rounded-lg flex items-center justify-center text-white font-bold transition-transform"
                    currentDateTime={currentDateTime}
                    setContent={setContent}
                    setIsModalOpen={setIsModalOpen}
                    calendarDay={calendarDays[i]}
                    style={{
                      top: windowPositions[i].top,
                      left: windowPositions[i].left,
                      width: "80px",
                      height: "80px",
                    }}
                  />
                ))}
                {Array.from({ length: 24 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      top: bulbPositions[i].top,
                      left: bulbPositions[i].left,
                      background: isDarkMode
                        ? "radial-gradient(circle, #fffff8 0%, #ffb347 55%, #ff8c42 85%)"
                        : "radial-gradient(circle, #ff8c42 85%)",
                      boxShadow: isDarkMode
                        ? "0 0 40px 15px rgba(255, 179, 71, 0.8)"
                        : "none",
                      opacity: isDarkMode ? 1 : 0.7,
                    }}
                  ></div>
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
