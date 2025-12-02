"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const worldKeys = ["forgottenRealms", "homebrewWorld", "eberron", "ravenloft"];
const sceneTypeKeys = ["dungeon", "tavern", "cityStreet", "forestClearing", "battlefield"];
const styleKeys = ["realistic", "painterly", "pixelArt", "anime", "isometricMap"];
const moodKeys = ["mysterious", "epic", "cozy", "dark", "whimsical"];

type PromptConfig = {
  world: string;
  sceneType: string;
  style: string;
  mood: string;
  extra: string;
};

type PromptHistoryItem = PromptConfig & {
  id: number;
  createdAt: number;
  prompt: string;
};

type MockResult = {
  id: string;
  prompt: string;
  variant: number;
  imageUrl: string;
};

function buildPrompt(options: PromptConfig, t: (key: string) => string) {
  const { world, sceneType, style, mood, extra } = options;

  // 将翻译键映射回英文值用于 prompt（AI 模型通常理解英文更好）
  const worldEnMap: Record<string, string> = {
    forgottenRealms: "Forgotten Realms",
    homebrewWorld: "Homebrew World",
    eberron: "Eberron",
    ravenloft: "Ravenloft",
  };
  const sceneTypeEnMap: Record<string, string> = {
    dungeon: "Dungeon",
    tavern: "Tavern",
    cityStreet: "City Street",
    forestClearing: "Forest Clearing",
    battlefield: "Battlefield",
  };
  const styleEnMap: Record<string, string> = {
    realistic: "Realistic",
    painterly: "Painterly",
    pixelArt: "Pixel Art",
    anime: "Anime",
    isometricMap: "Isometric Map",
  };
  const moodEnMap: Record<string, string> = {
    mysterious: "Mysterious",
    epic: "Epic",
    cozy: "Cozy",
    dark: "Dark",
    whimsical: "Whimsical",
  };

  const worldEn = worldEnMap[world] || world;
  const sceneTypeEn = sceneTypeEnMap[sceneType] || sceneType;
  const styleEn = styleEnMap[style] || style;
  const moodEn = moodEnMap[mood] || mood;

  return [
    `Epic DnD scene in the world of ${worldEn}`,
    `${moodEn} ${sceneTypeEn.toLowerCase()} environment`,
    `${styleEn} illustration, highly detailed, cinematic lighting, 4k`,
    extra.trim(),
  ]
    .filter(Boolean)
    .join(", ");
}

export function DndGeneratorClient() {
  const { t } = useLanguage();
  
  const worlds = worldKeys.map((k) => t(`dndGenerator.worlds.${k}`));
  const sceneTypes = sceneTypeKeys.map((k) => t(`dndGenerator.sceneTypes.${k}`));
  const styles = styleKeys.map((k) => t(`dndGenerator.styles.${k}`));
  const moods = moodKeys.map((k) => t(`dndGenerator.moods.${k}`));

  const [worldKey, setWorldKey] = useState(worldKeys[0]);
  const [sceneTypeKey, setSceneTypeKey] = useState(sceneTypeKeys[0]);
  const [styleKey, setStyleKey] = useState(styleKeys[1]);
  const [moodKey, setMoodKey] = useState(moodKeys[0]);
  const [extra, setExtra] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<PromptHistoryItem[]>([]);
  const [results, setResults] = useState<MockResult[]>([]);
  const [generating, setGenerating] = useState(false);

  const world = worlds[worldKeys.indexOf(worldKey)];
  const sceneType = sceneTypes[sceneTypeKeys.indexOf(sceneTypeKey)];
  const style = styles[styleKeys.indexOf(styleKey)];
  const mood = moods[moodKeys.indexOf(moodKey)];

  const prompt = useMemo(
    () => buildPrompt({ world: worldKey, sceneType: sceneTypeKey, style: styleKey, mood: moodKey, extra }, t),
    [worldKey, sceneTypeKey, styleKey, moodKey, extra, t],
  );

  async function handleCopy() {
    try {
      if (typeof navigator !== "undefined" && "clipboard" in navigator) {
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }

      // 保存到历史记录（最多保留 10 条）
      setHistory((prev) => {
        const next: PromptHistoryItem = {
          id: Date.now(),
          createdAt: Date.now(),
          prompt,
          world: worldKey,
          sceneType: sceneTypeKey,
          style: styleKey,
          mood: moodKey,
          extra,
        };
        const merged = [next, ...prev];
        return merged.slice(0, 10);
      });
    } catch {
      setCopied(false);
    }
  }

  function restoreFromHistory(item: PromptHistoryItem) {
    // item 中存储的是键，直接使用
    if (worldKeys.includes(item.world)) setWorldKey(item.world);
    if (sceneTypeKeys.includes(item.sceneType)) setSceneTypeKey(item.sceneType);
    if (styleKeys.includes(item.style)) setStyleKey(item.style);
    if (moodKeys.includes(item.mood)) setMoodKey(item.mood);
    setExtra(item.extra);
  }

  async function handleGenerateMock() {
    try {
      setGenerating(true);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, count: 3 }),
      });

      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error("Generate API error", await res.text());
        setResults([]);
        return;
      }

      const data = (await res.json()) as { results?: MockResult[] };
      setResults(data.results ?? []);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Generate API exception", error);
      setResults([]);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
      {/* 左侧：表单 */}
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {t("dndGenerator.sceneSettings")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("dndGenerator.world")}
            </label>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              value={worldKey}
              onChange={(e) => setWorldKey(e.target.value)}
            >
              {worldKeys.map((k, i) => (
                <option key={k} value={k}>{worlds[i]}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("dndGenerator.sceneType")}
            </label>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              value={sceneTypeKey}
              onChange={(e) => setSceneTypeKey(e.target.value)}
            >
              {sceneTypeKeys.map((k, i) => (
                <option key={k} value={k}>{sceneTypes[i]}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("dndGenerator.artStyle")}
            </label>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              value={styleKey}
              onChange={(e) => setStyleKey(e.target.value)}
            >
              {styleKeys.map((k, i) => (
                <option key={k} value={k}>{styles[i]}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("dndGenerator.mood")}
            </label>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              value={moodKey}
              onChange={(e) => setMoodKey(e.target.value)}
            >
              {moodKeys.map((k, i) => (
                <option key={k} value={k}>{moods[i]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t("dndGenerator.extraDetails")}
          </label>
          <textarea
            className="min-h-[96px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
          />
          <p className="text-xs text-slate-500">
            {t("dndGenerator.extraDetailsHint")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            {copied ? t("common.copied") : t("common.copyPrompt")}
          </button>
          <button
            type="button"
            onClick={handleGenerateMock}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            {generating ? t("common.generating") : t("dndGenerator.generateMock")}
          </button>
        </div>
      </section>

      {/* 右侧：预览 & 示例 */}
      <section className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-900/95 p-5 text-slate-100 shadow-sm shadow-slate-900/40 sm:p-6">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            {t("dndGenerator.promptPreview")}
          </h2>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {t("dndGenerator.copyPasteHint")}
          </p>
          <div className="mt-4 rounded-2xl bg-slate-950/60 p-4 text-xs leading-relaxed text-slate-100">
            {prompt}
          </div>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 sm:p-6">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900">
            {t("dndGenerator.historySamples")}
          </h2>
          {history.length === 0 ? (
            <p className="text-xs text-slate-500">
              {t("dndGenerator.historyEmpty")}
            </p>
          ) : (
            <ul className="space-y-3 text-xs text-slate-600">
              {history.map((item) => {
                const itemWorld = worlds[worldKeys.indexOf(item.world)] || item.world;
                const itemSceneType = sceneTypes[sceneTypeKeys.indexOf(item.sceneType)] || item.sceneType;
                const itemStyle = styles[styleKeys.indexOf(item.style)] || item.style;
                const itemMood = moods[moodKeys.indexOf(item.mood)] || item.mood;
                return (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        {itemWorld} · {itemSceneType} · {itemStyle} · {itemMood}
                      </div>
                      <button
                        type="button"
                        onClick={() => restoreFromHistory(item)}
                        className="shrink-0 rounded-full bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white hover:bg-slate-800"
                      >
                        {t("common.use")}
                      </button>
                    </div>
                    <p className="mt-1 line-clamp-2 text-[11px] text-slate-600">
                      {item.prompt}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-100 sm:p-6">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900">
            {t("dndGenerator.generatedPreviews")}
          </h2>
          {results.length === 0 ? (
            <p className="text-xs text-slate-500">
              {t("dndGenerator.generatedEmpty")}
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-3">
              {results.map((r) => (
                <div
                  key={r.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-700"
                >
                  <div className="mb-2 h-20 rounded-xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200" />
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Variant {r.variant}
                  </div>
                  <p className="mt-1 line-clamp-3 text-[11px] text-slate-600">
                    {r.prompt}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    {t("dndGenerator.placeholderNote")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


