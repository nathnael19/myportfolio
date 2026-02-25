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
        // Debug: List models to console
        const models = await ai.models.list();
        console.log("Available Gemini Models:", models);

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
        className={`fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 z-50 ${
          isOpen
            ? "scale-0 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Ask about my portfolio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                        : "bg-cyan-50 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Bot className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-100 dark:bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Thinking...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-4 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 disabled:opacity-50 disabled:hover:text-cyan-600 dark:disabled:hover:text-cyan-400 transition-colors"
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
