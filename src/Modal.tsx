import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

import peachCat from "/src/assets/peach_cat_6.jpg";

import classes from "./Modal.module.scss";

const Modal = ({
  content,
  setIsModalOpen,
}: {
  content: React.ReactNode;
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
        <div className={classes.content}>{content}</div>

        <div className={classes["sender-info"]}>
          <div className={classes.vl} />
          <div className={classes["sender-details"]}>
            <div className="flex justify-end">
              <div className="w-24 h-30">
                <img
                  className="w-full h-full rounded-xl object-cover object-center"
                  src={peachCat}
                  alt="Sender Avatar"
                  width={100}
                  height={50}
                />
              </div>
            </div>
            <div
              className={classNames(
                classes["modal-text"],
                "flex",
                "merienda-text"
              )}
            >
              ❤️ Tőlem, neked! ❤️
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
