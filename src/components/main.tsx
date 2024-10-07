import { WelcomeContent, WelcomeBackground } from "./welcome";
import AboutMe from "./aboutMe";
import ContactMe from "./contactMe";

export default function Main() {
  type Section = {
    content: JSX.Element;
    background?: JSX.Element;
  };

  const sections: Section[] = [
    {
      content: WelcomeContent(),
      background: WelcomeBackground(),
    },
    {
      content: AboutMe(),
    },
    {
      content: buildProjectContent("Project1"),
    },
    {
      content: buildProjectContent("Project2"),
    },
    {
      content: buildProjectContent("Project3"),
    },
    {
      content: ContactMe(),
    },
  ];

  function buildProjectContent(name: string) {
    return <div>{name} Content</div>;
  }

  function buildSection(index: number, section: Section) {
    return (
      <section
        id={index.toString()}
        className="relative flex items-center justify-center h-[75vh] border border-black"
      >
        {section.background}
        {section.content}
      </section>
    );
  }

  return (
    <main className="bg-green-400">
      {sections.map((section, index) => buildSection(index, section))}
    </main>
  );
}
