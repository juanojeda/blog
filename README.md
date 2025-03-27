# My Next.js Blog

A simple blog built with Next.js that reads markdown files and generates HTML pages.

## Features

- Fetches posts from a folder of markdown files
- Generates HTML pages for each post
- uses css modules for styling
- Supports dynamic routing with Next.js
- build-time rendering of static post pages from markdown files

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v6 or later)
- netlify-cli

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/my-nextjs-blog.git
cd my-nextjs-blog
```

### Running it on dev

There are a couple of ways to run it on dev, but the most reliable to make sure it's deployable is to run

```
netlify dev
```
This runs your project locally in a way that mimics how it will behave when deployed on Netlify. It sets up a local development server, handles serverless functions, and simulates Netlify's environment.