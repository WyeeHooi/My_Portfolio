import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { collabApps, brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import FallingText from "./design/FallingText";
import { LeftCurve, RightCurve } from "./design/Collaboration";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Core Skillset"
          text="Frameworks, Languages & Tools I Work With"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[50rem] mb-5 p-8 border border-n-1/30 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">


            <FallingText
              text={`ReactJs ORACLE Database HTML CSS Javascript Git SEO ASP.Net Wordpress UnityAR Python Bootstrap Java Photoshop TailwindCSS PHP`}
              highlightWords={["Tailwind", "WordPress", "Git", "HTML", "ReactJs", "Bootstrap"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.5rem"
              mouseConstraintStiffness={0.9}
            />
            <div className="absolute z-10 p-5 top-[10%] left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="absolute flex top-1/2 left-1/2 aspect-square m-auto border border-n-6 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full items-center">
                  <div className="items-center justify-center w-[100%] h-[100%] bg-n-8 rounded-full">
                    {/* <img
                      src=""
                      width={48}
                      height={48}
                      alt="brainwave"
                    /> */}
                  </div>

                </div>
              </div>

              <ul className="w-full md:h-[25rem] sm:h-[10rem]">
                {collabApps.map((app, index) => {
                  const totalItems = collabApps.length;
                  const angle = (360 / totalItems) * index; // Calculate the angle for each item
                  return (
                    <li
                      key={app.id}
                      className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                      style={{ transform: `rotate(${angle}deg)` }} // Apply the calculated angle
                    >
                      <div
                        className={`relative -top-[1.6rem] flex w-[4rem] h-[4rem] bg-n-7 border group border-n-1/15 rounded-xl`}
                        style={{ transform: `rotate(-${angle}deg)` }} // Counter-rotate the content
                      >
                        <img
                          className="m-auto transition-transform duration-300 transform scale-100 hover:scale-110 sm:scale-80"
                          width={50}
                          height={50}
                          alt={app.title}
                          src={app.icon}
                        />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-black text-n-2 text-xs px-2 py-1 rounded-lg transition-opacity duration-300">
                          {app.title}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>


          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
