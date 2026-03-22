import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from "../data/portfolio";

// Initialize Gemini API
const ai = new GoogleGenAI({
  apiKey:
    import.meta.env.VITE_GEMINI_API_KEY ||
    (typeof process !== "undefined" ? process.env?.GEMINI_API_KEY : "") ||
    "",
});

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: `Hi! I'm an AI assistant for ${portfolioData.personal.name}. Ask me anything about their experience, skills, or projects!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    // Create chat session on mount
    const initChat = async () => {
      try {
        const systemInstruction = `You are a helpful AI assistant representing ${portfolioData.personal.name}. 
Here is their portfolio data:
${JSON.stringify(portfolioData, null, 2)}
Answer questions about their skills, experience, and projects based on this data. Be polite, professional, and concise. Do not make up information not present in the data.`;

        const chat = ai.chats.create({
          model: "gemini-2.0-flash",
          config: {
            systemInstruction,
          },
        });
        setChatSession(chat);
      } catch (err: any) {
        console.error("Initialization Error:", err);
      }
    };
    initChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatSession || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", text: userMessage },
    ]);
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userMessage });
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "model", text: response.text },
      ]);
    } catch (error: any) {
      console.error("Detailed Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          text: `Error: ${error?.message || "Something went wrong. Please check your API key and connection."}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 p-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 z-50 group ${
          isOpen
            ? "scale-0 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"
        }`}
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-slate-900 animate-pulse" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-[450px] h-[650px] max-h-[85vh] glass-card rounded-[2.5rem] shadow-2xl z-50 flex flex-col overflow-hidden border-white/20"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">
                    Architect AI
                  </h3>
                  <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mt-1">
                    Online & Ready
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-none">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      msg.role === "user"
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                        : "bg-cyan-500 text-white"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-5 rounded-3xl text-sm font-medium leading-relaxed shadow-lg ${
                      msg.role === "user"
                        ? "bg-slate-800 text-white rounded-tr-none"
                        : "glass-card text-gray-800 dark:text-gray-200 rounded-tl-none border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass-card p-5 rounded-3xl rounded-tl-none flex items-center gap-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-8 border-t border-white/10 bg-white/5"
            >
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about expertise..."
                  className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl pl-6 pr-14 py-4 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-500 text-white hover:scale-105 active:scale-95 disabled:opacity-50 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
