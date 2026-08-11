import { useState } from 'react'
import type { FormEvent } from 'react'
import { verticals } from '../data/content'

type Props = {
  defaultVertical?: string
  compact?: boolean
}

type Status = 'idle' | 'sending' | 'success' | 'error'

// FormSubmit may require a one-time inbox confirmation on first use
// (check rmpiaan@gmail.com for the activation email from FormSubmit).
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/rmpiaan@gmail.com'

export function ContactForm({ defaultVertical = 'fire-safety', compact = false }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const vertical = String(data.get('vertical') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !company || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const verticalLabel =
      verticals.find((item) => item.id === vertical)?.title ??
      (vertical === 'general' ? 'General enquiry' : vertical)

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone: phone || 'Not provided',
          vertical: verticalLabel,
          message,
          _subject: 'IAAN Consultants — Contact form',
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const result = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null

      if (!response.ok || result?.success === 'false' || result?.success === false) {
        throw new Error(result?.message || 'Unable to send your enquiry right now.')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(
        'Something went wrong sending your enquiry. Please try again, or email rmpiaan@gmail.com directly.',
      )
    }
  }

  const busy = status === 'sending'

  return (
    <form className={`contact-form${compact ? ' compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required placeholder="Your name" disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="company">Organisation</label>
          <input id="company" name="company" required placeholder="Company name" disabled={busy} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            disabled={busy}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+91" disabled={busy} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="vertical">Service of interest</label>
        <select id="vertical" name="vertical" defaultValue={defaultVertical} disabled={busy}>
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
          disabled={busy}
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={busy}>
        {busy ? 'Sending…' : status === 'success' ? 'Send another enquiry' : 'Submit enquiry'}
      </button>
      <p
        className={`form-note${status === 'success' ? ' success' : ''}${status === 'error' ? ' error' : ''}`}
        role={status === 'error' ? 'alert' : status === 'success' ? 'status' : undefined}
      >
        {status === 'success'
          ? 'Thank you. Your enquiry has been sent — we will respond shortly.'
          : status === 'error'
            ? errorMessage
            : 'We typically respond with clear next steps for your requirement.'}
      </p>
    </form>
  )
}
