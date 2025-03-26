class SearchController {
    private braveSearchService: any;

    constructor(braveSearchService: any) {
        this.braveSearchService = braveSearchService;
    }

    public async search(query: string): Promise<any> {
        const results = await this.braveSearchService.performSearch(query);
        return this.braveSearchService.formatSearchResults(results);
    }

    public async handleSearchRequest(req: any, res: any): Promise<void> {
        const query = req.query.q;
        if (!query) {
            res.status(400).send('Query parameter "q" is required.');
            return;
        }

        try {
            const results = await this.search(query);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).send('An error occurred while processing the search request.');
        }
    }
}

export default SearchController;