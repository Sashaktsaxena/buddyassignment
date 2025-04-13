import { NextResponse } from 'next/server';

const documentTypes = [
  { value: "all", label: "All Project Types" },
  { value: "essay", label: "Essay" },
  { value: "research", label: "Research Paper" },
  { value: "case-study", label: "Case Study" },
  { value: "thesis", label: "Thesis" },
  { value: "report", label: "Report" },
  { value: "analysis", label: "Analysis" }
];

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({ documentTypes });
}
