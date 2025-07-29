import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  if (state.succeeded) {
    return <p className="form-success">Thanks for reaching out! We&apos;ll be in touch shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact__form" name="contact">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button className="btn btn--primary" type="submit" disabled={state.submitting}>
        Send it!
      </button>
    </form>
  );
}