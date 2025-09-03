This is a minimal Express backend used by the portfolio for a contact form.

Setup
1. Copy `.env.example` to `.env` and fill the SMTP settings.
2. From the `server/` folder run `npm install`.
3. Run `npm run dev` for development or `npm start` for production.

API
- GET /api/health - health check
- POST /api/contact - body: { name, email, message }
