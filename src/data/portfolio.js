import imperiumImg from "../assets/optimized/imperium.webp";
import darulImg from "../assets/optimized/darul.webp";
import flowSyncImg from "../assets/optimized/newproject5.webp";

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

export const aiAgentExamples = [
  {
    title: "Website & WhatsApp customer assistant",
    situation: "A potential customer asks about services after business hours and wants to know what to do next.",
    steps: ["Ask a question", "Get an answer from approved business information", "Share details or request a next step", "Hand complex questions to a person"],
    helpsWith: "Responding to routine questions while keeping a clear human hand-off.",
    scopeNote: "Website knowledge and WhatsApp access are selected and tested for each project.",
  },
  {
    title: "Appointment booking assistant",
    situation: "A salon, consultant, or service business receives booking requests while staff are busy.",
    steps: ["Choose a service", "Share preferred date and time", "Check an approved calendar", "Send confirmation and reminders"],
    helpsWith: "Collecting complete booking requests and reducing manual back-and-forth.",
    scopeNote: "Calendar checks and message sending require the relevant integrations to be connected and verified.",
  },
  {
    title: "Sales & lead qualification assistant",
    situation: "A business wants to understand what a new enquiry needs before a person follows up.",
    steps: ["Ask about the goal", "Collect timeline and key requirements", "Summarize the request", "Route it to the right person for review"],
    helpsWith: "Giving the team clearer context for a timely, relevant follow-up.",
    scopeNote: "Qualification questions and routing rules are agreed with the business; a person can review every enquiry.",
  },
  {
    title: "Online-store product guide",
    situation: "A shopper is unsure which product or plan fits their needs.",
    steps: ["Ask what the shopper is looking for", "Answer from approved product details", "Suggest a relevant option", "Link to checkout or a person"],
    helpsWith: "Helping shoppers compare options without claiming that a product is available unless inventory is connected.",
    scopeNote: "Catalog, pricing, and stock information are only treated as live when the store integration is connected and tested.",
  },
];

export const workflowExamples = [
  {
    title: "Capture a lead and update customer records",
    situation: "A visitor submits a website form and the team needs the enquiry in one reliable place.",
    steps: ["Receive the form", "Check required details", "Add or update the CRM/spreadsheet record", "Notify the owner for review"],
    helpsWith: "Reducing manual copying and keeping new enquiries visible to the team.",
    scopeNote: "CRM or spreadsheet access is configured for the specific tools the business approves.",
  },
  {
    title: "Send useful customer follow-ups",
    situation: "A customer requests information or books a service and should hear what happens next.",
    steps: ["Detect the approved event", "Send a confirmation or welcome email", "Create a follow-up reminder", "Stop or adjust follow-ups when the status changes"],
    helpsWith: "Making follow-ups more consistent without sending messages at the wrong time.",
    scopeNote: "Message content, timing, consent, and stop rules are agreed before activation.",
  },
  {
    title: "Confirm bookings and send reminders",
    situation: "A service business wants a clear confirmation process after a customer books.",
    steps: ["Receive a booking", "Create or update the calendar event", "Send the confirmation", "Send a reminder before the appointment"],
    helpsWith: "Keeping the customer and team informed about an agreed appointment.",
    scopeNote: "Calendar and email/messaging steps only run after those systems are connected and verified.",
  },
  {
    title: "Prepare social content for review",
    situation: "A small team has content ideas but needs a simpler way to turn them into a posting plan.",
    steps: ["Add a topic", "Prepare a draft caption", "Review and edit it", "Place the approved post in a content calendar"],
    helpsWith: "Organizing content work so a person remains in control of what gets published.",
    scopeNote: "Publishing is not automatic unless a suitable platform connection is explicitly configured and tested.",
  },
  {
    title: "Update records and prepare a business report",
    situation: "A team repeatedly transfers records between tools and compiles a daily or weekly summary.",
    steps: ["Collect data from an approved source", "Check and map the fields", "Update the spreadsheet or report", "Send the summary for review"],
    helpsWith: "Reducing repeated data entry and making routine summaries easier to prepare.",
    scopeNote: "Report logic and source systems are agreed in advance; the example does not promise a particular time saving.",
  },
  {
    title: "Keep an online order moving",
    situation: "A store wants customers and staff to receive the right updates after an order is placed.",
    steps: ["Receive an order event", "Send an order confirmation", "Update the order record", "Trigger an approved status or post-purchase follow-up"],
    helpsWith: "Connecting order information and customer updates across the store workflow.",
    scopeNote: "Order and payment status are read from the store only when the relevant integration is connected and tested.",
  },
  {
    title: "Process invoices and business documents",
    situation: "A team receives invoices or forms and needs key details organized for review.",
    steps: ["Receive an approved document", "Extract agreed fields", "Flag missing or uncertain details", "Send the record for human review"],
    helpsWith: "Preparing document information for review without skipping the approval step.",
    scopeNote: "Storage, access permissions, and retention rules are set with the business before handling documents.",
  },
  {
    title: "Connect the business apps you already use",
    situation: "A new form, booking, or status update needs to reach several tools without retyping.",
    steps: ["Trigger from a form or approved event", "Create or update a CRM/spreadsheet record", "Notify the right person", "Add a calendar or follow-up task when needed"],
    helpsWith: "Moving information between forms, email, spreadsheets, calendars, and CRMs.",
    scopeNote: "Only selected applications are connected; each path is tested before it is described as live.",
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
      "A self-directed React and Tailwind interface concept for a productivity platform, exploring workflow organization, analytics presentation, and team collaboration. It is a UI study, not a deployed AI or analytics product.",
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
      '"Working with Salawudeen was seamless. He built a modern IPTV website that looks professional and converts extremely well. The interface is fast, responsive, and clearly structured for users to choose plans easily. The backend setup also makes management simple. Exceptional work."',
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
