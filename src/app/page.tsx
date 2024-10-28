"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {

  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Effect to toggle to dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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

    </div>
  );
}
