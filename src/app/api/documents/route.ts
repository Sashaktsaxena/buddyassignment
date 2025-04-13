import { NextResponse } from 'next/server';

const documents = [
  {
    id: 1,
    title: "Financial Statement Analysis for Small Businesses",
    documentType: "Case Study",
    subjectArea: "Accounting",
    academicLevel: "Undergraduate",
    wordCount: 2750,
    pageCount: 10,
    author: "Brandon Vetrovs",
    date: "2023-09-15",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "APA",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue...",
    attachments: [
      { name: "project_instruction.pdf", type: "pdf" },
      { name: "document.docx", type: "docx" }
    ]
  },
  {
    id: 2,
    title: "Cost Accounting Methods in Manufacturing Industries",
    documentType: "Research Paper",
    subjectArea: "Accounting",
    academicLevel: "Masters",
    wordCount: 3240,
    pageCount: 12,
    author: "Maria Johnson",
    date: "2023-10-20",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "MLA",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut...",
    attachments: [
      { name: "research_data.pdf", type: "pdf" }
    ]
  },
  {
    id: 3,
    title: "Tax Implications of Remote Work for International Businesses",
    documentType: "Thesis",
    subjectArea: "Taxation",
    academicLevel: "PhD",
    wordCount: 5140,
    pageCount: 19,
    author: "James Wilson",
    date: "2023-11-05",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "Chicago",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut...",
    attachments: [
      { name: "data_analysis.xlsx", type: "xlsx" },
      { name: "interview_transcripts.pdf", type: "pdf" }
    ]
  },
  {
    id: 4,
    title: "Auditing Practices in the Digital Age",
    documentType: "Essay",
    subjectArea: "Auditing",
    academicLevel: "Undergraduate",
    wordCount: 1850,
    pageCount: 7,
    author: "Sophia Chen",
    date: "2023-12-10",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "AMA",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut...",
    attachments: [
      { name: "figures.pdf", type: "pdf" }
    ]
  }
];

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({ documents });
}
