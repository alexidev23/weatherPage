import DaysWeather from "@/components/DaysWeather";
import DescriptionWeather from "@/components/DescriptionWeather";
import HourWeather from "@/components/HourWeather";
import InfoWeatherMain from "@/components/InfoWeatherMain";
import SelectorHeader from "@/components/SelectorHeader";

export default function Home() {
  return (
    <>
      <SelectorHeader />
      <div className="w-[1200px] mx-auto my-10 border flex gap-4 justify-center">
        <div className="flex flex-col gap-4">
          <InfoWeatherMain />
          <DescriptionWeather />
          <DaysWeather />
        </div>
        <div className="flex flex-col gap-4">
          <HourWeather />
        </div>
      </div>
    </>
  );
}
