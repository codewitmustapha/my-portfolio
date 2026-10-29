import imperiumImg from "../assets/optimized/imperium.webp";
import darulImg from "../assets/optimized/darul.webp";
import flowSyncImg from "../assets/optimized/newproject5.webp";
import leadWorkflowImg from "../assets/optimized/workflows/lead-qualification.webp";
import routingWorkflowImg from "../assets/optimized/workflows/request-routing.webp";
import multiStepWorkflowImg from "../assets/optimized/workflows/multi-step-process.webp";
import adminWorkflowImg from "../assets/optimized/workflows/admin-follow-up.webp";

export const serviceCategories = [
  {
    title: "Website Development",
    slug: "website-development",
    shortLabel: "WEBSITE DEVELOPMENT",
    cardNote: "Design · Build · Improve",
    href: "/services/website-development",
    summary:
      "Professional websites designed to present your business clearly, build trust, and encourage visitors to take the next step.",
  },
  {
    title: "AI Customer Support & Lead Handling",
    slug: "ai-agent-development",
    shortLabel: "AI CUSTOMER SOLUTIONS",
    cardNote: "Answer · Qualify · Guide",
    href: "/services/ai-agent-development",
    summary:
      "Help customers get answers, capture enquiries, qualify leads, and guide requests toward the right next step.",
  },
  {
    title: "Business Workflow Automation",
    slug: "business-workflow-automation",
    shortLabel: "WORKFLOW AUTOMATION",
    cardNote: "Connect · Organize · Follow up",
    href: "/services/business-workflow-automation",
    summary:
      "Connect your business tools and automate repetitive work so information, notifications, and follow-ups keep moving.",
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
    name: "Customer & sales support",
    services: [
      {
        title: "Customer questions & FAQ support",
        description:
          "Answer customer questions, explain services, and handle common inquiries with a useful next step.",
      },
      {
        title: "Lead qualification & next-step guidance",
        description:
          "Respond to visitor questions, explain relevant offers, collect contact details, and guide potential customers toward a purchase.",
      },
      {
        title: "Appointment request handling",
        description:
      "Collect appointment details and prepare booking requests; live availability checks, scheduling, and confirmations require the relevant calendar and messaging connections.",
      },
      {
        title: "WhatsApp customer support",
        description:
      "Answer approved routine questions or collect customer requests through WhatsApp when the channel connection is configured.",
      },
      {
        title: "Telegram customer support",
        description:
      "Respond to routine Telegram enquiries or collect requests when the channel connection is configured.",
      },
      {
        title: "Product & service guidance",
        description:
          "Recommend products, answer product questions, and guide shoppers toward items that match their needs.",
      },
      {
        title: "Business knowledge assistance",
        description:
          "Answer questions using a business’s approved FAQs, documents, policies, and internal information.",
      },
    ],
  },
  {
    name: "Team & operations support",
    services: [
      {
        title: "Voice inquiry handling",
        description:
          "Answer calls, handle basic spoken customer inquiries, and assist with appointment booking where the required voice and scheduling services are configured.",
      },
      {
        title: "Customer onboarding support",
        description:
          "Collect customer information and guide new customers through onboarding and initial setup steps.",
      },
      {
        title: "Email triage & reply preparation",
        description:
          "Classify incoming emails, summarize messages, draft replies, and route requests for review or follow-up.",
      },
      {
        title: "Recruitment application organization",
        description:
          "Organize applications and assist with candidate screening against criteria defined by the business.",
      },
      {
        title: "Review & feedback organization",
        description:
          "Categorize customer feedback and help businesses prepare responses to reviews.",
      },
      {
        title: "CRM update & follow-up assistance",
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
    title: "Answer customer questions across website and WhatsApp",
    situation: "A potential customer asks about services after business hours and wants to know what to do next.",
    steps: ["Ask a question", "Get an answer from approved business information", "Share details or request a next step", "Hand complex questions to a person"],
    helpsWith: "Responding to routine questions while keeping a clear human hand-off.",
    scopeNote: "Website knowledge and WhatsApp access are selected and tested for each project.",
  },
  {
    title: "Collect appointment details and reduce back-and-forth",
    situation: "A salon, consultant, or service business receives booking requests while staff are busy.",
    steps: ["Choose a service", "Share preferred date and time", "Check an approved calendar", "Send confirmation and reminders"],
    helpsWith: "Collecting complete booking requests and reducing manual back-and-forth.",
    scopeNote: "Calendar checks and message sending require the relevant integrations to be connected and verified.",
  },
  {
    title: "Qualify enquiries before the team follows up",
    situation: "A business wants to understand what a new enquiry needs before a person follows up.",
    steps: ["Ask about the goal", "Collect timeline and key requirements", "Summarize the request", "Route it to the right person for review"],
    helpsWith: "Giving the team clearer context for a timely, relevant follow-up.",
    scopeNote: "Qualification questions and routing rules are agreed with the business; a person can review every enquiry.",
  },
  {
    title: "Help shoppers find a suitable product",
    situation: "A shopper is unsure which product or plan fits their needs.",
    steps: ["Ask what the shopper is looking for", "Answer from approved product details", "Suggest a relevant option", "Link to checkout or a person"],
    helpsWith: "Helping shoppers compare options without claiming that a product is available unless inventory is connected.",
    scopeNote: "Catalog, pricing, and stock information are only treated as live when the store integration is connected and tested.",
  },
];

export const workflowVisualExamples = [
  {
    id: "lead-qualification",
    navLabel: "Qualify leads",
    title: "Capture and qualify new enquiries",
    image: leadWorkflowImg,
    alt: "Wide workflow diagram showing an incoming lead, data cleanup and business rules, an AI-assisted qualification step, and different follow-up branches.",
    caption: "Lead intake → organize details → assist qualification → route the next step. The diagram is an example design; any connected tools must be configured and tested for the business.",
    problem: "New enquiries arrive, but the team needs a clearer way to organize each request and decide what should happen next.",
    steps: ["Capture an enquiry from an approved source", "Check and organize its key details", "Use agreed rules or AI to help classify the request", "Send the result to a person or follow-up path for review"],
    outcome: "Give the team a consistent starting point for timely, informed follow-up—without removing human oversight.",
  },
  {
    id: "request-routing",
    navLabel: "Route requests",
    title: "Send each request to the right next step",
    image: routingWorkflowImg,
    alt: "Workflow diagram with one incoming business process branching into several possible routes and follow-up actions.",
    caption: "One intake point → check the request → choose a route → notify the appropriate person or system. The exact branches depend on the business rules.",
    problem: "Different enquiries need different owners, responses, or approval steps, and manual sorting can slow the hand-off.",
    steps: ["Receive the request", "Apply the agreed conditions", "Route it to the correct queue or owner", "Record the hand-off and notify the right person"],
    outcome: "Make the next action easier to see and reduce requests getting lost between people or tools.",
  },
  {
    id: "multi-step-process",
    navLabel: "Connect workflows",
    title: "Connect a multi-step business process",
    image: multiStepWorkflowImg,
    alt: "Extra-wide automation workflow diagram showing a long sequence of connected steps, decision branches, and downstream app actions.",
    caption: "Trigger → process information → make a decision → update connected tools → notify the people involved. Each connection is selected and tested for the actual process.",
    problem: "A task crosses multiple apps or people, so information gets re-entered and progress is hard to follow.",
    steps: ["Start from an approved form or business event", "Move and validate the required information", "Apply decision rules and approval points", "Update the agreed systems and share a status"],
    outcome: "Give a repeat process a clearer path from start to finish, with people kept in the loop.",
  },
  {
    id: "admin-follow-up",
    navLabel: "Reduce repeat admin",
    title: "Reduce repeated admin and follow-up",
    image: adminWorkflowImg,
    alt: "Workflow screenshot containing several smaller automations for recurring business notifications, records, and follow-up tasks.",
    caption: "A recurring event can update a record, prepare a reminder, or send an approved notification—based on the business’s timing and stop rules.",
    problem: "Staff repeat small updates and reminders by hand, even when the same steps happen every time.",
    steps: ["Notice the agreed trigger or schedule", "Update the relevant record", "Prepare the reminder or notification", "Pause, route, or ask for approval when needed"],
    outcome: "Reduce routine hand-offs while keeping approvals and customer communication under business control.",
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
    title: "Understand",
    description: "Understand the business, its customers, and the repetitive tasks or website problems that need solving.",
  },
  {
    title: "Plan",
    description: "Choose a practical approach based on the business requirements.",
  },
  {
    title: "Build and Test",
    description: "Develop the website or workflow and test the relevant functionality.",
  },
  {
    title: "Deliver",
    description:
      "Provide the completed solution and explain how to use it.",
  },
];

export const about = {
  name: "Salawudeen Mustapha",
  location: "Lagos, Nigeria",
  workStyle: "Works remotely and is flexible and reliable.",
  tools: ["HTML", "CSS", "JavaScript", "React", "WordPress", "AI Tools"],
  availability: "Currently accepting freelance projects.",
  description:
    "I build websites and practical customer-support and business workflows to help businesses serve customers clearly and reduce repetitive work.",
};

export const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/2348165403997" },
  { label: "GitHub", href: "https://github.com/codewitmustapha" },
  { label: "Discord", href: "https://discord.gg/9smHSw5n" },
  { label: "Telegram", href: "https://t.me/codewitmustapha" },
];
