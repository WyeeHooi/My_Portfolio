import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

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
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/50 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
