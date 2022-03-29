const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleScehma = Schema(
  {
    course: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    agenda: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    start_time: {
      type: Date,
      required: true,
    },

    end_time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleScehma);
