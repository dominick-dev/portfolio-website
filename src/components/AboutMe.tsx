function AboutMe() {
  return (
    <div className="flex flex-col space-y-15 pt-15">
      {/* Bio Section */}
      <div className="space-y-4">
        <p>
          I&apos;m an aspiring <b>software engineer</b> currently working as a
          Data Coordinator on oncology clinical trials at Georgetown University
          Medical Center. I&apos;m also gearing up to start my final semester
          before completing my{" "}
          <b>Master&apos;s in Computer and Information Technology</b> at the{" "}
          <b>University of Pennsylvania</b>.
        </p>
        <p>
          Through the program, I&apos;ve gained hands-on experience with core
          <b> computer science</b> topics including{" "}
          <b>
            software engineering, computer systems, databases, and networked
            applications
          </b>
          . In my final semester, I’ll be taking{" "}
          <b>Machine Learning for Data Science</b> and{" "}
          <b>Internet and Web Systems</b> to dive deeper into AI and building
          scalable web apps.
        </p>
        <p>
          My background blends <b>data, research, and software</b> - driven by a
          strong interest in building tools that solve real-world problems. When
          I&apos;m not coding or studying, you’ll find me tinkering with my
          espresso machine, spending time with my family, or petting every dog I
          meet.
        </p>
      </div>

      {/* Now Section */}
      <div className="bg-muted/20 p-4 rounded-xl">
        <h3 className="text-base font-medium text-muted-foreground mb-2">
          Right now, I’m focused on:
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Building a RAG chatbot to match patients with clinical research
            trials ⚕️
          </li>
          <li>Designing this portfolio website to showcase my projects 💼</li>
          <li>Revisiting Italian after a recent trip to Italy 🇮🇹</li>
          <li>Leetcoding to sharpen my DS&A skills 💻</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
