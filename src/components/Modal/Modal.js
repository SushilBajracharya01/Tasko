import React, { Fragment } from "react";
import { StyledModal } from "./styles/StyledModal";
import { IoClose } from "react-icons/io5";

function Modal({ show, title, handleClose, children, className = "" }) {
  return (
    <Fragment>
      {show && (
        <StyledModal>
          <div className="modal">
            <div className="header">
              <div className="modal-heading Fredoka">{title}</div>
              <button onClick={handleClose}>
                Close <IoClose />
              </button>
            </div>
            <hr className="header-hr" />
            <div className={`${className} main`}>{children}</div>
          </div>
        </StyledModal>
      )}
    </Fragment>
  );
}

export default Modal;
