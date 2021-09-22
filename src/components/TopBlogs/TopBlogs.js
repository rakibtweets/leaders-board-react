import React from 'react';
import Blogs from '../Blogs/Blogs';
import './TopBlogs.css';

const TopBlogs = () => {
  return (
    <div className="top__blogs mt-5">
      <h2 className="heading fw-bold">Top Blogs</h2>
      <div className="diplay__blogs">
        <Blogs
          src="/images/image-2.png"
          heading="13 of My Favorite UI/UX Goodies"
          author="Danny Sapio"
        />
        <Blogs
          src="/images/image-3.png"
          heading="UI cheat sheet: 
        list vs grids"
          author="Tess Gadd"
        />
        <Blogs
          src="/images/image-5.png"
          heading="7 typography tips 
        for interface design"
          author="Jeremiah Lam"
        />
        <Blogs
          src="/images/image-3.png"
          heading="Your logo is 
        copied"
          author="Ferdinand Vogle"
        />
      </div>
    </div>
  );
};

export default TopBlogs;
