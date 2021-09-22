import React from 'react';
import './Blogs.css';

const Blogs = (props) => {
  return (
    <div className="blog__container d-flex align-items-center gap-3 mt-5">
      <div>
        <img src={props.src} alt="" className="blog__img" />
      </div>
      <div className="blog__info p-2">
        <h5 className="blog__heading fw-bold">{props.heading}</h5>
        <p>
          <small className="text-secondary fw-bold">By</small>
          <a className="text-decoration-none fw-bold ps-2 author" href="#0">
            {props.author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
