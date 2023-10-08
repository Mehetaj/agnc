import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  brandName: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  website: {
    type: "string",
    required: true,
  },
  logoUrl: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// TODO: first delete the previous blog schema and then create a new one
const Brand = mongoose.models.Brands || mongoose.model("Brand", brandSchema);

export default Brand;
