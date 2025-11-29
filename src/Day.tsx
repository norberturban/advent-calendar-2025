import { useMemo } from "react";
import border from "/src/assets/day_border.png";

const Day = ({
  calendarDay,
  classNames,
  currentDateTime,
  setContent,
  setIsModalOpen,
  style,
}: {
  calendarDay: {
    day: number;
    content: React.ReactNode;
    senderText: string;
    validFrom: Date;
  };
  classNames: string;
  currentDateTime: Date;
  setContent: React.Dispatch<
    React.SetStateAction<{
      day: number;
      content: React.ReactNode;
      senderText: string;
      validFrom: Date;
    } | null>
  >;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
}) => {
  const isCalendarDayActive = useMemo(
    () => (calendarDay ? calendarDay?.validFrom <= currentDateTime : false),
    [calendarDay, currentDateTime]
  );

  return (
    <div
      className={`${classNames} select-none ${
        isCalendarDayActive
          ? "hover:bg-[#b7552f] cursor-pointer shadow-lg"
          : "bg-[#C6A683] cursor-default"
      }`}
      onClick={() => {
        if (isCalendarDayActive) {
          setContent(calendarDay);
          setIsModalOpen(true);
        }
      }}
      style={style}
    >
      {isCalendarDayActive && (
        <img className="absolute invert" src={border} alt="Day Border" />
      )}
      <div className="text-center">
        <div className="text-3xl">{calendarDay.day}</div>
        {/* <div className="text-sm mt-1">🍪</div> */}
      </div>
    </div>
  );
};

export default Day;
