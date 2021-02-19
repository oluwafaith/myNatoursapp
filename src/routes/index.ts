import express from 'express';
import fs from 'fs';
const router = express.Router();

// /* GET home page. */

const tours = JSON.parse(
  fs.readFileSync(`./src/dev-data/data/tours-simple.json`, 'utf-8')
)

const getAllTours = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  })
}

const getTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  const id = Number(req.params.id)
  if(id > tours.length){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }
  const tour = tours.find((el: { id: number; }) => el.id === id)
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
}

const createTour = (req: express.Request, res: express.Response, next: express.NextFunction) =>{
  const newId = tours[tours.length -1].id + 1;
  const newTour =  Object.assign({ id: newId}, req.body)

  tours.push(newTour)

  fs.writeFile(`./src/dev-data/data/tours-simple.json`, JSON.stringify(tours),
  err => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour
      }
    })
  })
}
const updateTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  const id = Number(req.params.id)
  if(id > tours.length){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: "updated tour"
    }
  })
}

const deleteTour = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  const id = Number(req.params.id)
  if(id > tours.length){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }

  res.status(204).json({
    status: 'success',
    data: {
      tour: "null"
    }
  })
}
router.route('/api/v1/tours')
.get(getAllTours)
.post(createTour)

router.route('/api/v1/tours/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour)

// router.get('/api/v1/tours',getAllTours );

// router.get('/api/v1/tours/:id', getTour);

// router.post('/api/v1/tours',createTour)

// router.patch('/api/v1/tours/:id', updateTour);

// router.delete('/api/v1/tours/:id', deleteTour);


export default router;
