import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
{
name: "Amit Sharma",
role: "Startup Founder",
rating: 5,
image: "https://i.pravatar.cc/100?img=1",
feedback:
"NexDiff helped us build a high-performance website that boosted our business growth significantly.",
},
{
name: "Priya Verma",
role: "Business Owner",
rating: 4,
image: "https://i.pravatar.cc/100?img=5",
feedback:
"Professional team with great technical skills. They delivered exactly what we needed.",
},
{
name: "Rahul Mehta",
role: "Entrepreneur",
rating: 5,
image: "https://i.pravatar.cc/100?img=3",
feedback:
"Amazing experience! The UI/UX and performance of our app is outstanding.",
},
];

const Testimonials = () => {
return ( <section className="py-20 bg-[#0F172A] text-white"> <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center">
      <h2 className="text-4xl font-bold">
        What Our Clients Say 💬
      </h2>
      <p className="mt-4 text-white/70">
        Real feedback from people we’ve worked with.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-14">

      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
        >

          {/* Stars */}
          <div className="flex items-center gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < t.rating ? "text-yellow-400" : "text-white/20"}
              />
            ))}
            <span className="text-xs text-white/50 ml-2">
              {t.rating}.0
            </span>
          </div>

          {/* Feedback */}
          <p className="text-white/70 text-sm leading-relaxed">
            “{t.feedback}”
          </p>

          {/* User */}
          <div className="mt-6 flex items-center gap-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />

            <div>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-xs text-white/50">{t.role}</p>
            </div>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>


);
};

export default Testimonials;
