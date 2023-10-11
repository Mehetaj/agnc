// all code is dummy so you can delete it and start from scratch
import { getAllBlogs, postBlog } from "@/app/back-end/controllers/blog.controller";
import { NextRequest, NextResponse } from "next/server";

// get all blogs
export const GET = async (req: NextRequest) => {
  try {
    // get blogs from the server
    const blogs = await getAllBlogs();
    if (blogs.length <= 0) return NextResponse.json({ error: "blog not found" });

    return NextResponse.json({ message: "successfully get all blogs", blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error }, { status: 404 });
  }
};

// post request for blog post | save a blog in database
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const result = await postBlog(body);
    return NextResponse.json({ message: "success", result });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
