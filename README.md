# News App React

A modern React application for displaying news articles using the NewsAPI. Built with Vite and styled with Tailwind CSS.

## Features

- Display top news articles
- Responsive design
- Pagination support
- Mobile-friendly interface
- Real-time news updates

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v14 or higher)
- A NewsAPI key (get one at [NewsAPI.org](https://newsapi.org))

## Environment Setup

1. Create a `.env` file in the root directory
2. Add the following environment variables:
```env
VITE_NEWS_APIKEY=your_api_key_here
VITE_COUNTRY_CODE=us
VITE_TITLE=NewsApp
VITE_DEBUG=false
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot-reload enabled.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes.\
Any lint errors will appear in the console.

### `npm run build`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.\
The build is optimized for the best performance: all files are minified and bundled.

## Development

This project uses:
- [Vite](https://vitejs.dev/) for blazing fast development and build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [NewsAPI](https://newsapi.org/) for fetching news data

## Environment Variables

The following environment variables are required:

| Variable | Description |
|----------|------------|
| `VITE_NEWS_APIKEY` | Your NewsAPI key |
| `VITE_COUNTRY_CODE` | Country code for news (e.g., 'us', 'gb', 'in') |
| `VITE_TITLE` | App title |
| `VITE_DEBUG` | Debug mode ('true' or 'false') |

⚠️ **Important**: Never commit the `.env` file to version control. The API key should be stored as a GitHub secret.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
