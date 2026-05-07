export const SITE = {
  title: "Robin Beilvert",
  tagline: "Projects gathering blog",
  description: "Electronics, IoT, robotics, art — projects by Robin Beilvert.",
  author: "Robin Beilvert",
  url: "https://rbeilvert.github.io",
  ogImage: "/img/og-default.png",
};

export type NavLink = { href: string; label: string };

export const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects/arcade7/", label: "Arcade7" },
  { href: "/projects/kickarcade/", label: "KickArcade" },
  { href: "/projects/frenchroboticscup/", label: "FR Robotics Cup" },
  { href: "/projects/ledcube/", label: "LED Cube" },
  { href: "/projects/carnavalinp/", label: "Toulouse Carnival" },
  { href: "/projects/ironman/", label: "Iron Man Face" },
  { href: "/projects/ledstrip/", label: "LED Strip" },
  { href: "/projects/art/", label: "Art" },
];
