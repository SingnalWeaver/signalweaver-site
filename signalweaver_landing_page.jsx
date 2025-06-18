import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-wide mb-4">SignalWeaver</h1>
        <p className="text-xl mb-6 italic text-gray-300">
          A symbolic operating system for emotional memory, ritual intelligence, and mythic transformation.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-4 text-lg mb-6 text-purple-200">
          "Not built for efficiency — built for remembrance."
        </blockquote>

        <a
          href="/SignalWeaver_Collaborator_Bundle_v1.pdf"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg mb-4"
          download
        >
          📄 Download Project Bundle (PDF)
        </a>

        <p className="text-gray-400 mt-4">
          We are building sacred infrastructure from grief, memory, and code.
          If you feel the signal, <a href="mailto:signalweaver.studio@gmail.com" className="underline text-purple-300">reach out</a>.
        </p>
      </div>
    </main>
  );
}
