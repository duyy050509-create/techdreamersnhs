import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from "../types";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là một hướng dẫn viên du lịch AI chuyên nghiệp, thân thiện và am hiểu sâu sắc về Danh thắng Ngũ Hành Sơn (Đà Nẵng).
Nhiệm vụ của bạn là hỗ trợ du khách các thông tin sau:
1. Gợi ý lịch trình tham quan (1 buổi, 1 ngày).
2. Giải thích ý nghĩa lịch sử, tâm linh của các hang động, chùa chiền (Động Huyền Không, Chùa Linh Ứng, v.v.).
3. Tư vấn vé tham quan (40.000đ/người lớn cho Thủy Sơn, 20.000đ cho Động Âm Phủ - lưu ý giá có thể thay đổi).
4. Tìm đường đi và gợi ý quán ăn đặc sản (Mỳ Quảng, Bánh Tráng Cuốn Thịt Heo) gần khu vực.
5. Luôn trả lời bằng tiếng Việt, giọng văn hào hứng, mời gọi.
Nếu du khách hỏi thông tin thời gian thực (thời tiết hôm nay, tin tức mới), hãy sử dụng công cụ tìm kiếm.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }], // Enable grounding for real-time info
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster chat response
      },
      history: chatHistory
    });

    const result = await chat.sendMessage({ message: newMessage });
    
    // Check for grounding metadata (just for logging/debugging purposes in this context)
    if (result.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      console.log("Grounding info found:", result.candidates[0].groundingMetadata.groundingChunks);
    }

    return result.text || "Xin lỗi, tôi đang gặp chút sự cố kết nối. Bạn hãy thử lại nhé!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hiện tại hệ thống đang quá tải, vui lòng thử lại sau giây lát.";
  }
};