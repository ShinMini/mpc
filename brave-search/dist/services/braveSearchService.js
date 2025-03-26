"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BraveSearchService {
    constructor() {
        this.apiUrl = process.env.BRAVE_SEARCH_API_ENDPOINT;
        console.log(this.apiUrl);
    }
    async performSearch(query) {
        const response = await fetch(`${this.apiUrl}?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        return await response.json();
    }
    formatSearchResults(results) {
        // Format the results as needed
        return results.map((result) => ({
            title: result.title,
            link: result.link,
            snippet: result.snippet,
        }));
    }
}
exports.default = BraveSearchService;
