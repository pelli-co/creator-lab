"use client";

import { useState } from "react";

export default function CreateIdea() {
  const [platform, setPlatform] = useState("TikTok");
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [goal, setGoal] = useState("Conseguir visitas");
  const [idea, setIdea] = useState("");

  function generateIdea() {
    if (!topic.trim()) {
      setIdea("Escribe primero un tema para generar tu idea.");
      return;
    }

    setIdea(
      `🎥 IDEA: ${topic}\n\n` +
        `Plataforma: ${platform}\n` +
        `Nicho: ${niche || "General"}\n` +
        `Objetivo: ${goal}\n\n` +
        `GANCHO:\n"¿Sabías que probablemente estás haciendo esto mal?"\n\n` +
        `CONCEPTO:\nCrea un contenido dinámico sobre ${topic}, empezando con una pregunta o afirmación que despierte curiosidad.\n\n` +
        `DESARROLLO:\nExplica el tema de forma rápida, visual y entretenida. Utiliza ejemplos y cambia de plano para mantener la atención.\n\n` +
        `CTA:\n"Pruébalo y dime en comentarios qué resultado te da."`
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <nav className="border-b border-zinc-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black">
            CREATOR<span className="text-violet-600">LAB</span>
          </a>

          <a
            href="/"
            className="text-sm font-semibold text-zinc-500 hover:text-violet-600"
          >
            Volver al inicio
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-10">
          <p className="font-bold text-violet-600">CREATOR LAB</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Crea una idea
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Introduce unos datos y crea una idea preparada para convertirla
            en contenido.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">Cuéntanos qué quieres crear</h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  Plataforma
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-violet-500"
                >
                  <option>TikTok</option>
                  <option>Instagram</option>
                  <option>YouTube</option>
                  <option>Twitch</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  ¿Sobre qué quieres crear contenido?
                </label>
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ej: fútbol, cocina, videojuegos..."
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Nicho
                </label>
                <input
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Ej: entretenimiento, deporte..."
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Objetivo
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-violet-500"
                >
                  <option>Conseguir visitas</option>
                  <option>Conseguir seguidores</option>
                  <option>Conseguir comentarios</option>
                  <option>Entretener</option>
                </select>
              </div>

              <button
                onClick={generateIdea}
                className="w-full rounded-2xl bg-violet-600 px-5 py-4 font-bold text-white transition hover:bg-violet-700"
              >
                ✨ GENERAR IDEA
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-7 text-white shadow-sm">
            <p className="text-sm font-bold text-violet-400">RESULTADO</p>

            {!idea ? (
              <div className="flex min-h-[400px] items-center justify-center text-center">
                <div>
                  <div className="text-5xl">💡</div>
                  <p className="mt-4 text-zinc-400">
                    Tu próxima idea aparecerá aquí.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 whitespace-pre-line leading-7 text-zinc-200">
                {idea}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}