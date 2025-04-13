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

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    // Check if user is signed in from localStorage
    const signedIn = localStorage.getItem("isSignedIn") === "true"
    setIsSignedIn(signedIn)
  }, [])

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
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-[#1a1a2e] hover:bg-[#16162b]">
                  Search
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image
                src="/placeholder.svg?height=400&width=500"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Link href={`/document/${item}`} key={item}>
                    <DocumentCard />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Type of work</h3>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="All Project Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">All Project Types</SelectItem>
                    <SelectItem value="essay">Essay</SelectItem>
                    <SelectItem value="research">Research Paper</SelectItem>
                    <SelectItem value="case-study">Case Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Subject</h3>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Accounting" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="accounting">Accounting</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="economics">Economics</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Type of work</h3>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Any Academic Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="any">Any Academic Level</SelectItem>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="font-medium mb-3">Words</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[275]} max={550000} step={1} />
                  <div className="flex justify-between text-sm">
                    <span>From 275</span>
                    <span>To 550,000</span>
                  </div>
                  <p className="text-sm text-gray-500">1 Page = 275 Words</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply</Button>
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
                    {[
                      "Accounting",
                      "Algebra",
                      "Analysis",
                      "Anthropology",
                      "Archaeology",
                      "Chemistry Tutors",
                      "Coding Tutors",
                      "Computer Science",
                      "Elementary Tutors",
                      "French Tutors",
                      "Geometry Tutors",
                      "Writing Tutor",
                      "Geometry Tutors",
                      "German Tutors",
                      "GMAT Tutors",
                    ].map((subject, index) => (
                      <div
                        key={index}
                        className="bg-white shadow rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-50"
                      >
                        <span className="text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6 space-x-4">
                    <Button variant="outline" size="icon" className="border-blue-200 bg-white">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-blue-200 bg-white">
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