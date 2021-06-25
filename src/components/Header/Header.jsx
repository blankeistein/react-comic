import { useState } from "react";
import ModalBottomSheet from "../ModalBottomSheet/ModalBottomSheet";
import "./header.css";

export default function Header() {
  const [modalServer, setModalServer] = useState(<></>);
  const hideModal = () => {
    setModalServer(<></>);
  };

  return (
    <header>
      <nav className="headerContainer">
        <div className="navWraper">
          <ul className="navContainer">
            <li className="navItem logo">
              <a href="#">
                <img
                  src="https://randomuser.me/api/portraits/women/90.jpg"
                  alt=""
                />
              </a>
            </li>
            <li
              className="navItem choose-server"
              onClick={() =>
                setModalServer(<ModalBottomSheet closeModal={hideModal} />)
              }
            >
              Server 1
              <i className="fa fa-arrow-down"></i>
            </li>
            <li className="navItem darkMode">
              <i className="fa fa-moon"></i>
            </li>
          </ul>
        </div>
      </nav>
      {modalServer}
    </header>
  );
}
