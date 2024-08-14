

import InfoWeatherMain from "@/components/InfoWeatherMain";
import SelectorHeader from "@/components/SelectorHeader";

export default function Home() {
  return (
    <>
      <SelectorHeader />
      <div className="w-[1200px] mx-auto my-10">
        <InfoWeatherMain />
      </div>
    </>
  );
}
