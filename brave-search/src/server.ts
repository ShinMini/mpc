import express, {json} from 'express';
import { setSearchRoutes } from './routes/searchRoutes';

import {config as dotenvConfig} from 'dotenv';

// Load environment variables from .env file
dotenvConfig();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
setSearchRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Brave Search API Endpoint: ${process.env.BRAVE_SEARCH_API_ENDPOINT}`);
});