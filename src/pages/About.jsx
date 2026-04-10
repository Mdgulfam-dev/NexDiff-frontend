import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import profile from "../assets/profile.jpg";

const team = [
  {
    name: "Md Gulfam",
    role: "Founder & CEO",
    image: profile,
  },
  {
    name: "Team Member",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Team Member",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Team Member",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=13",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto">
          {/* 🔥 HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Building the Future with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              NexDiff
            </span>
          </motion.h1>

          {/* 🔥 SUBTEXT */}
          <p className="mt-6 text-white/70 leading-relaxed text-lg">
            NexDiff is not just a development company — it’s a growth-focused
            technology partner. We specialize in building scalable web
            applications, mobile apps, and AI-powered systems that help
            businesses move faster, operate smarter, and grow stronger in the
            digital world.
          </p>

          {/* 🔥 EXTRA VALUE LINE */}
          <p className="mt-4 text-white/60 max-w-3xl mx-auto">
            From startups to growing businesses, we transform ideas into real,
            high-performing products using modern technologies like MERN, AI
            integrations, cloud systems, and scalable architecture.
          </p>

          {/* 🔥 FOUNDER SECTION */}
          <div className="mt-14 flex flex-col md:flex-row items-center gap-8 text-left bg-white/5 border border-white/10 rounded-2xl p-6">
            <img
              src={profile}
              alt="Md Gulfam"
              className="w-28 h-28 rounded-full object-cover border border-white/20"
            />

            <div>
              <h3 className="text-xl font-semibold">
                Md Gulfam — Founder & CEO
              </h3>

              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Md Gulfam is a passionate full-stack developer and tech
                entrepreneur with strong expertise in building scalable
                applications using modern technologies like React, Node.js,
                MongoDB, and cloud infrastructure. With hands-on experience in
                real-world projects and startups, he founded NexDiff with a
                vision to create impactful digital solutions that solve real
                business problems.
              </p>

              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                His focus is not just on development, but on building systems
                that drive business growth, improve efficiency, and deliver
                measurable results. Under his leadership, NexDiff is rapidly
                growing into a trusted technology partner for startups and
                businesses.
              </p>
            </div>
          </div>

          {/* 🔥 COMPANY STORY */}
          <div className="mt-12 text-left bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>

            <p className="text-white/70 text-sm leading-relaxed">
              NexDiff started with a simple idea — to bridge the gap between
              technology and business growth. Many businesses struggle not
              because they lack ideas, but because they lack the right
              technology and execution strategy.
            </p>

            <p className="text-white/70 text-sm mt-3 leading-relaxed">
              We saw this gap and decided to build solutions that are not just
              technically strong, but also business-focused. Today, NexDiff
              helps companies build powerful digital products, automate
              processes, and scale efficiently using modern tech stacks and
              AI-driven systems.
            </p>

            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Our goal is simple — to help businesses grow faster by building
              technology that actually works.
            </p>
          </div>
        </div>

        {/* 🔥 WHAT WE DO */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <p className="text-white/70 leading-relaxed">
            At NexDiff, we don’t just build software — we build growth systems.
            From custom web applications and mobile apps to AI-powered
            solutions, we design technology that helps businesses scale faster,
            operate smarter, and stay ahead of the competition.
          </p>
        </div>

        {/* 🔥 SERVICES */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Web Development",
              desc: "Modern, fast, and scalable web applications tailored to your business.",
            },
            {
              title: "Mobile Apps",
              desc: "High-performance Android & iOS apps with seamless user experience.",
            },
            {
              title: "AI Solutions",
              desc: "Smart automation, AI integrations, and data-driven systems.",
            },
            {
              title: "Custom Software",
              desc: "Build tools and systems designed specifically for your business needs.",
            },
            {
              title: "UI/UX Design",
              desc: "Beautiful, intuitive, and conversion-focused designs.",
            },
            {
              title: "Growth & Optimization",
              desc: "We don’t just build — we help you grow and scale.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-purple-400">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔥 COMPANY STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Team Members", value: "10+" },
            { label: "Years Experience", value: "2+" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-purple-400">
                {item.value}
              </h3>
              <p className="text-sm text-white/60 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🔥 WHY CHOOSE US */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose NexDiff?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Scalable & modern architecture",
              "Fast delivery with clean code",
              "AI-powered development approach",
              "Business-focused solutions",
              "Affordable & startup-friendly",
              "Long-term support & maintenance",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm text-white/70"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>

        
        {/* 🔥 OUR BRANDS */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Brands</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "NexDiff",
                desc: "Software, AI & Growth company focused on scalable digital solutions.",
                link: "https://nexdiff.in",
              },
              {
                name: "Renovax",
                desc: "Construction, renovation, and infrastructure solutions for modern businesses.",
                link: "https://mdrabbancontractor.in",
              },
              {
                name: "SK Discount Bazaar",
                desc: "Retail and discount platform offering affordable products for everyday needs.",
                link: "https://share.google/Wraq3eo2M4aLrqIqM",
              },
            ].map((brand, i) => (
              <a
                key={i}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition block"
              >
                <h3 className="text-xl font-semibold text-purple-400">
                  {brand.name}
                </h3>
                <p className="text-white/70 text-sm mt-3">{brand.desc}</p>

                {/* 🔥 VIEW BUTTON */}
                <p className="mt-4 text-sm text-cyan-400 font-medium">
                  Visit Website →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* 🔥 TEAM */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border border-white/20"
                />

                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-white/50">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔥 MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-white/70 text-sm">
              To empower businesses with technology that drives growth,
              efficiency, and innovation.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-white/70 text-sm">
              To become a globally recognized technology partner for building
              scalable and future-ready digital solutions.
            </p>
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">
            Let’s Build Something Powerful Together 
          </h2>

          <p className="text-white/60 mt-4">
            Have an idea or want to grow your business? We’re here to help.
          </p>

          <div className="mt-6">
            <Button onClick={() => navigate("/contact")}>Contact Us</Button>
          </div>
        </div>

        {/* 🔥 TESTIMONIALS */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: "Amit Sharma",
                feedback:
                  "NexDiff helped us build our platform from scratch. The performance and design exceeded our expectations.",
              },
              {
                name: "Rohit Verma",
                feedback:
                  "Their team understands both technology and business. We saw real growth after working with them.",
              },
              {
                name: "Sneha Kapoor",
                feedback:
                  "Professional, fast, and highly skilled. NexDiff delivered exactly what we needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  “{item.feedback}”
                </p>
                <h4 className="mt-4 font-semibold text-purple-400">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
