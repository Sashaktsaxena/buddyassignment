"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WifiIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    // Check if user is signed in from localStorage
    const signedIn = localStorage.getItem("isSignedIn") === "true"
    setIsSignedIn(signedIn)
  }, [])

  const handleSignIn = () => {
    localStorage.setItem("isSignedIn", "true")
    setIsSignedIn(true)
    router.refresh()
  }

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn")
    
    setIsSignedIn(false)
    router.refresh()
  }

  return (
    <header className="py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <WifiIcon className="h-6 w-6 mr-2 rotate-90" />
          <span className="text-xl font-bold">BUDDY</span>
        </Link>

        <nav className="flex items-center space-x-2 sm:space-x-4">
          <Link href="#" className="text-sm sm:text-base hover:underline">
            Find Tutor
          </Link>
          <Link href="#" className="text-sm sm:text-base hover:underline">
            Become Tutor
          </Link>
          {isSignedIn ? (
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-sm sm:text-base" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 text-sm sm:text-base"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-sm sm:text-base">
                Get Started For Free
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
