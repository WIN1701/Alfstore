"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  MessageCircle, 
  Play, 
  Menu, 
  Crown, 
  Diamond, 
  Shirt, 
  Zap, 
  Flame 
} from "lucide-react";

interface Producto {
  nombre: string;
  precio: string;
  imagen: string;
  fallback: string;
}

const productos: Producto[] = [
  {
    nombre: "ALF CAOS TEE",
    precio: "$29.99",
    imagen: "/camisa1.jpg",
    fallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "CRIS-CROS TEE",
    precio: "$29.99",
    imagen: "/camisa2.jpg",
    fallback: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "OLD ALF TEE",
    precio: "$29.99",
    imagen: "/camisa3.jpg",
    fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "SHADOW TEE",
    precio: "$29.99",
    imagen: "/camisa4.jpg",
    fallback: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop",
  },
  {
    nombre: "ALF RED CAPS TEE",
    precio: "$29.99",
    imagen: "/camisa5.jpg",
    fallback: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Inter:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <main className="bg-black text-white overflow-x-hidden selection:bg-red-700 selection:text-white font-sans">

        {/* ================= HEADER FIXED (Para evitar colisiones) ================= */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl lg:text-3xl text-[#b61313] font-['UnifrakturMaguntia'] tracking-wide cursor-pointer">
              AlfStore
            </h1>

            <nav className="hidden lg:flex gap-8 uppercase tracking-[0.2em] text-[11px] font-medium text-zinc-400">
              <a href="#inicio" className="hover:text-[#b61313] transition duration-300">Inicio</a>
              <a href="#coleccion" className="hover:text-[#b61313] transition duration-300">Colección</a>
              <a href="#nosotros" className="hover:text-[#b61313] transition duration-300">Nosotros</a>
              <a href="#filosofia" className="hover:text-[#b61313] transition duration-300">Filosofía</a>
              <a href="#contacto" className="hover:text-[#b61313] transition duration-300">Contacto</a>
            </nav>

            <div className="flex items-center gap-4 text-zinc-300">
              <div className="relative cursor-pointer hover:text-[#b61313] transition duration-300">
                <ShoppingBag size={18} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#b61313] text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
              <Menu size={20} className="cursor-pointer lg:hidden hover:text-[#b61313] transition" />
            </div>
          </div>
        </header>

        {/* ================= HERO SECTION (Corregido y Estabilizado) ================= */}
        <section id="inicio" className="relative min-h-screen flex items-center pt-24 lg:pt-16 bg-zinc-950">
          
          {/* Fondo Oscuro Texturizado Completo */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* TEXTO IZQUIERDO */}
            <div className="lg:col-span-7 space-y-8 text-left mt-6 lg:mt-0">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#b61313] font-bold block">
                  NOT FOR EVERYONE
                </span>
                <h2 className="font-['UnifrakturMaguntia'] text-5xl md:text-7xl lg:text-8xl tracking-tight text-zinc-100 leading-[1.05] md:leading-[1.1]">
                  Del caos <br />
                  nace el <br />
                  <span className="text-[#b61313] block drop-shadow-[0_4px_20px_rgba(182,19,19,0.4)]">carácter.</span>
                </h2>
              </div>

              <p className="text-zinc-400 text-sm md:text-base max-w-sm font-light tracking-wide leading-relaxed">
                No hacemos ropa. <br />
                <span className="text-zinc-200 font-semibold tracking-wider">Creamos identidad.</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#coleccion"
                  className="bg-transparent border border-[#b61313] text-zinc-100 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b61313] hover:text-white transition-all duration-300 dynamic-btn"
                >
                  Ver Colección
                </a>
                <a
                  href="#nosotros"
                  className="flex items-center gap-3 text-xs uppercase font-bold tracking-[0.2em] text-zinc-400 hover:text-[#b61313] transition duration-300"
                >
                  <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/80">
                    <Play size={10} className="fill-current ml-0.5 text-zinc-300" />
                  </span>
                  Conoce AlfStore
                </a>
              </div>
            </div>

            {/* CONTENEDOR DE LA IMAGEN DERECHA (Urbana y Oscura) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/5] overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-zinc-900">
                <img
                  src="/modelo-hero.jpg"
                  alt="Streetwear Outfit"
                  className="w-full h-full object-cover brightness-[0.75] contrast-[1.15]"
                  onError={(e) => {
                    // Muestra una imagen urbana real y oscura si falla la local
                    e.currentTarget.src = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </section>

        {/* ================= NUESTRA HISTORIA (CREMA) ================= */}
        <section id="nosotros" className="py-24 bg-[#ded6c1] text-zinc-900 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Cuadro de Arte Izquierdo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[300px] aspect-square border border-zinc-400/60 p-2 bg-[#ded6c1] shadow-md">
                <img
                  src="/logo.jpeg"
                  alt="AlfStore Art"
                  className="w-full h-full object-cover mix-blend-multiply"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500"; }}
                />
              </div>
            </div>

            {/* Texto de Historia */}
            <div className="lg:col-span-5 space-y-5">
              <span className="uppercase tracking-[0.3em] text-[#b61313] text-xs font-black block">
                Nuestra Historia
              </span>
              <h2 className="font-['UnifrakturMaguntia'] text-4xl lg:text-5xl text-zinc-950 leading-tight">
                Más que una marca, <br />
                <span className="text-[#b61313]">un estilo de vida.</span>
              </h2>
              <div className="space-y-4 text-zinc-800 font-light text-sm md:text-base leading-relaxed">
                <p>
                  AlfStore nace del apellido Alfaro. Nuestro logo representa una forma de vivir, de pensar y de expresarse sin miedo.
                </p>
                <p>
                  Cada prenda refleja autenticidad, carácter y personalidad. No seguimos tendencias: <span className="font-bold text-zinc-950">Creamos identidad.</span>
                </p>
              </div>
              <button className="bg-zinc-950 text-white text-[11px] font-bold uppercase tracking-[0.25em] px-6 py-3.5 hover:bg-[#b61313] transition duration-300">
                Conocer Más
              </button>
            </div>

            {/* Collage Derecha */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="w-full aspect-[3/4] border border-zinc-400/80 bg-zinc-800 shadow-xl overflow-hidden relative">
                <img 
                  src="/image_9ead45.jpg" 
                  alt="Street Photo Art" 
                  className="w-full h-full object-cover grayscale contrast-125"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=500"; }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= CATÁLOGO DE PRODUCTOS ================= */}
        <section id="coleccion" className="py-24 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4 border-b border-zinc-900 pb-6">
              <div>
                <span className="uppercase tracking-[0.3em] text-[#b61313] text-xs font-bold block mb-1">Colección</span>
                <h2 className="font-['UnifrakturMaguntia'] text-3xl lg:text-4xl">
                  Camisas <span className="text-zinc-500 font-sans font-light text-2xl ml-1">Streetwear</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">Tallas Oversize</span>
                <div className="flex gap-1.5">
                  {["S", "M", "L", "XL"].map((talla) => (
                    <button
                      key={talla}
                      className={`w-8 h-8 text-[11px] border ${talla === "L" ? "border-[#b61313] text-[#b61313]" : "border-zinc-800 text-zinc-500"} font-bold`}
                    >
                      {talla}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {productos.map((producto, index) => (
                <div key={index} className="bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
                  <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = producto.fallback; }}
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center border-t border-zinc-900 bg-black">
                    <div>
                      <h3 className="text-[11px] uppercase font-bold tracking-wider text-zinc-200">{producto.nombre}</h3>
                      <p className="text-xs text-[#b61313] font-semibold mt-0.5">{producto.precio}</p>
                    </div>
                    <a
                      href={`https://wa.me/50360197818?text=Hola,%20me%20interesa%20la%20prenda%20${encodeURIComponent(producto.nombre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#b61313] transition"
                    >
                      <ShoppingBag size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= VALORES PREMIUM ================= */}
        <section className="py-16 bg-zinc-950 border-t border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
              {[
                { icon: <Crown className="text-[#b61313]" size={20} />, title: "Producción Limitada", desc: "Piezas exclusivas." },
                { icon: <Diamond className="text-[#b61313]" size={20} />, title: "Calidad Premium", desc: "Materiales duraderos." },
                { icon: <Shirt className="text-[#b61313]" size={20} />, title: "Oversize Fit", desc: "Estilo cómodo urbano." },
                { icon: <Flame className="text-[#b61313]" size={20} />, title: "Streetwear Real", desc: "Cultura de calle." },
                { icon: <Zap className="text-[#b61313]" size={20} />, title: "Identidad Propia", desc: "Sé tú mismo." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 p-2">
                  {item.icon}
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">{item.title}</h4>
                  <p className="text-[10px] text-zinc-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer id="contacto" className="bg-black text-zinc-500 pt-16 pb-8 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
            <div className="space-y-4">
              <h3 className="font-['UnifrakturMaguntia'] text-2xl text-[#b61313]">AlfStore</h3>
              <p className="text-xs text-zinc-400 max-w-xs font-light">¿Preguntas o pedidos? Escríbenos directamente:</p>
              <a
                href="https://wa.me/50360197818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-800 text-zinc-200 px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-[#b61313] transition duration-300"
              >
                <MessageCircle size={14} className="text-green-500 fill-current" />
                6019 7818
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Síguenos</p>
              <p className="text-xs font-semibold text-zinc-300">@alfstore.sv</p>
            </div>
            <div className="flex flex-col justify-end md:items-end">
              <div className="border-l-2 md:border-l-0 md:border-r-2 border-[#b61313] pl-4 md:pl-0 md:pr-4 text-left md:text-right">
                <p className="font-black text-sm tracking-tight text-zinc-300 uppercase">Del caos nace el carácter</p>
                <span className="text-[9px] text-zinc-600 tracking-widest uppercase block mt-0.5">EL SALVADOR</span>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-zinc-900 flex justify-between text-[10px] text-zinc-600">
            <p>© 2026 AlfStore.</p>
            <p className="font-bold tracking-widest">AS</p>
          </div>
        </footer>

      </main>
    </>
  );
}