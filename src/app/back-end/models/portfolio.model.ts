import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  category: {
    type: "string",
    required: true,
  },
  user: {
    type: "string",
    required: true,
  },
  img: {
    type: "string",
    required: true,
  },

  title: {
    type: "string",
    required: true,
  },
  company: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  portfolio: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// TODO: first delete the previous blog schema and then create a new one
const Portfolio = mongoose.models.Portfolios || mongoose.model("Portfolios", portfolioSchema);

export default Portfolio;
