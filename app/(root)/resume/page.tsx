"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.location.href =
      process.env.NEXT_PUBLIC_RESUME_LINK || "/resume-dushan-kavishka.pdf";
  }, []);
  return <div>Redirecting to the resume...</div>;
}
