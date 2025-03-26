
class BraveSearchService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = process.env.BRAVE_SEARCH_API_ENDPOINT as string;
    }

    async performSearch(query: string): Promise<any> {
        const response = await fetch(`${this.apiUrl}?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        return await response.json();
    }

    formatSearchResults(results: any): any {
        // Format the results as needed
        return results.map((result: any) => ({
            title: result.title,
            link: result.link,
            snippet: result.snippet,
        }));
    }
}

export default BraveSearchService;