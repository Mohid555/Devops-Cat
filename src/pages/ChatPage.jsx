// import { useState } from "react";
// import axios from "axios";

// function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//   const [history, setHistory] = useState([]);

//   const sendMessage = async () => {
//     if (!message) return;

//     setChat(prev => [...prev, { type: "user", text: message }]);

//     const res = await axios.post("http://localhost:5000/ai-query", {
//       message
//     });

//     const reply = res.data.reply;

//     setChat(prev => [...prev, { type: "bot", text: reply }]);
//     setMessage("");
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     alert("File uploaded: " + file.name);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
      
//       {/* SIDEBAR */}
//       <div style={{
//         width: "250px",
//         background: "#020c1b",
//         padding: "10px",
//         borderRight: "1px solid #0ea5e9"
//       }}>
//         <h3>Chats</h3>
//         {history.map((h, i) => (
//           <div key={i}>{h}</div>
//         ))}
//       </div>

//       {/* MAIN CHAT */}
//       <div style={{ flex: 1, padding: "20px" }}>

//         <h2>AI Chatbot</h2>

//         <div style={{
//           height: "70%",
//           overflowY: "auto",
//           marginBottom: "10px"
//         }}>
//           {chat.map((c, i) => (
//             <div key={i} style={{
//               textAlign: c.type === "user" ? "right" : "left"
//             }}>
//               {c.text}
//             </div>
//           ))}
//         </div>

//         {/* INPUT */}
//         <input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           style={{ width: "70%" }}
//         />

//         <button onClick={sendMessage}>Send</button>

//         {/* FILE UPLOAD */}
//         <input type="file" onChange={handleFile} />

//       </div>
//     </div>
//   );
// }

// export default ChatPage;






// import { useState } from "react";
// import axios from "axios";

// function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//   const [history, setHistory] = useState([]);

//   const sendMessage = async () => {
//     if (!message.trim()) return;

//     setChat(prev => [...prev, { type: "user", text: message }]);

//     try {
//       const res = await axios.post("http://localhost:5000/ai-query", {
//         message
//       });

//       const reply = res.data.reply;

//       setChat(prev => [...prev, { type: "bot", text: reply }]);
//     } catch {
//       setChat(prev => [...prev, { type: "bot", text: "Error occurred" }]);
//     }

//     setMessage("");
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     alert("Uploaded: " + file.name);
//   };

//   return (
//     <div style={{
//       display: "flex",
//       height: "100vh",
//       background: "linear-gradient(135deg, #020617, #0f172a)",
//       color: "#e0f2fe"
//     }}>

//       {/* SIDEBAR */}
//       <div style={{
//         width: "260px",
//         background: "#020c1b",
//         borderRight: "1px solid #0ea5e9",
//         padding: "15px"
//       }}>
//         <h2 style={{ marginBottom: "20px", color: "#38bdf8" }}>Chats</h2>

//         {history.length === 0 && (
//           <p style={{ opacity: 0.5 }}>No history yet</p>
//         )}

//         {history.map((h, i) => (
//           <div key={i} style={{
//             padding: "10px",
//             marginBottom: "8px",
//             borderRadius: "8px",
//             background: "#0f172a",
//             cursor: "pointer"
//           }}>
//             {h}
//           </div>
//         ))}
//       </div>

//       {/* MAIN CHAT */}
//       <div style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         padding: "20px"
//       }}>

//         {/* HEADER */}
//         <div style={{
//           fontSize: "20px",
//           fontWeight: "bold",
//           marginBottom: "10px",
//           color: "#38bdf8"
//         }}>
//           🤖 AI Assistant
//         </div>

//         {/* CHAT AREA */}
//         <div style={{
//           flex: 1,
//           overflowY: "auto",
//           padding: "10px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px"
//         }}>
//           {chat.map((c, i) => (
//             <div key={i} style={{
//               alignSelf: c.type === "user" ? "flex-end" : "flex-start",
//               maxWidth: "70%"
//             }}>
//               <div style={{
//                 padding: "10px 14px",
//                 borderRadius: "12px",
//                 background: c.type === "user"
//                   ? "#0ea5e9"
//                   : "#1e293b",
//                 color: "#fff",
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
//               }}>
//                 {c.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* INPUT AREA */}
//         <div style={{
//           display: "flex",
//           gap: "10px",
//           marginTop: "10px"
//         }}>
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Ask something..."
//             style={{
//               flex: 1,
//               padding: "12px",
//               borderRadius: "8px",
//               border: "none",
//               outline: "none",
//               background: "#1e293b",
//               color: "#fff"
//             }}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />

//           <button
//             onClick={sendMessage}
//             style={{
//               padding: "12px 18px",
//               background: "#0ea5e9",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontWeight: "bold"
//             }}
//           >
//             Send
//           </button>

//           {/* FILE UPLOAD */}
//           <label style={{
//             padding: "12px",
//             background: "#1e293b",
//             borderRadius: "8px",
//             cursor: "pointer"
//           }}>
//             📎
//             <input
//               type="file"
//               hidden
//               onChange={handleFile}
//             />
//           </label>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ChatPage;












// ChatPage.jsx (or wherever your chat page is located)
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions] = useState([
    "Show me all loitering events",
    "How many crowd formations today?",
    "Export recent events to CSV",
    "What's the security recommendation?",
    "Show abandoned objects this week",
    "Filter events from last 24 hours"
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  // Welcome message
  useEffect(() => {
    if (chat.length === 0) {
      setChat([
        {
          type: "bot",
          text: "👋 Welcome to the AI Surveillance Assistant!\n\nI can help you with:\n• 📊 Analyzing surveillance events\n• 🔍 Filtering by activity type\n• 📅 Date and time range queries\n• 📈 Generating reports\n• 💡 Security recommendations\n\nHow can I assist you today?",
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: message,
      timestamp: new Date()
    };
    setChat(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    try {
      // Call AI endpoint
      const res = await axios.post("http://localhost:5000/ai-query", {
        message: message
      });

      const reply = res.data.reply || "I couldn't process that request. Please try again.";

      // Add bot reply
      setChat(prev => [...prev, {
        type: "bot",
        text: reply,
        timestamp: new Date()
      }]);

    } catch (err) {
      console.error(err);
      setChat(prev => [...prev, {
        type: "bot",
        text: "❌ Sorry, I'm having trouble connecting to the AI service. Please check your connection and try again.",
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    inputRef.current?.focus();
  };

  const clearChat = () => {
    setChat([
      {
        type: "bot",
        text: "✨ Chat cleared! How can I help you with surveillance monitoring?",
        timestamp: new Date()
      }
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        padding: "20px 32px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.95)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                background: "#f1f5f9",
                border: "none",
                borderRadius: "10px",
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                color: "#475569",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#e2e8f0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f1f5f9"}
            >
              ← Back to Dashboard
            </button>
            <div>
              <h1 style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}>
                AI Surveillance Assistant
              </h1>
              <p style={{
                margin: "4px 0 0 0",
                fontSize: "13px",
                color: "#64748b"
              }}>
                Powered by Advanced AI • Real-time responses
              </p>
            </div>
          </div>
          <button
            onClick={clearChat}
            style={{
              padding: "8px 16px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "500",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f8fafc";
              e.currentTarget.style.borderColor = "#cbd5e0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            🗑️ Clear Chat
          </button>
        </div>
      </div>

      {/* Chat Container */}
      <div style={{
        flex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        {/* Chat Messages Area */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          border: "1px solid #e9ecef",
          minHeight: "500px",
          maxHeight: "calc(100vh - 250px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}>
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px"
          }}>
            {chat.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: c.type === "user" ? "flex-end" : "flex-start",
                  marginBottom: "20px",
                  animation: "fadeIn 0.3s ease"
                }}
              >
                <div style={{
                  maxWidth: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: c.type === "user" ? "flex-end" : "flex-start"
                }}>
                  {/* Avatar/Icon */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px"
                  }}>
                    {c.type === "bot" && (
                      <span style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#64748b"
                      }}>
                        🤖 AI Assistant
                      </span>
                    )}
                    {c.type === "user" && (
                      <span style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#64748b"
                      }}>
                        You
                      </span>
                    )}
                  </div>
                  
                  {/* Message Bubble */}
                  <div style={{
                    padding: "14px 18px",
                    borderRadius: c.type === "user"
                      ? "20px 20px 4px 20px"
                      : "20px 20px 20px 4px",
                    background: c.type === "user"
                      ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                      : c.isError ? "#fef2f2" : "#f8fafc",
                    color: c.type === "user" ? "white" : c.isError ? "#dc2626" : "#1e293b",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    border: c.type === "bot" && !c.isError ? "1px solid #e2e8f0" : "none",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}>
                    {c.text}
                  </div>
                  
                  {/* Timestamp */}
                  {c.timestamp && (
                    <div style={{
                      fontSize: "10px",
                      color: "#94a3b8",
                      marginTop: "6px",
                      marginLeft: c.type === "user" ? "0" : "12px",
                      marginRight: c.type === "user" ? "12px" : "0"
                    }}>
                      {formatTime(c.timestamp)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
                <div style={{ maxWidth: "70%" }}>
                  <div style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#64748b",
                    marginBottom: "6px"
                  }}>
                    🤖 AI Assistant
                  </div>
                  <div style={{
                    padding: "14px 18px",
                    background: "#f8fafc",
                    borderRadius: "20px 20px 20px 4px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center"
                  }}>
                    <span style={{
                      width: "8px",
                      height: "8px",
                      background: "#94a3b8",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "-0.32s"
                    }} />
                    <span style={{
                      width: "8px",
                      height: "8px",
                      background: "#94a3b8",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "-0.16s"
                    }} />
                    <span style={{
                      width: "8px",
                      height: "8px",
                      background: "#94a3b8",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "bounce 1.4s infinite ease-in-out both"
                    }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggestions Section */}
        {chat.length < 3 && (
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e9ecef",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span>💡</span>
              Suggested questions to get started:
            </div>
            <div style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap"
            }}>
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    padding: "8px 16px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "20px",
                    fontSize: "13px",
                    color: "#475569",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f8fafc";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "20px",
          border: "1px solid #e9ecef",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <div style={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-end"
          }}>
            <div style={{ flex: 1 }}>
              <textarea
                ref={inputRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question here... (e.g., 'Show me all loitering events from today')"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontFamily: "system-ui",
                  resize: "none",
                  outline: "none",
                  transition: "all 0.2s",
                  minHeight: "48px",
                  maxHeight: "120px",
                  lineHeight: "1.5"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              style={{
                padding: "12px 24px",
                background: message.trim()
                  ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                  : "#cbd5e0",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: message.trim() ? "pointer" : "not-allowed",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                minHeight: "48px"
              }}
              onMouseEnter={(e) => {
                if (message.trim()) {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                if (message.trim()) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <span>📤</span>
              Send
            </button>
          </div>
          <div style={{
            fontSize: "11px",
            color: "#94a3b8",
            marginTop: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <span>Press Enter to send • Shift + Enter for new line</span>
            <span>⚡ AI-powered responses</span>
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatPage;