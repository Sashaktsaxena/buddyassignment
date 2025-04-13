import { NextResponse } from 'next/server';

const subjects = [
  "Accounting",
  "Algebra",
  "Analysis",
  "Anthropology",
  "Archaeology",
  "Chemistry",
  "Coding",
  "Computer Science",
  "Elementary Education",
  "French",
  "Geometry",
  "Writing",
  "German",
  "GMAT Prep",
  "Business",
  "Economics",
  "Finance",
  "Management",
  "Marketing"
];

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({ subjects });
}