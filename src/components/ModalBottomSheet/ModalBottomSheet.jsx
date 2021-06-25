import { useState } from "react";
import "./modal-bottom-sheet.css";

export default function ModalBottomSheet(props) {
  return (
    <div className="modalBottomSheet">
      <div className="modalBottomSheetContent">
        <div className="modalBottomSheetHeader">
          <p className="modalBottomSheetTitle">Choose Server</p>
        </div>
        <div className="modalBottomSheetBody">
          <ul className="modalMenuContainer">
            <li className="modalMenuItem">
              <i className="modalMenuIcon fa fa-wifi"></i>
              Amerika
            </li>
            <li className="modalMenuItem">
              <i className="modalMenuIcon fa fa-wifi"></i>
              England
            </li>
          </ul>
        </div>
        <div className="modalBottomSheetFooter">
          <div className="toolbarModal">
            <button className="toolbarModalItem"></button>
          </div>
          <button className="modalClose" onClick={props.closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
