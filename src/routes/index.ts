import express from 'express';

import {
  getAllTours, 
  createTour,
   getTour,
    updateTour, 
    deleteTour, 
    aliasTopTours,
    getTourStats,
    getMonthlyPlan,


    // checkID,
    // checkBody
  } from "../controllers/tourController";

import app from '../app';
const router = express.Router();

// /* GET home page. */
// router.param('id', checkID)
router
  .route('/top-5-cheap')
  .get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);


router
.route('/')
.get(getAllTours)
.post(createTour)

router
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour)



export default router;
