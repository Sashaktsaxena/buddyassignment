# Buddy Assignment

A Next.js project deployed at [buddyassignment.vercel.app](https://buddyassignment.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a [Next.js](https://nextjs.org/) project that provides assignment management functionality. The application is deployed and accessible at [buddyassignment.vercel.app](https://buddyassignment.vercel.app/).

## Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable component library
- **State Management**: React's Context API and hooks
- **Deployment**: [Vercel](https://vercel.com/) - Platform for frontend frameworks
- **Package Manager**: npm/yarn
- **Version Control**: Git
- **API Handling**: Next.js API routes
- **Forms**: React Hook Form
- **Authentication**: (Include if used, e.g., NextAuth.js, Auth0, etc.)
- **Data Fetching**: Next.js built-in data fetching methods (getStaticProps, getServerSideProps)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/buddyassignment.git
   cd buddyassignment
   ```

2. Install dependencies:
   ```bash
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
# Using npm
npm run dev

# OR using Yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
# Using npm
npm run build

# OR using Yarn
yarn build
```

To start the production server:

```bash
# Using npm
npm start

# OR using Yarn
yarn start
```

## Deployment

The project is automatically deployed to Vercel whenever changes are pushed to the main branch. You can access the deployed application at [buddyassignment.vercel.app](https://buddyassignment.vercel.app/).

To set up your own deployment:

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com/)
3. Vercel will automatically detect it as a Next.js project and set up the appropriate build settings

## Project Structure

```
buddyassignment/
├── components/       # Reusable UI components
├── pages/            # Application pages and API routes
│   ├── api/          # API endpoints
│   ├── _app.tsx      # Custom App component
│   └── index.tsx     # Home page
├── public/           # Static assets
├── styles/           # Global styles
├── lib/              # Utility functions and shared logic
├── types/            # TypeScript type definitions
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
