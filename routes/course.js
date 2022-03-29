// This file handles all the routes realted to course.

const express = require("express");
const mongoose = require("mongoose");

const course = require("../models/Course");
const schedule = require("../models/Schedule");
const courseRouter = express.Router();

// This handles the API call to get all the courses available in the database.
courseRouter.get("/", (req, res, next) => {
  course
    .find({})
    .then(
      (courses) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(courses);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

// This handles the API call to add a new course to the database.
courseRouter.post("/add", (req, res, next) => {
  course
    .findOne({ name: req.body.name })
    .then(
      (foundcourse) => {
        if (foundcourse != null) {
          res.status(400).send("Course already exist");
        } else {
          course
            .create(req.body)
            .then(
              (course) => {
                console.log(course);
                res.setHeader("Content-Type", "application/json");
                res.json(course);
              },
              (err) => next(err)
            )
            .catch((err) => next(err));
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

// This handles the API call to update the details for a course.
courseRouter.put("/update", (req, res, next) => {
  course
    .findOneAndUpdate(
      { name: req.query.course },
      {
        $set: req.body,
      },
      { new: true }
    )
    .then(
      (updatedcourse) => {
        console.log(updatedcourse);
        schedule
          .updateMany(                                   // To update the schedule relation if the any session exist there for the updated course.
            { course: req.query.course },
            {
              $set: { course: updatedcourse.name },
            }
          )
          .then((resp) => {
            console.log(resp)
            console.log("course updated in schedule");
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(updatedcourse);
          });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

// This handles the API cal l to delete a course from database.
courseRouter.delete("/delete", (req, res, next) => {
  course
    .findOneAndDelete({ name: req.query.course })
    .then(
      (resp) => {
        console.log(req.query.course + " course deleted");
        res.send(req.query.course + " course deleted");
        schedule
          .deleteMany(req.query.course)                  // To update the schedule relation if the any session exist there for the deleted course.
          .then(
            (resp) => {
              console.log("course removed from schedule");
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = courseRouter;
