import Portfolio from "@/app/back-end/models/portfolio.model";
import connectDB from "@/app/utils/database/connectDB";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    portfolioId: string;
  };
}

//===== Delete single post by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { portfolioId } = params;
    const deletedPortfolio = await Portfolio.findByIdAndDelete(portfolioId);
    if (!deletedPortfolio) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Portfolio deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single post  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const { updatePortfolioData } = await req.json();
  const { portfolioId } = params;

  try {
    // Find the existing post
    const existingPortfolio = await Portfolio.findById(portfolioId);
    if (!existingPortfolio) {
      return new Response("blog not found", { status: 404 });
    }
    existingPortfolio.title = updatePortfolioData.title;
    existingPortfolio.category = updatePortfolioData.category;
    existingPortfolio.img = updatePortfolioData.img;
    existingPortfolio.company = updatePortfolioData.company;
    existingPortfolio.description = updatePortfolioData.description;
    existingPortfolio.portfolio = updatePortfolioData.portfolio;
    existingPortfolio.type = updatePortfolioData.type;
    existingPortfolio.user = updatePortfolioData.user;

    await existingPortfolio.save();
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
    const { portfolioId } = params;
    const blogDetails = await Portfolio.findOne({ _id: portfolioId });
    if (!blogDetails) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
    }
    return NextResponse.json({ blogDetails: blogDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Portfolio Error: ${error.message}`));
  }
};
