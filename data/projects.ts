
import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "investment-services-automation",
    title: "AI-Powered Automation for Investment Services",
    category: "Enterprise",
    description: "Streamlined front-office workflows using AI-driven task automation, intelligent assignment, and knowledge-based resolutions.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    overview: "Front-office workflows in investment services are traditionally heavy on manual intervention, involving complex task sorting and resolution search. We implemented an end-to-end automation layer.",
    challenge: "The existing system relied on manual tagging and routing of tickets, leading to slow response times and inconsistent resolution quality based on individual agent knowledge.",
    solution: "We deployed a LLM-based intelligent routing engine that parses incoming requests, assigns them to specialized pools based on sentiment and urgency, and suggests resolutions from a secure internal vector database.",
    keyResults: ["60% Reduction in manual routing", "40% Faster resolution time", "100% Audit trail consistency"],
    technologies: ["OpenAI API", "Python", "React", "Pinecone", "Azure"]
  },
  {
    id: "jira-testing-automation",
    title: "AI-Driven JIRA System Testing Automation",
    category: "Enterprise",
    description: "Automated test case creation, intelligent task assignment, and defect triage using historical JIRA project data.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    overview: "Quality Assurance teams often spend 30% of their time writing repetitive test cases. This project utilized historical JIRA data to automate the heavy lifting.",
    challenge: "Test cycles were ballooning due to the manual effort of drafting test cases for every new feature, coupled with delayed defect triage that missed critical regressions.",
    solution: "Developed a custom JIRA plugin that uses generative models to draft Gherkin-style test cases from user stories and automates defect prioritization based on project history.",
    keyResults: ["Instant test case generation", "25% Higher bug detection rate", "Automated priority labeling"],
    technologies: ["Java", "JIRA SDK", "Anthropic API", "Next.js"]
  },
  {
    id: "stock-recommendation-engine",
    title: "AI-Based Stock Recommendation Engine",
    category: "Enterprise",
    description: "AI-driven stock recommendations combining quantitative models, risk metrics, and market news sentiment analysis.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    overview: "A sophisticated tool designed for analysts to bridge the gap between hard numbers and real-time market sentiment.",
    challenge: "Traditional quantitative models often miss 'black swan' events or sentiment shifts reflected in news cycles until it's too late for profitable entries.",
    solution: "Integrated real-time news scraping with a multi-factor quantitative model. The engine processes alpha factors and news sentiment simultaneously to produce tiered recommendations.",
    keyResults: ["Outperformed baseline by 12%", "Real-time sentiment heatmaps", "Reduced research time by 50%"],
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"]
  },
  {
    id: "ai-document-intelligence",
    title: "AI Document Processing Dashboard",
    category: "Enterprise",
    description: "Extracts data from contracts and PDFs. Flags risks for Legal, HR, and Finance teams.",
    imageUrl: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    overview: "We built an AI-powered document intelligence platform that reads contracts, forms, and PDFs at scale. The system extracts critical data points, flags legal and financial risks, and auto-summarizes complex documents to accelerate review cycles.",
    challenge: "Manual document review for Legal, HR, and Finance teams was slow, inconsistent, and highly error-prone, leading to compliance risks and delayed decision-making.",
    solution: "Our solution involves deep learning models for OCR and NLP to process unstructured document data into structured formats, enabling instant risk detection and data extraction.",
    keyResults: ["90% Speed improvement in review", "Zero missed compliance flags", "Seamless data extraction"],
    technologies: ["OCR", "NLP", "Document AI", "Risk Analysis", "PDF Processing"]
  },
  {
    id: "ai-workflow-automation",
    title: "Workflow Automation Dashboard",
    category: "Enterprise",
    description: "Automates data entry, approvals, and reporting. Invoice → extract → validate → notify.",
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    overview: "We implemented end-to-end AI-driven workflow automation. Invoices are automatically extracted, validated, approved, synced with ERP systems, and finance teams are notified in real time—without manual intervention.",
    challenge: "Repetitive manual workflows consumed over 40 hours per week per employee, slowing operations and increasing the risk of human error.",
    solution: "The system utilizes automated document processing linked to intelligent approval logic, ensuring that every step of the workflow is logged and executed with high precision.",
    keyResults: ["100% Accuracy in invoice syncing", "Reduced manual labor by 40hrs/week", "Real-time stakeholder notifications"],
    technologies: ["Workflow Automation", "Document AI", "ERP Integration", "Approval Routing"]
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Chatbot Dashboard",
    category: "Enterprise",
    description: "24/7 chatbot handles FAQs and tickets. NLP + human handoff + analytics dashboard.",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    overview: "We developed an AI-powered customer support platform using NLP-based chatbots that handle FAQs, order tracking, and ticket triage. The system intelligently escalates complex issues to human agents with full context.",
    challenge: "Customer support teams were overwhelmed and unable to provide 24/7 coverage without significantly increasing headcount.",
    solution: "Integrating advanced NLP models with existing knowledge bases allowed for a seamless conversational interface that handles up to 80% of routine inquiries autonomously.",
    keyResults: ["24/7 Support availability", "80% FAQ automation rate", "Improved CSAT scores"],
    technologies: ["NLP", "Intent Detection", "Knowledge Base", "Human Handoff"]
  },
  {
    id: "medical-imaging-detection",
    title: "Medical Imaging Detection",
    category: "Healthcare",
    description: "AI-powered analysis of chest X-ray and CT images to detect abnormalities with up to 95% accuracy for clinical review.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    overview: "Precision medicine assistant that aids radiologists in prioritizing high-risk scans.",
    challenge: "Radiologists are overwhelmed by scan volumes, leading to potential fatigue and missed subtle abnormalities in early-stage screenings.",
    solution: "A deep learning Computer Vision model trained on 100k+ validated clinical images to highlight regions of interest (ROI) and provide a confidence-scored diagnostic preview.",
    keyResults: ["95% Detection accuracy", "Urgency-based scan sorting", "Clinical-grade reliability"],
    technologies: ["PyTorch", "DICOM", "Docker", "Nvidia Clara"]
  },
  {
    id: "event-management-app",
    title: "Event Management App",
    category: "Events",
    description: "Android application with QR code scanning for paperless registration and real-time attendance tracking.",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    overview: "A seamless mobile-first experience for large-scale enterprise events and summits.",
    challenge: "Manual registration at events was causing long queues and poor data collection on attendee movement.",
    solution: "Developed an Android application with a built-in QR scanner that syncs instantly with a central dashboard for live attendance heatmaps.",
    keyResults: ["Zero paper waste", "Instant check-in process", "Real-time attendee insights"],
    technologies: ["Kotlin", "Firebase", "Node.js", "Express"]
  },
  {
    id: "needcart-marketplace",
    title: "NeedCart Marketplace",
    category: "E-commerce",
    description: "Reverse marketplace where buyers post requirements and sellers bid. Built using MongoDB, Firebase, and Cloudinary.",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    overview: "Disrupting the traditional e-commerce model by putting the power of procurement in the buyers' hands.",
    challenge: "Standard marketplaces often result in 'price matching' fatigue where buyers have to manually compare dozens of vendors for specific needs.",
    solution: "A reverse auction platform where buyers define their 'need' and sellers compete in real-time bids, lowering the cost of procurement.",
    keyResults: ["Increased buyer savings", "Reduced vendor search time", "Streamlined bidding UX"],
    technologies: ["MongoDB", "Firebase", "Cloudinary", "React"]
  }
];
