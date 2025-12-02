"use client";

import { useState } from "react";

export function ColorGeneratorTool() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [paletteType, setPaletteType] = useState("complementary");
  const [generating, setGenerating] = useState(false);
  const [palette, setPalette] = useState<string[]>([]);

  const paletteTypes = [
    "Complementary",
    "Analogous",
    "Triadic",
    "Monochromatic",
    "Split Complementary",
    "Tetradic",
  ];

  function generatePalette() {
    setGenerating(true);
    // Simulate palette generation
    setTimeout(() => {
      const colors = [
        baseColor,
        "#" + Math.floor(Math.random() * 16777215).toString(16),
        "#" + Math.floor(Math.random() * 16777215).toString(16),
        "#" + Math.floor(Math.random() * 16777215).toString(16),
        "#" + Math.floor(Math.random() * 16777215).toString(16),
      ];
      setPalette(colors);
      setGenerating(false);
    }, 1000);
  }

  function copyColor(color: string) {
    navigator.clipboard.writeText(color);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Generate color palette
        </h2>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Base Color
            </label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="h-12 w-24 cursor-pointer rounded-xl border border-slate-200"
              />
              <input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="#3b82f6"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Palette Type
            </label>
            <select
              value={paletteType}
              onChange={(e) => setPaletteType(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
            >
              {paletteTypes.map((type) => (
                <option key={type.toLowerCase()} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={generatePalette}
            disabled={generating}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
          >
            {generating ? "Generating..." : "Generate Palette"}
          </button>
          {palette.length > 0 && (
            <div className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Generated Palette
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {palette.map((color, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square cursor-pointer rounded-xl"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                        {color}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Click on a color to copy its hex code
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">
            Palette Types
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• <strong>Complementary:</strong> Colors opposite on the color wheel</li>
            <li>• <strong>Analogous:</strong> Colors next to each other</li>
            <li>• <strong>Triadic:</strong> Three evenly spaced colors</li>
            <li>• <strong>Monochromatic:</strong> Shades of one color</li>
            <li>• <strong>Split Complementary:</strong> Base color + two adjacent opposites</li>
            <li>• <strong>Tetradic:</strong> Four colors forming a rectangle</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">
            Tips
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Choose a base color that matches your brand</li>
            <li>• Use complementary colors for contrast</li>
            <li>• Analogous colors create harmony</li>
            <li>• Test colors in your design context</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

