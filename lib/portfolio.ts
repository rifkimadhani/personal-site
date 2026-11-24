export const profile = {
  name: "Rifki Madhani",
  role: "Backend & Systems Developer",
  description:
    "Rifki Madhani, a backend & systems developer, helps small teams deploy, maintain, and troubleshoot PHP applications and Linux-hosted services.",
  email: "hi@rifkimadhani.web.id",
  linkedin: "https://www.linkedin.com/in/rifkimadhani",
  github: "https://github.com/rifkimadhani",
  x: "https://x.com/madhanirifki",
};

export const stack = ["PHP", "Laravel", "CodeIgniter", "MySQL", "Linux", "Docker"];

export const services = [
  {
    kind: "deployment",
    title: "Deploy an existing app",
    description:
      "Get a PHP application running on a provisioned Linux server. I can help with the runtime, web server, database connection, and checks in the target environment.",
  },
  {
    kind: "maintenance",
    title: "Diagnose a backend issue",
    description:
      "Investigate a specific failure or make a targeted change in an existing Laravel or CodeIgniter app, API, or database-backed workflow.",
  },
  {
    kind: "integration",
    title: "Connect systems",
    description:
      "Integrate an existing application with an external API or device, and trace problems across the application, server, and network when they arise.",
  },
] as const;

export const caseStudies = [
  {
    id: "hospitality-cms",
    category: "Hospitality · Device integration",
    title: "A CMS for connected hotel TVs",
    summary:
      "A central CMS for managing content and room settings across Android set-top boxes and smart TVs.",
    contribution:
      "I worked on CMS features and device-facing APIs for room and device association, configuration, live TV guides, on-demand video, and guest information.",
    challenge:
      "A device’s configuration and its playback behavior could tell different stories. I investigated how CMS settings, Android players, and multicast delivery interacted across different devices.",
    stack: ["CodeIgniter 4", "MariaDB", "REST APIs", "Android TV", "Ubuntu"],
    diagram: ["CMS", "Device API", "TV"],
  },
  {
    id: "clinic-operations",
    category: "Business application · Data modeling",
    title: "Clinic operations in Laravel",
    summary:
      "A business application connecting patient registration and consultations with inventory, billing, and payments.",
    contribution:
      "I worked on related data models and application modules for registration, consultation records, stock, and billing, as well as the Docker-based setup.",
    challenge:
      "The modules shared records across several steps. I worked through how a consultation, a stock change, and a bill relate, and traced issues through application code and database records.",
    stack: ["Laravel 11", "MySQL 8", "Docker", "Nginx", "PHP-FPM"],
    diagram: ["Records", "Stock", "Billing"],
  },
  {
    id: "linux-services",
    category: "Infrastructure · Troubleshooting",
    title: "Running web apps on Linux",
    summary:
      "Configuration and troubleshooting for web applications and media services on local and remotely hosted Ubuntu servers.",
    contribution:
      "I worked with web servers, PHP runtimes, databases, and deployment configuration. Investigations included service failures, disk usage from logs, and FFmpeg-based media delivery.",
    challenge:
      "An application error can originate in code, a stopped service, file permissions, or the network. My work involved narrowing down the failing layer and checking how the service behaved after configuration changes.",
    stack: ["Ubuntu", "Nginx", "Apache", "MariaDB", "Shell", "FFmpeg"],
    diagram: ["Web", "Runtime", "Data"],
  },
] as const;

export const approach = [
  {
    title: "Agree on the scope",
    description: "We define the task, required access, price, and what 'done' looks like.",
  },
  {
    title: "Plan for production",
    description: "Before touching a live system, I check the backup and agree on how to roll back a change.",
  },
  {
    title: "Verify and hand off",
    description: "I check the agreed result and share what changed, what I verified, and any follow-up that remains.",
  },
];
