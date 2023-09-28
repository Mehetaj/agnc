import connectDB from "@/app/utils/database/connectDB";
import Blog from "../models/blog.model";

// get all block form database
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
    // not use spreed operator here for security reasons
    // like this
    // ...data

    // set every value individually
    title: data.title,
  });
  const blog = await newBlog.save();

  return blog;
};
