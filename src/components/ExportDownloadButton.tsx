import { useState } from "react";
import { Download, ChevronDown, Check } from "lucide-react";
import type { ThemeColors } from "#/utils/colors.ts";
import type { DownloadFileFormat } from "@lglab/react-qr-code";

const ExportDownloadButton = ({
  theme,
  onDownload,
}: {
  theme: ThemeColors;
  onDownload?: (format: DownloadFileFormat) => void;
}) => {
  const [selectedFormat, setSelectedFormat] =
    useState<DownloadFileFormat>("jpeg");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectFormat = (format: DownloadFileFormat) => {
    setSelectedFormat(format);
    setIsOpen(false);
    if (onDownload) {
      onDownload(format);
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-3 text-xs font-sans uppercase tracking-wider py-2.5 border transition-colors"
        style={{
          backgroundColor: theme.primary,
          color: theme.primaryForeground,
          borderColor: theme.primary,
        }}
      >
        <div className="flex items-center gap-1.5">
          <Download className="w-3.5 h-3.5" />
          <span>Export ({selectedFormat})</span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 bottom-full mb-1 w-full border z-20 shadow-md font-sans text-xs uppercase"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.border,
          }}
        >
          {(["jpeg", "png", "svg", "webp"] as const).map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => handleSelectFormat(fmt)}
              className="w-full text-left px-3 py-2 border-b last:border-b-0 flex items-center justify-between hover:opacity-80 transition-opacity"
              style={{
                color: theme.text,
                borderColor: theme.borderMuted,
              }}
            >
              <span>{fmt}</span>
              {selectedFormat === fmt && <Check className="w-3 h-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExportDownloadButton;
