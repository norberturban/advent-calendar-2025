import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

import peachCat1 from "/src/assets/peach_cat_1.jpg";
import peachCat2 from "/src/assets/peach_cat_2.jpg";
import peachCat3 from "/src/assets/peach_cat_3.jpg";
import peachCat4 from "/src/assets/peach_cat_4.jpg";
import peachCat5 from "/src/assets/peach_cat_5.jpg";
import peachCat6 from "/src/assets/peach_cat_6.jpg";
import peachCat7 from "/src/assets/peach_cat_7.jpg";
import peachCat8 from "/src/assets/peach_cat_8.jpg";
import peachCat9 from "/src/assets/peach_cat_9.jpg";
import peachCat10 from "/src/assets/peach_cat_10.jpg";
import peachCat11 from "/src/assets/peach_cat_11.jpg";
import peachCat12 from "/src/assets/peach_cat_12.jpg";
import peachCat13 from "/src/assets/peach_cat_13.jpg";
import peachCat14 from "/src/assets/peach_cat_14.jpg";
import peachCat15 from "/src/assets/peach_cat_15.jpg";
import peachCat16 from "/src/assets/peach_cat_16.jpg";
import peachCat17 from "/src/assets/peach_cat_17.jpg";
import peachCat18 from "/src/assets/peach_cat_18.jpg";
import peachCat19 from "/src/assets/peach_cat_19.jpg";
import peachCat20 from "/src/assets/peach_cat_20.jpg";
import peachCat21 from "/src/assets/peach_cat_21.jpg";
import peachCat22 from "/src/assets/peach_cat_22.jpg";
import peachCat23 from "/src/assets/peach_cat_23.jpg";
import peachCat24 from "/src/assets/peach_cat_24.jpg";
import stamp from "/src/assets/stamp.png";

import classes from "./Modal.module.scss";

const Modal = ({
  content,
  setIsModalOpen,
}: {
  content: {
    day: number;
    content: React.ReactNode;
    senderText: string;
    validFrom: Date;
  } | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as HTMLElement)
      ) {
        setIsModalOpen(false);
      }
    },
    [setIsModalOpen]
  );

  // Close modal on outside click
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    //Removing Event Listeners to Prevent Memory Leaks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const peachCatImages = [
    peachCat1,
    peachCat2,
    peachCat3,
    peachCat4,
    peachCat5,
    peachCat6,
    peachCat7,
    peachCat8,
    peachCat9,
    peachCat10,
    peachCat11,
    peachCat12,
    peachCat13,
    peachCat14,
    peachCat15,
    peachCat16,
    peachCat17,
    peachCat18,
    peachCat19,
    peachCat20,
    peachCat21,
    peachCat22,
    peachCat23,
    peachCat24,
  ];

  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]} ref={modalRef}>
        <div className={classNames(classes.content, "twinkle-star-regular")}>
          {content?.content}
        </div>

        <div className={classes["sender-info"]}>
          <div className={classes.vl} />
          <div className={classes["sender-details"]}>
            <div className="relative flex justify-end">
              <div className="w-24 h-30">
                <img
                  className="w-full h-full rounded-xl object-cover object-center border-2 border-[#5cb75c]"
                  src={peachCatImages[content?.day ? content.day - 1 : 0]}
                  alt="Sender Avatar"
                  width={100}
                  height={50}
                />
              </div>
              <img
                className="absolute w-25 h-25 rounded-xl object-cover object-center top-3 right-27 rotate-25 opacity-50"
                src={stamp}
                alt="Stamp"
              />
            </div>
            <div
              className={classNames(
                classes["modal-text"],
                "flex",
                "merienda-text",
                "twinkle-star-regular"
              )}
            >
              {content?.senderText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
