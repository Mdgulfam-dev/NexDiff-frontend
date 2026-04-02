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

return ( <section className="min-h-screen bg-[#0F172A] text-white py-30 px-6"> <div className="max-w-7xl mx-auto">


    {/* HERO */}
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold"
      >
        About{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          NexDiff
        </span>
      </motion.h1>

      <p className="mt-6 text-white/70 max-w-2xl mx-auto">
        NexDiff is a fast-growing technology company delivering modern digital
        solutions with a strong team of developers, designers, and strategists.
      </p>
    </div>

    {/* COMPANY STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
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

    {/* ABOUT COMPANY */}
    <div className="mt-20 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        Who We Are 🚀
      </h2>
      <p className="text-white/70 leading-relaxed">
        We are a team of passionate engineers and creatives focused on building
        scalable web and mobile applications. At NexDiff, we combine technology,
        design, and strategy to deliver real business results.
      </p>
    </div>

    {/* TEAM SECTION */}
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center">
        Meet Our Team 👨‍💻
      </h2>

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

    {/* MISSION + VISION */}
    <div className="grid md:grid-cols-2 gap-10 mt-20">
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
        <p className="text-white/70 text-sm">
          To help businesses grow with powerful digital solutions and modern
          technology.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
        <p className="text-white/70 text-sm">
          To become a leading tech company delivering innovative and scalable
          solutions worldwide.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold">
        Let’s Work Together 🚀
      </h2>

      <div className="mt-6">
        <Button onClick={() => navigate("/contact")}>
          Contact Us
        </Button>
      </div>
    </div>

  </div>
</section>


);
};

export default About;
