"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/90 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="text-sm font-bold">Ⓜ️</span>
            </div>
            <span className="hidden sm:inline">MediExpert</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive("/") ? "default" : "ghost"} className="rounded-md">
                Diagnostic Tool
              </Button>
            </Link>
            <Link href="/about">
              <Button variant={isActive("/about") ? "default" : "ghost"} className="rounded-md">
                About
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link href="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="w-full justify-start rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Diagnostic Tool
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                className="w-full justify-start rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
