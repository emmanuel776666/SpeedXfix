import React, { useState, useEffect, useRef } from "react";
import {
  Bell, MapPin, Search, UserRound, CalendarDays, CircleCheck, ArrowRight, ShieldCheck,
  House, MessageSquare, Heart, ChevronDown, ChevronRight, ChevronLeft, Menu, X, Settings,
  Camera, Wallet, Users, Star, Award, BriefcaseBusiness, CreditCard, UserCog, CircleHelp,
  TrendingUp, Send, Trash2, LogOut, Wrench, Droplets, Zap, Sparkles, PaintRoller, Hammer, Wind,
} from "lucide-react";
import "./Homepage.css";

/* =====================================================
   DATA  (move to its own file / API later)
===================================================== */
const SERVICES = [
  { id: "plumbing", name: "Plumbing", price: 15000, img: "/speedxfixplumbing.webp", icon: Droplets },
  { id: "electrical", name: "Electrical", price: 10000, img: "/speedxfixelect.webp", icon: Zap },
  { id: "cleaning", name: "Cleaning", price: 8000, img: "/speedxfixcleaning.webp", icon: Sparkles },
  { id: "painting", name: "Painting", price: 12000, img: "/speedxfixpainting.webp", icon: PaintRoller },
  { id: "carpentry", name: "Carpentry", price: 14000, img: "/speedxfix-image.webp", icon: Hammer },
  { id: "ac", name: "AC Repair", price: 18000, img: "/speedxfix-image.webp", icon: Wind },
];

const PROS = [
  { id: 1, name: "Chinedu Okafor", job: "Plumber", rating: 4.9, jobs: 132 },
  { id: 2, name: "Aisha Bello", job: "Cleaner", rating: 4.8, jobs: 98 },
  { id: 3, name: "Tunde Adeyemi", job: "Electrician", rating: 4.7, jobs: 76 },
  { id: 4, name: "Grace Eze", job: "Painter", rating: 4.9, jobs: 54 },
];

const INITIAL_BOOKINGS = [
  { id: 1, service: "Plumbing", pro: "Chinedu Okafor", date: "2026-10-06", price: 15000, status: "upcoming" },
  { id: 2, service: "Cleaning", pro: "Aisha Bello", date: "2026-10-09", price: 8000, status: "upcoming" },
  { id: 3, service: "Electrical", pro: "Tunde Adeyemi", date: "2026-09-21", price: 10000, status: "completed" },
  { id: 4, service: "Painting", pro: "Grace Eze", date: "2026-09-02", price: 12000, status: "cancelled" },
];

const INITIAL_CHATS = [
  { id: 1, name: "Chinedu Okafor", unread: 2, msgs: [{ me: false, t: "Hello! I'll arrive by 10am on Tuesday." }, { me: false, t: "Please make sure the water is turned off." }] },
  { id: 2, name: "Aisha Bello", unread: 0, msgs: [{ me: true, t: "Do you bring your own supplies?" }, { me: false, t: "Yes, everything is included." }] },
  { id: 3, name: "SpeedXFix Support", unread: 0, msgs: [{ me: false, t: "Welcome to SpeedXFix! Ask us anything." }] },
];

const REVIEWS = [
  { n: "Ngozi A.", r: 5, t: "Fast, neat and professional. Fixed my leak in under an hour." },
  { n: "David O.", r: 5, t: "Arrived on time and explained everything clearly." },
  { n: "Mercy I.", r: 4, t: "Good work overall. Would hire again." },
];

const TXNS = [
  { id: 1, t: "Payout - Plumbing job", a: 15000, d: "28 Sep" },
  { id: 2, t: "Wallet top-up", a: 10000, d: "24 Sep" },
  { id: 3, t: "Withdrawal to bank", a: -20000, d: "20 Sep" },
  { id: 4, t: "Payout - Cleaning job", a: 8000, d: "15 Sep" },
];

const FAQ = [
  ["How do I book a professional?", "Search for a service, pick a professional, choose a date and confirm."],
  ["How do payments work?", "Payments are held securely and released once the job is done."],
  ["Can I cancel a booking?", "Yes. Open Bookings, find the job under Upcoming and tap Cancel."],
  ["How do I contact support?", "Open Messages and start a chat with SpeedXFix Support."],
];

const naira = (n) => "₦" + Math.abs(n).toLocaleString();
const prettyDate = (d) => new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });

/* =====================================================
   SMALL SHARED PIECES
===================================================== */
function Logo({ onClick }) {
  return (
    <button className="logo" onClick={onClick} aria-label="SpeedXFix home">
      <span>Speed</span><span className="logo-x">X</span><span>Fix</span>
      <Wrench size={20} className="logo-wrench" />
    </button>
  );
}

function PageHeader({ title, onBack }) {
  return (
    <header className="page-header">
      <button className="round-btn" onClick={onBack} aria-label="Go back"><ChevronLeft size={22} /></button>
      <h1>{title}</h1>
      <span className="page-header-space" />
    </header>
  );
}

function Empty({ icon: Icon, title, text, action, onAction }) {
  return (
    <div className="empty">
      <div className="empty-icon"><Icon size={30} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      {action && <button className="primary-btn" onClick={onAction}>{action}</button>}
    </div>
  );
}

/* =====================================================
   HAMBURGER DRAWER
===================================================== */
function Drawer({ open, onClose, go }) {
  const links = [
    [House, "Home", "home"], [CalendarDays, "Bookings", "bookings"], [MessageSquare, "Messages", "messages"],
    [Heart, "Favorites", "favorites"], [UserRound, "Profile", "profile"],
    [BriefcaseBusiness, "My Services", "services"], [CreditCard, "Payouts", "payouts"],
    [Settings, "Settings", "settings"], [CircleHelp, "Help & Support", "help"],
  ];
  return (
    <>
      <div className={`scrim ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <Logo onClick={() => go("home")} />
          <button className="round-btn" onClick={onClose} aria-label="Close menu"><X size={20} /></button>
        </div>
        <nav className="drawer-links">
          {links.map(([Icon, label, key]) => (
            <button key={key} onClick={() => go(key)}><Icon size={19} />{label}</button>
          ))}
        </nav>
        <button className="drawer-logout" onClick={() => go("home", "You have been signed out (demo).")}>
          <LogOut size={19} /> Sign out
        </button>
      </aside>
    </>
  );
}

/* =====================================================
   BOOKING SHEET (opens when a service is tapped)
===================================================== */
function BookingSheet({ service, onClose, onConfirm }) {
  const [pro, setPro] = useState(PROS[0].id);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  if (!service) return null;
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="modal-wrap" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <div><h3>Book {service.name}</h3><p>From {naira(service.price)}</p></div>
          <button className="round-btn" onClick={onClose} aria-label="Close"><X size={20} /></button>
        </div>
        <label className="field-label">Choose a professional</label>
        <div className="pro-list">
          {PROS.map((p) => (
            <button key={p.id} className={`pro-option ${pro === p.id ? "selected" : ""}`} onClick={() => setPro(p.id)}>
              <span className="pro-avatar">{p.name[0]}</span>
              <span className="pro-info"><strong>{p.name}</strong><small>{p.job} · {p.jobs} jobs</small></span>
              <span className="pro-rating"><Star size={13} fill="currentColor" />{p.rating}</span>
            </button>
          ))}
        </div>
        <label className="field-label" htmlFor="bk-date">Pick a date</label>
        <input id="bk-date" className="input" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
        <label className="field-label" htmlFor="bk-note">Job details (optional)</label>
        <textarea id="bk-note" className="input" rows={2} placeholder="Describe what needs to be done" value={note} onChange={(e) => setNote(e.target.value)} />
        <button
          className="primary-btn wide"
          disabled={!date}
          onClick={() => onConfirm({ service: service.name, pro: PROS.find((p) => p.id === pro).name, date, price: service.price })}
        >
          {date ? "Confirm booking" : "Select a date to continue"}
        </button>
      </div>
    </div>
  );
}

/* =====================================================
   HOME
===================================================== */
function HomePage({ go, openBooking, favs, toggleFav }) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [showAll, setShowAll] = useState(false);
  const results = SERVICES.filter((s) => s.name.toLowerCase().includes(submitted.toLowerCase()));
  const runSearch = (e) => { e.preventDefault(); setSubmitted(query.trim()); };

  return (
    <>
      <section className="hero">
        <div className="hero-location">
          <button className="chip-btn"><MapPin size={16} /> Benin City, Edo State <ChevronDown size={15} /></button>
        </div>
        <div className="hero-body">
          <div className="hero-text">
            <span className="eyebrow">FIND A PROFESSIONAL</span>
            <h2>What job do<br />you need <span>done?</span></h2>
            <p>Find trusted professionals near you and get the job done, fast.</p>
          </div>
          <img className="hero-img" src="/speedxfix-image.webp" alt="SpeedXFix professional" />
        </div>
        <form className="search-box" onSubmit={runSearch}>
          <Search size={19} />
          <input
            type="text" value={query} onChange={(e) => { setQuery(e.target.value); if (!e.target.value) setSubmitted(""); }}
            placeholder="Search for services, e.g. Plumbing or Cleaning"
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {submitted && (
        <section className="section">
          <div className="section-head">
            <div><span className="eyebrow">RESULTS</span><h2>“{submitted}”</h2></div>
            <button className="link-btn" onClick={() => { setSubmitted(""); setQuery(""); }}>Clear</button>
          </div>
          {results.length ? (
            <div className="card-grid">{results.map((s) => <ServiceCard key={s.id} s={s} fav={favs.includes(s.id)} toggleFav={toggleFav} onBook={openBooking} />)}</div>
          ) : (
            <Empty icon={Search} title="No services found" text="Try a different word, like plumbing or painting." />
          )}
        </section>
      )}

      <section className="section">
        <div className="section-head"><div><span className="eyebrow">QUICK SERVICES</span><h2>What do you need?</h2></div></div>
        <div className="quick-row">
          {SERVICES.map((s) => (
            <button key={s.id} className="quick-item" onClick={() => openBooking(s)}>
              <span className="quick-icon"><s.icon size={22} /></span>{s.name}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><span className="eyebrow">EXPLORE</span><h2>Popular Services</h2></div>
          <button className="link-btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "View all"} <ArrowRight size={14} /></button>
        </div>
        <div className="card-grid">
          {SERVICES.slice(0, showAll ? 6 : 4).map((s) => <ServiceCard key={s.id} s={s} fav={favs.includes(s.id)} toggleFav={toggleFav} onBook={openBooking} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><div><span className="eyebrow">SIMPLE PROCESS</span><h2>How it works</h2></div></div>
        <div className="steps">
          {[[Search, "Search", "Find the service you need"], [UserRound, "Choose", "Select a trusted professional"],
            [CalendarDays, "Book", "Pick a date and agree on details"], [CircleCheck, "Done", "Job completed to your satisfaction"]].map(([Icon, t, d], i) => (
            <React.Fragment key={t}>
              <div className="step"><span className="step-icon"><Icon size={21} /></span><div><h3>{t}</h3><p>{d}</p></div></div>
              {i < 3 && <ArrowRight className="step-arrow" size={18} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="section why">
        <div>
          <span className="eyebrow">WHY SPEEDXFIX</span>
          <h2>Service you can<br />actually trust.</h2>
          <ul>
            {["Verified & reviewed professionals", "Fast and reliable service", "Secure payments", "Satisfaction guaranteed"].map((t) => (
              <li key={t}><CircleCheck size={16} />{t}</li>
            ))}
          </ul>
        </div>
        <div className="why-shield"><ShieldCheck size={64} strokeWidth={1.4} /></div>
      </section>
    </>
  );
}

function ServiceCard({ s, fav, toggleFav, onBook }) {
  return (
    <article className="serviceCard">
      <div className="service-img">
        <img src={s.img} alt={s.name} />
        <button className={`fav-btn ${fav ? "on" : ""}`} onClick={() => toggleFav(s.id)} aria-label={fav ? "Remove from favorites" : "Add to favorites"}>
          <Heart size={16} fill={fav ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="service-body">
        <div><h3>{s.name}</h3><p>From {naira(s.price)}</p></div>
        <button className="mini-btn" onClick={() => onBook(s)}>Book</button>
      </div>
    </article>
  );
}

/* =====================================================
   BOOKINGS
===================================================== */
function BookingsPage({ bookings, cancel, go }) {
  const [tab, setTab] = useState("upcoming");
  const list = bookings.filter((b) => b.status === tab);
  return (
    <section className="section tight">
      <div className="section-head"><div><span className="eyebrow">YOUR JOBS</span><h2>My Bookings</h2></div></div>
      <div className="tabs">
        {["upcoming", "completed", "cancelled"].map((t) => (
          <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
            {t[0].toUpperCase() + t.slice(1)} <em>{bookings.filter((b) => b.status === t).length}</em>
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <Empty icon={CalendarDays} title={`No ${tab} bookings`} text="Book a professional and it will show up here." action="Find a service" onAction={() => go("home")} />
      ) : (
        <div className="stack">
          {list.map((b) => (
            <div className="row-card" key={b.id}>
              <span className="row-icon"><BriefcaseBusiness size={20} /></span>
              <div className="row-main">
                <strong>{b.service}</strong>
                <small>{b.pro} · {prettyDate(b.date)}</small>
              </div>
              <div className="row-end">
                <strong>{naira(b.price)}</strong>
                {b.status === "upcoming" && <button className="danger-link" onClick={() => cancel(b.id)}>Cancel</button>}
                {b.status !== "upcoming" && <span className={`pill ${b.status}`}>{b.status}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* =====================================================
   MESSAGES
===================================================== */
function MessagesPage({ chats, setChats }) {
  const [openId, setOpenId] = useState(null);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  const chat = chats.find((c) => c.id === openId);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chat?.msgs.length, openId]);

  const open = (id) => { setOpenId(id); setChats((cs) => cs.map((c) => (c.id === id ? { ...c, unread: 0 } : c))); };
  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const msg = text.trim();
    setChats((cs) => cs.map((c) => (c.id === openId ? { ...c, msgs: [...c.msgs, { me: true, t: msg }] } : c)));
    setText("");
    setTimeout(() => setChats((cs) => cs.map((c) => (c.id === openId ? { ...c, msgs: [...c.msgs, { me: false, t: "Thanks for your message! I'll get back to you shortly." }] } : c))), 1200);
  };

  if (chat) {
    return (
      <section className="chat">
        <div className="chat-head">
          <button className="round-btn" onClick={() => setOpenId(null)} aria-label="Back to messages"><ChevronLeft size={22} /></button>
          <span className="pro-avatar">{chat.name[0]}</span>
          <strong>{chat.name}</strong>
        </div>
        <div className="chat-body">
          {chat.msgs.map((m, i) => <div key={i} className={`bubble ${m.me ? "me" : ""}`}>{m.t}</div>)}
          <div ref={endRef} />
        </div>
        <form className="chat-form" onSubmit={send}>
          <input className="input" placeholder="Type a message" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="send-btn" aria-label="Send"><Send size={18} /></button>
        </form>
      </section>
    );
  }
  return (
    <section className="section tight">
      <div className="section-head"><div><span className="eyebrow">INBOX</span><h2>Messages</h2></div></div>
      <div className="stack">
        {chats.map((c) => (
          <button className="row-card clickable" key={c.id} onClick={() => open(c.id)}>
            <span className="pro-avatar">{c.name[0]}</span>
            <div className="row-main"><strong>{c.name}</strong><small className="clamp">{c.msgs[c.msgs.length - 1].t}</small></div>
            {c.unread > 0 && <span className="badge">{c.unread}</span>}
          </button>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   FAVORITES
===================================================== */
function FavoritesPage({ favs, toggleFav, openBooking, go }) {
  const list = SERVICES.filter((s) => favs.includes(s.id));
  return (
    <section className="section tight">
      <div className="section-head"><div><span className="eyebrow">SAVED</span><h2>Favorites</h2></div></div>
      {list.length === 0 ? (
        <Empty icon={Heart} title="No favorites yet" text="Tap the heart on any service to save it here." action="Browse services" onAction={() => go("home")} />
      ) : (
        <div className="card-grid">{list.map((s) => <ServiceCard key={s.id} s={s} fav toggleFav={toggleFav} onBook={openBooking} />)}</div>
      )}
    </section>
  );
}

/* =====================================================
   PROFILE + SUB-PAGES
===================================================== */
function ProfilePage({ go, balance, setBalance, toast }) {
  const [more, setMore] = useState(false);
  const stats = [[Users, "24", "People Hired", "orange"], [CircleCheck, "18", "Jobs Done", "green"], [Star, "4.8", "Rating", "yellow"], [Award, "98%", "Success", "blue"]];
  const menu = [
    [CalendarDays, "My Bookings", "View your upcoming and past bookings", "bookings"],
    [Star, "My Reviews", "See reviews given to you by customers", "reviews"],
    [BriefcaseBusiness, "My Services", "Manage the services you offer", "services"],
    [CreditCard, "Payouts & Transactions", "Track your payouts and transactions", "payouts"],
    [UserCog, "Account Settings", "Manage your account and preferences", "settings"],
    [CircleHelp, "Help & Support", "Get help and contact support", "help"],
  ];
  return (
    <>
      <section className="profile-hero">
        <div className="avatar-wrap">
          <img className="avatar" src="https://i.pravatar.cc/300?img=12" alt="Profile" />
          <button className="camera-btn" onClick={() => toast("Photo upload coming soon")} aria-label="Change photo"><Camera size={18} /></button>
        </div>
        <div>
          <span className="verified"><CircleCheck size={14} /> Verified</span>
          <h2>Emmanuel Chibuike</h2>
          <p className="loc"><MapPin size={16} /> Benin City, Edo State</p>
          <button className="link-btn" onClick={() => go("settings")}>View and edit profile <ChevronRight size={16} /></button>
          <p className={`bio ${more ? "open" : ""}`}>
            Experienced professional providing reliable plumbing and home repair services. I focus on quality work, quick response, and customer satisfaction. I make sure every job is completed properly and professionally.
          </p>
          <button className="link-btn small" onClick={() => setMore(!more)}>{more ? "Read less" : "Read more"}</button>
        </div>
      </section>

      <section className="card wallet">
        <div className="wallet-info">
          <span className="wallet-icon"><Wallet size={24} /></span>
          <div><small>Wallet Balance</small><h3>{naira(balance)}.00</h3></div>
        </div>
        <div className="wallet-btns">
          <button className="ghost-btn" onClick={() => {
            if (balance < 5000) return toast("Not enough balance to withdraw");
            setBalance(balance - 5000); toast("₦5,000 withdrawn to your bank");
          }}>Withdraw</button>
          <button className="primary-btn" onClick={() => { setBalance(balance + 5000); toast("₦5,000 added to your wallet"); }}>Add Funds</button>
        </div>
      </section>

      <section className="card stats">
        {stats.map(([Icon, v, l, c]) => (
          <div className="stat" key={l}><span className={`stat-icon ${c}`}><Icon size={22} /></span><strong>{v}</strong><small>{l}</small></div>
        ))}
      </section>

      <section className="card overview">
        <div className="overview-head">
          <div><h3>Profile Overview</h3><p>A quick look at how you're doing on SpeedXFix.</p></div>
          <button className="soft-btn" onClick={() => go("stats")}><TrendingUp size={17} /><span>View Stats</span></button>
        </div>
        {menu.map(([Icon, t, d, key]) => (
          <button className="menu-item" key={key} onClick={() => go(key)}>
            <Icon size={22} strokeWidth={1.8} />
            <span><strong>{t}</strong><small>{d}</small></span>
            <ChevronRight size={20} />
          </button>
        ))}
      </section>
    </>
  );
}

function ReviewsPage({ back }) {
  return (
    <>
      <PageHeader title="My Reviews" onBack={back} />
      <div className="card summary"><h3>4.8</h3><div><div className="stars">{"★★★★★"}</div><small>Based on 18 reviews</small></div></div>
      <div className="stack">
        {REVIEWS.map((r) => (
          <div className="card review" key={r.n}>
            <div className="review-top"><strong>{r.n}</strong><span className="stars">{"★".repeat(r.r)}{"☆".repeat(5 - r.r)}</span></div>
            <p>{r.t}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function MyServicesPage({ back, toast }) {
  const [on, setOn] = useState({ plumbing: true, electrical: false, cleaning: true, painting: false, carpentry: false, ac: false });
  return (
    <>
      <PageHeader title="My Services" onBack={back} />
      <p className="page-note">Switch on the services you want to receive jobs for.</p>
      <div className="stack">
        {SERVICES.map((s) => (
          <div className="row-card" key={s.id}>
            <span className="row-icon"><s.icon size={20} /></span>
            <div className="row-main"><strong>{s.name}</strong><small>From {naira(s.price)}</small></div>
            <button className={`switch ${on[s.id] ? "on" : ""}`} role="switch" aria-checked={on[s.id]} aria-label={s.name}
              onClick={() => { setOn({ ...on, [s.id]: !on[s.id] }); toast(`${s.name} ${on[s.id] ? "turned off" : "turned on"}`); }}><i /></button>
          </div>
        ))}
      </div>
    </>
  );
}

function PayoutsPage({ back, balance }) {
  return (
    <>
      <PageHeader title="Payouts & Transactions" onBack={back} />
      <div className="card summary"><div><small>Available balance</small><h3>{naira(balance)}</h3></div></div>
      <div className="stack">
        {TXNS.map((t) => (
          <div className="row-card" key={t.id}>
            <div className="row-main"><strong>{t.t}</strong><small>{t.d}</small></div>
            <strong className={t.a > 0 ? "plus" : "minus"}>{t.a > 0 ? "+" : "-"}{naira(t.a)}</strong>
          </div>
        ))}
      </div>
    </>
  );
}

function SettingsPage({ back, toast }) {
  const [name, setName] = useState("Emmanuel Chibuike");
  const [loc, setLoc] = useState("Benin City, Edo State");
  const [prefs, setPrefs] = useState({ push: true, email: false, sms: true });
  const labels = { push: "Push notifications", email: "Email updates", sms: "SMS alerts" };
  return (
    <>
      <PageHeader title="Account Settings" onBack={back} />
      <div className="card form">
        <label className="field-label" htmlFor="s-name">Full name</label>
        <input id="s-name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="field-label" htmlFor="s-loc">Location</label>
        <input id="s-loc" className="input" value={loc} onChange={(e) => setLoc(e.target.value)} />
        <button className="primary-btn wide" onClick={() => toast("Profile saved")}>Save changes</button>
      </div>
      <div className="card form">
        <h3>Notifications</h3>
        {Object.keys(prefs).map((k) => (
          <div className="pref" key={k}>
            <span>{labels[k]}</span>
            <button className={`switch ${prefs[k] ? "on" : ""}`} role="switch" aria-checked={prefs[k]} aria-label={labels[k]} onClick={() => setPrefs({ ...prefs, [k]: !prefs[k] })}><i /></button>
          </div>
        ))}
      </div>
    </>
  );
}

function HelpPage({ back, go }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHeader title="Help & Support" onBack={back} />
      <div className="stack">
        {FAQ.map(([q, a], i) => (
          <div className="card faq" key={q}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>{q}<ChevronDown size={18} className={open === i ? "flip" : ""} /></button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
      <button className="primary-btn wide spaced" onClick={() => go("messages")}>Chat with support</button>
    </>
  );
}

function StatsPage({ back }) {
  const months = [["May", 40], ["Jun", 55], ["Jul", 48], ["Aug", 72], ["Sep", 90], ["Oct", 35]];
  return (
    <>
      <PageHeader title="My Stats" onBack={back} />
      <div className="card stats-chart">
        <h3>Jobs per month</h3>
        <div className="bars">
          {months.map(([m, v]) => <div key={m}><span style={{ height: v + "%" }} /><small>{m}</small></div>)}
        </div>
      </div>
      <div className="card stats">
        {[["24", "People Hired"], ["18", "Jobs Done"], ["4.8", "Rating"], ["98%", "Success"]].map(([v, l]) => (
          <div className="stat" key={l}><strong>{v}</strong><small>{l}</small></div>
        ))}
      </div>
    </>
  );
}

/* =====================================================
   APP SHELL: navigation, shared state, toast
===================================================== */
const NAV = [[House, "Home", "home"], [CalendarDays, "Bookings", "bookings"], [MessageSquare, "Messages", "messages"], [Heart, "Favorites", "favorites"], [UserRound, "Profile", "profile"]];
const SUB = { reviews: "profile", services: "profile", payouts: "profile", settings: "profile", help: "profile", stats: "profile" };

export default function Homepage() {
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [favs, setFavs] = useState(["plumbing"]);
  const [balance, setBalance] = useState(25600);
  const [sheet, setSheet] = useState(null);
  const [msg, setMsg] = useState("");
  const timer = useRef(null);

  const toast = (t) => { setMsg(t); clearTimeout(timer.current); timer.current = setTimeout(() => setMsg(""), 2400); };
  const go = (p, note) => { setPage(p); setMenu(false); window.scrollTo({ top: 0 }); if (note) toast(note); };
  const toggleFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const confirmBooking = (b) => {
    setBookings((bs) => [{ ...b, id: Date.now(), status: "upcoming" }, ...bs]);
    setSheet(null); go("bookings", `${b.service} booked with ${b.pro}`);
  };
  const cancel = (id) => { setBookings((bs) => bs.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b))); toast("Booking cancelled"); };

  const activeTab = SUB[page] || page;
  const unread = chats.reduce((n, c) => n + c.unread, 0);
  const backToProfile = () => go("profile");
  const inChat = page === "messages";

  return (
    <div className="app">
      <header className="topbar">
        <button className="round-btn" onClick={() => setMenu(true)} aria-label="Open menu"><Menu size={24} /></button>
        <Logo onClick={() => go("home")} />
        <div className="topbar-right">
          <button className="round-btn" aria-label="Notifications" onClick={() => go("messages")}>
            <Bell size={22} />{unread > 0 && <span className="dot" />}
          </button>
          <button className="avatar-mini" aria-label="Open profile" onClick={() => go("profile")}><img src="/speedxfix-image.webp" alt="" /></button>
        </div>
      </header>

      <Drawer open={menu} onClose={() => setMenu(false)} go={go} />

      <main className={`content ${inChat ? "wide-chat" : ""}`}>
        {page === "home" && <HomePage go={go} openBooking={setSheet} favs={favs} toggleFav={toggleFav} />}
        {page === "bookings" && <BookingsPage bookings={bookings} cancel={cancel} go={go} />}
        {page === "messages" && <MessagesPage chats={chats} setChats={setChats} />}
        {page === "favorites" && <FavoritesPage favs={favs} toggleFav={toggleFav} openBooking={setSheet} go={go} />}
        {page === "profile" && <ProfilePage go={go} balance={balance} setBalance={setBalance} toast={toast} />}
        {page === "reviews" && <ReviewsPage back={backToProfile} />}
        {page === "services" && <MyServicesPage back={backToProfile} toast={toast} />}
        {page === "payouts" && <PayoutsPage back={backToProfile} balance={balance} />}
        {page === "settings" && <SettingsPage back={backToProfile} toast={toast} />}
        {page === "help" && <HelpPage back={backToProfile} go={go} />}
        {page === "stats" && <StatsPage back={backToProfile} />}
      </main>

      <BookingSheet key={sheet?.id} service={sheet} onClose={() => setSheet(null)} onConfirm={confirmBooking} />

      <nav className="bottom-nav" aria-label="Main">
        {NAV.map(([Icon, label, key]) => (
          <button key={key} className={activeTab === key ? "active" : ""} onClick={() => go(key)}>
            <Icon size={21} strokeWidth={activeTab === key ? 2.5 : 2} />
            <span>{label}</span>
            {key === "messages" && unread > 0 && <i className="nav-badge">{unread}</i>}
          </button>
        ))}
      </nav>

      <div className={`toast ${msg ? "show" : ""}`} role="status">{msg}</div>
    </div>
  );
}