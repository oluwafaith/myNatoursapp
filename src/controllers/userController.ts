import express from 'express';

    export const getAllUsers = (req: express.Request, res:express.Response, next: express.NextFunction)=>{
  
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined'
    })
    }
    
    export const getUser = (req: express.Request, res:express.Response, next: express.NextFunction)=>{
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined'
    })
    }
    
    export const createUser = (req: express.Request, res:express.Response, next: express.NextFunction)=>{
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined'
    })
    }
    
    export const updateUser = (req: express.Request, res:express.Response, next: express.NextFunction)=>{
    res.status(500).json({
      status: 'error',
      message: 'this route is not yet defined'
    })
    }
    
    export const deleteUser = (req: express.Request, res:express.Response, next: express.NextFunction)=>{
      res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'
      })
      }
  