import connectDB from "@/app/utils/database/connectDB";
import Portfolio from "../models/portfolio.model";

// get all blogs form database
export const getAllPortfolios = async () => {
  await connectDB();

  // find all blogs from database
  const Portfolios = await Portfolio.find({});

  return Portfolios;
};

// post or save a blog into the database
export const postPortfolio = async (data: any) => {
  // first connect to database
  await connectDB();

  const newPortfolio = new Portfolio({
    // set every value individually
    title: data.title,
    category: data.category,
    img: data.img,
    company: data.company,
    description: data.description,
    portfolio: data.portfolio,
    type: data.type,
    user: data.user,
  });
  const portfolio = await newPortfolio.save();

  return portfolio;
};
