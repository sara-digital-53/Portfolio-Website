export const projectsData = [
  {
    slug: "dashboard-website-template",
    title: "Analytics Dashboard",
    year: "2024",
    industry: "SaaS & Analytics",
    client: "TechCorp Solutions",
    liveLink: "https://example-dashboard.com",
    mainImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    subImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    ],
    about: `A comprehensive analytics dashboard designed for enterprise clients to visualize complex data sets and gain actionable insights. This project focused on creating an intuitive interface that transforms raw data into meaningful visualizations while maintaining high performance and scalability for large datasets.`,
    objectives: [
      "Create intuitive data visualization with real-time updates",
      "Achieve loading time under 2 seconds for dashboard widgets",
      "Implement responsive design for desktop and tablet users",
      "Enable customizable dashboard layouts and widget configurations",
    ],
    approach: [
      "**Research & Discovery** – Conducted user interviews with 15 business analysts and data scientists. Analyzed 8 competitor dashboards to identify best practices. Key findings: users needed customizable views, faster load times, and clearer data hierarchies.",
      "**Information Architecture & Wireframes** – Created modular widget system, designed 3 user flow scenarios, developed low-fidelity prototypes with drag-and-drop functionality.",
      "**UI Design & Branding** – Developed dark mode interface optimized for extended viewing sessions; created comprehensive component library with 50+ reusable elements; conducted usability testing with 10 target users.",
      "**Front-end & Back-end Development** – Built with React and D3.js for visualizations; implemented Redis caching for real-time data; optimized bundle size with code splitting; achieved Lighthouse performance score of 92.",
    ],
    results: [
      "+55% increase in daily active users after launch",
      "Average dashboard load time of 1.6 seconds",
      "89% user satisfaction score from post-launch survey",
    ],
  },
  {
    slug: "ecommerce-website-template",
    title: "Fashion E-commerce Platform",
    year: "2024",
    industry: "E-commerce & Retail",
    client: "StyleHub Fashion",
    liveLink: "https://example-store.com",
    mainImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    subImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    ],
    about: `A modern e-commerce platform for a premium fashion retailer targeting millennials and Gen Z shoppers. The project aimed to create a seamless shopping experience with advanced filtering, personalized recommendations, and a streamlined checkout process to maximize conversions and customer retention.`,
    objectives: [
      "Increase conversion rate to at least 3.5% (industry average: 2.8%)",
      "Reduce cart abandonment rate by 25%",
      "Implement advanced product filtering (size, color, brand, price, style)",
      "Create mobile-first responsive design with exceptional performance",
    ],
    approach: [
      "**Research & Discovery** – Analyzed shopping behavior of 500+ customers through heatmaps and session recordings. Conducted competitor analysis of 10 leading fashion e-commerce sites. Identified pain points: complex navigation, slow checkout, poor mobile experience.",
      "**Information Architecture & Wireframes** – Restructured product categories into 4 main collections; designed streamlined 3-step checkout flow; created wireframes for 25+ pages including product listings, details, and user account sections.",
      "**UI Design & Branding** – Developed modern, minimalist design system with emphasis on high-quality product photography; created interactive lookbook features; implemented micro-animations for enhanced user engagement; tested with 12 users across 3 iterations.",
      "**Front-end & Back-end Development** – Built with Next.js for server-side rendering and optimal SEO; integrated Stripe payment gateway; implemented image optimization with WebP format and lazy loading; added PWA capabilities; achieved mobile Lighthouse score of 88 and desktop score of 94.",
    ],
    results: [
      "+47% increase in conversion rate (from 2.6% to 3.8%)",
      "Cart abandonment reduced by 32%",
      "Mobile page load time: 2.2 seconds",
      "Average order value increased by 18%",
    ],
  },
];