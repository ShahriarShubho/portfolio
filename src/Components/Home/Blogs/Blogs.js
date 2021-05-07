import React from "react";
import JavaScript from '../../../images/What-is-JavaScript-1.png'
import Error from '../../../images/error handle javascript.png'
import ReactBlog from '../../../images/react.jpg'
import BlogsCard from "./BlogsCard/BlogsCard";

const Blogs = () => {
  const blogsInfo = [
    {title: 'What is JavaScript',
     description: 'A complete solution of JavaScript over view continue to read....',
     img : JavaScript,
     link : 'https://shahriar-shubho.medium.com/javascript-overview-2f3ac6ccdd58'

    },
    {title: 'JavaScript Error Handling',
     description: 'A complete solution of JavaScript over view continue to read....',
     img : Error,
     link : 'https://shahriar-shubho.medium.com/javascript-error-handling-80c60cef790f'
    },
    {title: 'React Overview',
     description: 'A complete solution of JavaScript over view continue to read....',
     img : ReactBlog,
     link: 'https://shahriar-shubho.medium.com/react-overview-30f12d58f9cc'
    },
  ];
  return (
    <div>
      <h1 className="text-center py-5">My Blogs</h1>
      <div className="container">
      <div className="row">
        {blogsInfo.map(blogs => <BlogsCard blog={blogs}></BlogsCard>)}
      </div>
      </div>
    </div>
  );
};

export default Blogs;
