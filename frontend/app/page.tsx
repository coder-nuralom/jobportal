import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Analytics from "./components/Analytics";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Analytics />
    </>
  );
}
