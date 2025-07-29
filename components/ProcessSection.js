// ProcessSection.js
export default function ProcessSection() {
  return (
    <section id="process" className="process" data-scroll-section>
      <div className="container">
        <header className="section-header">
          <span className="section-number">03</span>
          <h2 className="animate-text">Our flow</h2>
        </header>
        <div className="process__steps">
          <div className="service-card animate-text">
            <span className="section-number">Ⅰ</span>
            <h3>Dream</h3>
            <p>We start with a simple meeting to find out where you are, where you want to be, and how we could potentially bridge that gap.</p>
          </div>
          <div className="service-card animate-text">
            <span className="section-number">Ⅱ</span>
            <h3>Disrupt</h3>
            <p>Next, we go over the options that work best for you, based on your businesses&apos; current state and goals.</p>
          </div>
          <div className="service-card animate-text">
            <span className="section-number">Ⅲ</span>
            <h3>Design</h3>
            <p>Once you&apos;ve decided what works best for you, we get to work building your business from the ground up, with the proper legal and privacy foundation set up before anything else.</p>
          </div>
          <div className="service-card animate-text">
            <span className="section-number">IV</span>
            <h3>Repeat</h3>
            <p>As a wise man once said, &quot;I believe in starts&quot; and that is all we focus on. Once you&apos;re satisfied with the results, you&apos;re on your own! We wish you the best of luck, but the consultant&apos;s goal is to not tie you down with a contract - it&apos;s to provide you with all the necessary tools needed to succeed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}