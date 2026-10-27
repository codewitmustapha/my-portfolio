import imperiumImg from "../assets/optimized/imperium.webp";
import darulImg from "../assets/optimized/darul.webp";
import flowSyncImg from "../assets/optimized/newproject5.webp";
import grangeImg from "../assets/optimized/boutique1.webp";
import phoneRepairImg from "../assets/optimized/lawfirm1.webp";
import bestServerImg from "../assets/optimized/newproject1.webp";

export const serviceCategories = [
  {
    title: "Website Development",
    slug: "website-development",
    shortLabel: "WEBSITE DEVELOPMENT",
    cardNote: "Design · Build · Improve",
    href: "/services/website-development",
    summary:
      "Modern, responsive websites designed to present your business clearly and help visitors take the next step.",
  },
  {
    title: "AI Agent Development",
    slug: "ai-agent-development",
    shortLabel: "AI AGENTS",
    cardNote: "Assist · Guide · Respond",
    href: "/services/ai-agent-development",
    summary:
      "Helpful AI agents that answer questions, guide customers, and support everyday business tasks.",
  },
  {
    title: "Business Workflow Automation",
    slug: "business-workflow-automation",
    shortLabel: "WORKFLOW AUTOMATION",
    cardNote: "Connect · Organize · Follow up",
    href: "/services/business-workflow-automation",
    summary:
      "Connected workflows that reduce repetitive work and keep information and follow-ups moving.",
  },
];

export const websiteDevelopmentServices = [
  {
    title: "Business Websites",
    description:
      "A clear, professional online home for your business, its services, and the people it serves.",
  },
  {
    title: "Conversion Landing Pages",
    description:
      "Focused pages that explain an offer and make it easy for visitors to enquire, sign up, or buy.",
  },
  {
    title: "Professional Service-Business Websites",
    description:
      "Service-led websites that present your expertise, explain what you offer, and help prospective clients get in touch.",
  },
  {
    title: "E-commerce Websites",
    description:
      "Online shops that organize products and make it straightforward for customers to browse and purchase.",
  },
  {
    title: "Portfolio Websites",
    description:
      "A polished way to present your work, projects, and professional profile online.",
  },
  {
    title: "Responsive, Mobile-Friendly Websites",
    description:
      "Websites that adapt their layout and navigation to phones, tablets, and desktop screens.",
  },
  {
    title: "Custom Interfaces",
    description:
      "Purpose-built page layouts and interactive experiences shaped around your business needs.",
  },
  {
    title: "AI-Powered Websites",
    description:
      "Web experiences that include AI-assisted features to help visitors find information or complete tasks.",
  },
];

export const aiAgentServiceGroups = [
  {
    name: "Customer-Facing",
    services: [
      {
        title: "AI Customer Support Agents",
        description:
          "Answer customer questions, explain services, and handle common inquiries with a useful next step.",
      },
      {
        title: "AI Sales & Lead Conversion Agents",
        description:
          "Respond to visitor questions, explain relevant offers, collect contact details, and guide potential customers toward a purchase.",
      },
      {
        title: "AI Appointment Booking Agents",
        description:
          "Collect booking requests, check availability, schedule appointments, and send confirmations when the required calendar and messaging integrations are configured.",
      },
      {
        title: "WhatsApp AI Agents",
        description:
          "Assist customers through WhatsApp conversations, such as answering questions or collecting requests.",
      },
      {
        title: "Telegram AI Agents",
        description:
          "Respond to Telegram messages, collect inquiries, and help users complete supported tasks through Telegram conversations.",
      },
      {
        title: "AI E-commerce Shopping Assistants",
        description:
          "Recommend products, answer product questions, and guide shoppers toward items that match their needs.",
      },
      {
        title: "AI Knowledge Base Assistants",
        description:
          "Answer questions using a business’s approved FAQs, documents, policies, and internal information.",
      },
    ],
  },
  {
    name: "Advanced",
    services: [
      {
        title: "AI Voice Agents",
        description:
          "Answer calls, handle basic spoken customer inquiries, and assist with appointment booking where the required voice and scheduling services are configured.",
      },
      {
        title: "AI Customer Onboarding Agents",
        description:
          "Collect customer information and guide new customers through onboarding and initial setup steps.",
      },
      {
        title: "AI Email Assistants",
        description:
          "Classify incoming emails, summarize messages, draft replies, and route requests for review or follow-up.",
      },
      {
        title: "AI Recruitment Assistants",
        description:
          "Organize applications and assist with candidate screening against criteria defined by the business.",
      },
      {
        title: "AI Review Management Assistants",
        description:
          "Categorize customer feedback and help businesses prepare responses to reviews.",
      },
      {
        title: "AI CRM Assistants",
        description:
          "Help manage customer records, sales opportunities, and follow-up activities within a defined CRM process.",
      },
    ],
  },
];

export const workflowAutomationServices = [
  {
    title: "Business Process Automation",
    description:
      "Connect applications so information can move automatically between systems and repeatable processes require fewer manual hand-offs.",
  },
  {
    title: "Lead Capture & Follow-Up",
    description:
      "Capture leads from forms and websites, save them to a CRM or spreadsheet, notify sales teams, and trigger follow-up steps.",
  },
  {
    title: "Email & Notification Automation",
    description:
      "Automate welcome emails, reminders, confirmations, follow-ups, and internal notifications when a defined business event occurs.",
  },
  {
    title: "AI Content Creation",
    description:
      "Prepare content ideas, captions, and draft material from user-defined topics, then organize it for review in a content calendar.",
  },
  {
    title: "Data Entry & Reporting",
    description:
      "Organize incoming information, update spreadsheets, summarize data, and prepare reports.",
  },
  {
    title: "Document & Invoice Processing",
    description:
      "Extract information from documents, organize records, and route invoices or other items for review.",
  },
  {
    title: "Scheduling & Reminders",
    description:
      "Coordinate appointments, update calendars, and send reminders through a defined scheduling process.",
  },
  {
    title: "E-commerce Business Automation",
    description:
      "Automate order notifications, inventory updates, and customer follow-ups around store activity.",
  },
  {
    title: "AI Sales Workflow Automation",
    description:
      "Connect lead capture, qualification, CRM updates, and sales follow-up in a defined workflow.",
  },
  {
    title: "AI CRM Automation",
    description:
      "Keep customer records updated and trigger appropriate CRM actions based on customer activity.",
  },
  {
    title: "AI Business Reporting",
    description:
      "Summarize business data and prepare scheduled reports for review.",
  },
  {
    title: "Social Media Workflow Automation",
    description:
      "Organize content ideas, prepare draft posts, and manage the steps in a social-media content workflow.",
  },
];

export const portfolioProjects = [
  {
    slug: "imperium-art-decor",
    title: "Imperium Art & Decor",
    category: "Website Development",
    kind: "Website Project",
    description:
      "A high-end luxury furniture website built with React, featuring a fully responsive layout, elegant UI design, and a seamless mobile navigation experience tailored for a premium clientele.",
    image: imperiumImg,
    tags: ["React", "Tailwind"],
    link: "https://thunderous-medovik-fc2640.netlify.app/",
    features: [
      "Responsive layout",
      "Elegant user interface",
      "Mobile navigation",
    ],
  },
  {
    slug: "darul-arqam-islamic-bookshop",
    title: "Darul-Arqam Islamic Bookshop",
    category: "Website Development",
    kind: "Website Project",
    description:
      "Clean, fully responsive bookshop website hand-coded from scratch. Designed to sell physical books and eBooks rooted in Islamic knowledge and culture.",
    image: darulImg,
    tags: ["React", "Tailwind CSS"],
    link: "https://bookshop-usthaz.netlify.app/",
    features: [
      "Responsive bookshop experience",
      "Physical book and eBook catalog",
      "Designed for Islamic knowledge and culture",
    ],
  },
  {
    slug: "flowsync",
    title: "FlowSync",
    category: "Website Development",
    kind: "Concept Project",
    description:
      "A sleek and modern UI for an intelligent productivity platform that helps teams orchestrate workflows with AI-powered context, real-time analytics, and seamless collaboration tools.",
    image: flowSyncImg,
    tags: ["React", "Tailwind CSS"],
    link: "https://flowsync-react.netlify.app/",
    features: [
      "Productivity platform interface concept",
      "Workflow and analytics presentation",
      "Collaboration-focused interface",
    ],
    note: "Concept/interface project; not presented as work for a real client.",
  },
  {
    slug: "the-grange-ashford",
    title: "The Grange Ashford",
    category: "Website Development",
    kind: "Website Project",
    description:
      "A clean, professional WordPress website built for a residential care home in Kent. Designed to showcase services, facilities, and build trust with families seeking senior care.",
    image: grangeImg,
    tags: ["WordPress"],
    link: "https://thegrangeashford.co.uk/",
    features: [
      "Services and facilities presentation",
      "Professional care-home information",
      "Designed for families seeking senior care",
    ],
  },
  {
    slug: "phone-repair-more",
    title: "Phone Repair & More",
    category: "Website Development",
    kind: "Website Project",
    description:
      "A fully responsive multi-location WordPress website built for a Florida-based device repair company. Designed to showcase services, locations, and drive repair bookings.",
    image: phoneRepairImg,
    tags: ["WordPress", "Custom Theme"],
    features: [
      "Responsive multi-location website",
      "Repair services and locations presentation",
      "Booking-focused website experience",
    ],
  },
  {
    slug: "best-server-iptv",
    title: "Best Server IPTV",
    category: "Website Development",
    kind: "Website Project",
    description:
      "A fully responsive WordPress WooCommerce website built for an IPTV subscription service. Designed to showcase pricing plans, features, and drive subscription purchases.",
    image: bestServerImg,
    tags: ["WordPress", "WooCommerce"],
    link: "https://bestserveriptv.net/",
    linkStatus: "unverified",
    features: [
      "Responsive WooCommerce website",
      "Subscription pricing and features presentation",
      "Purchase-focused store experience",
    ],
  },
  {
    slug: "website-support-sales-agent",
    title: "Website Support & Sales Agent",
    category: "AI Agents",
    kind: "AI Demo Project",
    isDemo: true,
    description:
      "A local scripted demo that answers common questions, recommends a relevant service area or shows a product-assistant example, and sorts an inquiry using the visitor’s stated intent.",
    demoPreview: "Interactive website support and sales agent demo",
    tags: ["Customer Support", "Lead Collection", "Demo"],
    problem:
      "Website visitors may need quick answers or guidance before they are ready to make an inquiry.",
    solution:
      "A conversational demo guides visitors through FAQs and recommendations, captures a selected service interest and contact details, then points to contact or booking.",
    features: [
      "Answers frequently asked questions",
      "Recommends a relevant service area or shows scripted product guidance from the visitor’s question",
      "Collects visitor contact details",
      "Applies a transparent local qualification rule to stated intent",
      "Guides visitors toward contact or booking",
    ],
    businessValue:
      "Makes it easier for visitors to find relevant information and gives the business a structured way to receive interested inquiries.",
    workflow: ["Visitor question", "FAQ answer", "Recommendation", "Lead interest", "Contact or booking"],
    note: "Demo project. No live third-party API integration is implied.",
  },
  {
    slug: "whatsapp-telegram-assistant",
    title: "WhatsApp & Telegram Assistant",
    category: "AI Agents",
    kind: "AI Demo Project",
    isDemo: true,
    description:
      "A messaging assistant demo that collects a customer inquiry and shows how it can be organized for routing to the appropriate next step.",
    demoPreview: "Messaging inquiry collection and routing demo",
    tags: ["WhatsApp", "Telegram", "Demo"],
    problem:
      "Business inquiries arriving through messaging channels can be difficult to collect and route consistently.",
    solution:
      "A conversation-flow demo gathers the inquiry details and presents a clear routing example.",
    features: [
      "Messaging-style conversation interface",
      "Inquiry detail collection",
      "Example request routing",
    ],
    businessValue:
      "Shows a consistent way to collect customer requests and direct them to the right follow-up path.",
    workflow: ["Customer message", "Collect inquiry", "Organize request", "Route for follow-up"],
    note: "Demo only; no live WhatsApp, Telegram, or other API integration is claimed.",
  },
  {
    slug: "appointment-booking-system",
    title: "Appointment Booking System",
    category: "AI Agents",
    kind: "AI Demo Project",
    isDemo: true,
    description:
      "A booking demo that collects appointment details, presents time-slot choices, and shows a simulated confirmation.",
    demoPreview: "Appointment details, time-slot selection, and simulated confirmation demo",
    tags: ["Appointment Booking", "Simulation", "Demo"],
    problem:
      "Arranging an appointment can require repeated exchanges to gather details and agree on a time.",
    solution:
      "A guided booking flow collects the requested details, displays time-slot options, and confirms the demo booking in the interface.",
    features: [
      "Appointment detail collection",
      "Time-slot selection",
      "Simulated appointment confirmation",
    ],
    businessValue:
      "Illustrates a more organized booking experience and makes the requested appointment information visible in one flow.",
    workflow: ["Booking request", "Collect details", "Choose time slot", "Simulated confirmation"],
    note: "The appointment and confirmation are simulated; no live calendar or notification integration is claimed.",
  },
  {
    slug: "lead-crm-automation",
    title: "Lead Capture & CRM Automation",
    category: "Workflow Automation",
    kind: "Automation Demo",
    isDemo: true,
    description:
      "A workflow demo showing how a lead can be captured, qualified, recorded, and prepared for follow-up.",
    demoPreview: "Lead capture, qualification, CRM record, and follow-up workflow demo",
    tags: ["Lead Capture", "CRM", "Automation Demo"],
    problem:
      "When lead details and follow-ups are handled manually, important context can be hard to keep together.",
    solution:
      "A sample workflow moves a submitted lead through qualification, a CRM-style record, and a follow-up step.",
    features: [
      "Lead detail capture",
      "Qualification step",
      "CRM-style record example",
      "Follow-up step",
    ],
    businessValue:
      "Makes the lead journey easier to review and supports more consistent follow-up.",
    workflow: ["Lead form", "Local review rule", "Demo CRM record", "Follow-up"],
    note: "Workflow demo; no live CRM or external service integration is implied.",
  },
  {
    slug: "content-social-automation",
    title: "Content & Social Workflow",
    category: "Workflow Automation",
    kind: "Automation Demo",
    isDemo: true,
    description:
      "A content workflow demo that takes a topic through a draft and into an organized content-calendar example.",
    demoPreview: "Topic-to-draft-to-calendar content workflow demo",
    tags: ["Content Workflow", "Social Media", "Automation Demo"],
    problem:
      "Moving from an initial topic to a prepared draft and a planned publishing slot can involve several disconnected steps.",
    solution:
      "A sample workflow organizes the topic, draft, and calendar entry in one visible sequence.",
    features: [
      "Topic submission",
      "Draft content preview",
      "Content-calendar example",
    ],
    businessValue:
      "Provides a clearer path for organizing content ideas and preparing them for review and scheduling.",
    workflow: ["Enter topic", "Prepare draft", "Review content", "Add to calendar"],
    note: "Demo drafts are produced locally from templates; no live AI or social-media API integration is claimed.",
  },
  {
    slug: "end-to-end-business-workflow",
    title: "End-to-End Business Workflow",
    category: "Workflow Automation",
    kind: "Automation Demo",
    isDemo: true,
    description:
      "A workflow demo showing a form submission moving through local processing, a local record, and notification and follow-up steps.",
    demoPreview: "Form-to-processing-to-record-to-notification workflow demo",
    tags: ["Business Process", "Notifications", "Automation Demo"],
    problem:
      "Information submitted in a form may need to be processed, recorded, and followed up through separate manual steps.",
    solution:
      "A sample end-to-end flow demonstrates local form processing, a local record, and notification and follow-up stages.",
    features: [
      "Form input",
      "Local processing step",
      "Local record example",
      "Notification and follow-up stages",
    ],
    businessValue:
      "Shows how a request can move through a more legible sequence from submission to follow-up.",
    workflow: ["Form", "Simulated AI classification", "Local record", "Notification", "Follow-up"],
    note: "Demo workflow uses local processing and records; no live external notification integration is claimed.",
  },
];

export const testimonials = [
  {
    quote:
      '"Salawudeen delivered a beautiful and professional Islamic bookstore website for Darul Arqam. The design feels clean, trustworthy, and easy to navigate. Our customers can now browse and purchase books effortlessly. Since launch, our online orders have increased significantly. Highly recommended for anyone needing a premium eBook or bookstore platform."',
    name: "Abdulazeez Abdulwaheed",
    role: "Director, Darul Arqam Islamic Bookshop",
    initial: "A",
  },
  {
    quote:
      '"The luxury furniture website exceeded our expectations. Salawudeen created a visually stunning platform that perfectly represents our high-end brand. The layout, animations, and product presentation feel truly premium. Our clients constantly compliment the design and smooth experience."',
    name: "Mayor Kenneth",
    role: "Founder, Imperium Furniture",
    initial: "M",
  },
  {
    quote:
      '"Working with Salawudeen was seamless. He built a modern IPTV website that looks professional and converts extremely well. The interface is fast, responsive, and clearly structured for users to choose plans easily. The backend setup also makes management simple. Exceptional work',
    name: "Michael Grant",
    role: "CEO, Best Server IPTV",
    initial: "M",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "Understand the business, its challenges, and its goals.",
  },
  {
    title: "Plan",
    description:
      "Identify the right website, AI solution, or automation workflow.",
  },
  {
    title: "Build",
    description: "Develop and configure the solution.",
  },
  {
    title: "Test",
    description:
      "Verify the experience, integrations, and expected behavior.",
  },
  {
    title: "Deliver",
    description:
      "Provide the finished solution and explain how to use it.",
  },
];

export const about = {
  name: "Salawudeen Mustapha",
  location: "Lagos, Nigeria",
  workStyle: "Works remotely and is flexible and reliable.",
  tools: ["HTML", "CSS", "JavaScript", "React", "WordPress", "AI Tools"],
  availability: "Currently accepting freelance projects.",
  description:
    "I build websites, AI agents, and automated workflows to help businesses present their services, support customers, and reduce repetitive work.",
};

export const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/2348165403997" },
  { label: "GitHub", href: "https://github.com/codewitmustapha" },
  { label: "Discord", href: "https://discord.gg/9smHSw5n" },
  { label: "Telegram", href: "https://t.me/codewitmustapha" },
];

export const demoProjectSlugs = [
  "website-support-sales-agent",
  "whatsapp-telegram-assistant",
  "appointment-booking-system",
  "lead-crm-automation",
  "content-social-automation",
  "end-to-end-business-workflow",
];
