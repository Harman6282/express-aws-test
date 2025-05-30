import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    task: "Read the official Node.js documentation to understand how the event loop works and how asynchronous operations are handled.",
    completed: false,
  },
  {
    id: 2,
    task: "Build a basic Express server that can handle GET and POST requests, and return JSON data to simulate an API.",
    completed: true,
  },
  {
    id: 3,
    task: "Watch a YouTube tutorial on how to structure a Node.js project for scalability and clean code practices.",
    completed: false,
  },
  {
    id: 4,
    task: "Create a detailed to-do list app interface using HTML, CSS, and JavaScript that communicates with your Express backend.",
    completed: false,
  },
  {
    id: 5,
    task: "Learn about middleware in Express and add a custom logging middleware that logs request method and URL.",
    completed: true,
  },
];

app.get("/", (req: Request, res: Response) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
