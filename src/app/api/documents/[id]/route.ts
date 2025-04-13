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
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.",
    attachments: [
      { name: "project_instruction.pdf", type: "pdf" },
      { name: "document.docx", type: "docx" }
    ],
    answers: [
      {
        id: 1,
        author: "Corey Stanton",
        avatar: "/placeholder.svg",
        rating: 4.9,
        reviewCount: 98,
        date: "5 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "project_instruction.pdf", type: "pdf" },
          { name: "document.docx", type: "docx" }
        ],
        price: 50
      },
      {
        id: 2,
        author: "Kierra Septimus",
        avatar: "/placeholder.svg",
        rating: 4.8,
        reviewCount: 65,
        date: "3 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "project_instruction.pdf", type: "pdf" }
        ],
        price: 50
      }
    ],
    similarDocuments: [
      {
        id: 5,
        title: "Financial Ratio Analysis for Startups",
        wordCount: 514,
        pageCount: 2
      },
      {
        id: 6,
        title: "Cash Flow Management Techniques",
        wordCount: 514,
        pageCount: 2
      },
      {
        id: 7,
        title: "Balance Sheet Interpretation Guide",
        wordCount: 514,
        pageCount: 2
      }
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
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.",
    attachments: [
      { name: "research_data.pdf", type: "pdf" }
    ],
    answers: [
      {
        id: 3,
        author: "David Chen",
        avatar: "/placeholder.svg",
        rating: 4.7,
        reviewCount: 42,
        date: "1 week ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "solution.pdf", type: "pdf" }
        ],
        price: 45
      }
    ],
    similarDocuments: [
      {
        id: 8,
        title: "Process Costing in Modern Manufacturing",
        wordCount: 612,
        pageCount: 3
      },
      {
        id: 9,
        title: "Activity-Based Costing Analysis",
        wordCount: 530,
        pageCount: 2
      }
    ]
  },
  {
    id: 3,
    title: "Strategic Marketing for Digital Startups",
    documentType: "Business Plan",
    subjectArea: "Marketing",
    academicLevel: "Undergraduate",
    wordCount: 3150,
    pageCount: 11,
    author: "Alicia Rodriguez",
    date: "2023-11-05",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "Harvard",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.",
    attachments: [
      { name: "marketing_plan.pdf", type: "pdf" },
      { name: "customer_persona.xlsx", type: "xlsx" }
    ],
    answers: [
      {
        id: 4,
        author: "Nathan Park",
        avatar: "/placeholder.svg",
        rating: 4.9,
        reviewCount: 87,
        date: "4 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "marketing_strategy.pdf", type: "pdf" }
        ],
        price: 55
      },
      {
        id: 5,
        author: "Sophia Lee",
        avatar: "/placeholder.svg",
        rating: 4.7,
        reviewCount: 52,
        date: "6 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "digital_marketing_analysis.pdf", type: "pdf" },
          { name: "competitor_research.docx", type: "docx" }
        ],
        price: 48
      }
    ],
    similarDocuments: [
      {
        id: 10,
        title: "Social Media Marketing for Tech Startups",
        wordCount: 625,
        pageCount: 3
      },
      {
        id: 11,
        title: "Content Marketing Strategies",
        wordCount: 480,
        pageCount: 2
      },
      {
        id: 12,
        title: "SEO Optimization Guide",
        wordCount: 520,
        pageCount: 2
      }
    ]
  },
  {
    id: 4,
    title: "Sustainability Practices in Global Supply Chains",
    documentType: "Thesis",
    subjectArea: "Supply Chain Management",
    academicLevel: "PhD",
    wordCount: 8750,
    pageCount: 32,
    author: "Thomas Wilson",
    date: "2024-01-10",
    contentType: "User generated",
    language: "English",
    referenceList: true,
    formatting: "Chicago",
    content: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet futurum et malesuada. Mattis fermentum turpis id placerat sed condimentum nunc sed ut. Sollicitudan diam augue. Egestas nunc sed nunc. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut. Sed nunc sed ut.",
    attachments: [
      { name: "thesis_manuscript.pdf", type: "pdf" },
      { name: "research_data.xlsx", type: "xlsx" },
      { name: "interview_transcripts.docx", type: "docx" }
    ],
    answers: [
      {
        id: 6,
        author: "Emily Johnson",
        avatar: "/placeholder.svg",
        rating: 5.0,
        reviewCount: 121,
        date: "2 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "sustainability_analysis.pdf", type: "pdf" },
          { name: "case_studies.docx", type: "docx" }
        ],
        price: 75
      },
      {
        id: 7,
        author: "Michael Zhang",
        avatar: "/placeholder.svg",
        rating: 4.8,
        reviewCount: 93,
        date: "1 week ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "supply_chain_optimization.pdf", type: "pdf" }
        ],
        price: 70
      },
      {
        id: 8,
        author: "Rebecca Torres",
        avatar: "/placeholder.svg",
        rating: 4.9,
        reviewCount: 67,
        date: "10 days ago",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nunc feugiat Studio nulla ut ipsum vestibulum leo vivamus aget a commodo.",
        attachments: [
          { name: "environmental_impact_assessment.pdf", type: "pdf" },
          { name: "sustainability_metrics.xlsx", type: "xlsx" }
        ],
        price: 65
      }
    ],
    similarDocuments: [
      {
        id: 13,
        title: "Ethical Sourcing in Manufacturing",
        wordCount: 720,
        pageCount: 3
      },
      {
        id: 14,
        title: "Carbon Footprint Reduction in Logistics",
        wordCount: 650,
        pageCount: 3
      },
      {
        id: 15,
        title: "Circular Economy Implementation Guide",
        wordCount: 850,
        pageCount: 4
      },
      {
        id: 16,
        title: "ESG Reporting for Supply Chain Management",
        wordCount: 725,
        pageCount: 3
      }
    ]
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const document = documents.find(doc => doc.id === id);
  
  if (!document) {
    return NextResponse.json(
      { error: "Document not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json(document);
}