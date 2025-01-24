const skills = [
  {
    title: 'Java',
    competency: 4,
    category: [ 'Languages'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Google Pub/Sub',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Azure Event Hub',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Tekton',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Azure B2C Authentication',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Vue JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Angular 8',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
