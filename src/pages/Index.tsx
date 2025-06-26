import Hero from "@/components/Hero";
import WhyImportant from "@/components/WhyImportant";
import WhatYouSee from "@/components/WhatYouSee";
import Bonuses from "@/components/Bonuses";
import ConfirmButton from "@/components/ConfirmButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyImportant />
      <WhatYouSee />
      <Bonuses />
      <ConfirmButton />
    </div>
  );
};

export default Index;
