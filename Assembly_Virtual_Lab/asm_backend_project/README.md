# ASM Virtual Lab — Backend Version

This zip has your frontend plus a Node.js backend.

## How to run

1. Extract the zip.
2. Open terminal in this folder.
3. Run:

```bash
npm start
```

4. Open this link in browser:

```text
http://localhost:3000
```

Do not double-click `public/index.html`, because login/register/progress need the backend server.

## Backend features added

- Student registration
- Student login
- Password hashing using Node.js crypto PBKDF2
- Session token login
- Progress tracking saved per student
- Quiz progress saved per student
- Data stored in `data/db.json`

## Project structure

```text
server.js          Backend server and API routes
package.json       Start script
public/index.html  Your frontend connected to backend
data/db.json       JSON database file
```

## API routes

- `POST /api/register`
- `POST /api/login`
- `GET /api/me`
- `POST /api/progress`
- `POST /api/logout`
