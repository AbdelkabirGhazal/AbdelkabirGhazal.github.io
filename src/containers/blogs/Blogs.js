import React, { useContext } from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 style={{textAlign: 'center'}} className="blog-header-text">My Startup Projects :</h1>
          <h3
            className={
              isDark ? "subtitle is-size-5-desktop" : "subtitle is-size-5-desktop"
            }
            style={{textAlign: 'center'}}
          >
            I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries. Eventually, I decided that it would be a fun challenge to try designing and building my own.
          </h3>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog) => {
              return (
                <BlogCard
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
