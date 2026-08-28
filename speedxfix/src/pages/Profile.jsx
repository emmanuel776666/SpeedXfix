import React from "react";

import {
  Menu,
  Bell,
  Settings,
  MapPin,
  Camera,
  Wallet,
  Users,
  CircleCheck,
  Star,
  Award,
  CalendarDays,
  MessageSquare,
  Heart,
  UserRound,
  BriefcaseBusiness,
  CreditCard,
  UserCog,
  CircleHelp,
  ChevronRight,
  TrendingUp,
  Home,
} from "lucide-react";

import "./Profile.css";

const stats = [
  {
    icon: Users,
    value: "24",
    label: "People Hired",
    color: "orange",
  },
  {
    icon: CircleCheck,
    value: "18",
    label: "Jobs Completed",
    color: "green",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Rating",
    color: "yellow",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    color: "blue",
  },
];

const menuItems = [
  {
    icon: CalendarDays,
    title: "My Bookings",
    description: "View your upcoming and past bookings",
  },
  {
    icon: Star,
    title: "My Reviews",
    description: "See reviews given to you by customers",
  },
  {
    icon: BriefcaseBusiness,
    title: "My Services",
    description: "Manage the services you offer",
  },
  {
    icon: CreditCard,
    title: "Payouts & Transactions",
    description: "Track your payouts and transactions",
  },
  {
    icon: UserCog,
    title: "Account Settings",
    description: "Manage your account and preferences",
  },
  {
    icon: CircleHelp,
    title: "Help & Support",
    description: "Get help and contact support",
  },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: CalendarDays, label: "Bookings" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Heart, label: "Favorites" },
  { icon: UserRound, label: "Profile", active: true },
];

export default function Profile() {
  return (
    <div className="profile-page">

      {/* HEADER */}
      <header className="topbar">

        <button className="icon-button">
          <Menu size={29} strokeWidth={2} />
        </button>

        <div className="logo">
          <span>Speed</span>
          <span className="logo-orange">X</span>
          <span>Fix</span>

          <div className="logo-wrench">
            <span>⚒️</span>
          </div>
        </div>

        <div className="topbar-actions">

          <button className="icon-button notification">
            <Bell size={26} />
            <span className="notification-dot" />
          </button>

          <button className="icon-button">
            <Settings size={27} />
          </button>

        </div>
      </header>


      {/* PROFILE HERO */}
      <section className="profile-hero">

        <div className="profile-background" />

        <div className="profile-info">

          <div className="avatar-wrapper">

            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="Profile"
              className="avatar"
            />

            <button className="camera-button">
              <Camera size={21} />
            </button>

          </div>

          <div className="profile-details">

            <div className="verified">
              <CircleCheck size={15}  />
              Verified
            </div>

            <h1>Emmanuel Chibuike</h1>

            <div className="location">
              <MapPin size={20} />
              <span>Benin City, Edo State</span>
            </div>

            <button className="edit-profile">
              View and edit profile
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </section>


      {/* WALLET */}
      <section className="wallet-card">

  <div className="wallet-info">

    <div className="wallet-icon">
      <Wallet size={28} />
    </div>

    <div>
      <p>Wallet Balance</p>
      <h2>₦25,600.00</h2>
    </div>

  </div>

  <div className="wallet-buttons">

    <button className="withdraw-button">
      Withdraw
    </button>

    <button className="fund-button">
      Add Funds
    </button>

  </div>

</section>
  

      {/* STATS */}
      <section className="stats-card">

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (
            <React.Fragment key={stat.label}>

              <div className="stat">

                <div className={`stat-icon ${stat.color}`}>
                  <Icon size={26} />
                </div>

                <strong>{stat.value}</strong>

                <span>{stat.label}</span>

              </div>

              {index < stats.length - 1 && (
                <div className="stat-divider" />
              )}

            </React.Fragment>
          );
        })}

      </section>


      {/* PROFILE OVERVIEW */}
      <section className="overview-card">

        <div className="overview-header">

          <div>
            <h2>Profile Overview</h2>

            <p>
              Here’s a quick overview of your performance on SpeedXFix.
            </p>
          </div>

          <button className="stats-button">
            <TrendingUp size={19} />
            <span>View Stats</span>
          </button>

        </div>


        <div className="menu-list">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <button
                className="menu-item"
                key={item.title}
              >

                <div className="menu-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="menu-content">

                  <strong>{item.title}</strong>

                  <span>{item.description}</span>

                </div>

                <ChevronRight
                  className="menu-arrow"
                  size={21}
                />

              </button>
            );
          })}

        </div>

      </section>


      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">

        {navItems.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`bottom-nav-item ${
                item.active ? "active" : ""
              }`}
            >

              <Icon size={27} strokeWidth={1.8} />

              <span>{item.label}</span>

            </button>
          );
        })}

      </nav>

    </div>
  );
}