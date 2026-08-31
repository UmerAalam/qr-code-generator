import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, RefreshCw, QrCode, Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [activeQr, setActiveQr] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      setActiveQr(text.trim());
    }
  };

  const handleGenerateNew = () => {
    setText("");
    setActiveQr("");
  };

  const handleCopy = () => {
    if (!activeQr) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-neutral-900 font-serif flex flex-col justify-between selection:bg-neutral-900 selection:text-white relative overflow-hidden">
      {/* Subtle Paper Texture Background Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#171717 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Outer Paper Border Frame */}
      <div className="fixed inset-3 md:inset-6 border border-neutral-900/20 pointer-events-none z-50" />

      {/* Header */}
      <header className="relative z-10 max-w-5xl w-full mx-auto px-6 pt-10 md:pt-14 flex justify-between items-baseline border-b border-neutral-900/10 pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-neutral-500 font-medium block mb-1">
            Edition 01 // Mono Utility
          </span>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight font-serif italic">
            The Paper Press <span className="not-italic font-sans text-sm tracking-normal px-2 py-0.5 border border-neutral-900 rounded-full align-middle ml-2">QR</span>
          </h1>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-xs font-sans text-neutral-500 tracking-wider uppercase">
            Designed for Simplicity
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl w-full mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Form & Inputs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif leading-snug">
                Transform link or plain text into a high-contrast vector matrix.
              </h2>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-xl">
                Enter your destination URL or content below. Engineered with a tactile, monochrome paper aesthetic for seamless printing and scanning.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="qr-text"
                  className="block text-xs font-sans uppercase tracking-wider text-neutral-500 mb-2 font-medium"
                >
                  Source Content or URL
                </label>
                <div className="relative">
                  <input
                    id="qr-text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="https://example.com or enter text..."
                    className="w-full bg-[#EFECE6] border-2 border-neutral-900 px-4 py-3.5 font-sans text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 focus:ring-offset-[#F7F6F2] transition-all shadow-[3px_3px_0px_0px_rgba(23,23,23,1)]"
                  />
                  {text && (
                    <button
                      type="button"
                      onClick={() => setText("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-sans uppercase tracking-widest text-neutral-500 hover:text-neutral-900 underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={!text.trim()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-900 text-neutral-100 font-sans text-sm font-medium tracking-wide uppercase px-6 py-4 border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(200,195,185,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  <span>Generate Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleGenerateNew}
                  className="inline-flex items-center justify-center gap-2 bg-[#F7F6F2] text-neutral-900 font-sans text-sm font-medium tracking-wide uppercase px-6 py-4 border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-neutral-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Generate New</span>
                </button>
              </div>
            </form>

            <div className="border-t border-dashed border-neutral-900/20 pt-6 grid grid-cols-2 gap-4 text-xs font-sans text-neutral-500">
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Vector Output</span>
                Rendered with SVG crispness for high-dpi printing.
              </div>
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Monochrome</span>
                Optimized 100% black/white optical contrast.
              </div>
            </div>
          </div>

          {/* Right Column: Paper Display Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#F0EEE6] border-2 border-neutral-900 p-8 shadow-[8px_8px_0px_0px_rgba(23,23,23,1)] relative group transition-all">
              {/* Paper Stamp / Badge */}
              <div className="absolute -top-3 -right-3 bg-neutral-900 text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1 border border-neutral-900 shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Paper Spec</span>
              </div>

              {/* Card Header */}
              <div className="text-center border-b border-neutral-900/10 pb-4 mb-6">
                <span className="font-serif italic text-lg text-neutral-800">Preview Canvas</span>
                <p className="text-[11px] font-sans uppercase tracking-widest text-neutral-400 mt-0.5">
                  {activeQr ? "Ready to Scan" : "Awaiting Input"}
                </p>
              </div>

              {/* QR Render Area */}
              <div className="bg-white border-2 border-neutral-900 p-6 flex flex-col items-center justify-center min-h-[220px] shadow-inner relative">
                {activeQr ? (
                  <div className="p-2 bg-white">
                    <QRCodeSVG
                      value={activeQr}
                      size={180}
                      bgColor={"#FFFFFF"}
                      fgColor={"#000000"}
                      level={"H"}
                      includeMargin={false}
                    />
                  </div>
                ) : (
                  <div className="text-center space-y-2 py-6">
                    <QrCode className="w-12 h-12 stroke-[1.25] text-neutral-300 mx-auto" />
                    <p className="font-sans text-xs text-neutral-400 max-w-[160px] mx-auto">
                      Fill out the field and press <strong className="text-neutral-700 font-medium">Generate Code</strong>
                    </p>
                  </div>
                )}
              </div>

              {/* Output Info & Quick Actions */}
              {activeQr && (
                <div className="mt-6 space-y-3">
                  <div className="bg-[#EFECE6] border border-neutral-900/20 p-2.5 text-center">
                    <p className="font-mono text-xs text-neutral-700 truncate" title={activeQr}>
                      {activeQr}
                    </p>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white text-xs font-sans uppercase tracking-wider py-2.5 border border-neutral-900 hover:bg-neutral-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Content Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Output String</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Decorative Corner Holes */}
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full border border-neutral-900/30" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full border border-neutral-900/30" />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl w-full mx-auto px-6 py-8 border-t border-neutral-900/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500">
        <p>© {new Date().getFullYear()} Paper Press Mono. Tactical Print Aesthetic.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-neutral-900 cursor-pointer transition-colors">Documentation</span>
          <span className="hover:text-neutral-900 cursor-pointer transition-colors">High-Res Print</span>
          <span className="hover:text-neutral-900 cursor-pointer transition-colors">Privacy</span>
        </div>
      </footer>
    </div>
  );
}
