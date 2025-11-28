import border from "/src/assets/day_border.png";

const Day = ({
  classNames,
  i,
  setContent,
  setIsModalOpen,
  calendarDays,
  style,
}: {
  classNames: string;
  i: number;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  calendarDays: { day: number; content: React.ReactNode }[];
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={classNames}
      onClick={() => {
        setContent(calendarDays[i]?.content || null);
        setIsModalOpen(true);
      }}
      style={style}
    >
      <img className="absolute invert" src={border} alt="Day Border" />
      <div className="text-center">
        <div className="text-3xl">{i + 1}</div>
        {/* <div className="text-sm mt-1">🍪</div> */}
      </div>
    </div>
  );
};

export default Day;
