import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [state, handleSubmit] = useForm("xdkzyogn");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          
          <div className="footer__brand">
            <Image
              src="/images/header/websiteheader.webp"
              alt="HLPFL Consulting logo"
              width={150}
              height={60}
            />
            <p>© <span id="year"></span> HLPFL Co. All rights reserved.</p>
          </div>

          <div className="footer__social">
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/red-flag-guide">Red Flag Guide</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/book">Book</Link></li>
            </ul>
          </div>

          <div className="footer__form">
            <h3>Contact Us</h3>
            {state.succeeded ? (
              <p>Thanks for your message!</p>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" name="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button className="btn btn--primary" type="submit" disabled={state.submitting}>
                  Send it!
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}