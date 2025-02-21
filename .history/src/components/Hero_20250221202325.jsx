import { heroBackground, people } from "../assets";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative pt-10" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute  left-1/2 w-[234%] -translate-x-1/2  md:w-[138%] ">
            <img
              src={heroBackground}
              className="w-full"
              // width={1440}
              // height={1800}
              alt="hero"
            />
          </div>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 grid grid-flow-row md:grid-flow-col">

            <div className="grid-cols-12 lg:grid-cols-6 md:grid-cols-8 md:justify-items-end">
              <h1 className="h1 mb-6 md:text-right">
                Web Developer <span className="opacity-35-">|</span><br /><span className="text-color-5 h2">Turning Ideas into Reality</span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 md:text-right">
                Hi, I’m <span className="text-color-5 font-black">Hooi Yee</span>! I craft sleek, user-friendly websites that deliver seamless experiences.
              </p>
              <div className="items-end pt-5"><Heading
                tag="Get started with Me"
              />
              </div>
            </div>
            <div className="grid-cols-12 lg:grid-cols-6 md:grid-cols-4 md:col-start-1 md:justify-items-start">
              <img src={people} className="max-w-none w-[100%] align-top md:-mt-3" alt="hero-people" />
            </div>
          </div>
          <div>
            {/* <Button href="/project" white>
            My Projects
          </Button> */}
          </div>


          <BackgroundCircles />
        </div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
