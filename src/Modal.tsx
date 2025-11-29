import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

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
                  className="w-full h-full rounded-xl object-cover object-center"
                  src={`/src/assets/peach_cat_${content?.day}.jpg`}
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
        {/* <span className={classes.close} onClick={() => setIsModalOpen(false)}>
          &times;
        </span>
        <p className="merienda-text">Some text in the Modal..</p> */}
      </div>
    </div>
  );
};

export default Modal;
