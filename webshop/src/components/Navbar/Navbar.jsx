import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContext } from "../../contects/ToastContext";
import "./Navbar.css"

export default function Navbar({ filterValue, setFilterValue, setIsAsc }) {

    const { addToast } = useContext(ToastContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary costumeNav">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filterValue}
              onChange={(e) => { setFilterValue(e.target.value) }}
            />
            <button onClick={() => setIsAsc((prevState) => !prevState)} className="btn btn-outline-success">
              Change sort order!
            </button>
            <button className="btn btn-outline-info" onClick={addToast}>
              Add toast
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
