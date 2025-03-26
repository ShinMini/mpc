# MCP Server Project

## Overview

This project is an MCP (Microservice Communication Protocol) server that allows users to perform web searches using the Brave search engine. It is designed to handle incoming search requests and return formatted results.

## Project Structure

``` bash
mpc
├── src
│   ├── server.ts
│   ├── controllers
│   │   └── searchController.ts
│   ├── routes
│   │   └── searchRoutes.ts
│   └── services
│       └── braveSearchService.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository to your local machine:

   ``` bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ``` bash
   cd ~/Workspace/mpc
   ```

3. Install the required dependencies:

   ``` bash
   npm install
   ```

## Usage

To start the server, run the following command:

``` bash
npm start
```

The server will be running on `http://localhost:3000` (or the specified port in your configuration).

## API Endpoints

### Search Endpoint

- **URL**: `/search`
- **Method**: `GET`
- **Query Parameters**:
  - `query`: The search term to be queried.

### Example Request

``` bash
GET /search?query=example
```

### Example Response

```json
{
  "results": [
    {
      "title": "Example Result",
      "link": "http://example.com",
      "snippet": "This is an example snippet."
    }
  ]
}
```

## Brave Search Integration

This project utilizes the Brave search API to fetch search results. The `BraveSearchService` class is responsible for making requests to the Brave API and formatting the results for the client.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.