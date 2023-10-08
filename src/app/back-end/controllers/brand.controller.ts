import connectDB from "@/app/utils/database/connectDB";
import Brand from "../models/brand.model";

// get all blogs form database
export const getAllBrand = async () => {
  await connectDB();
  const brands = await Brand.find({});
  return brands;
};

// post or save a blog into the database
export const postBrand = async (data: any) => {
  await connectDB();

  const newBrand = new Brand({
    // set every value individually
    brandName: data.brandName,
    description: data.description,
    website: data.website,
    logoUrl: data.logoUrl,
  });
  const brand = await newBrand.save();

  return brand;
};
