import express from "express";
// import fs from 'fs';
import Tour from '../models/tourModels';

// const tours = JSON.parse(
//     fs.readFileSync(`./src/dev-data/data/tours-simple.json`, 'utf-8')
//   )

  // export const checkID = (req: express.Request, res: express.Response, next: express.NextFunction, val: any)=>{
  //   const id = Number(req.params.id)
  //   // if(id > tours.length){
  //   //     return res.status(404).json({
  //   //       status: "fail",
  //   //       message: "Invalid id"
  //   //     })
  //   //   }
  //     next()
  // }
  
  // export const checkBody = (req: express.Request, res: express.Response, next: express.NextFunction)=>{
  //     if(!req.body.name || !req.body.price){
  //         return res.status(400).json({
  //             status: 'fail',
  //              message: 'missing name or price'
  //         })
  //     }
  //     next()
  // }
  
 export const getAllTours = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    // res.status(200).json({
    //   status: 'success',
    //   results: tours.length,
    //   data: {
    //     tours
    //   }
    // })
  }
  
  export const getTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const id = Number(req.params.id)
    // if(id > tours.length){
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "Invalid id"
    //   })
    // }
    //  const tour = tours.find((el: { id: number; }) => el.id === id)
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     tour
    //   }
    // })
  }
  
  export const createTour = async(req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try {
    console.log(">>>>>>>>>>>>>>>>>>>>>");
    const newTour = await Tour.create(req.body);
    console.log(newTour);
    
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
  
  