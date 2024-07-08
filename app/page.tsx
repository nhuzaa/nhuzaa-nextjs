import Image from 'next/image';

import rohitpc from "public/images/rohit-pc.jpg";
import rohitdp from "public/images/rohit-dp.jpg";
import airlift from "public/images/airlift.jpg";
import avartan from "public/images/avartan.jpg";
import kickstart from "public/images/kickstart.jpg";
import draid from "public/images/draid.jpg";

import SocialLinks from "app/components/socials";
const defaultImage = rohitpc

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Page() {
  return (

    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I'm Rohit aka nhuzaa👋
      </h1>

      {/* New Section */}
      <section className="prose prose-neutral dark:prose-invert">
        <p>Lead Software Engineer | Software Architect | MLOps | AIops | Full Stack Development | DevOps</p>
        <p> With over 8 years of professional experience in Software Development, I specialize in creating cloud-based solutions and healthcare software, with a deep focus on MLOps, AIops, and leveraging advanced AI technologies.</p>

      </section>


      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me Pitchin my startup Airlift"
            src={airlift}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me at desk"
            src={rohitpc}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at picthing at CG event"
            src={avartan}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Career Couseling to Juniors"
            src={kickstart}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Rohit-Sthapit"
            src={rohitdp}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="University Project"
            src={draid}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <section>
        <h3 className="font-bold text-lg mb-3">Career Highlights:</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>Software Architect / Co-founder at Airlift Tech: Developed a GIS-based localized alternative to Google Maps using drone images, focusing on scalable cloud deployment and real-time data processing.</li>
          <li>Lead Product Engineer at PatientNow: Enhanced API performance by 30%, reducing latency significantly. Developed an MVP for healthcare applications integrating AI, improving predictive functionalities and user engagement.</li>
          <li>Full Stack Engineer at Ailytics: Implemented an AI-based Edge Computing module for real-time data processing and analytics in construction management. Conducted extensive load testing on Kubernetes clusters to ensure scalability and reliability.</li>
          <li>Lead Software Engineer at Signetic: Revolutionized healthcare data management by streamlining data pipelines and reducing software development lifecycle times by 50% through robust CI/CD integrations.</li>
        </ul>

        <h3 className="font-bold text-lg mb-3">🔧 Tech Stack:</h3>
        <p>💻 Programming & Frameworks:</p>
        <div className="flex flex-wrap mb-4">
          {/* Add icons for each technology here */}
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Python</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Django</span>
          {/* Add more as needed */}
        </div>
        <p>📦 Cloud & DevOps:</p>
        <div className="flex flex-wrap mb-4">
          {/* Add icons for each technology here */}
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">AWS</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Docker</span>
          {/* Add more as needed */}
        </div>
        <p>🐧 Systems & Tools:</p>
        <div className="flex flex-wrap mb-4">
          {/* Add icons for each technology here */}
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Linux (RHEL/Ubuntu)</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">VIM</span>
          {/* Add more as needed */}
        </div>

      </section>
      <SocialLinks />
    </section>

  );
}

