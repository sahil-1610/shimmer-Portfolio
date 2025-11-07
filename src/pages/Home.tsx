import React, { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { projects } from "@/data/projects";
import ProfileImageDialog from "@/components/ProfileImageDialog";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);

  const goToProjectDetail = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Layout>
      <SEO
        title="Sahil Tiwari - Software Developer | Full Stack Developer Portfolio"
        description="Welcome to Sahil Tiwari's portfolio. Explore innovative projects, technical articles on AI/ML, React, TypeScript, and modern web development. Passionate about building scalable solutions."
        keywords="Sahil Tiwari, Portfolio, Software Developer, Full Stack Developer, React Developer, TypeScript, JavaScript, Web Development, AI, Machine Learning"
      />
      <BackgroundLines />
      <div className="max-w-4xl w-full mx-auto">
        <div className="mb-8 md:mb-10 animate-fade-in">
          <div className="flex items-start gap-2 mb-4">
            <span
              className="text-2xl sm:text-3xl cursor-pointer hover:scale-110 transition-transform flex-shrink-0"
              onClick={() => setImageDialogOpen(true)}
            >
              👋
            </span>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={cn(
                "relative font-bold tracking-tight",
                isMobile ? "text-2xl sm:text-3xl" : "text-4xl md:text-5xl"
              )}
              layout
            >
              <span className="block mb-2">Hi, I'm Sahil.</span>
              <div className="block">
                <span className="inline-block mr-2">I make things</span>
                <ContainerTextFlip
                  words={["beautiful", "modern", "scalable", "innovative"]}
                />
              </div>
            </motion.h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            I'm a passionate Software Developer with 1 year of experience in web
            development, specializing in building modern, scalable applications
            using the MERN Stack and Next.js.
          </p>
          <p className="text-md md:text-lg text-muted-foreground mb-8">
            I'm an innovative developer with hands-on expertise in AI
            integration, including AI automation & Agentic AI. I've improved
            application performance by 25% and designed backend architectures
            capable of handling 1,000+ concurrent users.
          </p>
          <p className="text-md md:text-lg text-muted-foreground mb-8">
            I'm driven to create impactful, data-driven applications that are
            fast, user-friendly, and visually engaging.
          </p>
          <BackgroundLines />
        </div>

        <section className="animate-fade-in">
          <h2 className="section-title">
            <Briefcase size={24} className="text-primary" />
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => goToProjectDetail(project.id)}
                className="project-card hover:scale-[1.02] md:hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1 text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
