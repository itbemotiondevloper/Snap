import { CommunitySection } from "@/components/CommunitySection";
import { ContactFooterSection } from "@/components/ContactFooterSection";
import { FAQSection } from "@/components/FAQSection";
import { FounderNoteSection } from "@/components/FounderNoteSection";
import { HeroSection } from "@/components/HeroSection";
import { LogoStripSection } from "@/components/LogoStripSection";
import { MarketingSection } from "@/components/MarketingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#191919] transition-colors duration-500 dark:bg-[#0f1115] dark:text-[#f5efe3]">
      <ThemeToggle />
      <HeroSection />
      <CommunitySection />
      <ProcessSection />
      <LogoStripSection />
      <MarketingSection />
      <FounderNoteSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFooterSection />
    </main>
  );
}
