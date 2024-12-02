"use client"

import { SocialLinks } from "@/components/social-links"
import { Header } from "@/components/sections/header"
import { Experience } from "@/components/sections/experience"
import { Resume } from "@/components/sections/resume"
import { Projects } from "@/components/sections/projects"
import { Blog } from "@/components/sections/blog"
import { Footer } from "@/components/sections/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header section */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Experience />
        <Resume />
        <Projects />
        <Blog />
        <SocialLinks/>
      </main>

      <Footer />
    </div>
  );
}
