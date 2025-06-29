import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    data: "DevOps and Full Stack Development are two key roles in modern software engineering. Full Stack Developers are responsible for building both the frontend and backend of web applications, working with technologies like HTML, CSS, JavaScript, React, Node.js, and databases such as MongoDB or PostgreSQL. On the other hand, DevOps engineers focus on automating deployment, managing cloud infrastructure, and ensuring continuous integration and delivery using tools like Docker, Kubernetes, Jenkins, and Terraform. While Full Stack Development is centered around creating features and functionality, DevOps ensures that those features are deployed quickly, securely, and reliably. Together, these roles help teams deliver high-quality software efficiently and at scale.",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
