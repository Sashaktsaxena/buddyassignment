"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Download, Lock, Check, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Attachment {
  name: string;
  type: string;
}

interface Answer {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  date: string;
  content: string;
  attachments: Attachment[];
  price: number;
}

interface SimilarDocument {
  id: number;
  title: string;
  wordCount: number;
  pageCount: number;
}

interface Document {
  id: number;
  title: string;
  documentType: string;
  subjectArea: string;
  academicLevel: string;
  wordCount: number;
  pageCount: number;
  author: string;
  date: string;
  contentType: string;
  language: string;
  referenceList: boolean;
  formatting: string;
  content: string;
  attachments: Attachment[];
  answers?: Answer[];
  similarDocuments?: SimilarDocument[];
}

export default function DocumentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [document, setDocument] = useState<Document | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check if user is signed in from URL parameter or localStorage
  useEffect(() => {
    const signedIn = searchParams.get("signedIn") === "true" || localStorage.getItem("isSignedIn") === "true"
    setIsSignedIn(signedIn)

    if (signedIn) {
      localStorage.setItem("isSignedIn", "true")
    }
  }, [searchParams])

  // Fetch document data from API
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/documents/${params.id}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch document')
        }
        
        const data = await response.json()
        setDocument(data)
        setLoading(false)
      } catch (err) {
        setError('Error loading document. Please try again later.')
        setLoading(false)
        console.error('Error fetching document:', err)
      }
    }

    fetchDocument()
  }, [params.id])

  const handleSignIn = () => {
    localStorage.setItem("isSignedIn", "true")
    setIsSignedIn(true)
    router.push(`/document/${params.id}?signedIn=true`)
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading document...</p>
        </div>
      </main>
    )
  }

  if (error || !document) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-sm max-w-md">
          <FileText className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Document Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The requested document could not be found."}</p>
          <Button onClick={() => router.push('/')}>
            Return Home
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="buddy-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <Header />
          <div className="py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {document.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-sm opacity-80">Document Type:</span>
                <span className="text-sm ml-2">{document.documentType}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm opacity-80">Subject Area:</span>
                <span className="text-sm ml-2">{document.subjectArea}</span>
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
              <h2 className="text-lg font-semibold mb-4">Document {document.id}</h2>

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
                    <p>{document.content}</p>
                  </div>

                  {/* Document attachments */}
                  {document.attachments && document.attachments.length > 0 && (
                    <div className="flex gap-4 mt-6">
                      {document.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{attachment.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="relative">
                  {/* Blurred document with overlay */}
                  <div className="blur-sm opacity-100 pointer-events-none">
                    <div className="prose max-w-none text-sm">
                      <p>{document.content}</p>
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
                        Get full access to this document and thousands more. Sign up to view the complete content.
                      </p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleSignIn}>
                        <Lock className="h-4 w-4 mr-2" /> Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isSignedIn && document.answers && document.answers.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Answer ({document.answers.length})</h2>
                  <ChevronDown className="h-5 w-5" />
                </div>

                {document.answers.map((answer) => (
                  <div key={answer.id} className="mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={answer.avatar} />
                        <AvatarFallback>{answer.author.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">{answer.author}</h4>
                          <div className="flex items-center ml-2">
                            <span className="text-yellow-500 text-xs">★</span>
                            <span className="text-xs ml-1">{answer.rating} ({answer.reviewCount})</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">{answer.date}</p>
                      </div>
                    </div>

                    <div className="ml-10">
                      <div className="bg-gray-50 p-4 rounded-lg mb-3">
                        <p className="text-sm text-gray-600">{answer.content}</p>
                      </div>

                      {answer.attachments && answer.attachments.length > 0 && (
                        <div className="flex gap-3 mb-4">
                          {answer.attachments.map((attachment, index) => (
                            <div key={index} className="flex items-center text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                              <FileText className="h-4 w-4 mr-1" />
                              <span>{attachment.name}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 text-xs">
                          Plagiarism Check
                        </Button>
                        <Button variant="outline" className="text-xs">
                          Purchase ${answer.price}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Similar Documents */}
            {document.similarDocuments && document.similarDocuments.length > 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="crown-icon mr-2"></div>
                  <h2 className="text-xl font-bold">Similar Documents</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {document.similarDocuments.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 blur-sm opacity-100 pointer-events-none">
                        Lorem ipsum dolor sit amet consectetur. Morbi integer tempus odio ut fusce pulvinar. Purus in eget
                        vitae posuere laoreet nec. Maecenas tincidunt aliquot pretium eu ornare.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-purple-600">
                          <FileText className="h-4 w-4 mr-1" />
                          <span className="text-xs">Words: {item.wordCount}</span>
                        </div>
                        <div className="flex items-center text-purple-600">
                          <FileText className="h-4 w-4 mr-1" />
                          <span className="text-xs">Pages: {item.pageCount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  <span className="text-sm">{document.contentType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Words:</span>
                  <span className="text-sm">{document.wordCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pages:</span>
                  <span className="text-sm">{document.pageCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Level:</span>
                  <span className="text-sm">{document.academicLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Language:</span>
                  <span className="text-sm">{document.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Reference List:</span>
                  <span className="text-sm">{document.referenceList ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Formatting:</span>
                  <span className="text-sm">{document.formatting}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Uploaded by:</span>
                  <span className="text-sm">{document.author}</span>
                </div>
                {isSignedIn && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Date:</span>
                    <span className="text-sm">{new Date(document.date).toLocaleDateString()}</span>
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