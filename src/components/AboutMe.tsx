function AboutMe() {
  return (
    <div className="flex flex-col space-y-15 pt-10">
      {/* Bio Section */}
      <div className="space-y-4">
        <p>
          I'm an aspiring software engineer currently working as a Data
          Coordinator on clinical research trials at Georgetown University
          Medical Center. I'm also pursuing a Master's in Computer and
          Information Technology at the University of Pennsylvania, with just
          one semester to go. Outside of work and school, I'm a husband, an
          uncle, a coffee enthusiast, and a lifelong dog lover.
        </p>
      </div>

      {/* Now Section */}
      <div className="bg-muted/20 p-4 rounded-md">
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
          <li>Leetcoding to to sharpen my DS&A skills 💻</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
