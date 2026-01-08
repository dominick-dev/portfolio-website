function AboutMe() {
  return (
    <div className="flex flex-col space-y-15 pt-15">
      {/* Bio Section */}
      <div className="space-y-4">
        <p>
          I&apos;m a <b>software engineer</b> currently working at DRS Rada
          Technologies. Also, I recently graduated from the University of Pennsylvania
          with a <b>Master&apos;s in Computer and Information Technology</b>.
        </p>
        <p>
          I&apos;m now enjoying the free time I now have after graduation
          by working on building some software projects I've had on the 
          backburner. Currently working on a chat application in C to explore
          networking further.
        </p>
        <p>
          My background blends <b>software, data, and research</b> - driven by a
          strong interest in building tools that solve real-world problems. When
          I&apos;m not coding, you&apos;ll find me tinkering with my
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
          <li>Building a terminal based chat application in C</li>
          <li>Learning Vim commands to assert dominance</li>
          <li>Leetcoding to sharpen my DS&A skills</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
