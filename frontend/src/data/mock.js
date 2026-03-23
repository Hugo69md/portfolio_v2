// Mock data for Data Engineering Portfolio

export const profileData = {
  name: "Alex Rennard",
  title: "Data Engineer & Analyst",
  tagline: "Data Engineering Solutions",
  bio: "Passionate data engineer specializing in building scalable data pipelines, predictive models, and automation systems. With 5+ years of experience transforming raw data into actionable insights, I help organizations make data-driven decisions.",
  location: "Paris, France",
  email: "alex.rennard@email.com",
  phone: "+33 6 12 34 56 78",
  social: {
    github: "https://github.com/alexrennard",
    linkedin: "https://linkedin.com/in/alexrennard",
    twitter: "https://twitter.com/alexrennard"
  },
  skills: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 92 },
    { name: "Data Visualization", level: 88 },
    { name: "Machine Learning", level: 85 },
    { name: "Web Scraping", level: 90 },
    { name: "API Development", level: 87 },
    { name: "Excel / VBA", level: 80 },
    { name: "Cloud (AWS/GCP)", level: 82 },
    { name: "Docker", level: 78 },
    { name: "Spark / Hadoop", level: 75 }
  ],
  experience: [
    {
      id: "exp1",
      role: "Senior Data Engineer",
      company: "TechVault Analytics",
      period: "2022 - Present",
      description: "Leading data pipeline architecture for real-time analytics processing 50M+ events daily. Built automated ETL systems reducing manual work by 80%."
    },
    {
      id: "exp2",
      role: "Data Analyst",
      company: "DataStream Corp",
      period: "2020 - 2022",
      description: "Developed predictive models for customer churn with 94% accuracy. Created interactive dashboards serving 200+ stakeholders."
    },
    {
      id: "exp3",
      role: "Junior Data Scientist",
      company: "InnoMetrics Lab",
      period: "2018 - 2020",
      description: "Built web scraping pipelines collecting 1M+ data points weekly. Implemented statistical analysis frameworks for A/B testing."
    }
  ],
  education: [
    {
      degree: "M.Sc. Data Science",
      school: "École Polytechnique",
      year: "2018"
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Université Paris-Saclay",
      year: "2016"
    }
  ]
};

export const categories = [
  { id: "data-viz", name: "Data Visualization", icon: "BarChart3" },
  { id: "statistics", name: "Statistics", icon: "TrendingUp" },
  { id: "scraping", name: "Scraping", icon: "Globe" },
  { id: "api", name: "API", icon: "Plug" },
  { id: "excel", name: "Excel", icon: "FileSpreadsheet" },
  { id: "automation", name: "Automation", icon: "Cog" },
  { id: "python", name: "Python", icon: "Code" },
  { id: "predictive", name: "Predictive Models", icon: "Brain" }
];

export const projects = [
  {
    id: "proj1",
    title: "Real-Time Sales Dashboard",
    category: "data-viz",
    description: "Interactive Tableau dashboard tracking $50M+ in sales across 12 regions with real-time data refresh. Features drill-down capabilities, trend analysis, and automated alerting for KPI deviations.",
    tags: ["Tableau", "Python", "PostgreSQL", "Airflow"],
    year: 2024,
    link: "#",
    featured: true
  },
  {
    id: "proj2",
    title: "A/B Testing Framework",
    category: "statistics",
    description: "Built a comprehensive statistical testing framework supporting t-tests, chi-square, and Bayesian inference. Automated sample size calculations and significance reporting for the marketing team.",
    tags: ["Python", "SciPy", "Pandas", "Jupyter"],
    year: 2024,
    link: "#",
    featured: true
  },
  {
    id: "proj3",
    title: "E-Commerce Price Tracker",
    category: "scraping",
    description: "Distributed web scraping system monitoring 100K+ products across 15 e-commerce platforms. Handles anti-bot measures, rotates proxies, and feeds data into a price comparison engine.",
    tags: ["Scrapy", "Selenium", "Redis", "MongoDB"],
    year: 2023,
    link: "#",
    featured: true
  },
  {
    id: "proj4",
    title: "RESTful Data API",
    category: "api",
    description: "Designed and deployed a high-performance REST API serving 10K+ requests/minute with caching, rate limiting, and OAuth2 authentication. Documented with OpenAPI/Swagger.",
    tags: ["FastAPI", "Redis", "Docker", "AWS"],
    year: 2024,
    link: "#",
    featured: false
  },
  {
    id: "proj5",
    title: "Financial Reporting Automation",
    category: "excel",
    description: "Automated monthly financial reports generation using Python and openpyxl. Reduced report creation time from 3 days to 15 minutes with template-based generation and email distribution.",
    tags: ["Python", "openpyxl", "VBA", "Outlook"],
    year: 2023,
    link: "#",
    featured: false
  },
  {
    id: "proj6",
    title: "CI/CD Data Pipeline",
    category: "automation",
    description: "End-to-end automated data pipeline with CI/CD integration. Includes data validation, schema evolution handling, automated testing, and rollback mechanisms processing 50M+ records daily.",
    tags: ["Airflow", "dbt", "GitHub Actions", "Terraform"],
    year: 2024,
    link: "#",
    featured: true
  },
  {
    id: "proj7",
    title: "NLP Text Classification Engine",
    category: "python",
    description: "Custom NLP pipeline for classifying customer support tickets into 25 categories with 91% accuracy. Uses transformer-based models fine-tuned on domain-specific data.",
    tags: ["Python", "Transformers", "scikit-learn", "FastAPI"],
    year: 2024,
    link: "#",
    featured: false
  },
  {
    id: "proj8",
    title: "Customer Churn Predictor",
    category: "predictive",
    description: "Gradient boosted model predicting customer churn 30 days in advance with 94% AUC-ROC. Integrated with CRM system for automated retention campaigns targeting at-risk customers.",
    tags: ["XGBoost", "Python", "Snowflake", "Tableau"],
    year: 2023,
    link: "#",
    featured: true
  },
  {
    id: "proj9",
    title: "Geospatial Analytics Platform",
    category: "data-viz",
    description: "Interactive map-based visualization platform for logistics optimization. Plots delivery routes, warehouse coverage areas, and demand heatmaps with real-time GPS data integration.",
    tags: ["Mapbox", "D3.js", "Python", "PostGIS"],
    year: 2023,
    link: "#",
    featured: false
  },
  {
    id: "proj10",
    title: "Time Series Forecasting API",
    category: "predictive",
    description: "Production ML service for demand forecasting using Prophet and LSTM models. Serves predictions via API with confidence intervals, handling seasonality and holiday effects.",
    tags: ["Prophet", "TensorFlow", "FastAPI", "Docker"],
    year: 2024,
    link: "#",
    featured: true
  },
  {
    id: "proj11",
    title: "Social Media Sentiment Scraper",
    category: "scraping",
    description: "Real-time social media monitoring system scraping Twitter, Reddit, and news sites. Performs sentiment analysis and generates trend reports for brand monitoring.",
    tags: ["BeautifulSoup", "NLTK", "Kafka", "Elasticsearch"],
    year: 2023,
    link: "#",
    featured: false
  },
  {
    id: "proj12",
    title: "Bayesian Pricing Optimizer",
    category: "statistics",
    description: "Dynamic pricing engine using Bayesian optimization to maximize revenue. A/B tests price points automatically and converges on optimal pricing within 2-week cycles.",
    tags: ["PyMC3", "Python", "PostgreSQL", "Redis"],
    year: 2024,
    link: "#",
    featured: false
  }
];

export const contactMessages = [];
