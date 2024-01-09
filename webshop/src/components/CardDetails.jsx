import React from "react";

export default function CardDetails({ title, description, rating, price, src }) {
    // const title = props.title;
    // const description = props.description;
    // const rating = props.rating;
    // const price = props.price;
    // const src = props.src;
    
  return (
    <>
      <div className="card" style={{ width: "350px" }}>
        <img src={src != "" ? src : "/404.png"} alt={"/404.png"} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rating: {rating}</li>
          <li className="list-group-item">Price: {price}</li>
        </ul>
        <div className="card-body">
          <a href={src} target="blank" className="card-link">
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}
