import { NextResponse } from 'next/server';

const academicLevels = [
  { value: "any", label: "Any Academic Level" },
  { value: "high-school", label: "High School" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "masters", label: "Master's" },
  { value: "phd", label: "PhD" }
];

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({ academicLevels });
}