import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
});

// TODO: first delete the previous blog schema and then create a new one
const Blog = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

export default Blog;
