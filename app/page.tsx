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

      <section className="prose prose-neutral dark:prose-invert">

        <p className="prose prose-neutral dark:prose-invert">
          {`I'm a  Lead Software Enginner, Software Architect. I relocated to Toronto in 2023`}
        </p>
        <p>6 years of professional experience in Software Development, specializing in Cloud-based technologies and tech stack.</p>
        <p>Expertise in Frontend, Backend, and DevOps using Python, Django, JavaScript/TypeScript, React/Redux, PostgreSQL/MySQL, Linux Servers (RHEL/Ubuntu), AWS, Docker, Serverless, Microservice etc. following industry standards and best practices.</p>
        <div className="flex flex-wrap mb-4">
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Python</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Django</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">JavaScript/TypeScript</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">React/Redux</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">PostgreSQL/MySQL</span>
        </div>
        <div className="flex flex-wrap mb-4">
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">AWS</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Docker</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Serverless</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Kubernetes</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Terraform</span>
        </div>
        <div className="flex flex-wrap mb-4">
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Linux Servers (RHEL/Ubuntu)</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">VIM and Tmux fanatic</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Open Source Enthusiast</span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">Technology freak</span>
        </div>

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

