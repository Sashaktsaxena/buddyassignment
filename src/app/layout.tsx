  import type React from "react"
  import { Inter } from "next/font/google"
  import "./globals.css"
  import { ThemeProvider } from "@/components/theme-provider"

  const inter = Inter({ subsets: ["latin"] })

  export const metadata = {
    title: "BUDDY - Academic Writing Samples & Tutoring",
    description: "Get access to our online database of academic writing samples and find tutors",
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }
