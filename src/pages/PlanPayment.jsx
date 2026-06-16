import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, Copy, CreditCard, FileImage, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import { sendPricingRequest } from "../api/api";
import { UPI_ID, getAnalysisPlanById } from "../data/pricingPlans";

const PlanPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const request = location.state;
  const selectedPlan = useMemo(
    () => getAnalysisPlanById(request?.planId),
    [request?.planId],
  );
  const selectedOption = request?.planOption;
  const amount = selectedOption?.amount ?? selectedPlan.amount;
  const [screenshot, setScreenshot] = useState(null);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const hasRequest = Boolean(request?.form);
  const isFree = amount === 0;

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus("Please copy the UPI ID manually.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!hasRequest) {
      navigate(`/pricing/request?plan=${selectedPlan.id}`);
      return;
    }

    if (!isFree && !screenshot) {
      setStatus("Please upload your payment screenshot before submitting.");
      return;
    }

    try {
      setLoading(true);
      const response = await sendPricingRequest({
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        packageLabel: selectedOption?.label || selectedPlan.note,
        amount,
        isFree,
        paymentScreenshotName: isFree ? "" : screenshot.name,
        ...request.form,
      });

      setStatus(
        response.data?.message ||
          (isFree
            ? "Request submitted. Our team will review it from the admin dashboard."
            : "Payment proof submitted. Our team will verify it from the admin dashboard."),
      );
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell overflow-hidden">
      <section className="section-pad">
        <div className="container-wide grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="min-w-0">
            <p className="eyebrow">Payment</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Complete your request with UPI payment proof.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              Pay the shown amount to the NexDiff UPI ID, upload the screenshot,
              and submit your request for confirmation.
            </p>

            <div className="light-card mt-8 min-w-0 rounded-lg p-5">
              <h2 className="text-lg font-semibold">Request summary</h2>
              <div className="mt-5 space-y-3 text-sm text-[#101312]/68">
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <span>Plan</span>
                  <span className="min-w-0 break-words text-right font-semibold text-[#101312]">{selectedPlan.name}</span>
                </div>
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <span>Package</span>
                  <span className="min-w-0 break-words text-right font-semibold text-[#101312]">
                    {selectedOption?.label || selectedPlan.note}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Amount</span>
                  <span className="text-right text-xl font-semibold text-[#101312]">
                    {isFree ? "Free" : `Rs ${amount}`}
                  </span>
                </div>
              </div>
            </div>

            {!hasRequest && (
              <div className="mt-5 break-words rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                Please fill the request form first.
              </div>
            )}
          </aside>

          <form onSubmit={handleSubmit} className="light-card min-w-0 rounded-lg p-5 sm:p-7">
            <div className="flex min-w-0 items-center gap-3">
              <CreditCard size={22} className="shrink-0 text-[#16837a]" />
              <h2 className="min-w-0 break-words text-2xl font-semibold">
                {isFree ? "No payment required" : "UPI payment details"}
              </h2>
            </div>

            {status && (
              <div className="mt-5 break-words rounded-lg border border-[#16837a]/20 bg-[#16837a]/10 px-4 py-3 text-sm font-medium text-[#0f5f58]">
                {status}
              </div>
            )}

            {!isFree && (
              <div className="mt-6 min-w-0 rounded-lg border border-[#101312]/10 bg-[#101312] p-5 text-white">
                <p className="text-sm text-white/58">Pay to UPI ID</p>
                <div className="mt-3 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="min-w-0 break-all text-xl font-semibold sm:text-2xl">{UPI_ID}</p>
                  <button
                    type="button"
                    onClick={copyUpi}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#c7f9cc] px-4 py-3 text-sm font-semibold text-[#101312]"
                  >
                    <Copy size={16} />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="mt-5 flex min-w-0 items-center gap-2 text-sm text-white/68">
                  <ShieldCheck size={16} className="text-[#c7f9cc]" />
                  <span className="min-w-0 break-words">Upload the screenshot after payment.</span>
                </div>
              </div>
            )}

            {isFree ? (
              <div className="mt-6 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-5">
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#16837a]" />
                  <p className="text-sm leading-7 text-[#101312]/68">
                    This plan is free. Submit your request and NexDiff will
                    review your business details.
                  </p>
                </div>
              </div>
            ) : (
              <label className="mt-6 flex min-w-0 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#101312]/20 bg-[#f7f3ea] px-4 py-8 text-center transition hover:border-[#101312]/40">
                <FileImage size={28} className="text-[#e05f2f]" />
                <span className="mt-3 max-w-full break-all text-sm font-semibold text-[#101312]">
                  {screenshot ? screenshot.name : "Upload payment screenshot"}
                </span>
                <span className="mt-1 text-xs text-[#101312]/52">PNG, JPG, or JPEG</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={(event) => setScreenshot(event.target.files?.[0] || null)}
                  className="sr-only"
                />
              </label>
            )}

            <div className="mt-7 grid min-w-0 gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(`/pricing/request?plan=${selectedPlan.id}`)}
              >
                Back to Form
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlanPayment;
