"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTour = exports.updateTour = exports.createTour = exports.getTour = exports.getAllTours = exports.checkBody = exports.checkID = void 0;
var fs_1 = __importDefault(require("fs"));
var tours = JSON.parse(fs_1.default.readFileSync("./src/dev-data/data/tours-simple.json", 'utf-8'));
exports.checkID = function (req, res, next, val) {
    var id = Number(req.params.id);
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        });
    }
    next();
};
exports.checkBody = function (req, res, next) {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'missing name or price'
        });
    }
    next();
};
exports.getAllTours = function (req, res, next) {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    });
};
exports.getTour = function (req, res, next) {
    var id = Number(req.params.id);
    // if(id > tours.length){
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "Invalid id"
    //   })
    // }
    var tour = tours.find(function (el) { return el.id === id; });
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    });
};
exports.createTour = function (req, res, next) {
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
exports.updateTour = function (req, res, next) {
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
    });
};
exports.deleteTour = function (req, res, next) {
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
    });
};
