import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  tags: {
    type: ["string"],
    required: true,
  },
  status: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
  content: {
    type: "string",
    required: true,
  },
  publiched: {
    type: Date,
    default: Date.now,
  },
});

// TODO: first delete the previous blog schema and then create a new one
const Blog = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

export default Blog;
