import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Story } from "@/components/Story";

export const metadata: Metadata = {
  title: "Behind PHORIAN",
  description:
    "The story behind PHORIAN — an artistic universe where music, contemplation and emotion meet.",
};

export default function StoryPage() {
  return (
    <>
      <Story />
      <Footer />
    </>
  );
}
