/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Ford Pro',
    position: 'Java Full Stack Developer',
    url: 'https://www.fordpro.com/',
    startDate: '2022-06-15',
    summary: "FordPro offers Commercial fleet management software for various sized customers around the world, enabling them to focus on what's more important for the growth of their business.",
    highlights: [
      'Developed an interactive dashboard for processing approval requests which enabled users to view real-time metrics for vehicle maintenance, enhancing customer experience.',
      'Engineered and optimized system interactions for new features, improving CPU efficiency and user experience; developed accessible front-end interfaces using Vue.js, and ensured compliance with design team standards.',
      'Developed and streamlined DevOps tools for seamless deployment and testing, with strong expertise in Spring Boot, Java 18, and cloud platforms (GCP and Azure); proficient in managing databases (Postgres, SQL) and message queuing systems (RabbitMQ, Google Pub/Sub).',
      'Automated repetitive tasks with custom scripts, provided L3 support for production issues, and managed version control and collaboration using GitHub Enterprise, adept in Jira for project management and Postman for API testing.',
      'Applied Test-Driven Development (TDD) practices and engaged in pair programming to ensure high code quality and robust solutions; developed and streamlined DevOps tools for seamless deployment and testing.',
      'Designed and implemented Spring microservice architecture to enhance API response times and user experience; developed and integrated GraphQL for flexible queries and Elasticsearch for advanced search capabilities.',
    ],
  },
  {
    name: 'CGI',
    position: 'Software Developer',
    url: 'https://www.cgi.com/',
    startDate: '2020-08-01',
    endDate: '2021-08-16',
    summary: `Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are
    used by hundreds of thousands of people every day to access financial services. As VP of Engineering,
    I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,
    and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted
    from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head
    of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8 engineers and spend
    >50% of my time writing code.`,
    highlights: [
      'Developed automated tool for error and standards check on XML files, reducing manual audit time by 90% and improving data accuracy.',
      'Developed a React CRUD application with dynamic user roles and user-specific content which enhanced segregation of duties.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
    ],
  },
  {
    name: 'CognitiveBotics',
    position: 'Angular Development Intern',
    url: 'https://cognitivebotics.com/',
    startDate: '2019-10-04',
    endDate: '2020-05-29',
    summary: 'Empowering therapists to provide personalized digital therapy for children with Autism, ADHD, Down Syndrome, and developmental delays.',
    highlights: [
      'Worked with dashboard creation using Angular for AUTISM treatment.',
      'Designed and developed a tracking and treatment system for Autism, using Angular, to provide real-time patient treatment performance metrics for doctors and patient families. This data was used to track and improve treatment plans.',
      'Designed and Built a chatBot for interactive communication.',
    ],
  },
];

export default work;
