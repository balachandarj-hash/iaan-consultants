import { useState } from 'react'
import type { FormEvent } from 'react'
import { verticals } from '../data/content'

type Props = {
  defaultVertical?: string
  compact?: boolean
}

type Status = 'idle' | 'sending' | 'success' | 'error' | 'needs_activation'

const CONTACT_EMAIL = 'rmpiaan@gmail.com'
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`
const SITE_CONTACT_URL = 'https://iaanconsulting.com/contact'

type FormSubmitResult = {
  success?: string | boolean
  message?: string
}

function isActivationMessage(message: string) {
  return /activat/i.test(message)
}

function isSuccess(result: FormSubmitResult | null, ok: boolean) {
  if (!ok || !result) return false
  if (result.success === false || result.success === 'false') return false
  if (result.success === true || result.success === 'true') return true
  // Some FormSubmit responses omit success but return 200 with a confirmation message
  return ok && !result.message?.toLowerCase().includes('false')
}

async function postJson(payload: Record<string, string>): Promise<{
  ok: boolean
  result: FormSubmitResult | null
}> {
  const response = await fetch(FORMSUBMIT_AJAX, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = (await response.json().catch(() => null)) as FormSubmitResult | null
  return { ok: response.ok, result }
}

async function postFormData(payload: Record<string, string>): Promise<{
  ok: boolean
  result: FormSubmitResult | null
}> {
  const body = new FormData()
  for (const [key, value] of Object.entries(payload)) {
    body.append(key, value)
  }

  const response = await fetch(FORMSUBMIT_AJAX, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body,
  })

  const result = (await response.json().catch(() => null)) as FormSubmitResult | null
  return { ok: response.ok, result }
}

function classicPostFallback(payload: Record<string, string>) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = `https://formsubmit.co/${CONTACT_EMAIL}`
  form.style.display = 'none'

  const withNext = {
    ...payload,
    _next: `${SITE_CONTACT_URL}?sent=1`,
  }

  for (const [key, value] of Object.entries(withNext)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
}

export function ContactForm({ defaultVertical = 'fire-safety', compact = false }: Props) {
  const [status, setStatus] = useState<Status>(() => {
    if (typeof window === 'undefined') return 'idle'
    return new URLSearchParams(window.location.search).get('sent') === '1' ? 'success' : 'idle'
  })
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
    const honey = String(data.get('_honey') ?? '').trim()

    // Honeypot filled → pretend success (bots)
    if (honey) {
      setStatus('success')
      form.reset()
      return
    }

    if (!name || !email || !company || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const verticalLabel =
      verticals.find((item) => item.id === vertical)?.title ??
      (vertical === 'general' ? 'General enquiry' : vertical)

    const payload: Record<string, string> = {
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
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      let { ok, result } = await postJson(payload)

      // Retry with multipart if JSON path failed hard (empty/non-JSON body, network quirks)
      if (!result) {
        ;({ ok, result } = await postFormData(payload))
      }

      const apiMessage = result?.message?.trim() ?? ''

      if (apiMessage && isActivationMessage(apiMessage)) {
        setStatus('needs_activation')
        setErrorMessage(
          `FormSubmit needs a one-time activation for ${CONTACT_EMAIL}. Please ask the inbox owner to open the activation email from FormSubmit and click “Activate Form”, then try again.`,
        )
        return
      }

      if (!isSuccess(result, ok)) {
        // Last resort for non-JSON / blocked AJAX: classic POST (leaves page briefly, returns via _next)
        if (!result) {
          classicPostFallback(payload)
          return
        }

        throw new Error(apiMessage || 'Unable to send your enquiry right now.')
      }

      setStatus('success')
      form.reset()

      if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('sent')) {
        const url = new URL(window.location.href)
        url.searchParams.delete('sent')
        window.history.replaceState({}, '', url.pathname + url.search + url.hash)
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : ''
      if (detail && isActivationMessage(detail)) {
        setStatus('needs_activation')
        setErrorMessage(
          `FormSubmit needs a one-time activation for ${CONTACT_EMAIL}. Please ask the inbox owner to open the activation email from FormSubmit and click “Activate Form”, then try again.`,
        )
        return
      }

      setStatus('error')
      setErrorMessage(
        detail
          ? `${detail} If this keeps happening, email ${CONTACT_EMAIL} directly.`
          : `Something went wrong sending your enquiry. Please try again, or email ${CONTACT_EMAIL} directly.`,
      )
    }
  }

  const busy = status === 'sending'

  const noteClass =
    status === 'success'
      ? ' success'
      : status === 'error' || status === 'needs_activation'
        ? ' error'
        : ''

  return (
    <form className={`contact-form${compact ? ' compact' : ''}`} onSubmit={handleSubmit} noValidate>
      {/* FormSubmit honeypot — leave empty */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
        defaultValue=""
      />
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
        className={`form-note${noteClass}`}
        role={
          status === 'error' || status === 'needs_activation'
            ? 'alert'
            : status === 'success'
              ? 'status'
              : undefined
        }
      >
        {status === 'success'
          ? 'Thank you. Your enquiry has been sent — we will respond shortly.'
          : status === 'error' || status === 'needs_activation'
            ? errorMessage
            : 'We typically respond with clear next steps for your requirement.'}
      </p>
    </form>
  )
}
