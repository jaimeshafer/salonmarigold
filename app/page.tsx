import Image from "next/image";

const phoneNumber = "615-631-5679";
const emailAddress = "brittneyshaferhair@gmail.com";
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent("Appointment request — Salon Marigold")}`;
const textLink = `sms:${phoneNumber}?body=${encodeURIComponent("Hi Brittney! I'd like to book an appointment at Salon Marigold.")}`;
const giftCardUrl = "https://salonmarigold.glossgenius.com/shop/gift-cards";

const reviews = [
  ["Brittney listens to what you want, and she is excellent with color. She works with you to get exactly the color or cut you want.", "Heather K."],
  ["Every visit is like hanging out with a great friend who knows exactly what to do with your hair!", "Lauren"],
  ["I got over a foot cut off my hair and had absolutely no regrets. I recommend Brittney for all your cut and color needs!", "Courtney"],
  ["Brittney is attentive, listens, and has been my favorite hairdresser for many years. I always leave very happy.", "Lisa Moore"],
  ["She takes the time to listen and give professional input. I love that she strives to surpass my expectations!", "Lisa"],
];

const serviceGroups = [
  {
    title: "Cuts & styling",
    services: [
      ["Short haircut", "$57", "30 min"], ["Medium haircut", "$61", "45 min"], ["Long haircut", "$67", "45 min"],
      ["Men’s cut", "$38", "30 min"], ["Kid’s cut (10 & under)", "$38", "45 min"], ["Dry cut — no wash or style", "$46+", "30 min"],
      ["Bang trim / neck hair trim", "Price varies", "15 min"], ["Blowout", "$45+", "60 min"], ["Special event hair", "Price varies", "90 min"],
      ["Spa conditioning treatment", "$25+", "15 min"],
    ],
  },
  {
    title: "Color",
    services: [
      ["Haircolor", "$98+", "90 min"], ["Men’s color camo", "$34", "15 min"], ["Color gloss w/ C / toner / base break", "$47", "60 min"],
      ["Per foil color (up to 8 foils)", "$18+", "45 min"], ["Full highlights", "$130+", "90 min"], ["Partial highlights", "$105+", "90 min"],
      ["Balayage hair painting", "$160+", "120 min"], ["Ombré", "$280+", "180 min"], ["Corrective color", "$330+", "180 min"],
    ],
  },
  {
    title: "Finishing touches",
    services: [["Brow, lip, or chin wax", "$20", "15 min"], ["Brow tint", "$22", "15 min"]],
  },
];

const hours = [
  ["Wednesday", "9:30 AM – 5:30 PM"],
  ["Thursday", "9:30 AM – 5:30 PM"],
  ["Saturday", "9:00 AM – 6:00 PM"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Salon Marigold home">Salon Marigold</a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href={giftCardUrl} target="_blank" rel="noreferrer">Gift cards</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-book" href={textLink}>Text to book <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Brentwood, Tennessee</p>
          <h1>Hair that feels<br /><em>like you.</em></h1>
          <p className="hero-text">A welcoming, one-on-one salon experience for cuts, color, and the confidence that follows.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={textLink}>Text to book <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Salon Marigold logo">
          <div className="sun-disc" />
          <Image src="/salon-marigold-logo.png" alt="Salon Marigold" width={1900} height={1046} priority />
        </div>
      </section>

      <section className="intro-band" id="about">
        <p className="eyebrow">Meet your stylist</p>
        <p className="intro-statement">Salon Marigold is the personal studio of <strong>Brittney Shafer</strong>—a place for lived-in color, great conversation, and hair that works beautifully beyond the chair.</p>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">The menu</p>
          <h2>Made for your<br /><em>real life.</em></h2>
          <p className="menu-note">Every service is tailored to you. Send a message to reserve your time.</p>
        </div>
        <div className="service-list">
          {serviceGroups.map((group) => (
            <section className="service-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.services.map(([name, price, time]) => (
                <article className="service-item" key={name}>
                  <div><h4>{name}</h4><p>{time}</p></div>
                  <span className="service-price">{price}</span>
                </article>
              ))}
            </section>
          ))}
          <aside className="policy-note">
            <p className="eyebrow">Cancellation policy</p>
            <p>A 20% cancellation fee applies to no-shows and day-of cancellations.</p>
          </aside>
        </div>
      </section>

      <section className="gift-card-band">
        <div>
          <p className="eyebrow">Give a little glow</p>
          <h2>Good hair is<br /><em>a lovely gift.</em></h2>
        </div>
        <div className="gift-card-action">
          <Image className="scissors-mark" src="/scissors-mark.png" alt="" width={1142} height={1218} aria-hidden="true" />
          <a className="button button-primary" href={giftCardUrl} target="_blank" rel="noreferrer">Buy a gift card <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="reviews section" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <p className="eyebrow">Kind words</p>
          <h2 id="reviews-title">Loved by the<br /><em>people in her chair.</em></h2>
        </div>
        <div className="review-window">
          <div className="review-track">
            {[...reviews, ...reviews].map(([quote, name], index) => (
              <figure className="review-card" key={`${name}-${index}`}>
                <blockquote>“{quote}”</blockquote>
                <figcaption>— {name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-flower" aria-hidden="true">✳</div>
        <div className="visit-info">
          <p className="eyebrow">Visit the Studio</p>
          <h2>
            A private salon in<br />
            <em>Brentwood.</em>
          </h2>
          <address>Sola Salons<br />1731 Mallory Lane<br />Brentwood, TN 37027</address>
          <a className="text-link" href="https://maps.google.com/?q=Sola+Salons+1731+Mallory+Lane+Brentwood+TN+37027" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hours" aria-label="Salon hours">
          <p className="eyebrow">Studio hours</p>
          {hours.map(([day, time]) => <div className="hour-row" key={day}><span>{day}</span><span>{time}</span></div>)}
          <p className="hours-note">Appointments by text or email.</p>
        </div>
      </section>

      <section className="booking-cta">
        <p className="eyebrow">Your next good hair day starts here</p>
        <h2>Let’s make<br /><em>something lovely.</em></h2>
        <div className="booking-actions">
          <a className="button button-light" href={textLink}>Text {phoneNumber} <span aria-hidden="true">↗</span></a>
          <a className="text-link booking-email" href={emailLink}>Email Brittney <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Salon Marigold</p>
        <a href={emailLink}>{emailAddress}</a>
      </footer>
    </main>
  );
}
