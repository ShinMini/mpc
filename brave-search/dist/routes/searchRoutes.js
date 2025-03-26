"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchRoutes = setSearchRoutes;
const express_1 = require("express");
const searchController_1 = __importDefault(require("../controllers/searchController"));
const braveSearchService_1 = __importDefault(require("../services/braveSearchService"));
const router = (0, express_1.Router)();
const searchController = new searchController_1.default(braveSearchService_1.default);
function setSearchRoutes(app) {
    app.use('/search', router);
    router.get('/', searchController.handleSearchRequest.bind(searchController));
}
