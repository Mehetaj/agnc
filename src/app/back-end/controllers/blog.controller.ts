import connectDB from "@/app/utils/database/connectDB";
import Blog from "../models/blog.model";

// get all blogs form database
export const getAllBlogs = async () => {
  await connectDB();

  // find all blogs from database
  const blogs = await Blog.find({});

  return blogs;
};

// post or save a blog into the database
export const postBlog = async (data: any) => {
  // first connect to database
  await connectDB();

  const newBlog = new Blog({
    // set every value individually
    title: data.title,
    category: data.category,
    tag: data.tag,
    status: data.status,
    image: data.image,
    author: data.author,
    content: data.content,
  });
  const blog = await newBlog.save();

  return blog;
};
