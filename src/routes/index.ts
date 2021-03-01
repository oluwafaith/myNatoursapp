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



export default router;
