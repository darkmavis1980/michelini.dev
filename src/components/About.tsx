import React from "react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "GraphQL", "RESTful APIs", "PHP", "Python",
    "AWS", "Docker", "Kubernetes", "CI/CD",
    "Database Design", "Agile Methodologies", "Team Leadership", "Technical Writing"
  ];

  // Colors for skill tags
  const tagColors = [
    "bg-blue-100 text-blue-600 border border-blue-200",
    "bg-teal-100 text-teal-600 border border-teal-200",
    "bg-orange-100 text-orange-600 border border-orange-200",
    "bg-blue-100 text-blue-600 border border-blue-200",
    "bg-teal-100 text-teal-600 border border-teal-200"
  ];

  return (
    <section id="about" className="section gradient-bg-about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">My Journey</h3>
            <p className="mb-6 text-lg leading-relaxed">
              With over two decades in the software development industry, I've witnessed and participated in the evolution of web technologies from their early days to the complex ecosystems we have today.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Throughout my career, I've worked with startups, enterprises, and everything in between, helping teams build scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy capturing moments through my camera lens, exploring new technologies, and sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className={`tag-pill ${tagColors[index % tagColors.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-3 text-blue-600">Experience Highlights:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Led development teams at multiple tech companies</li>
                <li>Architected and implemented large-scale web applications</li>
                <li>Contributed to open-source projects</li>
                <li>Technical writer with publications on dev.to and other platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
