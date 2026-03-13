# Personal Blog

A simple, hand-drawn styled personal blogging platform built with Node.js and Express.

## Features

- Create, read, update, and delete blog articles
- Admin authentication with basic auth
- Two user roles: Admin (can manage articles) and Viewer (read-only)
- Doodle-style UI with hand-drawn aesthetics
- Responsive design
- File-based storage (JSON)

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: EJS templating, CSS
- Storage: JSON files
- Styling: DoodleCSS

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The application will run on `http://localhost:3000`

## Project Structure

```
src/
├── routes/          # Route handlers
├── services/        # Business logic
├── middlewares/     # Auth, logging, error handling
├── utils/           # Helper functions
├── views/           # EJS templates
│   ├── pages/      # Page templates
│   └── partials/   # Reusable components
├── data/           # JSON file storage
├── public/         # Static assets (CSS, images)
└── app.js          # Express app setup
```

## Usage

### For Viewers
- Visit `http://localhost:3000/home` to view all articles
- Click on an article title to read the full content

### For Admins
- Default credentials: `admin` / `admin`
- Access `/` to see the admin dashboard
- Click Add to create a new article
- Click Edit to modify an article
- Click Delete to remove an article

## Default Admin Credentials

- Username: admin
- Password: admin

Note: Change these credentials before deploying to production!

## Project Roadmap

For detailed project requirements and roadmap, visit:
https://roadmap.sh/projects/personal-blog

## License

MIT