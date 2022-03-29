// This file contains all the routes related to session scheduler

const express = require("express");
const mongoose = require("mongoose");

const scheduleRouter = express.Router();
const schedule = require("../models/Schedule");

// It handles API call to get all the sessions schedules for a course.
scheduleRouter.get("/", (req, res, next) => {
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);
  var start_index = (page - 1) * limit;

  schedule
    .find({course: req.query.course})
    .limit(limit)
    .skip(start_index)
    .then(
      (sessions) => {
        console.log(sessions);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(sessions);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

// This handles API call to schedule a session for a course.
scheduleRouter.post("/add", (req, res, next) => {
  schedule
    .findOne({                                      
      $and: [
        { course: req.body.course },
        { start_time: req.body.start_time },
      ],
    })
    .then(
      (session) => {
        if (session != null) {
          res
            .status(400)
            .send("Session already exist for this course and start time");
        } else {
          schedule
            .create(req.body)
            .then(
              (session) => {
                console.log(session);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(session);
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

// This handles API call to update the details of a session.
scheduleRouter.put("/update", (req, res, next) => {
  schedule
    .findOneAndUpdate(
      {
        $and: [
          { course: req.query.course },
          { start_time: req.query.start_time },
        ],
      },
      { $set: req.body },
      { new: true }
    )
    .then(
      (session) => {
        console.log(session);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(session);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

// This handles API call to delete a session for a course.
scheduleRouter.delete("/delete", (req, res, next) => {
  schedule
    .findOneAndDelete({
      $and: [
        { course: req.query.course },
        { start_time: req.query.start_time },
      ],
    })
    .then(
      (resp) => {
        console.log("Session for", req.query.course, "deleted");
        res.send(`Session for ${req.query.course} deleted`);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = scheduleRouter;
