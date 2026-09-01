import React, { useRef, useState } from "react";
import {
  ReactQRCode,
  type DownloadFileFormat,
  type ReactQRCodeRef,
} from "@lglab/react-qr-code";
import { v4 as uuidv4 } from "uuid";
import {
  Copy,
  Check,
  RefreshCw,
  QrCode,
  ArrowRight,
  Palette,
} from "lucide-react";
import Footer from "#/components/Footer";
import { themes, type ThemeColors } from "#/utils/colors.ts";
import ExportDownloadButton, {
  type ExportFormat,
} from "#/components/ExportDownloadButton.tsx";

export default function HomePage() {
  const [text, setText] = useState("");
  const [activeQr, setActiveQr] = useState("");
  const [copied, setCopied] = useState(false);
  const qrCodeRef = useRef<ReactQRCodeRef>(null);

  // Available theme keys derived from imports
  const themeKeys = Object.keys(themes) as Array<keyof typeof themes>;
  const [selectedThemeKey, setSelectedThemeKey] =
    useState<keyof typeof themes>("paper");
  const theme: ThemeColors = themes[selectedThemeKey];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    const value = text.trim();

    if (value) {
      setActiveQr(value);
      setCopied(false);
    }
  };

  const handleGenerateNew = () => {
    setText("");
    setActiveQr("");
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!activeQr) return;

    await navigator.clipboard.writeText(activeQr);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = (format: DownloadFileFormat) => {
    if (!activeQr) return;
    const exportImageId = uuidv4();
    const qrCodeString = text;
    qrCodeRef.current?.download({
      name: (qrCodeString || "qr-code") + "-" + exportImageId,
      format: format,
      size: 1024,
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between relative overflow-hidden font-serif selection:bg-neutral-900 selection:text-white"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      {/* Paper Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(
            ${theme.foreground} 0.5px,
            transparent 0.5px
          )`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Outer Frame */}
      <div
        className="fixed inset-3 md:inset-6 pointer-events-none z-50 border"
        style={{
          borderColor: theme.borderMuted,
        }}
      />

      {/* Header */}
      <header
        className="relative z-10 max-w-5xl w-full mx-auto px-6 pt-10 md:pt-14 pb-6 flex justify-between items-baseline border-b"
        style={{
          borderColor: theme.borderMuted,
        }}
      >
        <div>
          <span
            className="block mb-1 text-xs uppercase tracking-[0.3em] font-sans font-medium"
            style={{
              color: theme.textMuted,
            }}
          >
            Edition 01 // Mono Utility
          </span>

          <h1 className="text-3xl md:text-4xl font-normal tracking-tight italic">
            The Paper Press{" "}
            <span
              className="not-italic font-sans text-sm tracking-normal px-2 py-0.5 border rounded-full align-middle ml-2"
              style={{
                borderColor: theme.border,
              }}
            >
              QR
            </span>
          </h1>
        </div>

        {/* Theme Dropdown */}
        <div className="flex items-center gap-2 font-sans">
          <Palette className="w-4 h-4" style={{ color: theme.textMuted }} />
          <select
            value={selectedThemeKey}
            onChange={(e) =>
              setSelectedThemeKey(e.target.value as keyof typeof themes)
            }
            className="text-xs uppercase tracking-wider px-3 py-1.5 border bg-transparent font-medium focus:outline-none cursor-pointer"
            style={{
              borderColor: theme.border,
              color: theme.text,
              backgroundColor: theme.surface,
            }}
          >
            {themeKeys.map((key) => (
              <option key={key} value={key}>
                {key} Theme
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-5xl w-full mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif leading-snug">
                Transform link or plain text into a high-contrast vector matrix.
              </h2>

              <p
                className="font-sans text-sm leading-relaxed max-w-xl"
                style={{
                  color: theme.textMuted,
                }}
              >
                Enter your destination URL or content below. Engineered with a
                tactile, monochrome paper aesthetic for seamless printing and
                scanning.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6">
              {/* Input */}
              <div>
                <label
                  htmlFor="qr-text"
                  className="block text-xs font-sans uppercase tracking-wider mb-2 font-medium"
                  style={{
                    color: theme.textMuted,
                  }}
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
                    className="w-full px-4 py-3.5 border-2 font-sans text-base focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{
                      backgroundColor: theme.surfaceMuted,
                      color: theme.text,
                      borderColor: theme.border,
                      boxShadow: `3px 3px 0px 0px ${theme.shadow}`,
                    }}
                  />

                  {text && (
                    <button
                      type="button"
                      onClick={() => setText("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-sans uppercase tracking-widest underline"
                      style={{
                        color: theme.textMuted,
                      }}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={!text.trim()}
                  className="flex-1 inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide uppercase px-6 py-4 border-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.primaryForeground,
                    borderColor: theme.primary,
                    boxShadow: `4px 4px 0px 0px ${theme.shadowMuted}`,
                  }}
                >
                  <span>Generate Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleGenerateNew}
                  className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide uppercase px-6 py-4 border-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  style={{
                    backgroundColor: theme.background,
                    color: theme.text,
                    borderColor: theme.border,
                    boxShadow: `4px 4px 0px 0px ${theme.shadow}`,
                  }}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Generate New</span>
                </button>
              </div>
            </form>

            {/* Features */}
            <div
              className="border-t border-dashed pt-6 grid grid-cols-2 gap-4 text-xs font-sans"
              style={{
                borderColor: theme.borderMuted,
                color: theme.textMuted,
              }}
            >
              <div>
                <span
                  className="block mb-0.5 font-semibold"
                  style={{
                    color: theme.text,
                  }}
                >
                  Vector Output
                </span>
                Rendered with SVG crispness for high-dpi printing.
              </div>

              <div>
                <span
                  className="block mb-0.5 font-semibold"
                  style={{
                    color: theme.text,
                  }}
                >
                  Monochrome
                </span>
                Optimized 100% black/white optical contrast.
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="w-full max-w-sm p-8 border-2 relative group transition-all"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: `8px 8px 0px 0px ${theme.shadow}`,
              }}
            >
              {/* Card Header */}
              <div
                className="text-center border-b pb-4 mb-6"
                style={{
                  borderColor: theme.borderMuted,
                }}
              >
                <span className="font-serif italic text-lg">
                  Preview Canvas
                </span>

                <p
                  className="text-[11px] font-sans uppercase tracking-widest mt-0.5"
                  style={{
                    color: theme.textSubtle,
                  }}
                >
                  {activeQr ? "Ready to Scan" : "Awaiting Input"}
                </p>
              </div>

              {/* QR Area */}
              <div
                className="border-2 p-2 flex flex-col items-center justify-evenly min-h-55 shadow-inner"
                style={{
                  backgroundColor: theme.surfaceElevated,
                  borderColor: theme.border,
                }}
              >
                {activeQr ? (
                  <div
                    id="qr-code"
                    className="p-2"
                    style={{
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <ReactQRCode
                      ref={qrCodeRef}
                      marginSize={0}
                      value={activeQr}
                      size={180}
                      background="#FFFFFF"
                      level="H"
                    />
                  </div>
                ) : (
                  <div className="text-center space-y-2 py-6">
                    <QrCode
                      className="w-12 h-12 stroke-[1.25] mx-auto"
                      style={{
                        color: theme.textSubtle,
                      }}
                    />

                    <p
                      className="font-sans text-xs max-w-40 mx-auto"
                      style={{
                        color: theme.textSubtle,
                      }}
                    >
                      Fill out the field and press{" "}
                      <strong
                        className="font-medium"
                        style={{
                          color: theme.text,
                        }}
                      >
                        Generate Code
                      </strong>
                    </p>
                  </div>
                )}
              </div>

              {/* Output & Download Action */}
              {activeQr && (
                <div className="mt-6 space-y-3">
                  <div
                    className="border p-2.5 text-center"
                    style={{
                      backgroundColor: theme.surfaceMuted,
                      borderColor: theme.borderMuted,
                    }}
                  >
                    <p
                      className="font-mono text-xs truncate"
                      title={activeQr}
                      style={{
                        color: theme.text,
                      }}
                    >
                      {activeQr}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="w-full flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-wider py-2.5 border transition-colors"
                      style={{
                        backgroundColor: theme.surface,
                        color: theme.text,
                        borderColor: theme.border,
                      }}
                    >
                      {copied ? (
                        <>
                          <Check
                            className="w-3.5 h-3.5"
                            style={{
                              color: theme.success,
                            }}
                          />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy String</span>
                        </>
                      )}
                    </button>

                    <ExportDownloadButton
                      theme={theme}
                      onDownload={handleDownload}
                    />
                  </div>
                </div>
              )}

              {/* Decorative Corner Holes */}
              <div
                className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full border"
                style={{
                  borderColor: theme.borderMuted,
                }}
              />

              <div
                className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full border"
                style={{
                  borderColor: theme.borderMuted,
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
