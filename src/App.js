import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Flutter Developer | FastAPI Backend | API Integration | Real-world Apps";
  const projects = [
    {
      name: "my_myntra_app",
      demo: "#",
      tech: ["Flutter", "Dart", "Api"],
      github: "https://github.com/mohdsakib432/my_myntra_app",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuJNRQtUcRf5jwtHSQIRAElLd7iw9-QBJjQ&s"
    },
    {
      name: "face-age-gender-emotion",
      demo: "#",
      tech: ["FastAPI", "Python"],
      github: "https://github.com/mohdsakib432/face-age-gender-emotion",
      image: "https://visagetechnologies.com/app/uploads/2022/07/Face-Analysis-gender-estimation.webp"
    },
    {
      name: "finger-based-air-writing-ai",
      demo: "#",
      tech: ["FastAPI", "Python"],
      github: "https://github.com/mohdsakib432/finger-based-air-writing-ai",
      image: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-16-1103-2_2/MediaObjects/512560_1_En_2_Fig6_HTML.png"
    },
    {
      name: "fastapi_project",
      demo: "#",
      tech: ["FastAPI", "Python"],
      github: "https://github.com/mohdsakib432/fastapi_project",
      image: "https://dezyre.gumlet.io/images/blog/fastapi-projects/fastapi_projects.png?w=576"
    },
    {
      name: "Voice Recorder AI",
      desc: "Record audio, send to backend, receive noise-free processed audio",
      tech: ["Flutter", "API", "Dart"],
      github: "#",
      demo: "#",
      image: "https://cdn-icons-png.flaticon.com/512/727/727269.png",
    },
    {
      name: "Icreate Image Editor",
      desc: "Edit images with text overlays and export PDF & JPG",
      tech: ["Flutter", "SQLite"],
      github: "#",
      demo: "#",
      image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    },
    {
      name: "Pokemon API App",
      desc: "Fetch and display Pokémon data using REST APIs",
      tech: ["Flutter", "API"],
      github: "#",
      demo: "#",
      image: "https://cdn-icons-png.flaticon.com/512/188/188987.png",
    },
  ];

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  // cursor glow
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");
    window.addEventListener("mousemove", (e) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    });
  }, []);

  return (
    <div className={dark
      ? "bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen"
      : "bg-white text-black min-h-screen"
    }>

      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-bold">Sakib.dev</h1>

        <div className="space-x-4">
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="h-screen relative perspective-1000">
        <ThreeScene />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,200,255,0.8)]"
          >
            Hi, I'm Sakib 👋 <br />
            <span className="text-2xl md:text-4xl">
              Full Stack Flutter & Backend Developer
            </span>
          </motion.h1>

          <motion.p
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-4 text-xl text-gray-300"
          >
            {text}
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="/resume_sakib.pdf"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/50"
            >
              View Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-white rounded-xl"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/mohdsakib432">GitHub</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          Motivated and self-driven developer with hands-on experience in Flutter and FastAPI.
          I build real-world applications involving audio processing, API integration, file storage,
          and responsive UI design.

          I focus on clean architecture (MVVM, MVC) and scalable backend systems.
          Strong problem-solving mindset with practical project experience.
        </p>
      </motion.section>
      {/* SKILLS */}
      {/* SKILLS */}
      <section className="p-10 perspective-1000">
        <h2 className="text-3xl text-center mb-10 font-bold">
          Skills ⚡
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Flutter",
            "Dart",
            "FastAPI",
            "Python",
            "Firebase",
            "MySQL",
            "SQLite",
            "REST API",
            "Git",
            "JavaScript",
            "HTML",
            "CSS",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10 }}
              className="p-4 rounded-xl bg-white/10 text-center shadow-lg cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl text-center mb-10 font-bold">
          Projects 🚀
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10"
            >
              <img
                src={p.image}
                alt="project preview"
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{p.desc}</p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-3">
                  <a href={p.github} className="text-green-400">
                    GitHub
                  </a>
                  <button className="text-blue-400">Live</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl mb-6 font-bold">Contact Me ✉️</h2>

        <form className="flex flex-col gap-4 max-w-md mx-auto backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10">

          <input
            placeholder="Your Email"
            className="p-3 rounded bg-white/10 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-white/10 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl shadow-lg"
          >
            Send Message 🚀
          </motion.button>

        </form>

        <div className="mt-6 text-gray-300 space-y-1">
          <p>📧 mohdsakibansari432@gmail.com</p>
          <p>📱 +91-9820817430</p>
          <p>🌐 portfolio-new-snowy-six.vercel.app</p>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center p-5">© 2026 Sakib</footer>

      {/* STYLES */}
      <style jsx>{`
        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(0,255,255,0.2), transparent);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 999;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}