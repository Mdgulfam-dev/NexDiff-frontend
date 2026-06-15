import { useState } from "react";
import { Check, Share2 } from "lucide-react";

const buildAbsoluteUrl = (url) => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (typeof window === "undefined") return url;

  return new URL(url, window.location.origin).toString();
};

const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

const ShareButton = ({ title, text, url, className = "", dark = false }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = buildAbsoluteUrl(url);

  const handleShare = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const shareData = {
      title,
      text,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        await copyToClipboard(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
        dark
          ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
          : "border-[#101312]/10 bg-white text-[#101312]/70 hover:border-[#101312]/25 hover:text-[#101312]"
      } ${className}`}
      aria-label={copied ? "Link copied" : `Share ${title}`}
      title={copied ? "Link copied" : "Share"}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      <span>{copied ? "Copied" : "Share"}</span>
    </button>
  );
};

export default ShareButton;
