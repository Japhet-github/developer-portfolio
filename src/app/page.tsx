"use client"

import Image from "next/image"
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {

  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  // Effect to toggle to dark mode
  useEffect(() => {
    // Check if window is defined (we're in the browser)
    if (typeof window !== 'undefined') {
      // Check for user preference in localStorage
      const storedPreference = localStorage.getItem('darkMode')
      
      if (storedPreference !== null) {
        // If a preference is stored, use it
        setDarkMode(storedPreference === 'true')
      } else {
        // If no stored preference, check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setDarkMode(systemPrefersDark)
      }

      // Listen for changes in system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if there's no stored user preference
        if (localStorage.getItem('darkMode') === null) {
          setDarkMode(e.matches)
        }
      }
      mediaQuery.addEventListener('change', handleChange)

      // Cleanup function
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class and store user preference
    if (darkMode !== undefined) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('darkMode', darkMode.toString())
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

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
          <h1 className="text-2xl font-bold">Japhet&apos;s Portfolio</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <NavItems />
            </ul>
          </nav>

          {/* Dark mode toggle */}
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" checked={darkMode} onCheckedChange={toggleDarkMode} />
            <label htmlFor="dark-mode" className="sr-only">Toggle dark mode</label>
            {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}

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
                    <CardDescription>TechCorp Inc.</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">2022 — Present</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Develop and maintain web applications using modern JavaScript frameworks.
                  Collaborate with cross-functional teams to implement new features and improve existing ones.
                  Participate in code reviews and contribute to the team&apos;s best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Web Development Intern</CardTitle>
                    <CardDescription>StartUp Co.</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">Summer 2021</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Assisted in the development of the company&apos;s main product website.
                  Implemented responsive designs and improved site performance.
                  Gained hands-on experience with modern web development tools and practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Bootstrap</Badge>
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
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
              <h3 className="font-semibold mb-2">Education</h3>
              <p>Bachelor of Science in Computer Science, University Name, Year</p>
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
                <Github className="h-5 w-5" />
                <a href="https://github.com/japhet" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/japhet</a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <a href="https://linkedin.com/in/japhet" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/japhet</a>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-muted py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Japhet All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
