import React from "react";
import { useLocation } from "react-router-dom";
export default function FullNews() {
  const location = useLocation();
  console.log(location.state.props);
  const data = location.state.props;
  return (
    <div className="fullnews">
      <div className="image-container">
        <img src={data.imageUrl} alt="image" />
      </div>
      <div className="data">
        <h4>By {!data.author ? "Unknown" : data.author}</h4>
        <h5 className="text-muted">on {new Date(data.date).toGMTString()}</h5>
        <h5>{data.title}</h5>
        <h6>{data.description}</h6>
        <a
            rel="noreferrer"
            href={data.newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
      </div>
    </div>
  );
}
// author
// :
// date
// :
// description
// :

// imageUrl
// :

// newsUrl
// :

// source
// :
// null
// title
// :
