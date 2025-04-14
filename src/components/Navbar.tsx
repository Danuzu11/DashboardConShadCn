"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/comercios" 
              className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Comercios
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 