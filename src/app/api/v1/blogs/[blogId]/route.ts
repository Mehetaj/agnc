import Blog from "@/app/back-end/models/blog.model";
import connectDB from "@/app/utils/database/connectDB";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    blogId: string;
  };
}

//===== Delete single post by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { blogId } = params;
    const deletedPost = await Blog.findByIdAndDelete(blogId);
    if (!deletedPost) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single post  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const { updateBlogData } = await req.json();
  const { blogId } = params;

  try {
    // Find the existing post
    const existingPost = await Blog.findById(blogId);
    if (!existingPost) {
      return new Response("blog not found", { status: 404 });
    }
    existingPost.title = updateBlogData.title;
    existingPost.category = updateBlogData.category;
    existingPost.tag = updateBlogData.tag;
    existingPost.status = updateBlogData.status;
    existingPost.image = updateBlogData.image;
    existingPost.author = updateBlogData.author;
    existingPost.content = updateBlogData.content;
    await existingPost.save();
    return NextResponse.json({ message: "Blog Update successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single blog details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { blogId } = params;
    const blogDetails = await Blog.findOne({ _id: blogId });
    if (!blogDetails) {
      return NextResponse.json({ error: "blogDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ blogDetails: blogDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`blogDetails Error: ${error.message}`));
  }
};
