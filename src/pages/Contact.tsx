import React, { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      };

      const response = await fetch(
        "https://n8n.srv796814.hstgr.cloud/webhook/sahiltiwariportfolio",
        options
      );

      if (response.ok) {
        // Show success message
        toast.success("Message sent successfully!", {
          description: "I will get back to you as soon as possible.",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact">
      <SEO
        title="Contact Sahil Tiwari | Get In Touch"
        description="Get in touch with Sahil Tiwari for collaboration, job opportunities, or project inquiries. Fill out the contact form and I'll get back to you as soon as possible."
        keywords="contact Sahil Tiwari, hire software developer, collaborate, job opportunities, project inquiry, get in touch"
      />
      <BackgroundBeamsWithCollision className="w-full">
        <div className="max-w-2xl mx-auto relative z-10 w-full">
          <div className="text-center mb-8 md:mb-10">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10">
              <Mail size={28} className="text-primary sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Contact Me</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Reach out to me over email or fill up this contact form. I will
              get back to you ASAP. I promise.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="input-field resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </Layout>
  );
};

export default Contact;
