import React from "react";
import Layout from "@/components/Layout";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  User,
  Code,
  Award,
  Target,
  Brain,
  Heart,
  Star,
  Briefcase,
  GraduationCap,
  Wrench,
  Users,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  const personalInfo = {
    summary:
      "Innovative Developer with expertise in AI integration, scalable frontend, and backend development. Proficient in building web applications using the MERN stack and Next.js, with hands-on experience in AI-powered features like resume matching and job description generation. Improved application performance by 25% and designed backend architectures capable of handling 1,000+ concurrent users. Aspiring to leverage AI and full-stack skills to build impactful, data-driven applications and optimize user experiences.",
    experience: [
      {
        title: "Intern",
        company: "BDA Technologies",
        period: "January 2025 - March 2025",
        location: "Remote",
        achievements: [
          "Designed and implemented features using Tailwind CSS, improving user interface responsiveness by 15% and reducing frontend development time by 10%.",
          "Mastered and applied 3 new technologies, driving a 25% increase in team productivity during the development process.",
          "Utilized HTML and CSS to create web pages, enhancing load speed by 12% and generating a 20% increase in user engagement metrics.",
          "Developed and implemented solutions, increasing coding efficiency and problem-solving capabilities, leading to early completion of key tasks by 20%.",
        ],
      },
    ],
    education: {
      degree: "Bachelor of Engineering in Computer Science",
      university: "Marwadi University",
      location: "Rajkot, Gujarat",
      graduation: "2026",
      courses: [
        "Data Structures and Algorithm",
        "Operating Systems",
        "Object Oriented Programming",
        "Linear Algebra",
        "Calculus",
        "Cloud Computing Essential",
        "Data Science Essential",
        "Machine Learning",
        "Computer Vision",
      ],
    },
    certifications: [
      {
        name: "Explore Machine Learning using Python",
        issuer: "Infosys Springboard",
        year: "2025",
      },
      {
        name: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy Graduate",
        year: "2023",
      },
    ],
    skills: {
      soft: [
        "Teamwork",
        "Communication",
        "Project Management",
        "Agile Methodologies",
      ],
      technical: [
        "Vercel",
        "Netlify",
        "Render",
        "AWS",
        "Git & GitHub",
        "RESTful APIs",
        "JWT Authentication",
        "Tailwind CSS",
        "ShadCN UI",
        "Cloudinary",
      ],
      programming: [
        "C++",
        "MERN Stack (MongoDB, Express.js, React, Node.js)",
        "Next.js",
        "TypeScript",
      ],
      ai: [
        "AI API Integration",
        "Prompt Engineering",
        "LangChain",
        "AI Model Fine-tuning",
        "n8n",
      ],
    },
  };

  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Layout title="About">
      <div className="max-w-4xl mx-auto">
        {/* Hero Card Gallery */}
        <FocusCards cards={cards} />

        <h1 className="section-title mb-8">
          <User size={24} className="text-primary" />
          About Me
        </h1>
        {/* Summary */}
        <div className="mb-12 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
        {/* Experience */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <Briefcase className="text-primary" size={20} />
            Work Experience
          </h2>
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">
                {exp.title} at {exp.company}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.period} | {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Education */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <GraduationCap className="text-primary" size={20} />
            Education
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              {personalInfo.education.degree}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {personalInfo.education.university} |{" "}
              {personalInfo.education.location} |{" "}
              {personalInfo.education.graduation}
            </p>
            <div className="flex flex-wrap gap-2">
              {personalInfo.education.courses.map((course, index) => (
                <span key={index} className="badge">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Certifications */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <Award className="text-primary" size={20} />
            Certifications
          </h2>
          {personalInfo.certifications.map((cert, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} | {cert.year}
              </p>
            </div>
          ))}
        </div>
        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-6">
            {/* Technical Skills */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code className="text-primary" size={20} />
                Technical Expertise
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Programming & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.programming.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.technical.map((tool) => (
                      <span key={tool} className="badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Soft Skills and AI/ML Skills */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="text-primary" size={20} />
                Professional Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.soft.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    AI & Machine Learning
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.skills.ai.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
