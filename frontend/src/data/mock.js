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
  { id: "statistics", name: "Predictive Models", icon: "TrendingUp" },
  { id: "scraping", name: "Scraping", icon: "Spider" },
  { id: "api", name: "API", icon: "Plug" },
  { id: "excel", name: "Excel", icon: "FileSpreadsheet" },
  { id: "automation", name: "Automation", icon: "Server" },
  { id: "python", name: "Python", icon: "PythonLogo" },
  { id: "predictive", name: "IA", icon: "Brain" }
];

export const projects = [
  {
    id: "proj1",
    title: "Real-Time Sales Dashboard",
    categories: ["data-viz", "api"],
    description: "Interactive Tableau dashboard tracking $50M+ in sales across 12 regions with real-time data refresh. Features drill-down capabilities, trend analysis, and automated alerting for KPI deviations.",
    shortDesc: "Live sales tracking across 12 regions with drill-down analytics and automated KPI alerts.",
    tags: ["Tableau", "Python", "PostgreSQL", "Airflow"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    context: "A retail group operating across 12 regions needed centralized visibility into $50M+ in annual sales. Existing reports were static Excel files delivered weekly, causing delayed decision-making.",
    projectDetail: "Built an interactive Tableau dashboard connected to a PostgreSQL warehouse, refreshed every 15 minutes via Airflow pipelines. Implemented drill-down by region, product, and time period with automated Slack alerts for KPI deviations.",
    results: "Reduced reporting lag from 7 days to 15 minutes. Enabled regional managers to self-serve analytics, cutting ad-hoc data requests by 60%."
  },
  {
    id: "proj2",
    title: "A/B Testing Framework",
    categories: ["statistics", "python"],
    description: "Built a comprehensive statistical testing framework supporting t-tests, chi-square, and Bayesian inference. Automated sample size calculations and significance reporting for the marketing team.",
    shortDesc: "Statistical testing engine with t-tests, Bayesian inference, and automated significance reporting.",
    tags: ["Python", "SciPy", "Pandas", "Jupyter"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?w=800&q=80",
    context: "Marketing team was running experiments without statistical rigor, leading to premature conclusions and wasted budget on ineffective campaigns.",
    projectDetail: "Developed a Python framework with SciPy and Pandas that automates sample size calculation, runs t-tests and chi-square tests, and generates Bayesian posterior distributions for conversion rate experiments.",
    results: "Reduced false-positive experiment conclusions by 40%. Framework adopted by 3 product teams running 15+ experiments monthly."
  },
  {
    id: "proj3",
    title: "E-Commerce Price Tracker",
    categories: ["scraping", "automation", "api"],
    description: "Distributed web scraping system monitoring 100K+ products across 15 e-commerce platforms. Handles anti-bot measures, rotates proxies, and feeds data into a price comparison engine.",
    shortDesc: "Distributed scraper monitoring 100K+ products across 15 platforms with proxy rotation.",
    tags: ["Scrapy", "Selenium", "Redis", "MongoDB"],
    year: 2023,
    link: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=800&q=80",
    context: "A comparison shopping startup needed real-time pricing data across 15 e-commerce platforms to power their recommendation engine.",
    projectDetail: "Built a distributed Scrapy cluster with Selenium fallback for JS-rendered pages. Used Redis for task queuing and proxy rotation, storing 100K+ product prices in MongoDB with change-detection triggers.",
    results: "Achieved 98.5% scraping success rate. Price data freshness improved from 24h to 2h, increasing user engagement on the platform by 35%."
  },
  {
    id: "proj4",
    title: "RESTful Data API",
    categories: ["api", "python"],
    description: "Designed and deployed a high-performance REST API serving 10K+ requests/minute with caching, rate limiting, and OAuth2 authentication. Documented with OpenAPI/Swagger.",
    shortDesc: "High-performance API serving 10K+ req/min with caching and OAuth2.",
    tags: ["FastAPI", "Redis", "Docker", "AWS"],
    year: 2024,
    link: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?w=800&q=80",
    context: "Internal data team needed a standardized way to expose curated datasets to downstream services without giving direct database access.",
    projectDetail: "Designed a FastAPI service with Redis caching, token-bucket rate limiting, and OAuth2 scopes. Deployed on AWS ECS with auto-scaling. Full OpenAPI documentation generated automatically.",
    results: "Serving 10K+ requests/min at p99 latency under 50ms. Onboarded 8 internal services in the first month."
  },
  {
    id: "proj5",
    title: "Financial Reporting Automation",
    categories: ["excel", "automation", "python"],
    description: "Automated monthly financial reports generation using Python and openpyxl. Reduced report creation time from 3 days to 15 minutes with template-based generation and email distribution.",
    shortDesc: "Automated monthly reports — cut generation time from 3 days to 15 minutes.",
    tags: ["Python", "openpyxl", "VBA", "Outlook"],
    year: 2023,
    link: "#",
    featured: false,
    image: "https://images.pexels.com/photos/4021266/pexels-photo-4021266.jpeg?w=800",
    context: "Finance team spent 3 days each month manually assembling reports from multiple data sources into branded Excel templates.",
    projectDetail: "Created a Python pipeline using openpyxl that pulls data from 5 sources, applies business logic, populates branded Excel templates, and distributes via Outlook automation.",
    results: "Report generation reduced from 3 days to 15 minutes. Eliminated manual copy-paste errors that previously caused quarterly restatements."
  },
  {
    id: "proj6",
    title: "CI/CD Data Pipeline",
    categories: ["automation", "api"],
    description: "End-to-end automated data pipeline with CI/CD integration. Includes data validation, schema evolution handling, automated testing, and rollback mechanisms processing 50M+ records daily.",
    shortDesc: "End-to-end pipeline processing 50M+ records/day with CI/CD and auto-rollback.",
    tags: ["Airflow", "dbt", "GitHub Actions", "Terraform"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1653387141060-9a9834f47777?w=800&q=80",
    context: "Data pipeline changes were deployed manually, causing frequent production incidents and hours of downtime when schema changes broke downstream consumers.",
    projectDetail: "Implemented CI/CD for data pipelines using GitHub Actions, dbt for transformations, and Terraform for infrastructure. Added automated schema validation, data quality tests, and one-click rollback.",
    results: "Zero unplanned downtime in 6 months. Deployment frequency increased from bi-weekly to daily. Processing 50M+ records with 99.9% reliability."
  },
  {
    id: "proj7",
    title: "NLP Text Classification Engine",
    categories: ["python", "predictive"],
    description: "Custom NLP pipeline for classifying customer support tickets into 25 categories with 91% accuracy. Uses transformer-based models fine-tuned on domain-specific data.",
    shortDesc: "Transformer-based ticket classifier achieving 91% accuracy across 25 categories.",
    tags: ["Python", "Transformers", "scikit-learn", "FastAPI"],
    year: 2024,
    link: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?w=800&q=80",
    context: "Customer support team manually routed 5,000+ tickets daily across 25 categories. Misrouting caused 30% of tickets to require reassignment.",
    projectDetail: "Fine-tuned a DistilBERT model on 50K labeled support tickets. Built a FastAPI inference service with confidence thresholds — low-confidence tickets route to human review.",
    results: "91% classification accuracy. Reduced average ticket routing time from 4 hours to under 10 seconds. Misrouting dropped to 8%."
  },
  {
    id: "proj8",
    title: "Customer Churn Predictor",
    categories: ["predictive", "data-viz", "python"],
    description: "Gradient boosted model predicting customer churn 30 days in advance with 94% AUC-ROC. Integrated with CRM system for automated retention campaigns targeting at-risk customers.",
    shortDesc: "Churn prediction with 94% AUC-ROC, integrated with CRM for auto-retention campaigns.",
    tags: ["XGBoost", "Python", "Snowflake", "Tableau"],
    year: 2023,
    link: "#",
    featured: true,
    image: "https://images.unsplash.com/photo-1584291527935-456e8e2dd734?w=800&q=80",
    context: "A SaaS company was losing 8% of customers monthly with no early warning system. Retention campaigns were reactive, triggered only after cancellation.",
    projectDetail: "Trained an XGBoost model on 200+ behavioral features from Snowflake. Scores run daily, pushing at-risk customers into automated CRM retention workflows. Built a Tableau dashboard for the CS team.",
    results: "94% AUC-ROC. Proactive retention campaigns reduced monthly churn from 8% to 5.2%, saving an estimated $1.2M annually."
  },
  {
    id: "proj9",
    title: "Geospatial Analytics Platform",
    categories: ["data-viz", "api", "python"],
    description: "Interactive map-based visualization platform for logistics optimization. Plots delivery routes, warehouse coverage areas, and demand heatmaps with real-time GPS data integration.",
    shortDesc: "Map-based logistics platform with delivery routes and demand heatmaps.",
    tags: ["Mapbox", "D3.js", "Python", "PostGIS"],
    year: 2023,
    link: "#",
    featured: false,
    image: "https://images.pexels.com/photos/3970331/pexels-photo-3970331.jpeg?w=800",
    context: "A logistics company needed to visualize delivery coverage gaps and optimize warehouse placement across a metropolitan area.",
    projectDetail: "Built a Mapbox-powered platform with PostGIS backend. Renders delivery routes, Voronoi coverage zones, and demand heatmaps from real-time GPS feeds processed through a Python geospatial pipeline.",
    results: "Identified 3 coverage gaps leading to new warehouse placement. Average delivery time reduced by 18%."
  },
  {
    id: "proj10",
    title: "Time Series Forecasting API",
    categories: ["predictive", "api", "python"],
    description: "Production ML service for demand forecasting using Prophet and LSTM models. Serves predictions via API with confidence intervals, handling seasonality and holiday effects.",
    shortDesc: "ML forecasting service with Prophet & LSTM, serving predictions via REST API.",
    tags: ["Prophet", "TensorFlow", "FastAPI", "Docker"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://images.pexels.com/photos/31343288/pexels-photo-31343288.jpeg?w=800",
    context: "Supply chain team relied on manual demand estimates, leading to frequent stockouts and overstock costing $500K+ annually.",
    projectDetail: "Developed an ensemble of Prophet (seasonal) and LSTM (trend) models served via FastAPI. Returns point forecasts with 80/95% confidence intervals. Containerized with Docker for horizontal scaling.",
    results: "Forecast accuracy improved by 28% over manual estimates. Stockout incidents reduced by 45%, saving $320K in the first year."
  },
  {
    id: "proj11",
    title: "Social Media Sentiment Scraper",
    categories: ["scraping", "python", "data-viz"],
    description: "Real-time social media monitoring system scraping Twitter, Reddit, and news sites. Performs sentiment analysis and generates trend reports for brand monitoring.",
    shortDesc: "Real-time social scraper with sentiment analysis and trend visualization.",
    tags: ["BeautifulSoup", "NLTK", "Kafka", "Elasticsearch"],
    year: 2023,
    link: "#",
    featured: false,
    image: "https://images.pexels.com/photos/5050305/pexels-photo-5050305.jpeg?w=800",
    context: "Brand team had no real-time visibility into public sentiment, only discovering PR issues after they went viral.",
    projectDetail: "Built a streaming pipeline scraping Twitter, Reddit, and 50 news sources via BeautifulSoup. Messages flow through Kafka into an NLTK sentiment classifier, indexed in Elasticsearch with Kibana dashboards.",
    results: "Detected brand-threatening sentiment spikes 4 hours before they reached mainstream media. Enabled proactive PR response saving 2 potential crises."
  },
  {
    id: "proj12",
    title: "Bayesian Pricing Optimizer",
    categories: ["statistics", "predictive", "python"],
    description: "Dynamic pricing engine using Bayesian optimization to maximize revenue. A/B tests price points automatically and converges on optimal pricing within 2-week cycles.",
    shortDesc: "Bayesian pricing engine that auto-converges on optimal price points in 2-week cycles.",
    tags: ["PyMC3", "Python", "PostgreSQL", "Redis"],
    year: 2024,
    link: "#",
    featured: false,
    image: "https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?w=800",
    context: "Pricing team set prices manually based on gut feel. No systematic way to test price elasticity without risking revenue.",
    projectDetail: "Implemented a Bayesian optimization loop with PyMC3 that automatically tests price points using Thompson sampling. Posterior distributions update daily, converging on revenue-optimal prices within 2-week cycles.",
    results: "Average revenue per transaction increased by 12%. Price testing cycles reduced from months of manual A/B tests to automated 2-week convergence."
  }
];

export const contactMessages = [];
