"use client";

import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
};

export function CopyEmailButton({
  email,
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      className={className}
      type="button"
      onClick={handleCopy}
    >
      <span>{email}</span>
      <span className="ml-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#9b7d65]">
        {copied ? "Zkopírováno" : "Klikněte pro kopii"}
      </span>
    </button>
  );
}
