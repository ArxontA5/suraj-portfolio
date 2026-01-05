import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://suraj-portfolio.vercel.app'), // Replace with actual domain later
  title: {
    default: "Suraj Prasad V | Software Engineer",
    template: "%s | Suraj Prasad V"
  },
  description: "Senior Software Engineer specializing in Java, Spring Boot, Microservices, and Scalable Backend Architecture.",
  keywords: ["Software Engineer", "Java Developer", "Spring Boot", "Microservices", "Kafka", "Backend Developer", "Suraj Prasad V"],
  authors: [{ name: "Suraj Prasad V" }],
  creator: "Suraj Prasad V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suraj-portfolio.vercel.app",
    title: "Suraj Prasad V | Software Engineer",
    description: "Building scalable backend systems and robust APIs. Explore my portfolio.",
    siteName: "Suraj Prasad V Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We need to add a placeholder image for this
        width: 1200,
        height: 630,
        alt: "Suraj Prasad V - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Prasad V | Software Engineer",
    description: "Building scalable backend systems and robust APIs. Explore my portfolio.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
