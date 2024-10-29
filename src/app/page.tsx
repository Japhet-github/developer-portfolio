"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
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
