import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Flutter | FastAPI | Backend Developer";

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

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm Sakib 👋
        </motion.h1>

        <p className="mt-4 text-xl text-gray-400">{text}</p>

        <div className="flex gap-4 mt-6">
          <a href="/resume.pdf" download className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition">
            Resume
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border rounded-xl hover:scale-105 transition">
            GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="p-10">
        <h2 className="text-3xl text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Flutter", "FastAPI", "Python", "Firebase", "MySQL", "Git"].map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="p-4 border rounded-xl text-center backdrop-blur-md bg-white/10">
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: "Voice Recorder App",
            demo: "https://your-demo-link.com"
          }, {
            name: "Admin Panel",
            demo: "https://your-demo-link.com"
          }].map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-5 rounded-xl border backdrop-blur-md bg-white/10">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                Live Demo
              </a>
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

            await fetch("http://localhost:8000/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            alert("Message Sent 🚀");
          }}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input name="email" placeholder="Email" className="p-3 rounded bg-white/10" />
          <textarea name="message" placeholder="Message" className="p-3 rounded bg-white/10" />
          <button className="bg-green-500 p-3 rounded hover:scale-105 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-5">© 2026 Sakib</footer>
    </div>
  );
}