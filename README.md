# My Next.js Blog

This is a simple blog built with Next.js that reads markdown files from a folder and generates HTML pages for each post.

## Project Structure

```
my-nextjs-blog
├── pages
│   ├── index.tsx          # Main entry point displaying a list of blog posts
│   ├── posts
│   │   └── [slug].tsx     # Dynamic route for individual blog posts
├── posts
│   ├── example-post.md    # Sample markdown file for a blog post
├── public
│   └── favicon.ico        # Favicon for the blog
├── styles
│   ├── globals.css        # Global CSS styles
│   └── Home.module.css     # CSS module styles for the Home component
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── next.config.js         # Next.js configuration settings
└── README.md              # Project documentation
```

## Getting Started

To get started with this blog, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-nextjs-blog
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Adding New Posts

To add a new blog post, create a new markdown file in the `posts` directory. The markdown file should include metadata at the top (title, date) followed by the content in markdown format.

## License

This project is licensed under the MIT License.