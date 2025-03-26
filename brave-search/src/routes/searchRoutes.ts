import type { Express } from 'express';
import { Router } from 'express';
import  SearchController  from '../controllers/searchController';
import BraveSearchService from '../services/braveSearchService';

const router = Router();
const searchController = new SearchController(BraveSearchService);

export function setSearchRoutes(app: Express) {
    app.use('/search', router);
    router.get('/', searchController.handleSearchRequest.bind(searchController));
}