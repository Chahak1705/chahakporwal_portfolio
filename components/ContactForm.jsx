"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm({ email }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Portfolio contact from ${name}`
    )}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input
          id="f-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input
          id="f-email"
          type="email"
          placeholder="you@email.com"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="f-msg">Message</label>
        <textarea
          id="f-msg"
          placeholder="What's on your mind?"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Send Message <Send size={15} />
      </button>
    </form>
  );
}
