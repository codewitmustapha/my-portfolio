import { useState } from 'react';

const simulationNotice = 'Simulation only — no live AI model or external service, API, calendar, CRM, or messaging account is connected. Nothing is sent or saved outside this demo session.';

function DemoFrame({ eyebrow, title, description, tone = 'cyan', children }) {
  return (
    <section className={`demo-shell demo-tone-${tone}`} aria-label={`${title} simulation`}>
      <header className="demo-header">
        <p className="demo-eyebrow">{eyebrow}</p>
        <h2 className="demo-title">{title}</h2>
        <p className="demo-description">{description}</p>
      </header>
      <p className="demo-notice" role="note">{simulationNotice}</p>
      {children}
    </section>
  );
}

function SupportSalesDemo() {
  const [messages, setMessages] = useState([
    { from: 'assistant', text: 'Hi there. Ask about services, getting started, or how to reach the team.' },
  ]);
  const [question, setQuestion] = useState('');
  const [contact, setContact] = useState({ name: '', email: '' });
  const [interest, setInterest] = useState('');
  const [intent, setIntent] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const prompts = ['What services do you offer?', 'How long does a response take?', 'How much does it cost?', 'I need a new website', 'I want a customer support agent', 'I want to automate lead follow-up', 'Help me choose a product'];

  function answerFor(value) {
    const lower = value.toLowerCase();
    if (lower.includes('product') || lower.includes('item') || lower.includes('shopping')) {
      return 'Product guidance example: an AI shopping assistant could use an approved product catalog to recommend relevant items. This demo has no catalog connected; this response is scripted.';
    }
    if (lower.includes('website') || lower.includes('landing') || lower.includes('shop') || lower.includes('store')) {
      return 'Recommendation: Website Development may fit this need. For an online shop, an e-commerce website could be a starting point. This is a scripted suggestion, not a quote.';
    }
    if (lower.includes('agent') || lower.includes('assistant') || lower.includes('support')) {
      return 'Recommendation: an AI customer-support agent could help answer common questions and guide visitors to a next step. This is a scripted suggestion, not a live AI response.';
    }
    if (lower.includes('automate') || lower.includes('workflow') || lower.includes('lead') || lower.includes('follow-up')) {
      return 'Recommendation: Business Workflow Automation may fit this need. Lead capture and follow-up could be mapped as a connected process. This is a scripted suggestion, not a configured integration.';
    }
    if (lower.includes('service') || lower.includes('offer') || lower.includes('help')) {
      return 'The three service areas are Website Development, AI Agent Development, and Business Workflow Automation. Tell me what you want to improve and I can show a scripted starting recommendation.';
    }
    if (lower.includes('cost') || lower.includes('price') || lower.includes('how much')) {
      return 'Pricing depends on the project scope. This simulation has no pricing information and makes no quote or commitment.';
    }
    if (lower.includes('response') || lower.includes('time') || lower.includes('when')) {
      return 'Response times vary by team and request. This demo cannot promise a response time or contact a real support team.';
    }
    return 'Thanks for the question. This local example can share general information, but it cannot check live business details or contact anyone.';
  }

  function sendQuestion(value = question) {
    const text = value.trim().slice(0, 180);
    if (!text) return;
    setMessages((current) => [...current, { from: 'visitor', text }, { from: 'assistant', text: answerFor(text) }]);
    setQuestion('');
  }

  function submitContact(event) {
    event.preventDefault();
    if (!contact.name.trim() || !contact.email.trim() || !interest || !intent) return;
    const qualification = intent === 'ready' ? 'Priority follow-up' : intent === 'active' ? 'Qualified for a human follow-up' : 'Nurture while exploring';
    setContactStatus(`Local qualification preview: ${contact.name.trim()} is marked “${qualification}” from the selected intent and is interested in ${interest}. This is a sample rule for review; nothing was transmitted.`);
  }

  return (
    <DemoFrame eyebrow="01 / WEBSITE CONCIERGE" title="Support & sales assistant" description="Try a few sample questions and a local-only contact form." tone="cyan">
      <div className="demo-support-layout">
        <div className="demo-chat-card">
          <div className="demo-card-heading"><h3 className="demo-card-title">Conversation preview</h3><span className="demo-status-pill">Local demo</span></div>
          <div className="demo-messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => <p className={`demo-message demo-message-${message.from}`} key={`${index}-${message.from}`}><span className="demo-message-label">{message.from === 'visitor' ? 'You' : 'Assistant'}</span>{message.text}</p>)}
          </div>
          <div className="demo-prompt-list" aria-label="Suggested questions">
            {prompts.map((prompt) => <button className="demo-chip" type="button" key={prompt} onClick={() => sendQuestion(prompt)}>{prompt}</button>)}
          </div>
          <form className="demo-inline-form" onSubmit={(event) => { event.preventDefault(); sendQuestion(); }}>
            <label className="demo-sr-only" htmlFor="support-question">Ask a question</label>
            <input id="support-question" className="demo-input" value={question} maxLength={180} onChange={(event) => setQuestion(event.target.value)} placeholder="Type a sample question…" />
            <button className="demo-button demo-button-primary" type="submit">Send in demo</button>
          </form>
        </div>
        <aside className="demo-panel demo-contact-panel">
          <p className="demo-kicker">OPTIONAL · LOCAL ONLY</p><h3 className="demo-card-title">Contact details</h3>
      <p className="demo-small-copy">See how a contact panel might look. Values remain in this component only.</p>
          <p className="demo-small-copy">Sample rule: contact details and stated intent are used to sort the inquiry; real qualification criteria should be agreed with the business.</p>
          <form className="demo-form" onSubmit={submitContact}>
            <label className="demo-label" htmlFor="support-name">Name</label><input id="support-name" className="demo-input" value={contact.name} maxLength={60} onChange={(event) => setContact({ ...contact, name: event.target.value })} autoComplete="name" required />
            <label className="demo-label" htmlFor="support-email">Email</label><input id="support-email" className="demo-input" type="email" value={contact.email} maxLength={120} onChange={(event) => setContact({ ...contact, email: event.target.value })} autoComplete="email" required />
            <label className="demo-label" htmlFor="support-interest">What are you looking for?</label><select id="support-interest" className="demo-input" value={interest} onChange={(event) => setInterest(event.target.value)} required><option value="">Choose an area</option><option>Website development</option><option>AI agents</option><option>Workflow automation</option></select>
            <label className="demo-label" htmlFor="support-intent">How ready are you to take the next step?</label><select id="support-intent" className="demo-input" value={intent} onChange={(event) => setIntent(event.target.value)} required><option value="">Choose an intent</option><option value="exploring">I’m just exploring</option><option value="active">I have an active project</option><option value="ready">I’m ready to discuss next steps</option></select>
            <button className="demo-button demo-button-secondary" type="submit">Preview qualification and contact</button>
          </form>
          <p className="demo-feedback" aria-live="polite">{contactStatus}</p>
        </aside>
      </div>
    </DemoFrame>
  );
}

function MessagingDemo() {
  const [channel, setChannel] = useState('WhatsApp');
  const [messages, setMessages] = useState([{ from: 'incoming', text: 'Hello, can you tell me more?' }, { from: 'outgoing', text: 'Of course. What would you like to know?' }]);
  const [status, setStatus] = useState('Preview ready. No real conversation is active.');
  const [inquiry, setInquiry] = useState({ name: '', email: '', request: '' });
  const examples = [
    { incoming: 'Do you support small teams?', outgoing: 'This is a sample reply: options depend on the team’s needs.' },
    { incoming: 'Can someone follow up with me?', outgoing: 'This mock assistant can show a handoff option, but cannot contact anyone.' },
  ];
  function appendExample(example) {
    setMessages((current) => [...current, { from: 'incoming', text: example.incoming }, { from: 'outgoing', text: example.outgoing }]);
    setStatus(`Sample exchange shown in the ${channel} mockup. No message was sent.`);
  }
  function queueInquiry(event) {
    event.preventDefault();
    if (!inquiry.name.trim() || !inquiry.email.trim() || !inquiry.request.trim()) return;
    setMessages((current) => [...current, { from: 'incoming', text: `Sample request from ${inquiry.name.trim()}: ${inquiry.request.trim()}` }, { from: 'outgoing', text: 'This local mock request is ready for a human follow-up. No message or notification was sent.' }]);
    setStatus('Sample customer details and request added to this demo session only.');
    setInquiry({ name: '', email: '', request: '' });
  }
  return (
    <DemoFrame eyebrow="02 / CHANNEL MOCKUP" title="WhatsApp & Telegram assistant" description="Switch the channel styling, add sample exchanges, or preview a handoff." tone="teal">
      <div className="demo-messaging-layout">
        <div className={`demo-phone-card demo-channel-${channel.toLowerCase()}`}>
          <div className="demo-channel-switch" role="tablist" aria-label="Mock messaging channel">
            {['WhatsApp', 'Telegram'].map((name) => <button key={name} id={`channel-tab-${name.toLowerCase()}`} className={`demo-tab ${channel === name ? 'is-active' : ''}`} type="button" role="tab" aria-selected={channel === name} aria-controls="channel-preview" onClick={() => { setChannel(name); setStatus(`${name} appearance selected. No real channel connection.`); }}>{name}</button>)}
          </div>
          <div className="demo-chat-window" id="channel-preview" role="tabpanel" aria-labelledby={`channel-tab-${channel.toLowerCase()}`}>
            <div className="demo-chat-topline"><span className="demo-avatar">{channel === 'WhatsApp' ? 'W' : 'T'}</span><div><strong>Sample conversation</strong><span className="demo-small-copy">{channel} · mock view</span></div></div>
            <div className="demo-messages demo-message-stack" aria-live="polite" aria-relevant="additions text">
              {messages.map((message, index) => <p className={`demo-message demo-message-${message.from}`} key={`${index}-${message.text}`}><span className="demo-message-label">{message.from === 'incoming' ? 'Customer' : 'Assistant'}</span>{message.text}</p>)}
            </div>
          </div>
        </div>
        <aside className="demo-panel">
          <p className="demo-kicker">TRY THE MOCKUP</p><h3 className="demo-card-title">Example customer questions</h3>
          <div className="demo-button-stack">{examples.map((example, index) => <button className="demo-button demo-button-secondary" type="button" key={example.incoming} onClick={() => appendExample(example)}>Add sample exchange {index + 1}</button>)}</div>
          <form className="demo-form demo-inquiry-form" onSubmit={queueInquiry}>
            <p className="demo-kicker">LOCAL INQUIRY QUEUE</p>
            <label className="demo-label" htmlFor="message-name">Customer name</label><input id="message-name" className="demo-input" required maxLength={60} value={inquiry.name} onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })} />
            <label className="demo-label" htmlFor="message-email">Email</label><input id="message-email" className="demo-input" type="email" required maxLength={120} value={inquiry.email} onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })} />
            <label className="demo-label" htmlFor="message-request">Request</label><textarea id="message-request" className="demo-input demo-textarea" required maxLength={180} rows={2} value={inquiry.request} onChange={(event) => setInquiry({ ...inquiry, request: event.target.value })} />
            <button className="demo-button demo-button-secondary" type="submit">Add local sample inquiry</button>
          </form>
          <button className="demo-button demo-button-primary" type="button" onClick={() => setStatus('Handoff previewed. No message was sent and no person was notified.')}>Simulate handoff</button>
          <p className="demo-feedback" aria-live="polite">{status}</p>
        </aside>
      </div>
    </DemoFrame>
  );
}

function AppointmentDemo() {
  const dates = ['Wed, Oct 28', 'Thu, Oct 29', 'Fri, Oct 30'];
  const times = ['9:30 AM', '11:00 AM', '2:30 PM'];
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState({ name: '', email: '' });
  const [confirmation, setConfirmation] = useState('');
  function confirm(event) {
    event.preventDefault();
    if (!date || !time || !details.name.trim() || !details.email.trim()) return;
    setConfirmation(`Simulated selection: ${date} at ${time} for ${details.name.trim()}. This is not a confirmed appointment.`);
  }
  return (
    <DemoFrame eyebrow="03 / BOOKING PREVIEW" title="Appointment booking" description="Select one of the sample options and preview a simulated confirmation." tone="blue">
      <div className="demo-booking-layout">
        <form className="demo-panel demo-form" onSubmit={confirm}>
          <fieldset className="demo-fieldset"><legend className="demo-label">Choose a sample date</legend><div className="demo-choice-grid">{dates.map((item) => <button className={`demo-choice ${date === item ? 'is-selected' : ''}`} type="button" key={item} aria-pressed={date === item} onClick={() => setDate(item)}>{item}</button>)}</div></fieldset>
          <fieldset className="demo-fieldset"><legend className="demo-label">Choose a sample time</legend><div className="demo-choice-grid demo-time-grid">{times.map((item) => <button className={`demo-choice ${time === item ? 'is-selected' : ''}`} type="button" key={item} aria-pressed={time === item} onClick={() => setTime(item)}>{item}</button>)}</div></fieldset>
          <div className="demo-form-row"><div><label className="demo-label" htmlFor="booking-name">Name</label><input id="booking-name" className="demo-input" required value={details.name} maxLength={60} onChange={(event) => setDetails({ ...details, name: event.target.value })} autoComplete="name" /></div><div><label className="demo-label" htmlFor="booking-email">Email</label><input id="booking-email" className="demo-input" type="email" required value={details.email} maxLength={120} onChange={(event) => setDetails({ ...details, email: event.target.value })} autoComplete="email" /></div></div>
          <button className="demo-button demo-button-primary" type="submit">Preview simulated booking</button>
          <p className="demo-feedback" aria-live="polite">{confirmation}</p>
        </form>
        <aside className="demo-panel demo-booking-aside"><span className="demo-icon-mark" aria-hidden="true">◷</span><p className="demo-kicker">SAMPLE OPTIONS ONLY</p><h3 className="demo-card-title">A simple booking flow</h3><p className="demo-small-copy">The dates and times are illustrative choices in this interface. This component does not check availability, reserve a slot, or connect to any calendar.</p><div className="demo-summary-line"><span>Selection</span><strong>{date && time ? `${date} · ${time}` : 'Choose a date and time'}</strong></div></aside>
      </div>
    </DemoFrame>
  );
}

function LeadCrmDemo() {
  const [form, setForm] = useState({ name: '', email: '', need: '' });
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState('');
  function addLead(event) {
    event.preventDefault();
    const wordCount = form.need.trim().split(/\s+/).filter(Boolean).length;
    const qualification = wordCount >= 4 ? 'Meets sample rule' : 'Needs human review';
    const record = { ...form, id: Date.now(), qualification };
    setLeads((current) => [record, ...current]);
    setForm({ name: '', email: '', need: '' });
    setStatus('Mock record added for this demo session only. No CRM was contacted.');
  }
  return (
    <DemoFrame eyebrow="04 / LOCAL CRM BOARD" title="Lead-to-CRM automation" description="Submit a short sample lead to create a temporary mock board row." tone="violet">
      <div className="demo-crm-layout">
        <form className="demo-panel demo-form" onSubmit={addLead}>
          <p className="demo-kicker">SAMPLE LEAD INTAKE</p><h3 className="demo-card-title">Add a mock lead</h3>
          <p className="demo-small-copy">A local word-count rule labels the request for review; this is not AI qualification and no CRM is connected.</p>
          <label className="demo-label" htmlFor="lead-name">Name</label><input id="lead-name" className="demo-input" required value={form.name} maxLength={60} onChange={(event) => setForm({ ...form, name: event.target.value })} autoComplete="name" />
          <label className="demo-label" htmlFor="lead-email">Email</label><input id="lead-email" className="demo-input" type="email" required value={form.email} maxLength={120} onChange={(event) => setForm({ ...form, email: event.target.value })} autoComplete="email" />
          <label className="demo-label" htmlFor="lead-need">Business need</label><textarea id="lead-need" className="demo-input demo-textarea" required value={form.need} maxLength={180} rows={3} onChange={(event) => setForm({ ...form, need: event.target.value })} placeholder="A few words about the request" />
          <button className="demo-button demo-button-primary" type="submit">Add to demo board</button>
          <p className="demo-feedback" aria-live="polite">{status}</p>
        </form>
        <div className="demo-board" aria-label="Local mock CRM board">
          <div className="demo-board-heading"><div><p className="demo-kicker">TEMPORARY BOARD</p><h3 className="demo-card-title">Demo leads</h3></div><span className="demo-status-pill">{leads.length} {leads.length === 1 ? 'record' : 'records'}</span></div>
          {leads.length === 0 ? <div className="demo-empty-state"><span aria-hidden="true">＋</span><p>Your submitted sample leads will appear here.</p></div> : <div className="demo-lead-list" aria-live="polite">{leads.map((lead) => <article className="demo-lead-card" key={lead.id}><div className="demo-lead-heading"><strong>{lead.name}</strong><span className="demo-status-pill">New lead</span></div><p className="demo-lead-email">{lead.email}</p><p className="demo-lead-need">{lead.need}</p><span className="demo-followup-label">{lead.qualification} · sample rule only</span></article>)}</div>}
          <p className="demo-small-copy">Records exist only in this demo session and are not transmitted or persisted.</p>
        </div>
      </div>
    </DemoFrame>
  );
}

function ContentSocialDemo() {
  const [topic, setTopic] = useState('');
  const [drafts, setDrafts] = useState([]);
  function makeDrafts(event) {
    event.preventDefault();
    const cleanTopic = topic.trim().slice(0, 100);
    if (!cleanTopic) return;
    setDrafts([
      { channel: 'LinkedIn sample', copy: `A fresh perspective on ${cleanTopic}: start with one useful idea, share what you learned, and invite your community to add their point of view.` },
      { channel: 'Instagram sample', copy: `Small steps, meaningful progress. Today’s focus: ${cleanTopic}. What would you add to the conversation?` },
    ]);
  }
  return (
    <DemoFrame eyebrow="05 / CONTENT STUDIO" title="Content & social automation" description="Enter a topic to create two short examples from fixed local templates." tone="amber">
      <form className="demo-panel demo-content-form" onSubmit={makeDrafts}>
        <div><label className="demo-label" htmlFor="content-topic">What should the sample drafts be about?</label><input id="content-topic" className="demo-input" value={topic} maxLength={100} onChange={(event) => setTopic(event.target.value)} placeholder="e.g. customer onboarding" /></div>
        <button className="demo-button demo-button-primary" type="submit">Create sample drafts</button>
      </form>
      <p className="demo-content-disclaimer">Template-based sample—not a live AI generation or social-posting integration.</p>
      <div className="demo-content-layout">
        <div className="demo-draft-grid" aria-live="polite" aria-relevant="additions text">{drafts.length ? drafts.map((draft) => <article className="demo-draft-card" key={draft.channel}><span className="demo-channel-tag">{draft.channel}</span><p>{draft.copy}</p><span className="demo-draft-state">Draft preview · not posted</span></article>) : <div className="demo-empty-state"><span aria-hidden="true">✳</span><p>Sample drafts will appear here after you add a topic.</p></div>}</div>
        <aside className="demo-calendar-card"><div className="demo-calendar-top"><p className="demo-kicker">LOCAL PLANNING MOCKUP</p><span className="demo-calendar-icon" aria-hidden="true">▦</span></div><h3 className="demo-card-title">Content calendar</h3><p className="demo-small-copy">A sample planning card. It is not connected to a publishing calendar.</p><div className="demo-calendar-entry"><span className="demo-calendar-date">SAMPLE SLOT</span><strong>{topic.trim().slice(0, 100) || 'Your topic goes here'}</strong><span className="demo-channel-tag">Planning idea · not scheduled</span></div></aside>
      </div>
    </DemoFrame>
  );
}

function WorkflowDemo() {
  const steps = [
    { title: 'Web form', detail: 'Sample input collected in the page' },
    { title: 'Simulated AI processing', detail: 'Local rule preview; no model call' },
    { title: 'Demo record', detail: 'Temporary display only' },
    { title: 'Simulated notification', detail: 'Status preview; no notification sent' },
    { title: 'Follow-up', detail: 'Suggested next step, not an action' },
  ];
  const [active, setActive] = useState(-1);
  const [sampleRequest, setSampleRequest] = useState('');
  const [status, setStatus] = useState('Workflow is idle. Start to preview each local step.');
  function advance() {
    if (!sampleRequest.trim()) {
      setStatus('Enter a sample form request first. It will remain in this demo session only.');
      return;
    }
    if (active >= steps.length - 1) {
      setActive(-1);
      setStatus('Demo flow reset. No external writes or notifications occurred.');
      return;
    }
    const next = active + 1;
    setActive(next);
    setStatus(next === steps.length - 1 ? 'Demo flow complete. All steps were local UI states; nothing was sent, saved externally, or triggered.' : `Step ${next + 1} of ${steps.length}: ${steps[next].title}. Local preview only.`);
  }
  function complete() {
    if (!sampleRequest.trim()) {
      setStatus('Enter a sample form request first. It will remain in this demo session only.');
      return;
    }
    setActive(steps.length - 1);
    setStatus('Demo flow complete. All steps were local UI states; nothing was sent, saved externally, or triggered.');
  }
  return (
    <DemoFrame eyebrow="06 / WORKFLOW WALKTHROUGH" title="End-to-end business workflow" description="Move through a five-stage example; every stage is a local visual state." tone="green">
      <div className="demo-workflow-panel">
        <div className="demo-workflow-form"><label className="demo-label" htmlFor="workflow-request">Sample form submission</label><input id="workflow-request" className="demo-input" maxLength={140} value={sampleRequest} onChange={(event) => setSampleRequest(event.target.value)} placeholder="Describe a sample business request" /><p className="demo-small-copy">This input is only used to show the simulated processing path; it is not sent or stored.</p></div>
        <ol className="demo-workflow-list" aria-label="Workflow steps">{steps.map((step, index) => <li className={`demo-workflow-node ${index < active ? 'is-complete' : ''} ${index === active ? 'is-current' : ''}`} key={step.title} aria-current={index === active ? 'step' : undefined}><span className="demo-step-number">{index < active ? '✓' : `0${index + 1}`}</span><span className="demo-step-copy"><strong>{step.title}</strong><small>{step.detail}</small></span></li>)}</ol>
        <div className="demo-workflow-controls"><button className="demo-button demo-button-primary" type="button" onClick={advance}>{active === steps.length - 1 ? 'Reset demo flow' : active < 0 ? 'Start workflow' : 'Next step'}</button><button className="demo-button demo-button-secondary" type="button" onClick={complete}>Complete preview</button></div>
        <p className="demo-workflow-status" role="status" aria-live="polite">{status}</p>
      </div>
    </DemoFrame>
  );
}

export default function DemoExperience({ demoSlug }) {
  switch (demoSlug) {
    case 'website-support-sales-agent': return <SupportSalesDemo />;
    case 'whatsapp-telegram-assistant': return <MessagingDemo />;
    case 'appointment-booking-system': return <AppointmentDemo />;
    case 'lead-crm-automation': return <LeadCrmDemo />;
    case 'content-social-automation': return <ContentSocialDemo />;
    case 'end-to-end-business-workflow': return <WorkflowDemo />;
    default: return <SupportSalesDemo />;
  }
}
