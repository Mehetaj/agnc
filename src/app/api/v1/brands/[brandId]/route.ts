import Brand from "@/app/back-end/models/brand.model";
import connectDB from "@/app/utils/database/connectDB";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    brandId: string;
  };
}

//===== Delete single post by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { brandId } = params;
    const deletedBrand = await Brand.findByIdAndDelete(brandId);
    if (!deletedBrand) {
      return NextResponse.json({ error: "Brand not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Brand deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single post  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const { updateBrandData } = await req.json();
  const { brandId } = params;

  try {
    // Find the existing post
    const existingBrand = await Brand.findById(brandId);
    if (!existingBrand) {
      return new Response("Brand not found", { status: 404 });
    }
    existingBrand.brandName = updateBrandData.brandName;
    existingBrand.description = updateBrandData.description;
    existingBrand.website = updateBrandData.website;
    existingBrand.logoUrl = updateBrandData.logoUrl;

    await existingBrand.save();
    return NextResponse.json({ message: "Brand Update successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single blog details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { brandId } = params;
    const brandDetails = await Brand.findOne({ _id: brandId });
    if (!brandDetails) {
      return NextResponse.json({ error: "brandDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ blogDetails: brandDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`brandDetails Error: ${error.message}`));
  }
};
