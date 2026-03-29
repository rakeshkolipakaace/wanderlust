# Environment Setup Guide

## Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1/wanderlust
REDIS_URL=127.0.0.1:6379
```

### Prerequisites
- MongoDB must be running on `localhost:27017`
- Redis must be running on `localhost:6379`

## Frontend Environment Variables

Create a `.env` file in the `frontend/` directory with the following variables:

```env
VITE_API_PATH=http://localhost:5001
```

## Starting the Application

### Option 1: Start both servers simultaneously
```bash
npm start
```

### Option 2: Start servers individually
```bash
# Backend (in one terminal)
npm run start-backend

# Frontend (in another terminal)
npm run start-frontend
```

## API Endpoints

- **Backend**: `http://localhost:5001`
- **Frontend**: `http://localhost:5173` (may vary)

### Key Endpoints
- `GET /api/posts` - Get all posts
- `GET /api/posts/featured` - Get featured posts
- `GET /api/posts/latest` - Get latest posts
- `POST /api/posts` - Create new post
- `GET /api/posts/:id` - Get post by ID
- `PATCH /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

## Troubleshooting

### Port Conflicts
- If port 5000 is occupied (usually by Docker), the backend uses port 5001
- Frontend will automatically find an available port (usually 5173)

### Environment Variables Not Loading
- Ensure `.env` files are in the correct directories
- Restart the frontend dev server after changing environment variables
- Check that `VITE_API_PATH` is correctly set in frontend `.env`

### Featured Posts Not Showing
- Posts must have `isFeaturedPost: true` to appear in featured section
- Use the checkbox "Is this a featured blog?" when creating posts
- Existing posts can be updated via PATCH request to set `isFeaturedPost: true`
