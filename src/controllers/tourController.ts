import express from "express";
import Tour from '../models/tourModels';

  
 export const getAllTours = async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
  // const features = new APIFeatures(Tour.find(), req.query)
  // .filter()
  // .sort()
  // .limitFields()
  // .paginate();
  try{
const tours = await Tour.find();

res.status(200).json({
  status: 'success',
  results: tours.length,
  data: {
    tours
  }
});
} catch (err) {
res.status(404).json({
  status: 'fail',
  message: err
});
}
  }
  
  export const getTour = async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
    try {
      const tour = await Tour.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          tour
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message
      });
    }
  }
  
  export const createTour = async(req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try {

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
  }

  export const updateTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    // const id = Number(req.params.id)
    // if(id > tours.length){
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "Invalid id"
    //   })
    // }
  
    res.status(200).json({
      status: 'success',
      data: {
        tour: "updated tour"
      }
    })
  }
  
  export const deleteTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    // const id = Number(req.params.id)
    // if(id > tours.length){
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "Invalid id"
    //   })
    // }
  
    res.status(204).json({
      status: 'success',
      data: {
        tour: "null"
      }
    })
  }
  
  