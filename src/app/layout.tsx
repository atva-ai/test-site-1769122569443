import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Poppins({ 
  subsets: ['latin'],
  weight: ["400","700"],
  variable: '--font-heading',
});

const bodyFont = Inter({ 
  subsets: ['latin'],
  weight: ["400","700"],
  variable: '--font-body',
});

// SEO metadata - use provided values or build from company data
const seoTitle = "Nutrigo Natura Agrotech Private Limited - Manufacturer of Indian Spices from Guwahati - Wholesaler | in";
const seoDescription = "Quality products and services";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
