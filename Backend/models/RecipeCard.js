import mongoose from "mongoose";

const recipecardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    imageURL: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const RecipeCard = mongoose.model("RecipeCard", recipecardSchema);

export default RecipeCard;
