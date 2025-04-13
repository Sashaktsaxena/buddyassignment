"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import DocumentCard from "@/components/document-card"
import PricingCalculator from "@/components/pricing-calculator"
import CustomOrderForm from "@/components/custom-order-form"
import Link from "next/link"

// Define types
interface Document {
  id: number
  title: string
  documentType: string
  subjectArea: string
  academicLevel: string
  wordCount: number
  pageCount: number
  author: string
  date: string
}

interface DocumentType {
  value: string
  label: string
}

interface AcademicLevel {
  value: string
  label: string
}

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [documents, setDocuments] = useState<Document[]>([])
  const [documentTypes, setDocumentTypes] = useState<DocumentType[]>([])
  const [subjects, setSubjects] = useState<string[]>([])
  const [academicLevels, setAcademicLevels] = useState<AcademicLevel[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("Accounting")
  const [selectedLevel, setSelectedLevel] = useState("any")
  const [wordCount, setWordCount] = useState<number[]>([275])
  const [subjectPage, setSubjectPage] = useState(0)
  const subjectsPerPage = 15

  // Check if user is signed in
  useEffect(() => {
    const signedIn = localStorage.getItem("isSignedIn") === "true"
    setIsSignedIn(signedIn)
  }, [])

  // Fetch documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/documents')
        const data = await response.json()
        setDocuments(data.documents)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching documents:', error)
        setLoading(false)
      }
    }

    fetchDocuments()
  }, [])

  // Fetch document types
  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const response = await fetch('/api/document-types')
        const data = await response.json()
        setDocumentTypes(data.documentTypes)
      } catch (error) {
        console.error('Error fetching document types:', error)
      }
    }

    fetchDocumentTypes()
  }, [])

  // Fetch subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('/api/subjects')
        const data = await response.json()
        setSubjects(data.subjects)
      } catch (error) {
        console.error('Error fetching subjects:', error)
      }
    }

    fetchSubjects()
  }, [])

  // Fetch academic levels
  useEffect(() => {
    const fetchAcademicLevels = async () => {
      try {
        const response = await fetch('/api/academic-levels')
        const data = await response.json()
        setAcademicLevels(data.academicLevels)
      } catch (error) {
        console.error('Error fetching academic levels:', error)
      }
    }

    fetchAcademicLevels()
  }, [])

  // Handle search
  const handleSearch = () => {
    // In a real app, this would trigger an API call with search parameters
    console.log("Searching for:", searchQuery)
  }

  // Handle filter application
  const applyFilters = () => {
    // In a real app, this would trigger an API call with filter parameters
    console.log("Applying filters:", { selectedType, selectedSubject, selectedLevel, wordCount })
  }

  // Paginate subjects
  const paginatedSubjects = subjects.slice(
    subjectPage * subjectsPerPage,
    (subjectPage + 1) * subjectsPerPage
  )

  const nextSubjectPage = () => {
    if ((subjectPage + 1) * subjectsPerPage < subjects.length) {
      setSubjectPage(subjectPage + 1)
    }
  }

  const prevSubjectPage = () => {
    if (subjectPage > 0) {
      setSubjectPage(subjectPage - 1)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="buddy-gradient text-white py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <Header />

          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="md:w-1/2 z-10 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Accounting Homework Samples & Study Documents
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Get Access To Our Online Database Of Accounting Writing Samples.
              </p>
              <div className="relative max-w-md">
                <Input
                  type="text"
                  placeholder="Find any type of work, topic, etc."
                  className="pl-10 pr-24 py-6 rounded-full text-black bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Button 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-[#1a1a2e] hover:bg-[#16162b]"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image
                src="/assets/images/image1.png"
                width={500}
                height={400}
                alt="Students studying together"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Writing Inspiration Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-8">
            <div className="crown-icon mr-2"></div>
            <h2 className="text-2xl md:text-3xl font-bold">Find Writing Inspiration in Our Data Base</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.slice(0, 4).map((doc) => (
                    <Link href={`/document/${doc.id}`} key={doc.id}>
                      <DocumentCard 
                        title={doc.title}
                        documentType={doc.documentType}
                        wordCount={doc.wordCount}
                        pageCount={doc.pageCount}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Type of work</h3>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="All Project Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {documentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Subject</h3>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Accounting" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Academic Level</h3>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Any Academic Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {academicLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Words</h3>
                <div className="space-y-4">
                  <Slider 
                    defaultValue={wordCount} 
                    max={550000} 
                    step={1} 
                    onValueChange={setWordCount}
                  />
                  <div className="flex justify-between text-sm">
                    <span>From {wordCount[0]}</span>
                    <span>To 550,000</span>
                  </div>
                  <p className="text-sm text-gray-500">1 Page = 275 Words</p>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={applyFilters}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PricingCalculator />

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="crown-icon mr-2"></div>
                  <h2 className="text-2xl font-bold">Documents by Type</h2>
                </div>

                <div className="border border-blue-200 rounded-lg p-4 bg-white">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {paginatedSubjects.map((subject, index) => (
                      <div
                        key={index}
                        className="bg-white shadow rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-50"
                      >
                        <span className="text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6 space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="border-blue-200 bg-white"
                      onClick={prevSubjectPage}
                      disabled={subjectPage === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="border-blue-200 bg-white"
                      onClick={nextSubjectPage}
                      disabled={(subjectPage + 1) * subjectsPerPage >= subjects.length}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <CustomOrderForm />
        </div>
      </section>
    </main>
  )
}