// all code is dummy so you can delete it and start from scratch

import { getAllBrand, postBrand } from "@/app/back-end/controllers/brand.controller";
import { NextRequest, NextResponse } from "next/server";

// get all blogs
export const GET = async (req: NextRequest) => {
  try {
    // get blogs from the server
    const brands = await getAllBrand();
    if (brands.length <= 0) return NextResponse.json({ error: "brand not found" });

    return NextResponse.json({ message: "successfully get all brands", brands }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 404 });
  }
};

// post request for blog post | save a blog in database
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const result = await postBrand(body);
    return NextResponse.json({ message: "success", result });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
