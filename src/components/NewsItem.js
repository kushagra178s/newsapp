import React from "react";
import {Link } from "react-router-dom";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-2">
      <div className="card">
        {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{" "}{source} </span> */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {!source ? "" : source}
          </span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          height={"215px"}
          alt="...."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,65)}..... </h5>
          <p className="card-text">{description.slice(0,60)}..... </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          {/* <a
            rel="noreferrer"
            // href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a> */}
          <Link to = "/fullnews" state={{props : props}} className="btn btn-sm btn-dark">Read More</Link>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;