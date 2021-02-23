import express from 'express';
import {
  getAllTours, 
  createTour,
   getTour,
    updateTour, 
    deleteTour, 
    checkID,
    checkBody
  } from "../controllers/tourController";
import app from '../app';
const router = express.Router();

// /* GET home page. */
router.param('id', checkID)

router
.route('/')
.get(getAllTours)
.post( checkBody,createTour)

router
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour)

// router.get('/api/v1/tours',getAllTours );

// router.get('/api/v1/tours/:id', getTour);

// router.post('/api/v1/tours',createTour)

// router.patch('/api/v1/tours/:id', updateTour);

// router.delete('/api/v1/tours/:id', deleteTour);


export default router;
