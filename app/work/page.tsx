export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is where your work experience goes.
      </p>
      <h3 className="font-bold text-lg mb-3">Career Highlights:</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>Software Architect / Co-founder at Airlift Tech: Developed a GIS-based localized alternative to Google Maps using drone images, focusing on scalable cloud deployment and real-time data processing.</li>
          <li>Lead Product Engineer at PatientNow: Enhanced API performance by 30%, reducing latency significantly. Developed an MVP for healthcare applications integrating AI, improving predictive functionalities and user engagement.</li>
          <li>Full Stack Engineer at Ailytics: Implemented an AI-based Edge Computing module for real-time data processing and analytics in construction management. Conducted extensive load testing on Kubernetes clusters to ensure scalability and reliability.</li>
          <li>Lead Software Engineer at Signetic: Revolutionized healthcare data management by streamlining data pipelines and reducing software development lifecycle times by 50% through robust CI/CD integrations.</li>
        </ul>

    </section>
  );
}
