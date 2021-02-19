"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var router = express_1.default.Router();
// /* GET home page. */
var tours = JSON.parse(fs_1.default.readFileSync("./src/dev-data/data/tours-simple.json", 'utf-8'));
var getAllTours = function (req, res, next) {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    });
};
var getTour = function (req, res, next) {
    var id = Number(req.params.id);
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        });
    }
    var tour = tours.find(function (el) { return el.id === id; });
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    });
};
var createTour = function (req, res, next) {
    var newId = tours[tours.length - 1].id + 1;
    var newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs_1.default.writeFile("./src/dev-data/data/tours-simple.json", JSON.stringify(tours), function (err) {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        });
    });
};
var updateTour = function (req, res, next) {
    var id = Number(req.params.id);
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: "updated tour"
        }
    });
};
var deleteTour = function (req, res, next) {
    var id = Number(req.params.id);
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        });
    }
    res.status(204).json({
        status: 'success',
        data: {
            tour: "null"
        }
    });
};
router.route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);
router.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);
// router.get('/api/v1/tours',getAllTours );
// router.get('/api/v1/tours/:id', getTour);
// router.post('/api/v1/tours',createTour)
// router.patch('/api/v1/tours/:id', updateTour);
// router.delete('/api/v1/tours/:id', deleteTour);
exports.default = router;
