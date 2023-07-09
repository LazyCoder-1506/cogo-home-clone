import React from 'react'
import { RightArrow } from '../assets/svgs/ProductIcons'
import { blogs } from '../assets/images/BlogData'

const BlogsSection = () => {
  return (
    <div className='md:w-3/4 mx-auto px-4 md:px-2 py-16'>
      <h3 className="font-bold text-3xl text-center mb-6">Blogs</h3>
      <div className="grid md:grid-cols-3 gap-8 md:gap-4">
        {blogs.map((blog) => (
          <div className="rounded-lg shadow-md cursor-pointer">
            <div className="w-full aspect-[1.88] rounded-t-lg">
              <img src={blog.img} alt="" className="object-cover object-center min-w-full min-h-full rounded-t-lg" />
            </div>
            <div className="p-4">
              <h4 className="text-primary text-lg font-bold mb-2">{blog.category}</h4>
              <h4 className="text-xl font-bold mb-2">{blog.title}</h4>
              <p className="line-clamp-3 mb-2">{blog.description}</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <h5 className="text-primary font-bold font-pt me-1">Read More</h5>
                  <RightArrow />
                </div>
                <h5 className="text-[#9A9A9A] font-bold">{blog.date}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-primary text-white font-bold py-2 px-10 rounded">View All</button>
      </div>
    </div>
  )
}

export default BlogsSection