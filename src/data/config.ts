const config = {
  title: "Rehan Haque | Full-Stack AI Developer",
  description: {
    long: "Explore the portfolio of Rehan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Rehan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Rehan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Rehan Haque",
  email: "rehan.haque@hsccom",
  site: "www.linkedin.com/in/rehan-haque-781909222",

  // for github stars button
  githubUsername: "RehanHQ",
  githubRepo: "portfolio_2026",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/rehan_4real",
    linkedin: "https://www.linkedin.com/in/rehan-haque-781909222",
    instagram: "https://www.instagram.com/rayhan.hque",
    facebook: "https://www.facebook.com/rehanhaque.786",
    github: "https://github.com/RehanHQ",
  },
};
export { config };
