import { useContext } from "react";
import { AllContext } from "../Context/Context";
import Carousel from "../Components/Corousel";
import { CityEvents } from "../Components/CItyEvents";
import { Trending } from "../Components/Trending";
import { SlCalender } from "react-icons/sl";
import { CiPlay1 } from "react-icons/ci";
import { PiFilmReel } from "react-icons/pi";
import InfiniteAutoscrollCarousel from "../Components/Corousel";
import { TopArtist } from "../Components/TopArtist";
import { UpcomingEvents } from "../Components/UpcomingEvents";

export const Hero = () => {
  const context = useContext(AllContext);
  function scrollCarousel(offset) {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: offset, behavior: "smooth" });
  }
  return (
    <div className="w-full space-y-5 ">
      <InfiniteAutoscrollCarousel />
      <Trending />
      <UpcomingEvents />
      <TopArtist />
    </div>
  );
};
