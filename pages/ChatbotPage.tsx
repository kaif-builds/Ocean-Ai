import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { BotIcon } from '../components/Icons';
import MarkdownRenderer from '../components/MarkdownRenderer';

const systemInstruction = `You are OceanAI's intelligent assistant. Your purpose is to answer questions about the OceanAI platform, its technology, and mission, as well as general questions about oceanography, fisheries, and molecular biodiversity, using your advanced knowledge and search capabilities. Keep your answers concise and informative. Format your responses using simple markdown for clarity, such as using lists for multiple items or bold text for emphasis.`;

type GroundingChunkWeb = {
  uri: string;
  title: string;
};

type GroundingChunk = {
  web: GroundingChunkWeb;
};

type Message = {
  role: 'user' | 'model';
  text: string;
  sources?: GroundingChunk[];
};

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction,
          tools: [{googleSearch: {}}],
        },
      });

      setMessages([
        {
          role: 'model',
          text: "Hello! I'm OceanAI's assistant. How can I help you explore our unified ocean data today? You can ask me about our platform or general ocean-related topics.",
        },
      ]);
    } catch (error) {
      console.error("Failed to initialize the chatbot:", error);
      setMessages([
        {
          role: 'model',
          text: "Sorry, I'm having trouble connecting right now. Please check the API key and try again later.",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: userMessage.text });
      
      const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
      const sources = groundingMetadata?.groundingChunks as GroundingChunk[] | undefined;

      const modelMessage: Message = { role: 'model', text: response.text, sources };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'model',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-ocean-deep">
       <div className="bg-ocean-light py-8 text-center">
            <h1 className="text-4xl font-extrabold text-white">Chat with OceanAI</h1>
            <p className="mt-2 text-lg text-slate-dark">Your personal guide to our platform's data and technology.</p>
        </div>
      <div className="flex-grow overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}
            >
              {msg.role === 'model' && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center">
                  <BotIcon className="w-6 h-6 text-ocean-cyan" />
                </div>
              )}
              <div
                className={`max-w-lg lg:max-w-2xl px-5 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-ocean-cyan text-ocean-deep'
                    : 'bg-ocean-light text-slate-light'
                }`}
              >
                {msg.role === 'model' ? <MarkdownRenderer text={msg.text} /> : msg.text}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-600/50">
                    <h4 className="text-sm font-semibold text-slate-dark mb-2">Sources:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      {msg.sources.map((source, idx) => (
                        source.web?.uri && source.web?.title && (
                          <li key={idx}>
                            <a 
                              href={source.web.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-ocean-cyan hover:underline break-words"
                            >
                              {source.web.title}
                            </a>
                          </li>
                        )
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-ocean-cyan" />
              </div>
              <div className="max-w-lg lg:max-w-2xl px-5 py-3 rounded-2xl bg-ocean-light text-slate-light">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ocean-cyan rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-ocean-cyan rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-ocean-cyan rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 md:p-6 bg-ocean-light border-t border-gray-700">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our data, technology, or mission..."
              disabled={isLoading}
              className="w-full px-4 py-3 bg-ocean-deep text-slate-light border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-cyan disabled:opacity-50"
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-ocean-cyan text-ocean-deep font-bold rounded-lg hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
