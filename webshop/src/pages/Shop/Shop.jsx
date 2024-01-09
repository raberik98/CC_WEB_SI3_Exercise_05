// import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Shop.css"

export default function Shop() {

  return (
    <>
      <Navbar />
      <div className="itemsGoHere">
        <div className="card" style={{ width: "350px" }}>
          <img src={"/404.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">description</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Rating: </li>
            <li className="list-group-item">Price</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
