export type ContactLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  title: string;
  startDate: Date;
  endDate?: Date;
  isPresent?: boolean;
  company: string;
  bullets: string[];
  technologies: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  startDate: Date;
  endDate: Date;
};

type ResumeExperienceDetails = {
  role: string;
  bullets: string[];
};

export type PortfolioProjectItem = {
  title: string;
  description: string;
  type: string;
  images: string[];
  screenshotsAvailable: boolean;
  link?: string;
  live_url?: string;
  tags: string[];
  includeInRecentWork: boolean;
  includeInResumeTimeline: boolean;
  startDate?: Date;
  endDate?: Date;
  isPresent?: boolean;
  resumeExperience?: ResumeExperienceDetails;
};

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const formatDateRange = (
  startDate: Date,
  endDate?: Date,
  isPresent?: boolean
) => {
  const start = monthYearFormatter.format(startDate);

  if (isPresent) {
    return `${start} – Present`;
  }

  if (!endDate) {
    return start;
  }

  return `${start} – ${monthYearFormatter.format(endDate)}`;
};

export const getRangeSortTimestamp = (
  startDate: Date,
  endDate?: Date,
  isPresent?: boolean
) => {
  if (isPresent) {
    return Number.POSITIVE_INFINITY;
  }

  return (endDate ?? startDate).getTime();
};

export const portfolioProjects: PortfolioProjectItem[] = [
  {
    title: "Shiboleth.ai",
    description:
      "Built AI-enabled compliance products using Django, HTMX, and OpenAI API to automate OFAC geo-fencing and call-monitoring workflows for financial operations.",
    type: "Web Application",
    tags: ["Django", "HTMX", "Tailwind CSS", "LLMs", "OpenAI API"],
    screenshotsAvailable: false,
    images: [],
    live_url: "www.shiboleth.ai",
    includeInRecentWork: true,
    includeInResumeTimeline: true,
    startDate: new Date("2024-06-01"),
    isPresent: true,
    resumeExperience: {
      role: "Software Engineer",
      bullets: [
        "Built OFAC Geo-Fencing and Call Monitoring tools with Django + HTMX, integrating LLMs to automate workflows and cut manual effort by 72%.",
        "Improved app responsiveness and UX using Tailwind CSS, boosting operational efficiency by 24%.",
        "Utilized OpenAI API for data automation and insight generation, supporting smarter business decisions.",
        "Supported SOC 2 and PCI DSS audits by leading compliance testing and documentation.",
        "Maintained 95% uptime through continuous testing and performance tuning.",
      ],
    },
  },
  {
    title: "Bestsr.ai",
    description:
      "Built an AI recommendation platform using Django, React, PostgreSQL, and OpenAI API to optimize product attributes and improve Amazon ranking outcomes.",
    type: "Web Application",
    tags: [
      "Django",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
      "LLMs",
      "OpenAI API",
    ],
    screenshotsAvailable: false,
    images: [],
    live_url: "www.bestsr.ai",
    includeInRecentWork: true,
    includeInResumeTimeline: true,
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-01"),
    resumeExperience: {
      role: "Software Engineer",
      bullets: [
        "Built AI-based recommendation system with OpenAI API to optimize product attributes, improving Amazon product rankings by 23%.",
        "Enhanced backend scalability (Django + PostgreSQL), reducing API response time by 26%.",
        "Improved UI/UX with React + Tailwind, reducing task completion time and improving user satisfaction.",
        "Mentored 9 students via Rippen, guiding them on technical and career growth.",
      ],
    },
  },
  {
    title: "FinProve",
    description:
      "Built a financial interview platform using React, DRF, Redux, and MySQL to streamline candidate evaluation and hiring workflows for finance teams.",
    type: "Web Application",
    tags: ["React", "DRF", "Redux", "Onelogin", "MySQL"],
    screenshotsAvailable: true,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618150372/FinProve/Dashboard.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1624676341/FinProve/CaseStudies.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1624676341/FinProve/Job_Candidates.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618150009/FinProve/invite.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1618149616/FinProve/add_editor.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1581519382/FinProve/test.png",
    ],
    link: "https://github.com/sudi-p/finprove",
    includeInRecentWork: true,
    includeInResumeTimeline: true,
    startDate: new Date("2017-12-01"),
    endDate: new Date("2021-11-01"),
    resumeExperience: {
      role: "Senior Software Engineer",
      bullets: [
        "Architected FinProve's SaaS platform using Django and Next.js, supporting thousands of users.",
        "Implemented SSO with OneLogin, OAuth2, and SAML for secure multi-tenant access.",
        "Reduced production incidents by 59% via observability, testing, and CI improvements.",
        "Led cross-functional collaboration to deliver scalable enterprise solutions on time.",
      ],
    },
  },
  {
    title: "RedLentils",
    description:
      "Built an online food-ordering platform using React, DRF, Stripe, and MySQL to enable seamless delivery operations for an Indian cuisine business.",
    type: "Web Application",
    tags: ["React", "DRF", "Flux", "Stripe", "MySQL"],
    screenshotsAvailable: false,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688770/sudippau/the-best-top-10-indian-dishes.jpg",
    ],
    link: "https://github.com/sudi-p/redlentils",
    includeInRecentWork: true,
    includeInResumeTimeline: true,
    startDate: new Date("2017-04-01"),
    endDate: new Date("2017-11-01"),
    resumeExperience: {
      role: "Software Engineer",
      bullets: [
        "Built and deployed full-stack web app with Stripe-based payments and responsive design.",
        "Delivered 30% code quality improvement via modular refactoring and test automation.",
      ],
    },
  },
  {
    title: "GlobalAid",
    description:
      "Built a student support platform using MERN, Next.js, and Redux to help international students discover jobs and rental housing in Canada.",
    type: "Web Application",
    tags: ["MERN", "Next.js", "Redux"],
    screenshotsAvailable: true,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159619/GlobalAid/Website%20Screenshots/home.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159616/GlobalAid/Website%20Screenshots/jobs.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159613/GlobalAid/Website%20Screenshots/rentals.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159610/GlobalAid/Website%20Screenshots/login.png",
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1714159607/GlobalAid/Website%20Screenshots/signup.png",
    ],
    link: "https://github.com/sudi-p/globalaid",
    includeInRecentWork: true,
    includeInResumeTimeline: false,
  },
  {
    title: "50 Headlines",
    description:
      "Built a lightweight news application using Flask and CSS to deliver daily summaries of the top 50 headlines in a simple mobile-friendly interface.",
    type: "Android Application",
    tags: ["Flask", "CSS"],
    screenshotsAvailable: false,
    images: [
      "https://res.cloudinary.com/dtqxwjmwn/image/upload/v1712688768/sudippau/The_Indianapolis_Star__2011.jpg",
    ],
    includeInRecentWork: true,
    includeInResumeTimeline: false,
  },
];

const resumeExperience = portfolioProjects
  .filter(
    (item): item is PortfolioProjectItem & {
      startDate: Date;
      resumeExperience: ResumeExperienceDetails;
    } => Boolean(item.includeInResumeTimeline && item.startDate && item.resumeExperience)
  )
  .map((item) => ({
    title: item.resumeExperience.role,
    startDate: item.startDate,
    endDate: item.endDate,
    isPresent: item.isPresent,
    company:
      item.title === "FinProve"
        ? "FinProve Inc — New York City, NY (Remote)"
        : item.title === "RedLentils"
          ? "RedLentils — Freelance Project"
          : item.title === "Shiboleth.ai"
            ? "Shiboleth.ai (YC W24) — Remote"
            : `${item.title} — Remote`,
    bullets: item.resumeExperience.bullets,
    technologies: item.tags.join(", "),
  }))
  .sort(
    (left, right) =>
      getRangeSortTimestamp(right.startDate, right.endDate, right.isPresent) -
      getRangeSortTimestamp(left.startDate, left.endDate, left.isPresent)
  );

export const resumeData = {
  name: "Sudip Paudel",
  title: "Software Engineer | Full Stack Developer",
  phone: "+1 437-339-6055",
  location: "Toronto, Canada",
  email: "spaudel645@gmail.com",
  contactLinks: [
    {
      label: "linkedin.com/in/sudippau",
      href: "https://linkedin.com/in/sudippau",
    },
    {
      label: "github.com/sudi-p",
      href: "https://github.com/sudi-p",
    },
  ] as ContactLink[],
  summary:
    "Software Engineer specializing in modern web development with Django and React. Skilled in integrating AI into production systems to improve automation, performance, and user experience. Passionate about building scalable, secure, and high-quality applications.",
  skills: [
    {
      label: "Frontend",
      items:
        "React, Redux, TypeScript, CSS (SCSS/SASS, LESS), Tailwind CSS, Next.js",
    },
    {
      label: "Backend",
      items: "Python, Django, Node.js, Express, Flask, MySQL, PostgreSQL, MongoDB",
    },
    {
      label: "AI & Tools",
      items: "OpenAI API, LLMs, Git, Test-driven Development, Jest",
    },
  ],
  experience: resumeExperience as ExperienceItem[],
  education: [
    {
      degree: "Post Graduate Diploma in Global Project Management",
      school: "Loyalist College, Toronto, Canada",
      startDate: new Date("2022-01-01"),
      endDate: new Date("2023-08-01"),
    },
    {
      degree: "Bachelor of Computer Engineering",
      school: "KEC, Tribhuvan University, Kathmandu, Nepal",
      startDate: new Date("2012-11-01"),
      endDate: new Date("2016-10-01"),
    },
  ] as EducationItem[],
};
