import { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Loader from "../components/Loader";

function Upgrade() {
  const [loading, setLoading] = useState(false);
  const [yearly, setYearly] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const currentPlan = user?.plan || "free";

  const pricing = {
    pro: yearly ? 7999 : 999,
    premium: yearly ? 24999 : 2999
  };

  const handleUpgrade = async (plan) => {
    if (plan === currentPlan) return;

    setLoading(true);
    try {
      const res = await api.put("/auth/upgrade-plan", { plan });
      const updatedUser = { ...user, plan: res.data.plan };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success("Plan upgraded successfully!");
    } catch {
      toast.error("Upgrade failed");
    }
    setLoading(false);
  };

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      {loading && <Loader />}

      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1 flex flex-col">

        <Topbar
          setIsOpen={setIsOpen}
          darkMode={darkMode}
        />

        <div className="p-6 md:p-10 space-y-12">

          <div>
            <h1 className="text-3xl font-bold mb-2">
              Upgrade Your Plan
            </h1>
            <p className="opacity-70">
              Scale your business with powerful tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["free", "pro", "premium"].map((plan) => {
              const isCurrent = currentPlan === plan;
              const price =
                plan === "free" ? 0 : pricing[plan];

              return (
                <div
                  key={plan}
                  className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition hover:scale-105"
                >
                  <h2 className="text-2xl font-bold capitalize mb-4">
                    {plan}
                  </h2>

                  <p className="text-4xl font-bold mb-6">
                    ₹{price}
                  </p>

                  <button
                    disabled={isCurrent}
                    onClick={() => handleUpgrade(plan)}
                    className={`w-full py-3 rounded-xl ${
                      isCurrent
                        ? "bg-gray-400"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                  >
                    {isCurrent ? "Current Plan" : "Choose Plan"}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Upgrade;