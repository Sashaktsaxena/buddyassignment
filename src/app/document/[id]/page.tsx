"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Download, Lock, Check, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DocumentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSignedIn, setIsSignedIn] = useState(false)

  // Check if user is signed in from URL parameter or localStorage
  useEffect(() => {
    const signedIn = searchParams.get("signedIn") === "true" || localStorage.getItem("isSignedIn") === "true"
    setIsSignedIn(signedIn)

    if (signedIn) {
      localStorage.setItem("isSignedIn", "true")
    }
  }, [searchParams])

  const handleSignIn = () => {
    localStorage.setItem("isSignedIn", "true")
    setIsSignedIn(true)
    router.push(`/document/${params.id}?signedIn=true`)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="buddy-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <Header />
          <div className="py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Lorem Ipsum Dolor Sit Amet Consectetur. Risus Augue Sit Vestibulum Convallis Vel Euismod.
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-sm opacity-80">Document Type:</span>
                <span className="text-sm ml-2">Thesis</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm opacity-80">Subject Area:</span>
                <span className="text-sm ml-2">Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Document Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Document 1</h2>

              {isSignedIn ? (
                <>
                  {/* Document toolbar */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="outline" size="sm" className="text-xs">
                      <FileText className="h-3 w-3 mr-1" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Download className="h-3 w-3 mr-1" /> Copy
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Check className="h-3 w-3 mr-1" /> Plagiarism
                    </Button>
                  </div>

                  {/* Full document content */}
                  <div className="prose max-w-none text-sm">
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada.
                      Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas
                      nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                    </p>
                  </div>

                  {/* Document attachments */}
                  <div className="flex gap-4 mt-6">
                    <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>project_instruction.pdf</span>
                    </div>
                    <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>document.docx</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative">
                  {/* Blurred document with overlay */}
                  <div className="blur-sm opacity-100 pointer-events-none">
                    <div className="prose max-w-none text-sm">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada.
                      Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas
                      nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed
                      nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.
                      Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed
                      ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc
                      sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed

       
  
                    </p>
                    </div>
                  </div>

                  {/* Sign up overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-purple-100 rounded-full">
                          <FileText className="h-8 w-8 text-purple-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Sign Up To View The Full Document!</h3>
                      <p className="text-gray-500 text-sm mb-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum
                        vestibulum leo vivamus aget a commodo.
                      </p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleSignIn}>
                        <Lock className="h-4 w-4 mr-2" /> Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isSignedIn && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Answer (2)</h2>
                  <ChevronDown className="h-5 w-5" />
                </div>

                {/* Answer 1 */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Corey Stanton</h4>
                        <div className="flex items-center ml-2">
                          <span className="text-yellow-500 text-xs">★</span>
                          <span className="text-xs ml-1">4.9 (98)</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">5 days ago</p>
                    </div>
                  </div>

                  <div className="ml-10">
                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum
                        vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.
                      </p>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>project_instruction.pdf</span>
                      </div>
                      <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>document.docx</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 text-xs">
                        Plagiarism Check
                      </Button>
                      <Button variant="outline" className="text-xs">
                        Purchase $50
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Answer 2 */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Kierra Septimus</h4>
                        <div className="flex items-center ml-2">
                          <span className="text-yellow-500 text-xs">★</span>
                          <span className="text-xs ml-1">4.8 (65)</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>

                  <div className="ml-10">
                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum
                        vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.
                      </p>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>project_instruction.pdf</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 text-xs">
                        Plagiarism Check
                      </Button>
                      <Button variant="outline" className="text-xs">
                        Purchase $50
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Similar Documents */}
            <div>
              <div className="flex items-center mb-6">
                <div className="crown-icon mr-2"></div>
                <h2 className="text-xl font-bold">Similar Documents</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-4 ">
                    <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 blur-sm opacity-100 pointer-events-none">
                      Lorem ipsum dolor sit amet consectetur. Morbi integer tempus odio ut fusce pulvinar. Purus in eget
                      vitae posuere laoreet nec. Maecenas tincidunt aliquot pretium eu ornare. At ultricies porttitor
                      mauris sem. Mauris leo venenatis.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-purple-600">
                        <FileText className="h-4 w-4 mr-1" />
                        <span className="text-xs">Words: 514</span>
                      </div>
                      <div className="flex items-center text-purple-600">
                        <FileText className="h-4 w-4 mr-1" />
                        <span className="text-xs">Pages: 02</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-6">
                <Lock className="h-4 w-4 mr-2" /> Unlock
              </Button>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Only on Studyloop</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Original Template</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Downloadable</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Content Type:</span>
                  <span className="text-sm">User generated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Words:</span>
                  <span className="text-sm">514</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pages:</span>
                  <span className="text-sm">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Level:</span>
                  <span className="text-sm">High School</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Language:</span>
                  <span className="text-sm">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Reference List:</span>
                  <span className="text-sm">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Formatting:</span>
                  <span className="text-sm">AMA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Uploaded by:</span>
                  <span className="text-sm">Brandon Vetrovs</span>
                </div>
                {isSignedIn && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Date:</span>
                    <span className="text-sm">18/10/2021</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
