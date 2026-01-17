import { IconX } from "@/components/ui/icon/IconX";
import { SectionType } from "@/utility/constants/theme";
import * as React from "react";
import { useEffect, useRef } from "react";

/**
 * Component for displaying a simple dialog with customizable title, content, and state.
 * @param {object} [props]
 * @param {string} [props.title] The title of the Dialog
 * @param {JSX.Element} [props.children] The contents of the dialog
 * @param {boolean} [props.openState] The state of the Dialog
 * @param {()=>null} [props.handleClose] The that sets openState to false
 * @param {SectionType} [props.sectionType]
 * @returns {JSX.Element}
 * @constructor
 */
export default function SimpleDialog({
  title = "",
  children = <></>,
  openState = false,
  handleClose = () => {},
  sectionType = SectionType.light,
  ...props
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openState) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [openState]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      onClose={handleClose}
      onClick={handleBackdropClick}
      aria-labelledby="dialog-title"
      {...props}
    >
      <div className="dialog-header">
        <h2 id="dialog-title" className="dialog-title">
          <span className="sub-heading-main">{title}</span>
        </h2>
        <button
          className="dialog-close-btn"
          aria-label="close"
          onClick={handleClose}
          type="button"
        >
          <IconX width="24px" height="24px" />
        </button>
      </div>
      <div className="dialog-content">{children}</div>
    </dialog>
  );
}
