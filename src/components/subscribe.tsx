"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Loader2 } from "lucide-react"; 

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true); 

    try {
      const subscribeUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_URL as string;
      if (!subscribeUrl) {
        setStatus("Subscription URL is not configured.");
        setLoading(false);
        return;
      }

      const response = await fetch(subscribeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      const text = await response.text();
      if (response.ok && text.toLowerCase().includes("success")) {
        setStatus("✅ Subscribed successfully!");
        setSubscribed(true);
        setEmail("");
      } else {
        setStatus("❌ Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("❌ Error occurred. Please try again.");
    }

    setLoading(false); 
  };

  return (
    <div className="text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between bg-blue-900 py-6 px-6 md:px-12 items-center rounded-2xl gap-4">
        <h4 className="font-semibold text-lg md:text-xl ml-1 md:ml-5 flex flex-row items-center gap-3">
          <Mail className="w-5 h-5" />
          Subscribe to Newsletter
        </h4>

        {!subscribed ? (
          <div className="flex flex-col md:flex-row items-center gap-2 bg-white rounded px-2 py-1 w-full md:w-auto">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none w-full"
              disabled={loading}
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`flex items-center justify-center gap-2 text-white font-normal px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        ) : (
          <p className="text-green-300 font-medium">You&apos;re subscribed 🎉</p>
        )}

        {status && (
          <p className="text-sm mt-2 md:mt-0 text-center text-yellow-300">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
