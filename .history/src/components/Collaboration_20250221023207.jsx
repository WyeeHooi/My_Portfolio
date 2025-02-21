import { turtle, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { VideoChatMessage } from "./design/Services";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container grid md:grid-flow-col">
        <div className="md:grid-cols-6">
          <h2 className="h2 mb-4 md:mb-8 font-bold">
            Get to Know Me
          </h2>
          <p className="leading-loose">Hello! I’m currently pursuing a <b className="text-color-5">Bachelor of Computer Science</b>. My journey in tech is driven by a passion for creating innovative and user-friendly applications that make a real impact. I thrive on the satisfaction of achieving meaningful outcomes through my work.
            <br /><br />When I’m not coding, you can find me:</p>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={item.icon} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Try it now</Button> */}
        </div>

        <div className="md:grid-cols-5 mt-4">


          <div className="p-10 bg-n-7 rounded-3xl overflow-hidden lg:min-h-full">

            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] group">
              <img
                src={turtle}
                className="w-full h-full object-cover opacity-0 hover:opacity-100 hover:z-10 transition-opacity duration-300"
                width="520"
                height="400"
                alt="Image"
              />


              <VideoChatMessage />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
