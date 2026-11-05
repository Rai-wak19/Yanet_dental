import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const starterResponses = [
  'Thank you for reaching out. Our care team will respond shortly.',
  'For urgent dental concerns, please call us directly at +1 (555) 012-3456.',
  'You can also book an appointment instantly via the Appointments page.'
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi, I’m Yanet Care Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = e => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const botMsg = {
      from: 'bot',
      text: starterResponses[Math.floor(Math.random() * starterResponses.length)]
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMsg]);
    }, 600);

    // TODO: Replace with real-time chat backend or AI assistant integration.
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 left-5 z-40 h-12 rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-4 text-sm font-semibold text-white shadow-soft flex items-center gap-2"
        aria-label="Open live chat"
      >
        <span className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-lg">
          💬
        </span>
        <span className="hidden sm:inline">Live Chat</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-5 z-40 w-[320px] max-w-[90vw] glass-panel rounded-3xl p-3 sm:p-4 flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold text-sm text-slate-900 dark:text-slate-50">
                  Yanet Care Assistant
                </p>
                <p className="text-[11px] text-emerald-500">Online • typically replies in minutes</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 min-h-[160px] max-h-[260px] overflow-y-auto space-y-2 py-1 pr-1 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl max-w-[85%] ${
                      msg.from === 'user'
                        ? 'bg-clinic-blue text-white rounded-br-none'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="mt-2 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about treatments, pricing..."
                className="flex-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-clinic-blue"
              />
              <button
                type="submit"
                className="h-8 w-8 rounded-full bg-clinic-blue text-white flex items-center justify-center text-base"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;

