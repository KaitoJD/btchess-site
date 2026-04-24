import { EnvelopeSimple, FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

const withBaseUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const featureCards = [
  {
    eyebrow: 'Offline-first',
    title: 'The game lives between the two devices.',
    copy: 'No cloud dependency. No account wall. Bluetooth keeps the match local, private, and immediate.',
  },
  {
    eyebrow: 'Cross-platform',
    title: 'Android and iOS, side by side.',
    copy: 'BTChess is designed for mixed-device rooms, so the match starts wherever the players already are.',
  },
  {
    eyebrow: 'Fast setup',
    title: 'Pair, place, and play.',
    copy: 'The flow is short by design. The first move should feel closer than opening an app store page.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose your opponent device',
    copy: 'BTChess finds the nearby device in the room and makes the pairing ritual feel almost invisible.',
  },
  {
    number: '02',
    title: 'Connect over Bluetooth',
    copy: 'No internet means no waiting for networks, no sign-in friction, and no extra setup just to begin.',
  },
  {
    number: '03',
    title: 'Move pieces in sync',
    copy: 'Each move stays mirrored across both screens so the board feels immediate, calm, and reliable.',
  },
];

const notes = [
  'Bluetooth pairing tuned for low-friction starts.',
  'Offline gameplay keeps the match private and stable.',
  'Cross-platform flow built for Android and iOS rooms.',
  'A chess experience designed to feel social, not remote.',
];

function App() {
  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />
      <div className="page-glow page-glow-a" aria-hidden="true" />
      <div className="page-glow page-glow-b" aria-hidden="true" />

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy reveal">
            <p className="kicker">Android + iOS • Bluetooth only • No internet required</p>
            <h1>Turn any room into a chess arena.</h1>
            <p className="hero-text">
              BTChess is a mobile chess app for moments that should feel immediate.
              Two devices. One board. A live match that starts the second Bluetooth does its job.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/KaitoJD/btchess/releases"
                target="_blank"
                rel="noreferrer"
              >
                Download the release
              </a>
              <a className="button button-secondary" href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="BTChess product preview">
            <div className="device-stack">
              <article className="device-card device-card-back">
                <img
                  src={withBaseUrl('gamehistory.webp')}
                  alt="BTChess game history view showing past matches"
                  className="device-art device-screenshot-image"
                />
                <p className="device-caption">Connected. Waiting for the first move.</p>
              </article>

              <article className="device-card device-card-front">
                <img
                  src={withBaseUrl('localgame.webp')}
                  alt="BTChess local game interface showing live chess board"
                  className="device-art device-screenshot-image"
                />
                <p className="device-caption">BTChess keeps the board local and the tempo sharp.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="band reveal">
          <p>
            BTChess does not ask players to wait for the cloud to be clever.
            It asks them to sit down, connect, and play.
          </p>
        </section>

        <section className="content-section" id="features">
          <div className="section-heading reveal">
            <p className="kicker">Why it stands out</p>
            <h2>Most chess apps optimize for screens. BTChess optimizes for the room.</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((card) => (
              <article className="feature-card reveal" key={card.title}>
                <p className="feature-eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section" id="how-it-works">
          <div className="section-heading reveal">
            <p className="kicker">How it works</p>
            <h2>Three moves from curiosity to a real match.</h2>
          </div>

          <div className="steps-panel reveal">
            {steps.map((step) => (
              <article className="step-row" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section quote-section reveal">
          <blockquote>
            “No internet. No accounts. Just you, your opponent, and a board that feels ready before the conversation ends.”
          </blockquote>
        </section>

        <section className="content-section notes-section" id="notes">
          <div className="section-heading reveal">
            <p className="kicker">Engineering notes</p>
            <h2>A product story that reads like a changelog, but sells like a campaign.</h2>
          </div>

          <div className="notes-grid">
            <article className="notes-card reveal">
              <h3>Recent direction</h3>
              <ul>
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>

            <article className="notes-card reveal notes-card-accent">
              <h3>Release promise</h3>
              <p>
                BTChess is built to feel immediate, memorable, and a little futuristic.
                That first impression should make people want to try it, not just understand it.
              </p>
              <a
                className="button button-primary button-inline"
                href="https://github.com/KaitoJD/btchess/releases"
                target="_blank"
                rel="noreferrer"
              >
                Get BTChess
              </a>
            </article>

            <article className="notes-card reveal notes-card-highlight">
              <h3>Open source & contributions</h3>
              <p>
                BTChess is an open source project and we welcome everyone to contribute.
                Whether you're fixing bugs, adding features, or improving the experience,
                your ideas and efforts help make BTChess better for everyone.
              </p>
              <a
                className="button button-primary button-inline"
                href="https://github.com/KaitoJD/btchess"
                target="_blank"
                rel="noreferrer"
              >
                Contribute on GitHub
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Nguyen Sy Nguyen. All right reserved.</p>
        <div className="footer-contact-list" aria-label="Contact links">
          <a
            className="footer-contact-button"
            href="mailto:contact.nguyensynguyen@gmail.com"
            aria-label="Send email to Nguyen Sy Nguyen"
          >
            <EnvelopeSimple aria-hidden="true" size={20} weight="fill" />
          </a>

          <a
            className="footer-contact-button"
            href="https://www.linkedin.com/in/nguyensynguyen/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <LinkedinLogo aria-hidden="true" size={20} weight="fill" />
          </a>

          <a
            className="footer-contact-button"
            href="https://github.com/KaitoJD/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
          >
            <GithubLogo aria-hidden="true" size={20} weight="fill" />
          </a>

          <a
            className="footer-contact-button"
            href="https://www.facebook.com/kaito.dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Facebook profile"
          >
            <FacebookLogo aria-hidden="true" size={20} weight="fill" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;