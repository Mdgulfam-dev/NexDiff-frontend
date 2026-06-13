import { useState } from "react";
import { LockKeyhole, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { adminLogin } from "../api/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setStatus("");
      const response = await adminLogin(form);
      localStorage.setItem("nexdiff_admin_token", response.data.token);
      localStorage.setItem("nexdiff_admin_user", JSON.stringify(response.data.user));
      navigate("/admin/dashboard");
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          "Unable to login. Please make sure the backend is running on port 5001.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide flex min-h-[68vh] items-center justify-center">
          <form onSubmit={handleSubmit} className="light-card w-full max-w-md rounded-lg p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#101312] text-white">
              <LockKeyhole size={22} />
            </span>
            <h1 className="mt-5 text-3xl font-semibold">Admin login</h1>
            <p className="mt-2 text-sm leading-6 text-[#101312]/58">
              Sign in to view website leads, applications, and pricing requests.
            </p>

            {status && (
              <div className="mt-5 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            <div className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(event) => setForm({ ...form, username: event.target.value })}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
              <LogIn size={17} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
