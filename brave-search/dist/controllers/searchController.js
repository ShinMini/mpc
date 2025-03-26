"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchController {
    constructor(braveSearchService) {
        this.braveSearchService = braveSearchService;
    }
    async search(query) {
        const results = await this.braveSearchService.performSearch(query);
        return this.braveSearchService.formatSearchResults(results);
    }
    async handleSearchRequest(req, res) {
        const query = req.query.q;
        if (!query) {
            res.status(400).send('Query parameter "q" is required.');
            return;
        }
        try {
            const results = await this.search(query);
            res.status(200).json(results);
        }
        catch (error) {
            res.status(500).send('An error occurred while processing the search request.');
        }
    }
}
exports.default = SearchController;
