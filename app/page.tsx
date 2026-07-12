"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Play } from "lucide-react";

interface Producto {
  nombre: string;
  imagen: string;
  fallback: string;
}

const productos: Producto[] = [
  {
    nombre: "ALF CAOS TEE",
    imagen: "/camisa1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "CRIS-CROS TEE",
    imagen: "/camisa2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "OLD ALF TEE",
    imagen: "/camisa3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "SHADOW TEE",
    imagen: "/camisa4.jpg",
    fallback:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "ALF RED CAPS TEE",
    imagen: "/camisa5.jpg",
    fallback:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Inter:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />

      <main className="bg-black text-white overflow-x-hidden">

        {/* ================= HERO ================= */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center"
        >
          <img
            src="/fondo-unificado.jpg"
            alt="Fondo"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop";
            }}
          />

          <div className="absolute inset-0 bg-black/55"></div>

          {/* NAVBAR */}
          <header className="absolute top-0 left-0 w-full z-30">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
              <h1 className="text-4xl text-red-600 font-['UnifrakturMaguntia']">
                AlfStore
              </h1>

              <nav className="hidden lg:flex gap-8 uppercase tracking-[0.2em] text-xs text-zinc-300">
                <a href="#inicio">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#coleccion">Colección</a>
                <a href="#contacto">Contacto</a>
              </nav>

              <ShoppingBag className="text-red-600" size={22} />
            </div>
          </header>

          {/* CONTENIDO */}
          <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-20 px-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
                NOT FOR EVERYONE
              </span>

              <h2 className="font-['UnifrakturMaguntia'] text-6xl lg:text-8xl leading-none mt-8">
                Del caos<br />nace el<br />
                <span className="block text-red-600">carácter.</span>
              </h2>

              <p className="text-zinc-400 mt-8 max-w-md leading-8">
                No hacemos ropa.<br />Creamos identidad.
              </p>

              <div className="flex gap-6 mt-10">
                <a
                  href="#coleccion"
                  className="border border-red-600 px-7 py-3 uppercase tracking-[0.2em] text-xs hover:bg-red-600 duration-300"
                >
                  Ver Colección
                </a>
                <a
                  href="#nosotros"
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <Play size={14} />
                  Conoce AlfStore
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="/modelo-hero.jpg"
                alt="Modelo"
                className="w-full max-w-md rounded-xl shadow-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=700&auto=format&fit=crop";
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* ================= NUESTRA HISTORIA ================= */}
        <section id="nosotros" className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="overflow-hidden rounded-xl border border-zinc-800 shadow-2xl max-w-md">
                {/* CORREGIDO: Ruta del archivo corregida y tipado inline optimizado */}
                <img
                  src="/logo.jpeg" 
                  alt="Logo AlfStore"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=700&auto=format&fit=crop";
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
                Nuestra Historia
              </span>
              <h2 className="font-['UnifrakturMaguntia'] text-5xl mt-6">
                Más que una marca.
              </h2>
              <p className="text-zinc-400 leading-8 mt-8">
                AlfStore nace con el propósito de representar a quienes buscan vestir diferente.
                Cada colección está inspirada en la cultura urbana, el arte callejero y la personalidad de quienes no siguen tendencias.
              </p>
              <p className="text-zinc-400 leading-8 mt-6">
                Nuestra misión no es vender ropa. Queremos crear prendas que transmitan identidad.
              </p>
              <div className="mt-10 border-l-4 border-red-600 pl-6">
                <p className="italic text-zinc-300">
                  "Del caos nace el carácter."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= CATÁLOGO ================= */}
        <section id="coleccion" className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-14 gap-8">
              <div>
                <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
                  Colección
                </span>
                <h2 className="font-['UnifrakturMaguntia'] text-5xl mt-3">
                  Streetwear
                </h2>
              </div>
              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((talla) => (
                  <button
                    key={talla}
                    className="w-11 h-11 border border-zinc-700 hover:border-red-600 hover:text-red-600 transition rounded-lg"
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {productos.map((producto, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-80 object-cover hover:scale-110 duration-500"
                      onError={(e) => {
                        e.currentTarget.src = producto.fallback;
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="uppercase tracking-widest text-center text-sm font-bold">
                      {producto.nombre}
                    </h3>
                    <div className="flex justify-center mt-6">
                      <a
                        href={`https://wa.me/50360197818?text=Hola%20AlfStore,%20me%20interesa%20${encodeURIComponent(producto.nombre)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-full flex items-center gap-2"
                      >
                        <MessageCircle size={18} />
                        Consultar
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FILOSOFÍA ================= */}
        <section id="filosofia" className="py-28 bg-zinc-950 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
                Filosofía
              </span>
              <h2 className="font-['UnifrakturMaguntia'] text-5xl md:text-6xl mt-6">
                Not For Everyone
              </h2>
              <p className="mt-8 text-zinc-400 leading-8 max-w-2xl mx-auto">
                La moda cambia constantemente. Preferimos crear prendas con personalidad,
                pensadas para quienes desean expresar su identidad sin seguir las reglas de los demás.
              </p>
              <div className="mt-12 flex justify-center">
                <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer id="contacto" className="bg-black border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="font-['UnifrakturMaguntia'] text-4xl text-red-600">
                AlfStore
              </h2>
              <p className="text-zinc-500 mt-6 leading-8">
                Streetwear salvadoreño inspirado en la cultura urbana y la autenticidad.
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.3em] text-red-600 text-sm font-bold">
                Contacto
              </h3>
              <div className="mt-8">
                <a
                  href="https://wa.me/50360197818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 duration-300 px-6 py-4 rounded-lg"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.3em] text-red-600 text-sm font-bold">
                Redes Sociales
              </h3>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/alfstore.sv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@alfstore.sv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 py-6">
            <p className="text-center text-zinc-500 text-sm">
              © 2026 AlfStore. Todos los derechos reservados.
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}