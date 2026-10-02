export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-tight">
          CREATOR<span className="text-violet-600">LAB</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#herramientas" className="transition hover:text-violet-600">
            Crear
          </a>
          <a href="#herramientas" className="transition hover:text-violet-600">
            Mis ideas
          </a>
          <a href="#herramientas" className="transition hover:text-violet-600">
            Mis guiones
          </a>
          <a href="#herramientas" className="transition hover:text-violet-600">
            Analizar
          </a>
        </div>

        <button className="rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700">
          Empezar gratis
        </button>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            La herramienta para creadores
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            CREA MEJOR.
            <br />
            PUBLICA MEJOR.
            <br />
            <span className="text-violet-600">CRECE.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
            Convierte tus ideas en contenido que la gente quiera ver.
            Crea ideas, prepara guiones y descubre cómo mejorar tus
            publicaciones.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-violet-600 px-7 py-4 font-bold text-white transition hover:bg-violet-700">
              Empezar a crear
            </button>

            <a
              href="#como-funciona"
              className="rounded-full border border-zinc-200 px-7 py-4 text-center font-bold transition hover:bg-zinc-50"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-2xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    CREATOR LAB
                  </p>
                  <h2 className="mt-1 text-xl font-bold">
                    Tu panel de creación
                  </h2>
                </div>

                <div className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                  ONLINE
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm font-bold text-violet-700">
                    💡 CREAR IDEAS
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Encuentra tu próximo contenido.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm font-bold text-blue-700">
                    ✍️ CREAR GUIONES
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Convierte una idea en un guion.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  <p className="text-sm font-bold text-zinc-800">
                    📊 ANALIZAR
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Descubre qué puedes mejorar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section id="herramientas" className="bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-bold text-violet-600">TODO EN UN SOLO SITIO</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Tus herramientas para crear.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Menos tiempo pensando qué publicar. Más tiempo creando.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">💡</div>
              <h3 className="mt-6 text-2xl font-black">Crear ideas</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Genera ideas adaptadas a tu plataforma, temática y objetivo.
              </p>
              <button className="mt-7 rounded-full bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700">
                Crear una idea
              </button>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">✍️</div>
              <h3 className="mt-6 text-2xl font-black">Crear guiones</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Convierte cualquier idea en un guion preparado para grabar.
              </p>
              <button className="mt-7 rounded-full bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700">
                Crear un guion
              </button>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">📊</div>
              <h3 className="mt-6 text-2xl font-black">Analizar</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Analiza tus resultados y descubre qué puedes mejorar.
              </p>
              <button className="mt-7 rounded-full bg-zinc-950 px-5 py-3 font-bold text-white transition hover:bg-zinc-800">
                Analizar un vídeo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-violet-600">ASÍ DE FÁCIL</p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Crear contenido no tiene por qué ser difícil.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-6xl font-black text-violet-100">01</div>
              <h3 className="mt-3 text-2xl font-black">Elige</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Elige si quieres crear una idea, preparar un guion o analizar
                tu contenido.
              </p>
            </div>

            <div>
              <div className="text-6xl font-black text-violet-100">02</div>
              <h3 className="mt-3 text-2xl font-black">Crea</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Introduce unos pocos datos y utiliza las herramientas de
                Creator Lab.
              </p>
            </div>

            <div>
              <div className="text-6xl font-black text-violet-100">03</div>
              <h3 className="mt-3 text-2xl font-black">Mejora</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Utiliza los resultados para mejorar tus próximos contenidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            TU PRÓXIMO VÍDEO
            <br />
            <span className="text-violet-400">EMPIEZA AQUÍ.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Deja de pensar durante horas qué publicar. Empieza a crear.
          </p>

          <button className="mt-8 rounded-full bg-violet-600 px-8 py-4 font-bold text-white transition hover:bg-violet-700">
            Empezar a crear gratis
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black">
              CREATOR<span className="text-violet-600">LAB</span>
            </div>
            <p className="mt-2 text-sm text-zinc-500">
              Crea mejor. Publica mejor. Crece.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-zinc-500">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>YouTube</span>
            <span>Twitch</span>
            <span>Privacidad</span>
            <span>Términos</span>
            <span>Cookies</span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl text-sm text-zinc-400">
          © 2026 Creator Lab
        </div>
      </footer>
    </main>
  );
}