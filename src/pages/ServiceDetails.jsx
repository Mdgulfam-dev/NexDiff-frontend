import { useLocation, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div>No Data Found</div>;

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-16">
      {/* 🔙 Back */}
      <button onClick={() => navigate(-1)} className="mb-6 text-cyan-400">
        ← Back
      </button>

      {/* 🔥 Title */}
      <h1 className="text-4xl font-bold mb-4">{state.title}</h1>

      {/* 🔥 Short desc */}
      <p className="text-lg text-white/70 mb-6">{state.desc}</p>

      {/* 🔥 Full Explanation */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-white/60">
          {state.details || "Detailed explanation coming soon..."}
        </p>
      </div>

      {/* 🔥 Features */}
      {state.features && (
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>

          <ul className="space-y-2 text-white/70">
            {state.features.map((item, i) => (
              <li key={i}>✅ {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
