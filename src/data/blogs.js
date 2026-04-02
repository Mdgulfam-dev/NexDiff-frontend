const blogs = [
  {
    id: 1,
    title:
      "Complete Guide to Building Scalable MERN Stack Applications in 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "Learn how to build scalable, high-performance MERN stack apps with modern architecture.",
    content: `

# Introduction

The MERN stack (MongoDB, Express, React, Node.js) is one of the most powerful full-stack technologies in modern web development. However, building a scalable MERN application requires more than just basic CRUD operations.

# 1. Project Architecture

A scalable app should follow a modular structure:

* Separate frontend and backend
* Use microservices for large systems
* Follow MVC or clean architecture

# 2. Backend Optimization

* Use Express middleware efficiently
* Implement caching using Redis
* Use async/await properly
* Optimize database queries with indexing

# 3. Database Design (MongoDB)

* Use proper schema design
* Avoid deeply nested documents
* Use indexes for faster queries
* Apply pagination for large datasets

# 4. Frontend Optimization (React)

* Use lazy loading (React.lazy)
* Code splitting
* Avoid unnecessary re-renders
* Use memoization (useMemo, useCallback)

# 5. Authentication & Security

* JWT-based authentication
* Hash passwords using bcrypt
* Protect APIs with middleware
* Use HTTPS and CORS properly

# 6. Deployment & DevOps

* Use Docker for containerization
* Deploy on AWS / Vercel
* Use CI/CD pipelines

# Conclusion

A scalable MERN app is not about writing code — it's about designing systems that can grow with users.
`,
  },

  {
    id: 2,
    title: "Artificial Intelligence in 2026: Complete Developer Guide",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    desc: "Everything developers need to know about AI, tools, and real-world applications.",
    content: `

# Introduction

Artificial Intelligence is transforming how software is built. Developers must adapt to AI-driven workflows.

# 1. Types of AI

* Narrow AI (task-specific)
* General AI (future concept)
* Generative AI (ChatGPT, Gemini)

# 2. Key Technologies

* NLP (Natural Language Processing)
* Computer Vision
* Reinforcement Learning

# 3. AI Tools for Developers

* OpenAI APIs
* Google Gemini
* GitHub Copilot

# 4. Real-World Applications

* Chatbots
* Recommendation systems
* Fraud detection
* Automation tools

# 5. AI in Web Development

* AI-based UI generation
* Smart search systems
* Personalized user experience

# 6. Prompt Engineering

* Writing effective prompts
* Controlling AI outputs
* Structuring responses

# 7. Future of AI

* AI agents
* Autonomous systems
* AI-first applications

# Conclusion

AI is not replacing developers — it is making them more powerful.
`,
  },

  {
    id: 3,
    title: "DevOps Complete Guide: Docker, CI/CD & Kubernetes Explained",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
    desc: "Master DevOps tools and practices for modern scalable applications.",
    content: `

# Introduction

DevOps is a combination of development and operations aimed at faster and reliable software delivery.

# 1. What is DevOps?

* Collaboration between teams
* Automation of processes
* Continuous delivery

# 2. Docker (Containerization)

* Lightweight containers
* Consistent environments
* Easy deployment

# 3. CI/CD Pipelines

* Continuous Integration (CI)
* Continuous Deployment (CD)
* Tools: GitHub Actions, Jenkins

# 4. Kubernetes (Orchestration)

* Manage containers at scale
* Auto-scaling
* Load balancing

# 5. Monitoring & Logging

* Use tools like Prometheus, Grafana
* Error tracking systems

# 6. Cloud Integration

* AWS, Azure, GCP
* Serverless architecture

# 7. Benefits of DevOps

* Faster releases
* Better collaboration
* Reduced downtime

# Conclusion

DevOps is essential for building scalable and reliable applications in 2026.
`,
  },
];

export default blogs;
