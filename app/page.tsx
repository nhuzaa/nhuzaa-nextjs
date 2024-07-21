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
        <h2> I architect and deliver scalable MVPs, ensuring robust foundations for seamless transition from startup to scale-up. </h2>
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

      <SocialLinks />
    </section>

  );
}

