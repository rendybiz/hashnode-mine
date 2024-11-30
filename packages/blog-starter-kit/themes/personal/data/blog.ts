export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Node.js',
    description: 'Learn how to create robust and scalable web applications using Node.js and modern architectural patterns.',
    date: '2024-01-15',
    author: 'Rendy Adi Saputra',
    category: 'Backend Development',
    image: '/images/blog/nodejs-scaling.jpg',
    content: `
      In today's digital landscape, building scalable web applications is crucial for business success. 
      This article explores best practices and patterns for creating highly scalable applications using Node.js.
      
      We'll cover:
      - Microservices architecture
      - Load balancing strategies
      - Database optimization
      - Caching mechanisms
      - Performance monitoring
    `
  },
  {
    id: '2',
    title: 'Modern Frontend Development with Vue.js 3',
    description: 'Discover the power of Vue.js 3 and its ecosystem for building modern web interfaces.',
    date: '2024-01-10',
    author: 'Rendy Adi Saputra',
    category: 'Frontend Development',
    image: '/images/blog/vuejs3.jpg',
    content: `
      Vue.js 3 brings significant improvements in performance and developer experience. 
      Let's explore the new Composition API and other features that make Vue.js 3 a great choice for modern web development.
      
      Topics covered:
      - Composition API
      - Script setup syntax
      - Performance optimizations
      - State management
      - Testing strategies
    `
  },
  {
    id: '3',
    title: 'DevOps Best Practices with Docker and AWS',
    description: 'A comprehensive guide to implementing DevOps practices using Docker and AWS services.',
    date: '2024-01-05',
    author: 'Rendy Adi Saputra',
    category: 'DevOps',
    image: '/images/blog/devops.jpg',
    content: `
      Implementing DevOps practices can significantly improve your development and deployment processes. 
      This guide focuses on using Docker and AWS to create efficient CI/CD pipelines.
      
      Key points:
      - Container orchestration
      - AWS services integration
      - Automated deployment
      - Monitoring and logging
      - Security best practices
    `
  }
];
