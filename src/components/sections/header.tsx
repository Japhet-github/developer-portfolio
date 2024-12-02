"use client"

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const NavItems = ({ closeMenu }: { closeMenu?: () => void }) => (
  <>
    <li><a href="#experience" className="hover:text-primary" onClick={closeMenu}>Experience</a></li>
    <li><a href="#resume" className="hover:text-primary" onClick={closeMenu}>Resume</a></li>
    <li><a href="#projects" className="hover:text-primary" onClick={closeMenu}>Projects</a></li>
    <li><a href="#blog" className="hover:text-primary" onClick={closeMenu}>Blog</a></li>
  </>
)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-10 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LFJ</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <NavItems />
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

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
                  <NavItems closeMenu={closeMenu} />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}