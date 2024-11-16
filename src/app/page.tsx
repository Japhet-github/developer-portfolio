"use client"

import Image from "next/image"
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {

  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  // Navigation items component
  const NavItems = () => (
    <>
      <li><a href="#experience" className="hover:text-primary" onClick={closeMenu}>Experience</a></li>
      <li><a href="#resume" className="hover:text-primary" onClick={closeMenu}>Resume</a></li>
      <li><a href="#projects" className="hover:text-primary" onClick={closeMenu}>Projects</a></li>
      <li><a href="#blog" className="hover:text-primary" onClick={closeMenu}>Blog</a></li>
      <li><a href="#contact" className="hover:text-primary" onClick={closeMenu}>Contact</a></li>
    </>
  )

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header section */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Japhet</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <NavItems />
            </ul>
          </nav>

          {/* Dark mode toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav>
                  <ul className="space-y-4">
                    <NavItems />
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Experience section */}
        <section id="experience" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Junior Software Developer</CardTitle>
                    <CardDescription>The Digital Media Collective</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">2023 — Present</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Develop and maintain web applications using modern JavaScript frameworks.
                  Collaborate with cross-functional teams to implement new features and improve existing ones.
                  Participate in code reviews and contribute to the team&apos;s best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Shopify</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Web Designer</CardTitle>
                    <CardDescription>Immedia Summer  Co.</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">Summer 2020</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Design a desktop view site for a client using Figma and Adobe Photoshop.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Figma</Badge>
                  <Badge>Photoshop</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resume section */}
        <section id="resume" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <Card>
            <CardHeader>
              <CardTitle>Japhet</CardTitle>
              <CardDescription>Junior Software Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Skills</h3>
              <ul className="list-disc list-inside mb-4">
                <li>JavaScript (React, Node.js)</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
              <h3 className="font-semibold mb-2">Education</h3>
              <p>Bachelor of Computer Science in Application Developement</p>
              <CardDescription>IIE Varsity College Durban North | 2019 - 2021</CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Projects section */}
        <section id="projects" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>A brief description of Project 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Details about Project 1, technologies used, and your role.</p>
                <Button className="mt-4" variant="outline">View Project</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>A brief description of Project 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Details about Project 2, technologies used, and your role.</p>
                <Button className="mt-4" variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog section */}
        <section id="blog" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Image
                src="https://g-plvg0udsd9l.vusercontent.net/placeholder.svg"
                alt="Blog post 1 cover"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Blog Post 1</CardTitle>
                <CardDescription>Published on Date</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A brief excerpt from your blog post...</p>
                <Button className="mt-4" variant="link">Read More</Button>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="https://g-plvg0udsd9l.vusercontent.net/placeholder.svg"
                alt="Blog post 2 cover"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Blog Post 2</CardTitle>
                <CardDescription>Published on Date</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A brief excerpt from your blog post...</p>
                <Button className="mt-4" variant="link">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:japhet@example.com" className="hover:text-primary">japhet@example.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="h-5 w-5" />
                <a href="https://github.com/japhet" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/japhet</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="h-5 w-5" />
                <a href="https://linkedin.com/in/japhet-banzoulou" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/japhet</a>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-muted py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Japhet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
