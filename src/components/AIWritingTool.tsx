"use client";

import { useState } from "react";

type AIWritingToolProps = {
  goalOptions: string[];
  defaultGoal?: string;
  placeholder?: string;
  tips?: string[];
};

export function AIWritingTool({
  goalOptions,
  defaultGoal = "",
  placeholder = "Enter your topic or leave blank for random ideas...",
  tips = [],
}: AIWritingToolProps) {
  const [goal, setGoal] = useState(defaultGoal || goalOptions[0] || "");
  const [topic, setTopic] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleGenerate() {
    if (!goal) return;
    setGenerating(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        `Here's a creative ${goal.toLowerCase()} about "${topic || "your topic"}":\n\n[Generated content will appear here. This is a placeholder for the actual AI-generated content.]`,
        `Based on your ${goal.toLowerCase()} request, here's a suggestion:\n\n[AI-generated content placeholder]`,
      ];
      setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
      setGenerating(false);
    }, 2000);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Generate your content
        </h2>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
            >
              {goalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Topic
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              placeholder={placeholder}
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={!goal || generating}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
          >
            {generating ? "Generating..." : "Create"}
          </button>
          {result && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Result
              </h3>
              <p className="whitespace-pre-wrap text-sm text-slate-700">
                {result}
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="mt-3 text-xs text-sky-600 hover:text-sky-700"
              >
                Copy to clipboard
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        {tips.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Tips for better results
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">
            How it works
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Select your writing goal</li>
            <li>• Enter a topic or leave blank for random ideas</li>
            <li>• Click Create to generate content</li>
            <li>• Copy and refine the generated content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

