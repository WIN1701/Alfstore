"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Play } from "lucide-react";

// interfaces para TypeScript
interface Producto {
  nombre: string;
  precio: string;
  imagen: string;
  fallback: string;
}

// Catálogo oficial de tu mockup
const productos: Producto[] = [
  { 
    nombre: "ALF CAOS TEE", 
    precio: String, 
    imagen: "/camisa1.jpg",
    fallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop"
  },
  { 
    nombre: "CRIS-CROS TEE", 
    precio: String, 
    imagen: "/camisa2.jpg",
    fallback: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop"
  },
  { 
    nombre: "OLD ALF TEE", 
    precio: String, 
    imagen: "/camisa3.jpg",
    fallback: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop"
  },
  { 
    nombre: "SHADOW TEE", 
    precio: String, 
    imagen: "/camisa4.jpg",
    fallback: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop" 
  },
  { 
    nombre: "ALF RED CAPS TEE", 
    precio: String, 
    imagen: "/camisa5.jpg",
    fallback: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop"
  },
];

export default function Home() {
  return (
    <>
      {/* Importación de la fuente gótica medieval de Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Inter:wght@300;400;700;900&display=swap" 
        rel="stylesheet" 
      />

      <main className="bg-black text-zinc-100 min-h-screen font-['Inter',sans-serif] overflow-x-hidden selection:bg-red-600 selection:text-white antialiased">
        
        {/* =========================================================================
            CONTENEDOR DEL HERO CON EL FONDO URBANO DE TU MOCKUP
           ========================================================================= */}
        <div id="inicio" className="relative w-full min-h-screen flex flex-col justify-between border-b border-zinc-900/60">
          
          {/* IMAGEN DE FONDO URBANO GENERAL */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/fondo-unificado.jpg" 
              alt="Fondo Urbano AlfStore"
              className="w-full h-full object-cover object-center brightness-[0.22] contrast-125"
              onError={(e) => {
                // Imagen de respaldo espectacular si aún no pones tu archivo en /public
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop";
              }}
            />
            {/* Gradientes y luces rojas estilo graffiti de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent" />
          </div>

          {/* NAVBAR */}
          <header className="relative z-50 w-full px-6 md:px-12 py-5 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-zinc-900/40">
            <div className="text-red-600 text-3xl font-['UnifrakturMaguntia'] tracking-wider select-none">
              AlfStore
            </div>
            <nav className="hidden md:flex gap-8 text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-400">
              <a href="#inicio" className="hover:text-red-500 transition-colors">Inicio</a>
              <a href="#nosotros" className="hover:text-red-500 transition-colors">Nosotros</a>
              <a href="#coleccion" className="hover:text-red-500 transition-colors">Colección</a>
              <a href="#filosofia" className="hover:text-red-500 transition-colors">Filosofía</a>
              <a href="#contacto" className="hover:text-red-500 transition-colors">Contacto</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 relative cursor-pointer hover:text-white transition-colors text-lg">
                <ShoppingBag size={20} className="text-red-600" />
                <span className="absolute -top-1 -right-2 bg-red-600 text-[9px] text-white font-black rounded-full px-1">0</span>
              </span>
            </div>
          </header>

          {/* CONTENIDO MAQUETADO EXACTO DE TU FOTO */}
          <div className="relative z-10 flex-1 grid md:grid-cols-2 items-center max-w-6xl w-full mx-auto px-6 md:px-16 pt-12 pb-24 gap-12">
            
            {/* LADO IZQUIERDO: TEXTOS GÓTICOS */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase block">NOT FOR EVERYONE</span>
              <h1 className="text-5xl md:text-7xl font-['UnifrakturMaguntia'] text-zinc-100 leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Del caos <br /> nace el <br />
                <span className="text-red-600 block mt-1">carácter.</span>
              </h1>
              <p className="text-sm md:text-base text-zinc-400 font-light tracking-wide max-w-sm">
                No hacemos ropa. <br />
                <span className="text-zinc-200 font-normal">Creamos identidad.</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a href="#coleccion" className="border-2 border-red-600 text-red-500 font-bold px-6 py-3 tracking-[0.2em] text-xs uppercase bg-black/40 backdrop-blur-sm hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm">
                  Ver Colección
                </a>
                <a href="#nosotros" className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-zinc-400 hover:text-white transition-colors group">
                  <Play size={14} className="text-red-600 group-hover:scale-110 transition-transform" /> Conoce AlfStore
                </a>
              </div>
            </motion.div>

            {/* LADO DERECHO: MODELO DE ESPALDAS (Fiel al mockup) */}
            <motion.div 
              className="flex justify-center md:justify-end items-center h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[360px] aspect-[3/4] border border-zinc-800/80 rounded-sm overflow-hidden shadow-2xl group">
                <img 
                  src="/modelo-hero.jpg" 
                  alt="Modelo de espaldas AlfStore" 
                  className="w-full h-full object-cover object-center grayscale contrast-115 group-hover:scale-103 transition-transform duration-700"
                  onError={(e) => {
                    // Muestra un modelo urbano real de espaldas si no tienes la imagen aún
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-red-600/90 text-white font-mono text-[9px] px-2 py-0.5 rounded-sm uppercase font-bold tracking-wider">
                  Oversize Fit
                </div>
              </div>
            </motion.div>
          </div>

          {/* Marca de agua lateral vertical */}
          <div className="absolute left-4 bottom-1/4 origin-left -rotate-90 text-[9px] uppercase tracking-[0.3em] text-zinc-700 font-bold pointer-events-none hidden lg:block z-10">
            NOT FOR EVERYONE — STREETWEAR
          </div>
        </div>

        {/* ==========================================
            SECCIÓN NUESTRA HISTORIA (Diseño Limpio)
           ========================================== */}
        <div id="nosotros" className="relative z-10 py-32 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-sm mx-auto border border-zinc-900 bg-zinc-950 p-4 flex items-center justify-center rounded-sm shadow-2xl overflow-hidden group">
            <img 
              src="/logo.png.jpeg" 
              alt="Logo AlfStore" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-black tracking-[0.25em] text-red-600 uppercase">Nuestra Historia</span>
            <h2 className="text-3xl md:text-4xl font-['UnifrakturMaguntia'] text-zinc-100 leading-tight">
              Más que una marca, <br />
              <span className="text-red-600 font-sans font-black uppercase text-xl md:text-2xl tracking-wider block mt-1">un estilo de vida.</span>
            </h2>
            <div className="text-zinc-400 space-y-4 text-sm leading-relaxed font-light">
              <p>
                <strong className="text-zinc-200 font-semibold">AlfStore</strong> nace del apellido Alfaro. Nuestro logo representa una forma de vivir, de pensar y de expresarse sin miedos al entorno urbano.
              </p>
              <p className="border-l-2 border-red-600 pl-4 italic bg-zinc-900/30 py-1.5 text-zinc-300 text-xs">
                "Cada prenda refleja autenticidad, carácter y personalidad indomable."
              </p>
              <p>
                No seguimos tendencias. Creamos prendas exclusivas en tallas Oversize (S, M, L, XL) listas para marcar la diferencia.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECCIÓN CATÁLOGO DE PRODUCTOS (Interactivo)
           ========================================== */}
        <div id="coleccion" className="py-16 px-6 md:px-16 max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 bg-zinc-950/60 backdrop-blur-sm p-6 rounded-md border border-zinc-900/50">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-red-600 uppercase">Catálogo</span>
              <h2 className="text-3xl font-['UnifrakturMaguntia'] text-zinc-200 mt-1">
                Camisas <span className="font-sans font-black uppercase text-lg text-red-600 tracking-widest block sm:inline sm:ml-2">Streetwear</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 mr-2">Tallas Oversize:</span>
              {['S', 'M', 'L', 'XL'].map((talla) => (
                <button key={talla} className="w-9 h-9 text-xs border border-zinc-800 bg-black hover:border-red-600 transition-colors font-black text-zinc-400 hover:text-white flex items-center justify-center rounded-sm">
                  {talla}
                </button>
              ))}
            </div>
          </div>

          {/* GRID ANIMADO DE PRODUCTOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {productos.map((producto, index) => (
              <motion.div 
                key={index} 
                className="group bg-zinc-950/80 border border-zinc-900/60 p-3 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between rounded-md backdrop-blur-sm shadow-xl"
                whileHover={{ scale: 1.03 }}
              >
                <div className="aspect-[3/4] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
                  <img 
                    src={producto.imagen} 
                    alt={`Camisa urbana - ${producto.nombre}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = producto.fallback;
                    }}
                  />
                </div>
                <div className="pt-4 space-y-1.5">
                  <h3 className="text-[11px] font-bold tracking-widest text-zinc-300 truncate uppercase">{producto.nombre}</h3>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-xs font-black text-zinc-100 font-mono">{producto.precio}</span>
                    
                    {/* Link de WhatsApp Dinámico para cada camisa */}
                    <a 
                      href={`https://wa.me/50360197818?text=Hola%20AlfStore,%20me%20interesa%20la%20prenda%20${encodeURIComponent(producto.nombre)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-red-500 transition-colors p-1 bg-zinc-900/50 border border-zinc-800 rounded-sm flex items-center"
                    >
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            FILOSOFÍA: NOT FOR EVERYONE
           ========================================== */}
        <section id="filosofia" className="py-32 px-6 text-center bg-black relative border-t border-zinc-900/80 z-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase pointer-events-none select-none tracking-[0.2em]">
              NOT FOR EVERYONE.
            </h2>
            <p className="text-zinc-400 text-sm tracking-wide max-w-sm mx-auto font-light leading-relaxed">
              La moda cambia en las calles de forma constante. <br />
              <span className="text-zinc-200 font-normal">El carácter permanece intacto.</span>
            </p>
            <div className="w-16 h-[1px] bg-red-600 mx-auto mt-6"></div>
          </div>
        </section>

        {/* ==========================================
            FOOTER CON REDES SOCIALES Y BOTÓN WHATSAPP
           ========================================== */}
        <footer id="contacto" className="bg-zinc-950 border-t border-zinc-900/60 text-zinc-500 py-16 px-6 md:px-16 text-xs relative z-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
            
            <div className="space-y-4">
              <div className="text-red-600 font-['UnifrakturMaguntia'] text-2xl tracking-wider">AlfStore</div>
              <ul className="space-y-2.5 text-zinc-400 font-light tracking-wide">
                <li>• PRODUCCIÓN LIMITADA (Ediciones exclusivas)</li>
                <li>• CALIDAD PREMIUM (Materiales duraderos)</li>
                <li>• OVERSIZE FIT (Estilo urbano original)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-red-600 font-black uppercase tracking-[0.2em] block">Pedidos Directos</span>
              <p className="text-zinc-400 font-light leading-relaxed">
                Escríbenos directamente para consultar stock disponible o gestionar tu envío nacional:
              </p>
              <a 
                href="https://wa.me/50360197818?text=Hola%20AlfStore,%20me%20interesa%20ver%20las%20camisas%20oversize" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-zinc-200 px-6 py-3.5 font-bold hover:bg-green-950/30 hover:border-green-600 transition-all rounded-sm tracking-[0.15em] shadow-md group"
              >
                <span className="text-green-500 text-lg group-hover:scale-110 transition-transform">💬</span>
                <span>WHATSAPP: 6019 7818</span>
              </a>
            </div>

            <div className="space-y-4 md:text-right">
              <span className="text-red-600 font-black uppercase tracking-[0.2em] block">Canales Oficiales</span>
              <div className="flex md:justify-end gap-6 text-zinc-400 font-bold tracking-wider">
                <a href="https://www.instagram.com/alfstore.sv?igsh=ZTBvbTRsdXUyNzlu" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors uppercase">Instagram</a>
                <a href="https://www.tiktok.com/@alfstore.sv?_r=1&_t=ZS-97vyM0WHz4k" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors uppercase">TikTok</a>
              </div>
              <div className="text-[10px] text-zinc-600 pt-6 font-mono tracking-widest uppercase">
                DEL CAOS NACE EL CARÁCTER ★
              </div>
            </div>

          </div>

          <div className="max-w-6xl mx-auto text-center border-t border-zinc-900/60 mt-16 pt-6 text-zinc-600 text-[10px] tracking-[0.25em] uppercase font-mono">
            © 2026 AlfStore. Todos los derechos reservados.
          </div>
        </footer>

      </main>
    </>
  );
}