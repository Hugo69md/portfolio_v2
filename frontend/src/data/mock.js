// Portfolio Data

export const profileData = {
  name: "Hugo Manipoud",
  title: "Automation & Data Engineer",
  tagline: "Data Engineering Solutions",
  bio: "Mechanical & Electrical engineer who's passionate about data and automation, i deliver simple solutions for hard problems. You'll find here some projects of mine. ",
  location: "Lyon, France",
  email: "Hugo69md@gmail.com",
  phone: "+33 6 51 58 95 51",
  social: {
    github: "https://github.com/Hugo69md",
    linkedin: "https://www.linkedin.com/in/hugo-manipoud-8a35b91ba/",
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
      role: "Automation & Data Engineer",
      company: "Ceibb Engineering",
      period: "2025 - Present",
      description: "Self employed data engineer specialized in automation scraping and pipelines"
    },
    {
      id: "exp2",
      role: "Supply chain Data Analyst intern",
      company: "Laboratoires Arrow",
      period: "2024 - 2024",
      description: "Supply chain & data internship, creation of several data analysis and process automation tools within the context of assigned missions. Reducing time spent and reoccurring errors in some processes by up to 90%, Creation of several monitoring tools using Python / Excel, In-depth work on shortage patterns and warehouse (WH) non-conformities.
"
    }
  ],
  education: [
    {
      degree: "M.Sc. Engineering Project Management",
      school: "Auckland University of Technology",
      year: "2027"
    },
    {
      degree: "M.Sc. Electrical & Mechanical Engineering",
      school: "ECAM lyon",
      year: "2026"
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
  { id: "predictive", name: "IA", icon: "Brain" },
  { id: "data-pipeline", name: "Data Pipeline", icon: "PipesIcon" }
];

export const projects = [
  {
    id: "proj1",
    title: "Descriptive and Inferential Statistics",
    categories: ["statistics", "python", "data-viz"],
    description: "Custom Python scripts for descriptive and inferential statistics, featuring automated test selection, custom data visualizations, and ChatGPT API integration for natural language filtering.",
    shortDesc: "Python scripts for descriptive and inferential statistics with automated test selection and custom visualizations.",
    tags: ["Python", "Statistics", "Data visualization"],
    year: 2025,
    link: "#",
    featured: false,
    image: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/desc_barplot_20250624_002521.png",
    githubLinks: [
      "https://github.com/Hugo69md/Inferential-Statistics",
      "https://github.com/Hugo69md/Descriptive-statistics"
    ],
    context: "A family member of mine who runs their own company needed a way to monitor their business metrics more efficiently. They had very specific requirements for a custom dashboard layout that couldn't be met by standard tools like Excel or Tableau.\n\nWhile their business has specific internal rules for how data should be handled and interpreted, the off-the-shelf software they were using was too rigid; it couldn't be programmed to follow those specific guidelines.\n\nThey were looking for a solution that could:\n- Generate automated reports that are easy to read, allowing them to share insights with their team without spending hours writing summaries.\n- Create custom graphs with specific design features and layouts that simply weren't available in standard business tools.\n- Implement quick filtering to navigate large amounts of data with ease.\n- Centralize and automate their workflow to save time and reduce the daily administrative burden.",
    projectDetail: "The custom graph maker I developed provides all the specific layout features they need, offering total freedom over how their business data is visualized.\n\nTo make it accessible, I ensured that data can be filtered with just a single line of code. Furthermore, for a non-coder, I've made it possible to integrate the ChatGPT API, allowing the user to filter their data through a simple text prompt.\n\nFor the data monitoring side, the program automatically runs all the necessary checks according to the company's specific quality policy. The script produces clear, custom visuals and sends a formatted output directly to the terminal, making it extremely simple to read and share.",
    images: [
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/desc_barplot_20250624_002521.png", alt: "Descriptive Statistics Bar Plot" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/desc_boxplot_20250709_174521.png", alt: "Descriptive Statistics Box Plot" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/desc_distributionplot_20250624_002814.png", alt: "Descriptive Statistics Distribution Plot" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/Desc_scatterplot_20250630_094526.png", alt: "Descriptive Statistics Scatter Plot" }
    ],
    imagesCaption: "Here are some outputs plots made with the descriptive statistics script. The different color coding for histogram or box plots allows easier visualization of data, the numbers on top of bars or the percentage next to box plots allows a precise value at first glance.",
    sections: [
      {
        title: "1 Sample t-test",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/boxplot_1_sample_t.png", alt: "Sample T Test Box Plot" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/distribution_plot_1_sample_t.png", alt: "Sample T Test Distribution Plot" }
        ],
        codeOutput: `/==================Normality Test Results==================/\nSample Size: 91\nAlpha: 0.05\nMethod Used: Shapiro-Wilk (Sample size <= 5000)\n\n/==================Sample analysis==================/\nTest Statistic sample : 0.9784386609382795\nP-Value: 0.13574379655638724\nHypothesis testing for normality test results: H0 accepted, normality test validated\n\n\n/==================1 sample t-Test Results==================/\nSample Size: 91\nAlpha: 0.05\nMethod Used: 'Student's 1 sample T test \nTest Statistic: -1.4006174221594012\nP-Value: 0.16476686687917072\nExpected Mean: 0.24\nHypothesis testing: H0 accepted, the expected mean correlates to the sample's mean\n\n/============================ Warnings ============================/\n//`,
        description: "Here is the output of the 1 sample t-test made with the inferential statistics script. Inferential statistics tests work with assumptions, we have to verify if they are fulfilled in order to select the correct test, the script handles all of this automatically including the choice of the test."
      },
      {
        title: "Equality of Means",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/boxplot%20eqality%20of%20means.png", alt: "Equality of Means Box Plot" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/distribution%20plot%20equality%20oif%20means.png", alt: "Equality of Means Distribution Plot" }
        ],
        codeOutput: `/================== Normality Test Results ==================/\nSample Size: 5100\nAlpha: 0.06\nMethod Used: D'Agostino's K-squared (Sample size > 5000 && alpha >= 0,05)\n\n/================== First sample analysis ==================/\nTest Statistic first sample : 1.404463028267466\nP-Value: 0.4954784021600447\nHypothesis testing for normality test results: H0 accepted, normality test validated\n\n/================== Second sample analysis ==================/\nTest Statistic first sample : 3968.7644141368087\nP-Value: 0.0\nHypothesis testing for normality test results: H1 accepted, normality test not validated\n\n\n/================== Equality of Variances Test Results ==================/\nSample Size: 5100\nAlpha: 0.06\nMethod Used: Levene's test\nTest Statistic: 3873.156463095762\nP-Value: 0.0\nHypothesis testing for equality of variances: H1 accepted, the variances are not equal\n\n/============================ Variance infos ============================/\nSample 1 Variance: 0.972119\nSample 2 Variance: 0.083012\nVariance Ratio (larger/smaller): 11.7106\n\n\n/================== Independant Equality of Means Test Results ==================/\nSample Size: 5100\nAlpha: 0.06\nMethod Used: Welch's T test\nTest Statistic: -35.02111619074387\nP-Value: 1.5885604446504975e-244\nHypothesis testing for equality of means: H1 accepted, the means are not equal\n\n/============================ Means infos ============================/\nSample 1 Mean: -0.002602\nSample 2 Mean: 0.501129\n\n/============================ Warnings ============================/\n!!!!!! the distribution of at least one sample is NOT normal, use a non parametric test`,
        description: "Here is the output of the independent 2 samples t-test or equality of means test made with the inferential statistics script. For this test, each assumptions builds the correct test automatically, here normality isn't validated for one of the samples, variance aren't equal, based on those assumptions the program selects Welch's T test over the standard student T test, and gives the appropriate warnings"
      },
      {
        title: "Mann Whitney U",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/boxplot_2_samples_mann_whitney_u.png", alt: "Mann Whitney U Box Plot" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/inferential_desc_stat_img/distribution_plot_2_samples_mann_whitneyU.png", alt: "Mann Whitney U Distribution Plot" }
        ],
        codeOutput: `/================== Normality Test Results ==================/\nSample Size: 5100\nAlpha: 0.05\nMethod Used: Anderson-Darling (samplesize >= 5000 && alpha <= 0,05)\n\n/================== First sample analysis ==================/\nTest Statistic first sample : 58.18057606818911\nCritical Value accepted: 0.786\nHypothesis testing for normality test results: H1 accepted, normality test not validated\n\n/================== Second sample analysis ==================/\nTest Statistic first sample : 53.298295330665496\nCritical Value accepted: 0.786\nHypothesis testing for normality test results: H1 accepted, normality test not validated\n\n\n/================== Distribution Shape Check for Mann-Whitney U ==================/\nSample Names: Uniform vs RandomIntegers\nSample Sizes: 5100\nAlpha Level (informal): 0.05\nComparison Tolerance: 0.350 (Depends on sample size)\n\n/============================ Skewness ============================/\nSkewness Sample 1 (Uniform): 0.005355\nSkewness Sample 2 (RandomIntegers): 0.003768\nAbsolute Difference: 0.001587\nSkewness similarity Decision: H0 accepted: Distributions have similar skewness.\n\n/============================ Kurtosis ============================/\nKurtosis Sample 1 (Uniform): -1.206797\nKurtosis Sample 2 (RandomIntegers): -1.175968\nAbsolute Difference: 0.030829\nKurtosis similarity Decision: H0 accepted: Distributions have similar kurtosis.\n\n/============================ Decision ============================/\nShape Similarity Decision: H0 accepted: Distributions have similar shape (skewness and kurtosis).\n\n/============================ Warning ============================/\n//\n\n\n/============ Independant equality of Medians Test Results Mann Whitney U rank sums ============/\nSample Size: 5100\nAlpha: 0.05\nMethod Used: 'Mann Whitney's 2 sample Independant test\nTest Statistic: -84.40746608766351\nP-Value: 0.0\nHypothesis testing for equality of medians: H1 accepted, the medians are not equal\n\n/============================ Medians infos ============================/\nSample 1 Median: 0.498892\nSample 2 Median: 25.000000\n\n/============================ Warnings ============================/\n//\n//`,
        description: "Here is the output of the independent 2 samples non parametric test or Mann Whitney-U test, made with the inferential statistics script. Both are uniform distribution, and have similar shapes (Skewness and Kurtosis) which validates the assumptions for a Mann whitney U test",
        callToAction: "There are more tests available in this project, go test it yourself! Check the links at the top of the page"
      }
    ],
    results: "The implementation of these two Python scripts has significantly reduced errors by automating assumptions and limiting redundant manual data entry. This has provided a steady, high-quality output, as all the tests and visualizations follow a consistent, reliable methodology.\n\nThe program is highly intuitive and easy to integrate into a daily business routine. While some basic coding can be used for filtering, the ability to incorporate AI means that data filtering and analysis can be performed without any coding expertise, making it accessible to a broader range of users.\n\nBy using this tool, my family member has been able to increase their productivity, reduce oversight errors, and bring much-needed stability to their business analysis. It has been a major step toward more efficient and data-driven decision-making within their company."
  },
  {
    id: "proj2",
    title: "Rupture Trend Analysis Tools",
    categories: ["python", "excel", "data-viz"],
    description: "Python and Excel tools for analyzing medicine rupture trends at a pharmaceutical company, providing visual evolution graphs and interactive yearly calendars filterable by rupture type and distribution canal.",
    shortDesc: "Python and Excel rupture analysis tools with evolution graphs and interactive yearly calendars filterable by type and distribution canal.",
    tags: ["Python", "Excel", "Data analysis", "Data transformation", "Data visualization"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/Rupturecounts.png",
    context: "While on an internship at a pharmaceutical company, I was asked to help managing ruptures of medicines.\n\nAfter noticing that no visuals were available for that subject, i decided to create a suite of tools that would give specific and general informations about ruptures\n\nOnly a table filled with dates was provided to my department for rupture analysis, being quite visual myself and knowing a lot of people aren't quite abstract enough to imagine ruptures from raw dates, i knew i could add something really helpful to the company's tool box.",
    projectDetail: "For a general analysis, I made a python script that gives a graph of the evolution of ruptures since the beginning of the database with the possibility to Filters by canals or by complete rupture only.",
    images: [
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/Rupturecounts.png", alt: "General rupture evolution over time" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/RupturecountsCompl%C3%A8te.png", alt: "Complete rupture evolution over time" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/RupturecountsDirect.png", alt: "Rupture evolution - Direct distribution canal" },
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/RupturecountsExport.png", alt: "Rupture evolution - Export distribution canal" }
    ],
    imagesCaption: "Here are 4 different graphs, the first one shows the evolution of ruptures over time, the second one represents the evolution of complete rupture over time the last one displays the evolution for the Direct distribution canal and the export distribution canal",
    sections: [
      {
        title: "Excel Calendar Tool",
        description: "For a more precise analysis, I made an excel based on the rupture's database that gives a visual representation as a yearly calendar for a specific year and reference number, with the possibility to filter by type of rupture or distribution canal*.\n\nIf the date is lit up = rupture\nDate is not lit up = not rupture for that date\n\n*Distribution canal: groupement of clients regarding specific criterions",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/rupture_general.png", alt: "General rupture calendar - Reference 3910688, year 2024" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/rupture_complete_and_partial.png", alt: "Complete and partial ruptures calendar" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/ruipture_direct.png", alt: "Rupture calendar - Direct distribution canal" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/rupture_hospital.png", alt: "Rupture calendar - Hospital distribution canal" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/rupture_export.png", alt: "Rupture calendar - Export distribution canal" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/ruptures/rupture_giphar.png", alt: "Rupture calendar - Giphar distribution canal" }
        ],
        imagesCaption: "Here are the calendars, all using the reference number 3910688 and the year 2024. the first calendar shows any ruptures in red. the second one shows complete ruptures in red. and partial ones in orange. The others filter by distribution canals : Direct, Hospital, Export and Giphar"
      }
    ],
    results: "Both the python and excel files are really intuitive, easy to set up and easy to update, the python file could be entirely automated with the direct access of the database\n\nThe overall analysis graphs are a great visual information for the evolution of ruptures over time, but the real deal Is the excel tool. It delivers quick visual informations that would take normally 10 to 15 minutes in just a click! that saves a lot of time when verifying rupture situations for an important client especially.\n\nThe ruptures of the company might not have been improve directly but the rupture and supply chain department are now more proficient with work and can have a visual representation that helps to make decisions."
  },
  {
    id: "proj3",
    title: "Management tool for the reception of goods",
    categories: ["excel", "data-viz"],
    description: "Excel tool for managing goods reception at a warehouse, featuring color-coded verification of required delivery documents to prevent disruptions in the reception process.",
    shortDesc: "Color-coded Excel tool automating delivery document verification to prevent warehouse reception disruptions.",
    tags: ["Excel", "Data visualization"],
    year: 2024,
    link: "#",
    featured: false,
    image: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/verification_process/excel_br_info.png",
    context: "During an Internship at the supply chain department of a company, I have been in charge of multiples redundant tasks.\n\nThis particular task consisted in manually checking multiple documents to make sure trucks deliveries would go as planned but no tool was available For that purpose\n\nUp to 10 trucks per day could deliver merchandise to our warehouse but the process was often slowed down, always because of one specific document missing.\n\nWithout it, the goods would pile up on the docks, annoying workers and slowing down the Flow of the reception process.\n\nThose documents would be missing For 1 or 2 deliveries per day on average without supervision",
    projectDetail: "The interface provided is extremely easy to understand, using color coding For specific purposes:\n\nGreen = no need to check\nRed = need to ask For the supply chain planner associated [on the same line] to edit the doc\nYellow = different kind of document, Manual verification needed",
    images: [
      { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/verification_process/excel_br_info.png", alt: "Excel interface screenshot showing color-coded verification tool" }
    ],
    imagesCaption: "The excel File takes a CV input which is an extraction of the orders heading to the warehouse as well as data regarding document generation from my e-mails, it then performs a double verification by checking if the document has been generated and checking if a confirmation e-mail has been sent.\n\nEach line represent a different delivery with key informations about it on the left of the table and wether the document are edited or not on the right\n\nThe batch numbers 310G27 3110G27 and PA2188 are in red, this shows that no confirmation emails have been sent, hence explicitly showing that the documents aren't edited yet. I need to inform those planner to edit the documents for those deliveries!\n\n« EPM adamed » is in yellow so I had to verify manually if the docs were edited for this specific delivery",
    results: "This File allowed to significantly reduce my workload (30 to 45 min per day) allowing me to work on more purposeful projects.\n\nI was able to tell planners For up to 7 days prior delivery to edit the document, giving a larger timeframe to solve the problem.\n\nThe reception Flux at the warehouse never have been more Fluid, almost 15 to 20% of deliveries were interrupted before, after implantation of this solution, up to 99% of deliveries due for a certain date would have their documents generated and the reception flux is more smooth.\n\nAll in all, the department got substantial gain in productivity, enhanced the reception flux by a substantial amount, and I managed to gained up to 45 minutes per day for me to address other tasks"
  },
  {
    id: "proj4",
    title: "Add-on for an accountant specific ERP",
    categories: ["python", "excel", "data-viz"],
    description: "Python add-on for MyUnisoft accounting ERP that analyzes accountant efficiency and client profitability, generating Excel pivot table reports with Bonus/Malus analysis and advanced filtering.",
    shortDesc: "Python add-on for MyUnisoft ERP generating Excel pivot table reports to analyze accountant efficiency and client profitability.",
    tags: ["Python", "Excel", "Data analysis", "Data visualisation", "Data transformation"],
    year: 2024,
    link: "#",
    featured: true,
    image: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/MYU/collab_op.png",
    context: "MyUnisoft is an ERP company specialized in accounting firms. A friend of mine who is working there proposed me this project after multiple clients asked for a specific feature : which clients are the most profitable for the firm? And which accountants are the most efficient?\n\nThe stakes here are high, this feature would allow to re-evaluate contracts with clients, transfer knowledge and create new standardized methods if an accountant is noticeably better than others, or even restructure teams. All using data!",
    projectDetail: "The script needs 3 inputs as system arguments : the name of the client, as well as a beginning and an end date to select a timeframe for the analysis. The name of the client is verified with a levenshtein distance to make sure no typos could crash the program. Then It accesses the accounting firm API to retrieve the data and transforms it.\n\nExcel is known by everyone in white collar jobs, hence why we decided to use it as a support for the output. The template comes with several pivot tables, allowing to compare accountants one to another and clients one to another using the concept of Bonus / Malus.\n\nit is also possible to apply filters : fiscal year, expert accountant associated, only taking into account time element with no billing and vice versa, as well as sorting the tables using the bonus or malus (ascending or descending).",
    sections: [
      {
        title: "Basic pivot table use",
        description: "Here is the output of two pivot tables, client / operation, as well as accountant / operation, with no filters,\n\nYou can see 4 columns for each accountant, 2 hourly and 2 absolute values columns. As well as 'prix de vente' and 'valorisation'. The 'valorisation' corresponds to the price rate that was agreed upon by the company and the client, and the 'prix de vente' corresponds to the rate at which the accountant is valued for his work in the company.\n\nThe excel template automatically applies conditional formatting to the values for ease of reading\n\nThe bonus or malus on the 'prix de vente' or 'valorisation' is the difference in between the expected payements and the actual facturation, here is a small example :\n\nAn accountant 'X' has a V of 50$/hour and the PDV is 75$/hour, he spends 2 hours on a task for which the client pays him 300$.\n\nHis absolute bonus or malus (bonimali) for his V is 300 - 2*50 = 200$\n\nHis absolute bonimali for pdv is 300 - 2*75 = 150$\n\nHis hourly bonimali for his V is 300/2 - 50 = 100$\n\nHis hourly bonimali for pdv is 300/2 - 75 = 75$\n\nFor this task, this accountant generated a net bonus of 200$ for the accounting firm, he also generated 150$ more than what is expected of him for this task",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/MYU/collab_op.png", alt: "Excel output - Accountant / Operation pivot table" },
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/MYU/client_op.png", alt: "Excel output - Client / Operation pivot table" }
        ]
      },
      {
        title: "Filtering",
        description: "Here is another pivot table comparing accountant bonuses on their respective clients. Here, a filter is applied and only billing elements with no time spent are shown, as you can see the 'nb heures' (nb hours) column is 0 for all elements",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/MYU/collab_client_filtre_temps_nul.png", alt: "Excel output - Accountant bonuses filtered by zero time" }
        ]
      },
      {
        title: "Sorting",
        description: "Here is the last pivot table available in the standard template, it shows everything, the tasks, the clients and the accountant as well as the time spent on the tasks, here it is filtered for the accountant named XXXXX and is sorted by highest to lowest in order of bonimali prix de vente\n\nOur accountant made a bonus of 10833.34€ on Yves Saint Laurent without working at all , gaining 5000€ on 2 tasks : « Travaux clôture » and « Budget Juridique » but he had a malus on « Conseil juridique » from the brand Clinique",
        images: [
          { src: "https://raw.githubusercontent.com/Hugo69md/Portfolio/main/images/MYU/collab_op_client_filtre_bonimaliprixdevente.png", alt: "Excel output - Complete pivot table filtered by bonimali" }
        ]
      }
    ],
    results: "This add-on allows for good monitoring in accounting firms, the support is easily accessible and modular as pivot tables are widely used and understood."
  },
  {
    id: "proj5",
    title: "Anonymization of dataset to ensure security while using LLMS",
    categories: [],
    description: "Portfolio under construction.",
    shortDesc: "Portfolio under construction.",
    tags: [],
    year: 2025,
    link: "#",
    featured: false,
    underConstruction: true,
    image: null,
    context: "",
    projectDetail: "",
    results: ""
  }
];

export const contactMessages = [];
