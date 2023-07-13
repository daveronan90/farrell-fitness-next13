import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template:"%s | Farrell Fitness Performance Center",
    default:"Farrell Fitness Performance Center"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "'Roboto', cursive" }}
        className={
          "container mx-auto max-w-5xl bg-slate-950 font-medium uppercase tracking-widest text-white w-full"
        }
      >
        <div
          style={{ clipPath: "polygon(100% 0, 60% 0, 100% 100%)" }}
          className="fixed inset-0 -z-10 bg-orange-600 opacity-75"
        ></div>
        <div
          style={{ clipPath: "polygon(100% 0, 75% 0, 100% 65%)" }}
          className="fixed inset-0 -z-20 bg-orange-600"
        ></div>
        <div
          style={{ clipPath: "polygon(45% 0, 55% 0, 95% 100%, 85% 100%)" }}
          className="fixed inset-0 -z-20 bg-orange-600 opacity-25"
        ></div>
        <Nav />
        <div className="h-[.1rem] bg-gray-200 rounded overflow-hidden relative z-20">
          <div className="w-24 h-full bg-orange-600"></div>
        </div>
        <div className="relative mx-6 my-12 md:my-24 space-y-12 md:space-y-24">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
