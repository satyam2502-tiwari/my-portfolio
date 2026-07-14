"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [localInput, setLocalInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, append, status, error } =
    useChat({
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "Hi! I'm Satyam's AI assistant. Ask me anything about his skills, projects, or background!",
        },
      ],
    });

  const isLoading = status === "submitted" || status === "streaming";

  // Guardrail: limit user to 5 messages per session
  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMessageCount >= 5;

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* ── Chat Window ─────────────────────────────────────────────── */}
      <div
        className={`mb-4 flex w-[340px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-900/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out sm:w-[380px] ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        style={{ height: "500px", maxHeight: "calc(100vh - 120px)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-red-600/20 text-red-500">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Satyam&apos;s AI</h3>
              <p className="text-xs text-red-500">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-none">
          <div className="flex flex-col gap-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                    m.role === "user"
                      ? "bg-slate-700 text-slate-300"
                      : "bg-red-600/20 text-red-500"
                  }`}
                >
                  {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-red-600 text-white rounded-tr-sm font-medium"
                      : "bg-white/[0.06] text-slate-300 rounded-tl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                  <Bot size={14} />
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3.5">
                  <div className="size-1.5 animate-bounce rounded-full bg-slate-400" />
                  <div className="size-1.5 animate-bounce rounded-full bg-slate-400 animation-delay-100" />
                  <div className="size-1.5 animate-bounce rounded-full bg-slate-400 animation-delay-200" />
                </div>
              </div>
            )}

            {/* Error display */}
            {error && (
              <div className="flex gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                  <X size={14} />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-rose-500/10 px-4 py-2.5 text-sm leading-relaxed text-rose-300">
                  Connection failed. Please check your API key!
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Limit Reached Notice */}
        {limitReached && (
          <div className="border-t border-rose-500/20 bg-rose-500/10 px-4 py-3 text-center text-xs font-medium text-rose-400">
            Session limit reached! Let&apos;s connect on{" "}
            <a
              href="https://linkedin.com/in/satyam"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-300"
            >
              LinkedIn
            </a>{" "}
            instead.
          </div>
        )}

        {/* Input Area */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!limitReached && localInput.trim()) {
              append({ role: "user", content: localInput });
              setLocalInput("");
            }
          }}
          className="border-t border-white/10 bg-zinc-900 p-3"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={localInput}
              onChange={(e) => setLocalInput(e.target.value)}
              disabled={limitReached || isLoading}
              placeholder={
                limitReached ? "Chat disabled" : "Type your message..."
              }
              className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] py-3 pl-4 pr-12 text-sm text-slate-200 placeholder:text-slate-500 focus:border-red-600/50 focus:bg-white/[0.05] focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!localInput.trim() || limitReached || isLoading}
              className="absolute right-1.5 flex size-9 items-center justify-center rounded-lg bg-red-600 text-white transition-colors hover:bg-red-500 disabled:bg-transparent disabled:text-slate-600"
              aria-label="Send message"
            >
              <Send size={16} className={localInput.trim() && !limitReached && !isLoading ? "ml-0.5" : ""} />
            </button>
          </div>
        </form>
      </div>

      {/* ── Floating Toggle Button ────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex size-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-red-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
          isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        style={{ position: isOpen ? "absolute" : "relative" }}
        aria-label="Open chat"
      >
        <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
}
