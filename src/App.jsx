import { useState } from "react";

const services = [
  {
    title: "Borrow & return",
    description:
      "Find your next favorite from our shelves. Borrowing is free for every community member.",
  },
  {
    title: "Internet & computers",
    description:
      "Get online, use a computer, or print the materials you need for school and work.",
  },
  {
    title: "Reading & study spaces",
    description:
      "Settle into a quiet corner, meet a study group, or enjoy a little room to think.",
  },
  {
    title: "Workshops & literacy",
    description:
      "Build new skills together through welcoming workshops and reading programmes.",
  },
];

const events = [
  {
    day: "24",
    month: "October 2026",
    title: "Saturday Story Circle",
    description:
      "A lively morning of stories, songs, and make-believe for children ages 4–8. Caregivers are welcome.",
    time: "10:30 AM · Children's room",
  },
  {
    day: "31",
    month: "October 2026",
    title: "Community Reading Challenge",
    description:
      "Bring a favorite book, share a short reading, and celebrate the stories that bring our town together.",
    time: "2:00 PM · Main hall",
  },
  {
    day: "07",
    month: "November 2026",
    title: "Digital Skills Workshop",
    description:
      "A friendly, hands-on introduction to email, online research, and staying safe on the internet.",
    time: "11:00 AM · Learning lab",
  },
];

const books = [
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description:
      "A beloved, quietly profound journey about friendship, wonder, and seeing with the heart.",
    isbn: "9780156012195",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A practical guide to making small changes that add up to remarkable, lasting results.",
    isbn: "9780735211292",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    description:
      "A moving memoir about family, learning, and the transformative power of education.",
    isbn: "9780399590504",
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
            Bright Future<small>COMMUNITY LIBRARY</small>
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
          <p className="eyebrow">Your neighborhood, wide open</p>
          <h1 id="hero-title">
            A brighter future starts <span>with a book.</span>
          </h1>
          <p>
            Bright Future Library is a welcoming place for every curious mind.
            Come read, learn something new, and find your people.
          </p>
          <div className="hero-actions">
            <a className="button" href="#services">
              Explore the library <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#events">
              See what's on <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85"
            alt="Warmly lit community library lined with bookshelves"
          />
          <span className="photo-note">A place to find your next chapter.</span>
        </div>
      </section>
      <div className="welcome-strip">
        <strong>Open to everyone.</strong>
        <span>A little more room to read, learn, and grow together.</span>
      </div>
    </>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">A library for all of us</p>
          <h2>Good things happen when a community reads.</h2>
          <p>
            Bright Future Library brings books, people, and ideas together. We
            believe everyone deserves a welcoming place to discover a new
            story, get help with a project, or simply feel at home.
          </p>
          <p>
            Our mission is simple: make learning accessible, nurture a lifelong
            love of reading, and help every neighbor imagine what's possible.
          </p>
          <a className="text-link" href="#contact">
            Come say hello <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1100&q=85"
            alt="Readers exploring shelves in a bright library"
            loading="lazy"
          />
          <span className="photo-caption">Curiosity belongs here.</span>
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
          eyebrow="More than books"
          title="A little something for everyone."
        >
          Drop in, settle down, and make the most of your library.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
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
          eyebrow="Mark your calendar"
          title="There's always something on."
        >
          Join us for a story, a new skill, or a good conversation.
        </SectionHeading>
        <div className="event-list">
          {events.map((event) => (
            <article className="event" key={event.title}>
              <div className="event-date">
                {event.day}
                <small>{event.month}</small>
              </div>
              <div>
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
        eyebrow="From our shelves"
        title="A few good places to start."
      >
        A handful of reader favorites, picked for their power to stay with you.
      </SectionHeading>
      <div className="books-grid">
        {books.map((book) => (
          <article className="book" key={book.title}>
            <img
              src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
              alt={`Cover of ${book.title}`}
              loading="lazy"
            />
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
          eyebrow="We're easy to find"
          title="Come in. We'd love to meet you."
        >
          Questions, ideas, or just want to say hello? Send us a note.
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
        <span>© 2026 Bright Future Library. A community place for every story.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}