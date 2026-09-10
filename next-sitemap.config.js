module.exports = {
  siteUrl: "https://fs-notes.netlify.app",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/interview/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
  },
};