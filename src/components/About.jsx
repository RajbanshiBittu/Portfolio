import { motion } from "framer-motion";
import { University, GraduationCap } from "lucide-react";

const About = () => {
  const academicData = [
    {
      year: "2025",
      title: "B.Tech in Computer Science",
      institution: "IMPS College of Engineering & Technology, Malda, West Bengal",
      result: "CGPA - 7.91",
      icon: <University className="text-brand" size={24} />,
    },
    {
        year: "2022",
      title: "Diploma in Computer Science",
      institution: "Iswar Chandra Vidyasagr Polytechnic, Jhargram, West Bengal",
      result: "CGPA - 8.0",
      icon: <University className="text-brand" size={24} />,
    },
    {
      year: "2018",
      title: "12th",
      institution: "Gazole H.N.M High School (H.S), Malda, West Bengal",
      result: "78%",
      icon: <GraduationCap className="text-brand" size={24} />,
    },
    {
      year: "2016",
      title: "10th",
      institution: "Gazole H.N.M High School (H.S), Malda, West Bengal",
      result: "60%",
      icon: <GraduationCap className="text-brand" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - About Text & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Bridging the gap between{" "}
              <span className="text-brand">Academic Theory</span> and{" "}
              <span className="text-brand">Professional Practice</span>.
            </h3>
            <p className="text-text-muted leading-relaxed text-justify">
              I am a {" "}
              <strong>B.Tech Computer Science graduate</strong>  with a strong foundation in data structures, algorithms, and software development. My passion for web development has led me to specialize in the MERN stack, where I work with JavaScript, Node.js, Express.js, and React to build modern, scalable applications.
            </p>
            
            <p className="text-text-muted leading-relaxed text-justify">
              I specialize in developing robust backend systems and responsive, user-centric web applications. From designing RESTful APIs with Node.js and Express to building dynamic front-end interfaces with React, I focus on writing clean, efficient, and maintainable code. During my internship at AtomLeap.ai Technologies, I gained hands-on experience in building scalable APIs, implementing security best practices, and deploying applications using Docker in an agile environment.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">Fresher</p>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">Software <br />Developer Intern</p>
                <p className="text-sm text-text-muted">Atomleap.ai Technologies Pvt. Ltd.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Academic Journey
            </h3>
            {academicData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-brand transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-brand/10 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-brand font-bold text-sm">
                      {item.year}
                    </span>
                    <span className="text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-1">
                    {item.institution}
                  </p>
                  <p className="text-text-muted text-xs">{item.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
