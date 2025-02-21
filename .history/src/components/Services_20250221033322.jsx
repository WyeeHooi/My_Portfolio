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
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/30 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">


            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src=""
                      width={48}
                      height={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                      }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[5.5rem] h-[5.5rem] bg-n-7 border group border-n-1/15 rounded-xl -rotate-${index * 45
                        }`}
                    >
                      <img
                        className="m-auto transition-transform duration-300 transform scale-100 hover:scale-110 "
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
                ))}
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
