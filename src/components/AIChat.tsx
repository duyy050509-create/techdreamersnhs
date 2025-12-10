import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Ticket, Coffee, Loader2 } from 'lucide-react';
import type { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Xin chào! Tôi là trợ lý AI Ngũ Hành Sơn. Tôi có thể giúp bạn lên lịch trình, tìm vé hay quán ngon gần đây không?',
      timestamp: Date.now()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, textToSend);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const QuickPrompt = ({ icon: Icon, text, prompt }: { icon: any, text: string, prompt: string }) => (
    <button 
      onClick={() => handleSend(prompt)}
      className="flex items-center gap-2 text-xs bg-sea-50 text-sea-900 border border-sea-100 px-3 py-2 rounded-full hover:bg-sea-100 transition-colors whitespace-nowrap"
    >
      <Icon size={14} />
      {text}
    </button>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'bg-gradient-to-r from-sea-600 to-sea-500 text-white'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right border border-gray-100 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sea-600 to-sea-500 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Trợ lý Du lịch AI</h3>
              <p className="text-xs text-sea-50 opacity-90">Sẵn sàng hỗ trợ 24/7</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-sea-600 text-white rounded-br-none shadow-md' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-sea-600" />
                 <span className="text-xs text-gray-500">Đang suy nghĩ...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts & Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-3 pb-1">
            <QuickPrompt icon={MapPin} text="Lịch trình 1 ngày" prompt="Gợi ý cho tôi lịch trình tham quan Ngũ Hành Sơn trong 1 ngày." />
            <QuickPrompt icon={Ticket} text="Giá vé" prompt="Giá vé tham quan hiện tại là bao nhiêu?" />
            <QuickPrompt icon={Coffee} text="Ăn gì?" prompt="Gần đây có quán ăn đặc sản nào ngon không?" />
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi tôi bất cứ điều gì..."
              className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-sea-500 focus:outline-none"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-sea-600 text-white rounded-full hover:bg-sea-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;