import { useMemo, useState } from "react";

const serviceOptions = [
  { value: "website", label: "Website development" },
  { value: "agent", label: "AI agent development" },
  { value: "automation", label: "Business workflow automation" },
  { value: "unsure", label: "I am not sure yet" },
];

const goalOptions = [
  { value: "present-offer", label: "Present a service or offer more clearly", service: "website", firstStep: "Clarify the audience, offer, key pages, and the next action a visitor should take." },
  { value: "answer-questions", label: "Answer repeat customer questions", service: "agent", firstStep: "Choose approved information sources, define what the assistant can answer, and set a human hand-off for anything uncertain." },
  { value: "follow-up-leads", label: "Capture and follow up with leads", service: "automation", firstStep: "Map where leads arrive, which details are required, who owns each follow-up, and how the record should be stored." },
  { value: "book-appointments", label: "Collect and coordinate appointment requests", service: "agent", firstStep: "Confirm the calendar, availability rules, time zone, confirmation channel, and exception path before connecting a booking flow." },
  { value: "reduce-admin", label: "Reduce repetitive internal admin", service: "automation", firstStep: "Write down the trigger, information passed between tools, review points, and the person responsible for exceptions." },
  { value: "organize-info", label: "Organize information or reporting", service: "automation", firstStep: "Identify the source data, destination format, reporting cadence, and which decisions still require human review." },
];

const audienceOptions = [
  "Website visitors",
  "Existing customers",
  "Internal team",
  "A mix of customers and staff",
];

const channelOptions = [
  "Website",
  "WhatsApp",
  "Telegram",
  "Email",
  "Spreadsheet or CRM",
  "Not sure yet",
];

const handoffOptions = [
  "Send a person a summary when the request is ready",
  "Ask for missing details before handing it over",
  "Keep approval and final decisions with a person",
];

const serviceLabelByValue = Object.fromEntries(serviceOptions.map((option) => [option.value, option.label]));

function createProjectBrief(form) {
  const goal = goalOptions.find((option) => option.value === form.goal);
  if (!goal) return "";
  const service = form.service === "unsure" ? goal.service : form.service;
  const firstRelease = {
    website: "A focused website experience with clear content, responsive layouts, and a visible next step for the visitor.",
    agent: "A narrowly scoped assistant using approved information, clear limits, and a visible human hand-off.",
    automation: "A mapped trigger, information path, review rule, and follow-up owner before any tools are connected.",
  }[service];

  return [
    "PROJECT STARTER",
    "",
    `Goal: ${goal.label}`,
    `Suggested starting point: ${serviceLabelByValue[service]}`,
    `Intended users: ${form.audience}`,
    `Preferred channel: ${form.channel}`,
    `Human hand-off: ${form.handoff}`,
    "",
    `A sensible first version: ${firstRelease}`,
    `First discovery question: ${goal.firstStep}`,
    "",
    "Planning note: This is a starting brief based on the choices above. It is not a technical estimate, a promise of results, or output from a live AI service. Integrations and requirements should be confirmed before build work begins.",
  ].join("\n");
}

function downloadText(text, filename) {
  const file = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function copyText(text) {
  if (!navigator.clipboard?.writeText) throw new Error("Clipboard access is not available in this browser.");
  await navigator.clipboard.writeText(text);
}

function addToContact(subject, message) {
  window.dispatchEvent(new CustomEvent("portfolio:prefill-contact", { detail: { subject, message } }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProjectPlanner() {
  const [form, setForm] = useState({ service: "unsure", goal: "", audience: "", channel: "", handoff: "" });
  const [brief, setBrief] = useState("");
  const [notice, setNotice] = useState("");

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function create(event) {
    event.preventDefault();
    setBrief(createProjectBrief(form));
    setNotice("Your project starter is ready. Review it before deciding what to share.");
  }

  async function copyBrief() {
    try {
      await copyText(brief);
      setNotice("Brief copied. It has not been sent anywhere.");
    } catch {
      setNotice("Copy is unavailable here. You can still select the brief text below or download it.");
    }
  }

  function sendBriefToForm() {
    addToContact("Project planning brief", brief);
    setNotice("Brief added to the contact form. Nothing is sent until you submit that form.");
  }

  return (
    <article className="interactive-tool-card planner-card" id="project-planner">
      <div className="tool-card-head">
        <span className="tool-index">01 / PLAN</span>
        <span className="tool-badge">Project planner</span>
      </div>
      <h3>Turn an idea into a useful first brief.</h3>
      <p className="tool-lede">Choose what you are trying to improve. Get a clear starting point you can edit, copy, download, or bring to a conversation.</p>

      <form className="tool-form" onSubmit={create}>
        <label className="tool-field">
          <span>What do you want to improve?</span>
          <select name="goal" value={form.goal} onChange={update} required>
            <option value="">Choose a goal</option>
            {goalOptions.map((goal) => <option value={goal.value} key={goal.value}>{goal.label}</option>)}
          </select>
        </label>
        <div className="tool-field-grid">
          <label className="tool-field">
            <span>Starting point</span>
            <select name="service" value={form.service} onChange={update}>
              {serviceOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label className="tool-field">
            <span>Who is it for?</span>
            <select name="audience" value={form.audience} onChange={update} required>
              <option value="">Choose an audience</option>
              {audienceOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="tool-field">
            <span>Where should it happen?</span>
            <select name="channel" value={form.channel} onChange={update} required>
              <option value="">Choose a channel</option>
              {channelOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="tool-field">
            <span>When should a person step in?</span>
            <select name="handoff" value={form.handoff} onChange={update} required>
              <option value="">Choose a hand-off rule</option>
              {handoffOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        </div>
        <button className="button button-primary tool-submit" type="submit">Create my project starter <span aria-hidden="true">→</span></button>
      </form>

      {notice && <p className="tool-notice" role="status" aria-live="polite">{notice}</p>}
      {brief && (
        <div className="tool-result">
          <div className="tool-result-heading"><div><span className="tool-result-label">YOUR PROJECT STARTER</span><h4>{serviceLabelByValue[form.service === "unsure" ? goalOptions.find((goal) => goal.value === form.goal)?.service : form.service]}</h4></div></div>
          <pre className="planner-brief">{brief}</pre>
          <div className="tool-actions">
            <button className="button button-secondary" type="button" onClick={copyBrief}>Copy brief</button>
            <button className="button button-secondary" type="button" onClick={() => downloadText(brief, "project-starter.txt")}>Download .txt</button>
            <button className="button button-ink" type="button" onClick={sendBriefToForm}>Add to inquiry <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      )}
      <p className="tool-disclaimer">This planner applies transparent rules to your choices; it does not call an AI model, connect to your systems, or send your answers.</p>
    </article>
  );
}

const taskOptions = [
  { value: "lead-follow-up", label: "Lead follow-up", suggestion: "Map where enquiries arrive, the information needed for a follow-up, who owns it, and how the next action is recorded." },
  { value: "customer-questions", label: "Repeated customer questions", suggestion: "Collect approved answers, identify questions that need a person, and define where the hand-off goes." },
  { value: "data-entry", label: "Copying or updating information", suggestion: "List the source and destination records, required fields, duplicate rules, and cases that need human review." },
  { value: "appointments", label: "Scheduling and reminders", suggestion: "Confirm the calendar, time-zone rules, confirmation channel, cancellation process, and exception owner." },
  { value: "reports", label: "Preparing reports", suggestion: "Identify the source data, reporting cadence, definitions, and the decisions a person must review." },
  { value: "other", label: "Another recurring task", suggestion: "Write down the trigger, inputs, decision point, output, and person responsible when the process needs attention." },
];

function formatHours(minutes) {
  const hours = minutes / 60;
  if (hours < 1) return `${new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(minutes)} min`;
  return `${new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(hours)} hr`;
}

export function WorkflowTimeAudit() {
  const [inputs, setInputs] = useState({ task: "", minutes: "", repeats: "", people: "" });
  const [notice, setNotice] = useState("");

  function update(event) {
    setInputs((current) => ({ ...current, [event.target.name]: event.target.value }));
    setNotice("");
  }

  const audit = useMemo(() => {
    const minutes = Number(inputs.minutes);
    const repeats = Number(inputs.repeats);
    const people = Number(inputs.people);
    if (!inputs.task || !Number.isFinite(minutes) || !Number.isFinite(repeats) || !Number.isFinite(people) || minutes <= 0 || repeats <= 0 || people <= 0) return null;
    const weeklyMinutes = minutes * repeats * people;
    const task = taskOptions.find((option) => option.value === inputs.task);
    return {
      weeklyMinutes,
      monthlyMinutes: weeklyMinutes * 52 / 12,
      annualMinutes: weeklyMinutes * 52,
      suggestion: task?.suggestion || taskOptions.at(-1).suggestion,
      taskLabel: task?.label || "Recurring task",
      repeats,
      minutes,
      people,
    };
  }, [inputs]);

  const auditBrief = audit && [
    "WORKFLOW TIME AUDIT",
    "",
    `Recurring task: ${audit.taskLabel}`,
    `Current inputs: ${audit.minutes} minutes per repetition, ${audit.repeats} repetitions per week, ${audit.people} people.`,
    `Estimated current workload: ${formatHours(audit.weeklyMinutes)} per week; ${formatHours(audit.monthlyMinutes)} per average month; ${formatHours(audit.annualMinutes)} per year.`,
    "",
    `Suggested next step: ${audit.suggestion}`,
    "",
    "This is a calculation of current workload based only on the figures entered. It is not a promise that automation will save all of this time.",
  ].join("\n");

  async function copyAudit() {
    try {
      await copyText(auditBrief);
      setNotice("Audit copied. It has not been sent anywhere.");
    } catch {
      setNotice("Copy is unavailable here. You can still select the summary text or add it to an inquiry.");
    }
  }

  function sendAuditToForm() {
    addToContact(`Workflow time audit: ${audit.taskLabel}`, auditBrief);
    setNotice("Audit added to the contact form. Nothing is sent until you submit that form.");
  }

  return (
    <article className="interactive-tool-card audit-card" id="workflow-audit">
      <div className="tool-card-head">
        <span className="tool-index">02 / AUDIT</span>
        <span className="tool-badge">Workload calculator</span>
      </div>
      <h3>See the time inside a repeating task.</h3>
      <p className="tool-lede">Use your own figures to estimate today’s manual workload. It is a calculation, not a promise of automation savings.</p>

      <div className="tool-field-grid">
        <label className="tool-field tool-field-wide">
          <span>Which task repeats?</span>
          <select name="task" value={inputs.task} onChange={update}>
            <option value="">Choose a task type</option>
            {taskOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="tool-field">
          <span>Minutes each time</span>
          <input name="minutes" type="number" min="1" max="1440" step="1" value={inputs.minutes} onChange={update} inputMode="numeric" placeholder="e.g. 15" />
        </label>
        <label className="tool-field">
          <span>Times per week</span>
          <input name="repeats" type="number" min="1" max="10000" step="1" value={inputs.repeats} onChange={update} inputMode="numeric" placeholder="e.g. 12" />
        </label>
        <label className="tool-field tool-field-wide">
          <span>People who repeat this task</span>
          <input name="people" type="number" min="1" max="1000" step="1" value={inputs.people} onChange={update} inputMode="numeric" placeholder="e.g. 2" />
        </label>
      </div>

      {audit ? (
        <div className="tool-result audit-result" aria-live="polite">
          <span className="tool-result-label">CURRENT MANUAL WORKLOAD ESTIMATE</span>
          <div className="audit-metrics">
            <div className="audit-metric"><strong>{formatHours(audit.weeklyMinutes)}</strong><span>per week</span></div>
            <div className="audit-metric"><strong>{formatHours(audit.monthlyMinutes)}</strong><span>per average month</span></div>
            <div className="audit-metric"><strong>{formatHours(audit.annualMinutes)}</strong><span>per year</span></div>
          </div>
          <p className="audit-assumption">Assumes each person spends the time entered for every repetition. This estimates current workload only; an actual workflow may automate only part of it.</p>
          <div className="audit-next-step"><span>Useful next question</span><p>{audit.suggestion}</p></div>
          <div className="tool-actions">
            <button className="button button-secondary" type="button" onClick={copyAudit}>Copy summary</button>
            <button className="button button-ink" type="button" onClick={sendAuditToForm}>Discuss this workflow <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      ) : (
        <p className="tool-empty-result" role="status">Enter a task type and all three figures to see the calculation.</p>
      )}
      {notice && <p className="tool-notice" role="status" aria-live="polite">{notice}</p>}
      <p className="tool-disclaimer">Your entries stay in this page. They are not saved or sent unless you choose to add the summary to the contact form and submit it.</p>
    </article>
  );
}
