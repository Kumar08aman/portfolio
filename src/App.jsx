function App() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Aman Kumar
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Full Stack Developer | Java | Machine Learning
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/Kumar08aman/resume" className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
            Resume
          </a>
          <a href="https://github.com/Kumar08aman" className="px-5 py-2 border border-gray-700 rounded-lg hover:bg-gray-900 transition">
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
          I’m a Computer Science student with a strong interest in building scalable applications and solving real-world problems using technology. I have hands-on experience in full-stack development, blockchain, and machine learning, with projects ranging from decentralized applications to data-driven systems like an Email Spam Classifier.

          I enjoy working across the stack-designing intuitive frontends, building efficient backends, and experimenting with intelligent systems. I’m continuously learning and currently expanding my skills in data science and AI to create impactful, production-ready solutions.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          {/* Project 1 */}
          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-500 transition">
            <h3 className="text-xl font-semibold">Email Spam Classifier</h3>
            <p className="text-gray-400 mt-3">
              Built a machine learning model using NLP to classify emails as spam or not spam.
            </p>
            <a href=" https://github.com/Kumar08aman/Email-spam-classifier-main" className="text-blue-400 mt-4 inline-block hover:underline">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-500 transition">
            <h3 className="text-xl font-semibold">Secure Messaging App</h3>
            <p className="text-gray-400 mt-3">
              Developed an encrypted messaging system ensuring secure communication between users.
            </p>
            <a href="#" className="text-blue-400 mt-4 inline-block hover:underline">
              View Project →
            </a>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {["Java", "Python", "SQL", "React", "Node.js", "Git", "Machine Learning"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-900 rounded-lg text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">
          ak2842137@gmail.com
        </p>
      </section>

    </div>
  )
}

export default App