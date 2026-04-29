import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Flutter | FastAPI | Backend Developer";

  // ✅ Projects data
  const projects = [
    {
      name: "Voice Recorder App",
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/voice-recorder",
      image: "https://via.placeholder.com/400x250"
    },
    {
      name: "Admin Panel",
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/admin-panel",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={dark ? "bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-bold">Sakib.dev</h1>
        <div className="space-x-4">
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero with 3D */}
      <div className="h-screen relative">
        <ThreeScene />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Hi, I'm Sakib 👋
          </motion.h1>

          <motion.p
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-4 text-xl text-gray-300"
          >
            {text}
          </motion.p>

          {/* Resume Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <a
              href="/resume_sakib.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/50"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-white rounded-xl hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/mohdsakib432" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohd-sakib-ansari-2568852b0" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

        </div>
      </div>

      {/* About */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a Flutter and Backend developer skilled in FastAPI, Firebase, and MySQL.
          I build scalable apps and APIs with clean architecture and modern UI.
        </p>
      </section>

      {/* Skills */}
      <section className="p-10">
        <h2 className="text-3xl text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Flutter", "FastAPI", "Python", "Firebase", "MySQL", "Git"].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-4 border rounded-xl text-center backdrop-blur-md bg-white/10"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl text-center mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden border backdrop-blur-md bg-white/10"
            >
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />

              <div className="p-4">
                <h3 className="text-xl font-bold">{p.name}</h3>

                <div className="flex gap-4 mt-3">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    Live
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-green-400">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl mb-4">Contact</h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = {
              email: e.target.email.value,
              message: e.target.message.value,
            };

            await fetch("https://your-backend.onrender.com/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            alert("Message Sent 🚀");
          }}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input required name="email" placeholder="Email" className="p-3 rounded bg-white/10" />
          <textarea required name="message" placeholder="Message" className="p-3 rounded bg-white/10" />
          <button className="bg-green-500 p-3 rounded hover:scale-105 transition">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-5">© 2026 Sakib</footer>
    </div>
  );
}