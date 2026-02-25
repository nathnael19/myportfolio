export const portfolioData = {
  personal: {
    name: "Nathnael Nigussie",
    tagline: "Building digital experiences",
    typingText: [
      "Full Stack Engineer",
      "UI/UX Enthusiast",
      "FastAPI Developer",
      "Problem Solver",
      "Open Source Contributor",
    ],
    about:
      "I'm a passionate software engineer with a focus on creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both front-end and back-end development, I love bringing ideas to life through code.",
    email: "nathnaelnigussie19@gmail.com",
    socials: {
      github: "https://github.com/nathnael19",
      linkedin: "https://www.linkedin.com/in/nathnael19",
      twitter: "https://twitter.com",
    },
  },
  skills: {
    categories: [
      {
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Vue.js",
        ],
      },
      {
        name: "Backend",
        items: [
          "FastAPI",
          "Node.js",
          "Express",
          "Python",
          "Django",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        name: "Tools & DevOps",
        items: [
          "Git",
          "Docker",
          "AWS",
          "Vercel",
          "Figma",
          "Jest",
          "Postman",
          "Github",
          "CI/CD",
        ],
      },
    ],
  },
  experience: [
    {
      id: 1,
      company: "Tech Innovators Inc.",
      role: "Senior Frontend Engineer",
      period: "2021 - Present",
      description:
        "Led the front-end team in rebuilding the core SaaS platform, improving performance by 40% and implementing a new design system.",
    },
    {
      id: 2,
      company: "Digital Solutions Agency",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications using React, Node.js, and AWS.",
    },
    {
      id: 3,
      company: "Startup Hub",
      role: "Junior Web Developer",
      period: "2016 - 2018",
      description:
        "Assisted in the development of MVPs for various startups, focusing on responsive UI and API integrations.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "GoalUp Admin",
      description:
        "A comprehensive admin dashboard for managing products, users, and orders in the GoalUp ecosystem. Features real-time inventory tracking, role-based access control, analytics insights, and seamless integration with the backend API.",
      image: "https://picsum.photos/seed/ecommerce/800/600",
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
      github: "https://github.com/nathnael19/goalup_admin",
      live: "https://goalup.webcode.codes",
    },
    {
      id: 2,
      title: "GoalUp Backend",
      description:
        "A scalable RESTful API built with FastAPI powering the GoalUp platform. Handles authentication (JWT), user management, product operations, and business logic using PostgreSQL and SQLModel.",
      image: "https://picsum.photos/seed/task/800/600",
      tech: ["FastAPI", "Postgresql", "SQLModel", "JWT"],
      github: "https://github.com/nathnael19/goalup_backend",
      live: "https://goalupbackend.webcode.codes",
    },
    {
      id: 3,
      title: "GoalUp Mobile APP",
      description:
        "A cross-platform Flutter mobile application connected to the GoalUp backend. Enables users to browse products, manage their accounts, and interact with real-time data through a clean and responsive UI.",
      image: "https://picsum.photos/seed/ai/800/600",
      tech: ["Flutter", "Dart", "FastAPI", "REST API"],
      github: "https://github.com/nathnael19/goalup_frontend",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Expense Tracker",
      description:
        "A personal finance tracking app built with Flutter. Supports offline-first data storage using Hive, expense categorization, analytics summaries, and a simple yet effective dashboard for monitoring spending habits.",
      image: "https://picsum.photos/seed/crypto/800/600",
      tech: ["Flutter", "Hive", "Dart", "Firebase"],
      github: "https://github.com/nathnael19/expense-tracker",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "FM Radio",
      description:
        "A feature-rich FM radio streaming app with background playback support. Includes live radio streaming, podcast playback, news integration, and API-based weather and currency updates.",
      image: "https://picsum.photos/seed/radio/800/600",
      tech: ["Flutter", "Dart", "Firebase", "AudioPlayers"],
      github: "https://github.com/nathnael19/fm_radio",
      live: "https://example.com",
    },
    {
      id: 6,
      title: "Flappy Bird",
      description:
        "A 2D arcade-style game inspired by the classic Flappy Bird, developed using the Godot Engine. Built with GDScript, featuring collision detection, score tracking, and smooth physics-based movement.",
      image: "https://picsum.photos/seed/game/800/600",
      tech: ["Godot", "GDScript", "Godot Engine"],
      github: "https://github.com/nathnael19/flappy-bird",
      live: "https://example.com",
    },
    {
      id: 7,
      title: "Mezmur Debter",
      description:
        "A digital hymn book application designed for choir members. Supports offline access using Hive, song categorization, search functionality, favorites, and structured content display from Firebase.",
      image: "https://picsum.photos/seed/music/800/600",
      tech: ["Flutter", "Hive", "Dart", "Firebase"],
      github: "https://github.com/nathnael19/ruhama_choir_mezmur_debter",
      live: "https://example.com",
    },
    {
      id: 8,
      title: "Arif Menu",
      description:
        "A modern digital restaurant menu platform built with Next.js and TypeScript. Features dynamic menu rendering, responsive UI design with Tailwind CSS, and structured content management for restaurants.",
      image: "https://picsum.photos/seed/menu/800/600",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/nathnael19/ArifMenu",
      live: "https://example.com",
    },
    {
      id: 9,
      title: "SmartJob Backend",
      description:
        "An intelligent recruitment backend system that automates early-stage candidate screening. Built with FastAPI and PostgreSQL, featuring resume processing, scoring logic, and secure JWT authentication.",
      image: "https://picsum.photos/seed/backend/800/600",
      tech: ["FastAPI", "Postgresql", "SQLModel", "JWT"],
      github: "https://github.com/ASTU-group/smartjob_backend",
      live: "https://smartjobbackend.webcode.codes",
    },
    {
      id: 10,
      title: "SmartJob Frontend",
      description:
        "A responsive web interface for managing job applications and candidate evaluations. Built with Next.js and TypeScript, integrating seamlessly with the SmartJob backend API for real-time updates.",
      image: "https://picsum.photos/seed/frontend/800/600",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/ASTU-group/smartjob_frontend",
      live: "https://smartjob.webcode.codes",
    },
  ],
};
