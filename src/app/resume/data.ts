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
  experience: [
    {
      title: "Software Engineer",
      startDate: new Date("2024-06-01"),
      isPresent: true,
      company: "Shiboleth.ai (YC W24) — Remote",
      bullets: [
        "Built OFAC Geo-Fencing and Call Monitoring tools with Django + HTMX, integrating LLMs to automate workflows and cut manual effort by ~72%.",
        "Improved app responsiveness and UX using Tailwind CSS, boosting operational efficiency by 24%.",
        "Utilized OpenAI API for data automation and insight generation, supporting smarter business decisions.",
        "Supported SOC 2 and PCI DSS audits by leading compliance testing and documentation.",
        "Maintained 95% uptime through continuous testing and performance tuning.",
      ],
      technologies: "Django, HTMX, Tailwind CSS",
    },
    {
      title: "Software Engineer",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-12-01"),
      company: "Bestsr.ai — Remote",
      bullets: [
        "Built AI-based recommendation system with OpenAI API to optimize product attributes, improving Amazon product rankings by 23%.",
        "Enhanced backend scalability (Django + PostgreSQL), reducing API response time by 26%.",
        "Improved UI/UX with React + Tailwind, reducing task completion time and improving user satisfaction.",
        "Mentored 9 students via Rippen, guiding them on technical and career growth.",
      ],
      technologies: "Django, React, PostgreSQL, Tailwind CSS, OpenAI API",
    },
    {
      title: "Senior Software Engineer",
      startDate: new Date("2017-12-01"),
      endDate: new Date("2021-11-01"),
      company: "FinProve Inc — New York City, NY (Remote)",
      bullets: [
        "Architected FinProve's SaaS platform using Django and Next.js, supporting thousands of users.",
        "Implemented SSO with OneLogin, OAuth2, and SAML for secure multi-tenant access.",
        "Reduced production incidents by 59% via observability, testing, and CI improvements.",
        "Led cross-functional collaboration to deliver scalable enterprise solutions on time.",
      ],
      technologies: "Django, React, D3.js, Redux, MySQL, SCSS, OneLogin, OAuth, SAML",
    },
    {
      title: "Software Engineer",
      startDate: new Date("2017-04-01"),
      endDate: new Date("2017-11-01"),
      company: "RedLentils — Freelance Project",
      bullets: [
        "Built and deployed full-stack web app with Stripe-based payments and responsive design.",
        "Delivered 30% code quality improvement via modular refactoring and test automation.",
      ],
      technologies: "React, Flux, Django, SCSS, Stripe.js, MySQL",
    },
  ] as ExperienceItem[],
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
