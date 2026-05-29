import { useRef, useState } from "react";
import {
  Anchor,
  ArrowUp,
  CheckCircle2,
  Clock,
  Compass,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Radio,
  Satellite,
  Send,
  Waves,
  X,
} from "lucide-react";
import { contactContent } from "../../data/contactContent";
import "./ContactDeepStationSection.css";

const channelIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

const socialIcons = {
  GitHub: 'GH',
  LinkedIn: 'IN',
  YouTube: 'YT',
};

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  acceptedTerms: false,
};

export default function ContactDeepStationSection() {
  const { kicker, subtitle, status, channels, missionSignals, socials, terms } = contactContent;
  const [formData, setFormData] = useState(initialForm);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const editorRef = useRef(null);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateMessage = () => {
    const htmlValue = editorRef.current?.innerHTML || "";
    setFormData((current) => ({ ...current, message: htmlValue }));
  };

  const formatText = (command) => {
    document.execCommand(command, false, null);
    updateMessage();
    editorRef.current?.focus();
  };

  const clearForm = () => {
    setFormData(initialForm);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.acceptedTerms) {
      setSubmitStatus("Please accept the terms and conditions before sending your message.");
      return;
    }

    const plainMessage = editorRef.current?.innerText?.trim() || "";

    if (!formData.fullName || !formData.email || !formData.subject || !plainMessage) {
      setSubmitStatus("Please fill in your full name, email, subject, and message details.");
      return;
    }

    const mailBody = [
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      "",
      "Message:",
      plainMessage,
    ].join("%0D%0A");

    const mailtoUrl = `mailto:hello@shefat.dev?subject=${encodeURIComponent(formData.subject)}&body=${mailBody}`;
    window.location.href = mailtoUrl;
    setSubmitStatus("Opening your email client with the prepared message...");
  };

  return (
    <section className="ocean-section contact-station-section" id="contact">
      <div className="depth-marker">-3000m · Deep Station</div>

      <div className="contact-station-bg" aria-hidden="true">
        <img src="/assets/contact/contact-depth-grid.svg" alt="" className="contact-station-bg__grid" />
        <img src="/assets/contact/deep-station-lines.svg" alt="" className="contact-station-bg__lines" />
        <img src="/assets/contact/station-beacon.svg" alt="" className="contact-station-bg__beacon" />
        <span className="contact-station-bg__glow contact-station-bg__glow--one" />
        <span className="contact-station-bg__glow contact-station-bg__glow--two" />
        <span className="contact-station-bg__bubble contact-station-bg__bubble--one" />
        <span className="contact-station-bg__bubble contact-station-bg__bubble--two" />
        <span className="contact-station-bg__bubble contact-station-bg__bubble--three" />
        <span className="contact-station-bg__jelly contact-station-bg__jelly--one" />
        <span className="contact-station-bg__jelly contact-station-bg__jelly--two" />
      </div>

      <div className="ocean-section-inner contact-station-inner">
        <div className="contact-station-main hud-card">
          <div className="hud-card-content contact-station-main__content">
            <div className="contact-station-copy">
              <p className="section-kicker">{kicker}</p>
              <h2 className="contact-station-title">
                Let’s Dive Into <span className="gradient-text">A Project</span>
              </h2>
              <p className="section-text">{subtitle}</p>

              <div className="contact-station-actions">
                <a className="glow-btn" href="mailto:hello@shefat.dev">
                  Send Direct Email <Send size={17} />
                </a>
                <a className="ghost-btn" href="#home">
                  Back to Surface <ArrowUp size={17} />
                </a>
              </div>
            </div>

            <aside className="contact-station-console hud-panel">
              <div className="contact-station-console__top">
                <span className="hud-label"><span className="hud-dot" /> {status.label}</span>
                <Radio size={18} />
              </div>
              <strong>{status.value}</strong>
              <p>{status.detail}</p>

              <div className="contact-station-waveform" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </aside>
          </div>
        </div>

        <div className="contact-form-shell hud-card">
          <div className="hud-card-content contact-form-shell__content">
            <div className="contact-form-shell__header">
              <div>
                <span className="hud-label"><span className="hud-dot" /> Project Transmission Form</span>
                <h3>Send your mission details</h3>
                <p>
                  Share the basic requirement, timeline, and expectation. The message will open in your email client for now.
                </p>
              </div>
              <div className="contact-form-shell__badge">
                <Satellite size={18} /> Secure signal draft
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span>Full Name *</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={updateField}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Email Address *</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="+880 17XX XXX XXX"
                    autoComplete="tel"
                  />
                </label>

                <label className="contact-field">
                  <span>Subject *</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={updateField}
                    placeholder="Project / mentorship / collaboration"
                    required
                  />
                </label>
              </div>

              <div className="contact-editor-block">
                <div className="contact-editor-toolbar" aria-label="Message editor toolbar">
                  <button type="button" onClick={() => formatText("bold")}>B</button>
                  <button type="button" onClick={() => formatText("italic")}>I</button>
                  <button type="button" onClick={() => formatText("insertUnorderedList")}>List</button>
                  <button type="button" onClick={() => formatText("removeFormat")}>Clear</button>
                </div>

                <div
                  ref={editorRef}
                  className="contact-rich-editor"
                  contentEditable
                  role="textbox"
                  aria-label="Message details"
                  data-placeholder="Write your project details, timeline, budget range, important links, or mentorship request..."
                  onInput={updateMessage}
                  onBlur={updateMessage}
                />
              </div>

              <label className="contact-terms-row">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={updateField}
                />
                <span>
                  I agree to the {" "}
                  <button type="button" onClick={() => setIsTermsOpen(true)}>
                    terms and conditions
                  </button>
                  .
                </span>
              </label>

              {submitStatus && (
                <div className="contact-form-status" role="status">
                  <CheckCircle2 size={17} /> {submitStatus}
                </div>
              )}

              <div className="contact-form__actions">
                <button className="glow-btn" type="submit">
                  Submit Transmission <Send size={17} />
                </button>
                <button className="ghost-btn" type="button" onClick={clearForm}>
                  Clear Form <X size={17} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-station-grid">
          <div className="contact-station-channels">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.icon] || Mail;

              return (
                <a className="contact-channel hud-card" href={channel.href} key={channel.label}>
                  <div className="hud-card-content contact-channel__content">
                    <span className="contact-channel__icon"><Icon size={22} /></span>
                    <div>
                      <small>{channel.label}</small>
                      <strong>{channel.value}</strong>
                      <p>{channel.meta}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <aside className="contact-station-radar hud-card">
            <div className="hud-card-content contact-station-radar__content">
              <div className="contact-station-radar__top">
                <span className="hud-label"><Satellite size={15} /> Mission Beacon</span>
                <small>LIVE</small>
              </div>

              <div className="contact-station-radar__screen">
                <div className="contact-station-radar__ring contact-station-radar__ring--outer" />
                <div className="contact-station-radar__ring contact-station-radar__ring--middle" />
                <div className="contact-station-radar__ring contact-station-radar__ring--inner" />
                <span className="contact-station-radar__sweep" />
                <span className="contact-station-radar__dot contact-station-radar__dot--one" />
                <span className="contact-station-radar__dot contact-station-radar__dot--two" />
                <span className="contact-station-radar__dot contact-station-radar__dot--three" />
                <Anchor className="contact-station-radar__anchor" size={34} />
              </div>

              <div className="contact-station-signals">
                {missionSignals.map((signal) => (
                  <div className="contact-station-signal" key={signal.label}>
                    <small>{signal.label}</small>
                    <strong>{signal.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <footer className="contact-station-footer hud-card">
            <div className="hud-card-content contact-station-footer__content">
              <div className="contact-station-footer__brand">
                <span className="contact-station-footer__logo"><Anchor size={18} /> SM</span>
                <div>
                  <strong>Shefat OceanOS</strong>
                  <p>Full-Stack Software Engineer · Mentor · Team Lead</p>
                </div>
              </div>

              <div className="contact-station-footer__meta">
                <span><Clock size={15} /> GMT+6</span>
                <span><Compass size={15} /> Bangladesh</span>
                <span><Waves size={15} /> Stay curious</span>
              </div>

              <div className="contact-station-footer__socials">
                {socials.map((social) => {
                  const Icon = socialIcons[social.label] || MessageCircle;
                  return (
                    <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>
                      {Icon}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="contact-station-footer__bottom">
              <span>© 2026 Shefat Masum. All rights reserved.</span>
              <span>Designed & built with passion.</span>
            </div>
          </footer>
        </div>
      </div>

      {isTermsOpen && (
        <div className="terms-modal" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
          <div className="terms-modal__backdrop" onClick={() => setIsTermsOpen(false)} />
          <div className="terms-modal__panel hud-card">
            <div className="hud-card-content terms-modal__content">
              <div className="terms-modal__header">
                <div>
                  <span className="hud-label"><span className="hud-dot" /> Project Terms</span>
                  <h3 id="terms-modal-title">Terms and Conditions</h3>
                </div>
                <button type="button" onClick={() => setIsTermsOpen(false)} aria-label="Close terms modal">
                  <X size={20} />
                </button>
              </div>

              <ul className="terms-modal__list">
                {terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>

              <div className="terms-modal__actions">
                <button type="button" className="glow-btn" onClick={() => {
                  setFormData((current) => ({ ...current, acceptedTerms: true }));
                  setIsTermsOpen(false);
                }}>
                  Accept Terms <CheckCircle2 size={17} />
                </button>
                <button type="button" className="ghost-btn" onClick={() => setIsTermsOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="ocean-wave" />
    </section>
  );
}
