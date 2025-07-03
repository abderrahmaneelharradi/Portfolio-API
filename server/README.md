# Portfolio API Server

## Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Install additional required packages:
\`\`\`bash
npm install nodemailer
\`\`\`

3. Configure environment variables in `.env` file

4. Start the server:
\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

## API Endpoints

- GET `/api/health` - Health check
- GET `/api/portfolio` - Get portfolio data
- GET `/api/skills` - Get skills data
- GET `/api/projects` - Get projects data
- GET `/api/projects/:id` - Get single project
- POST `/api/contact` - Send contact form
- GET `/api/resume/download` - Download resume

## Environment Variables

- `PORT` - Server port (default: 5000)
- `CLIENT_URL` - Frontend URL for CORS
- `EMAIL_USER` - Email for sending contact forms
- `EMAIL_PASS` - Email password/app password
- `CONTACT_EMAIL` - Email to receive contact forms
