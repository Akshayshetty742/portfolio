"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = async () => {
    setError("");

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      setError("Copy unavailable. Please use the email link.");
    }
  };

  return (
    <div className="copy-email">
      <button
        className="copy-email__button"
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email address copied" : "Copy email address"}
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span>{copied ? "Copied" : "Copy email"}</span>
      </button>
      <span className="copy-email__status" role="status" aria-live="polite">
        {error}
      </span>
    </div>
  );
}
