import { useState } from 'react'
import type { FormEvent } from 'react'
import { verticals } from '../data/content'

type Props = {
  defaultVertical?: string
  compact?: boolean
}

export function ContactForm({ defaultVertical = 'fire-safety', compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className={`contact-form${compact ? ' compact' : ''}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="company">Organisation</label>
          <input id="company" name="company" required placeholder="Company name" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+91" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="vertical">Service of interest</label>
        <select id="vertical" name="vertical" defaultValue={defaultVertical}>
          {verticals.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
          <option value="general">General enquiry</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Brief requirement</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Plant type, building, or certification needed."
        />
      </div>
      <button className="btn btn-primary" type="submit">
        {submitted ? 'Enquiry received' : 'Submit enquiry'}
      </button>
      <p className="form-note">
        {submitted
          ? 'Thank you. Connect this form to your email or CRM for live enquiries.'
          : 'Demo form — connect to your preferred inbox before going live.'}
      </p>
    </form>
  )
}
