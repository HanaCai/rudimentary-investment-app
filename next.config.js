module.exports = {
  publicRuntimeConfig: {
    site: {
      name: "Investment App",
      url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app",
      title: "Investment App",
      description: "Investment App",
      socialPreview: "/images/preview.png",
    },
  },
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
