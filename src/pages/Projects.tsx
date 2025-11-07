import React from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Briefcase, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

  const goToProjectDetail = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Layout>
      <SEO
        title="Projects | Sahil Tiwari - Full Stack Developer Portfolio"
        description="Explore my portfolio of web development projects including AI-powered applications, full-stack solutions, and modern web applications built with React, TypeScript, and Node.js."
        keywords="projects, portfolio, web development projects, React projects, TypeScript, full stack projects, AI applications, MERN stack"
      />
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="section-title mb-6 md:mb-8">
          <Briefcase size={24} className="text-primary flex-shrink-0" />
          <span className="text-xl sm:text-2xl md:text-3xl">
            What I've been working on
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card cursor-pointer hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => goToProjectDetail(project.id)}
            >
              <div className="h-44 sm:h-48 md:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="text-primary flex items-center gap-1 text-sm group">
                  View Project
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
