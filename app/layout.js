import "./globals.css";

export const metadata = {
  title: "Usama Hussain — Software Engineer",
  description:
    "Usama Hussain — backend-focused software engineer building scalable products, AI workflows, agents and systems.",
  metadataBase: new URL("https://usama-portfolio.vercel.app"),
  openGraph: {
    title: "Usama Hussain — Software Engineer",
    description:
      "Backend-focused software engineer building scalable products, AI workflows, agents and systems.",
    type: "website",
  },
};

// Runs before hydration to set the theme and avoid a flash of the wrong colours.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
