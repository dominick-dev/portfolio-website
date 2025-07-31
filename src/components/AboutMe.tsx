function AboutMe() {
  return (
    <div className="flex flex-col space-y-15 pt-15">
      {/* Bio Section */}
      <div className="space-y-4">
        <p>
          I'm an aspiring software engineer currently working as a Data
          Coordinator on oncology clinical trials at Georgetown University
          Medical Center. I'm also gearing up to start my final semester before
          completing my Master's in Computer and Information Technology at the
          University of Pennsylvania.
        </p>
        <p>
          Through the program, I've gained hands-on experience with core
          computer science topics including software engineering, computer
          systems, databases, and networked applications. In my final semester,
          I’ll be taking Machine Learning for Data Science and Internet and Web
          Systems to dive deeper into AI and building scalable web apps.
        </p>
        <p>
          My background blends data, research, and software - driven by a strong
          interest in building tools that solve real-world problems. When I'm
          not coding or studying, you’ll find me tinkering with my espresso
          machine, spending time with my family, or petting every dog I meet.
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
