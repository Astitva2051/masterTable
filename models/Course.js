const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    coaches: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
