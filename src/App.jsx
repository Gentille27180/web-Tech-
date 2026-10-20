import { useState } from "react";

const services = [
  {
    title: "Borrow & return",
    mark: "01",
    note: "A new chapter, on us.",
    description:
      "Find your next favorite from our shelves. Borrowing is free for every community member.",
  },
  {
    title: "Internet & computers",
    mark: "02",
    note: "Tools for your next big idea.",
    description:
      "Get online, use a computer, or print the materials you need for school and work.",
  },
  {
    title: "Reading & study spaces",
    mark: "03",
    note: "Room to focus. Room to imagine.",
    description:
      "Settle into a quiet corner, meet a study group, or enjoy a little room to think.",
  },
  {
    title: "Workshops & literacy",
    mark: "04",
    note: "Learn it today. Share it tomorrow.",
    description:
      "Build new skills together through welcoming workshops and reading programmes.",
  },
];

const events = [
  {
    day: "24",
    month: "October 2026",
    title: "Story Lab: make a monster",
    description:
      "Invent a character, build a tiny paper world, and give your creature a story. For young readers and their grown-ups.",
    time: "10:30 AM · Story corner",
    kind: "MAKE + IMAGINE",
  },
  {
    day: "31",
    month: "October 2026",
    title: "One Town, Many Voices",
    description:
      "Bring a page that matters to you. We'll take turns reading aloud and make a community list of stories worth passing on.",
    time: "2:00 PM · The big table",
    kind: "COMMUNITY READ",
  },
  {
    day: "07",
    month: "November 2026",
    title: "Click with Confidence",
    description:
      "Bring your questions for a no-pressure session on email, online research, and spotting suspicious links.",
    time: "11:00 AM · Computer nook",
    kind: "DIGITAL SKILLS",
  },
];

const books = [
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description:
      "A beloved, quietly profound journey about friendship, wonder, and seeing with the heart.",
    isbn: "9780156012195",
    shelf: "FOR THE CURIOUS",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A practical guide to making small changes that add up to remarkable, lasting results.",
    isbn: "9780735211292",
    shelf: "FOR A FRESH START",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    description:
      "A moving memoir about family, learning, and the transformative power of education.",
    isbn: "9780399590504",
    shelf: "FOR THE BIG QUESTIONS",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Bright Future Library home"
        >
          <span className="brand-mark" aria-hidden="true">
            B
          </span>
          <span className="brand-name">
            Bright Future<small>YOUR COMMUNITY'S OPEN SHELF</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#books" onClick={closeMenu}>Books</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A neighborhood library with room to grow</p>
          <h1 id="hero-title">
            Big ideas begin <span>around here.</span>
          </h1>
          <p>
            Borrow a story. Get online. Find a quiet corner or a new skill. This
            is your place to turn a little curiosity into a brighter future.
          </p>
          <div className="hero-actions">
            <a className="button" href="#services">
              Find your next chapter <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#events">
              See what's on <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85"
            alt="A bright, welcoming library filled with books"
          />
          <span className="photo-note">TAKE A BOOK. BRING BACK AN IDEA.</span>
          <span className="hero-stamp" aria-hidden="true">READ<br />LEARN<br />GROW</span>
        </div>
      </section>
      <div className="welcome-strip">
        <strong>Our promise</strong>
        <span>Useful knowledge. Open doors. A brighter future, built together.</span>
      </div>
    </>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">Why Bright Future exists</p>
          <h2>Not just shelves. A starting point.</h2>
          <p>
            Bright Future Library is a new community library built around a
            simple idea: opportunity grows when learning is within reach. Our
            doors are open to readers, students, job seekers, and anyone with a
            question they want to explore.
          </p>
          <p>
            We connect people with books, internet access, welcoming study
            spaces, and hands-on learning. Come for what you need today; leave
            with an idea for tomorrow.
          </p>
          <a className="text-link" href="#contact">
            Meet your library <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1100&q=85"
            alt="Readers exploring shelves in a bright library"
            loading="lazy"
          />
          <span className="photo-caption">A little room to become.</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <SectionHeading
          eyebrow="The everyday essentials"
          title="Come in for one thing. Leave with more."
        >
          Four ways your library can make a real difference in your week.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service-number">{service.mark || `0${index + 1}`}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-note">{service.note}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="events-section" id="events">
      <div className="events-inner">
        <SectionHeading
          eyebrow="Happenings at Bright Future"
          title="A reason to come by this week."
        >
          Small gatherings, useful skills, and stories worth sharing. Everyone's welcome.
        </SectionHeading>
        <div className="event-list">
          {events.map((event) => (
            <article className="event" key={event.title}>
              <div className="event-date">
                {event.day}
                <small>{event.month}</small>
              </div>
              <div>
                <span className="event-kind">{event.kind}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <span className="event-time">{event.time}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBooks() {
  return (
    <section className="section" id="books">
      <SectionHeading
        eyebrow="The Bright Future shelf"
        title="Three books. Three new directions."
      >
        A small, ever-changing invitation to read outside your usual lane.
      </SectionHeading>
      <div className="books-grid">
        {books.map((book) => (
          <article className="book" key={book.title}>
            <div className="book-cover-wrap">
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                alt={`Cover of ${book.title}`}
                loading="lazy"
              />
              <span className="book-shelf">{book.shelf}</span>
            </div>
            <div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-description">{book.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please write a message.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setFeedback("Please fix the highlighted fields and try again.");
      return;
    }

    setFeedback(
      `Thanks, ${form.name.trim()}! Your message is ready. We'll be in touch soon.`,
    );
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <span className="error" id="name-error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <span className="error" id="email-error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <span className="error" id="message-error">{errors.message}</span>}
      </div>
      <button className="button" type="submit">
        Send a message <span aria-hidden="true">→</span>
      </button>
      {feedback && (
        <p
          className={`form-feedback${Object.keys(errors).length ? " error-feedback" : ""}`}
          role="status"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <SectionHeading
          eyebrow="Your next step starts here"
          title="Tell us what you're curious about."
        >
          Ask about a service, suggest an event, or tell us what you'd love to learn.
        </SectionHeading>
        <div className="contact-grid">
          <address className="contact-details">
            <p className="contact-item">
              <strong>Visit</strong>
              <span>24 Maple Street<br />Your Town, ST 12345</span>
            </p>
            <p className="contact-item">
              <strong>Call</strong>
              <a href="tel:+15550142800">(555) 014-2800</a>
            </p>
            <p className="contact-item">
              <strong>Email</strong>
              <a href="mailto:hello@brightfuturelibrary.org">
                hello@brightfuturelibrary.org
              </a>
            </p>
            <p className="contact-item">
              <strong>Opening hours</strong>
              <span>Monday–Saturday · 9:00 AM–6:00 PM</span>
            </p>
          </address>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <FeaturedBooks />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-mark">BF</span>
          <span>Bright Future Library<small>READ LOCAL. GROW TOGETHER.</small></span>
        </div>
        <span>Books, access, and room to become.</span>
        <a href="#home">Return to the top ↑</a>
      </footer>
    </>
  );
}