import './navbar.css';

export default function NavBar() {
  return (
    <div className="navigationBar">
      <div className="navigationBarContainer">
        <button className="navigationBarItem menuButton">Menu</button>
        <button className="navigationBarItem searchButton">
          <i className="fa fa-search"></i>
        </button>
        <button className="navigationBarItem">
          <i className="fa fa-arrow-up upButton"></i>
        </button>
      </div>
    </div>
  );
}
