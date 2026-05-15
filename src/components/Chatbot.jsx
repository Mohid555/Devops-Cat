// import { useState } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const sendMessage = async () => {
//     if (!message) return;

//     // Add user message
//     setChat(prev => [...prev, { type: "user", text: message }]);

//     // 🔥 TEMP: simple parsing (step 2)
//     let body = {};
//      const msg = message.toLowerCase();
//     if (message.includes("loitering")) body.activity = "loitering";
//     if (message.includes("crowd")) body.activity = "crowd";
//     if (message.includes("abandoned")) body.activity = "abandoned_object";

//     const match = message.match(/\d+/);
//     if (match) body.minDuration = parseInt(match[0]);

//     try {
//       const res = await axios.post("http://localhost:5000/query", body);

//       const reply = `Found ${res.data.count} events`;

//       setChat(prev => [...prev, { type: "bot", text: reply }]);

//     } catch (err) {
//          console.log(err);
//       setChat(prev => [...prev, { type: "bot", text: "Error fetching data" }]);
//     }

//     setMessage("");
//   };

//   return (
//     <div style={{
//       position: "fixed",
//       bottom: "20px",
//       right: "20px",
//       width: "300px",
//       background: "#020c1b",
//       border: "1px solid #0ea5e9",
//       borderRadius: "10px",
//       padding: "10px"
//     }}>

//       <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
//         {chat.map((c, i) => (
//           <div key={i} style={{
//             textAlign: c.type === "user" ? "right" : "left",
//             marginBottom: "5px"
//           }}>
//             {c.text}
//           </div>
//         ))}
//       </div>

//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Ask something..."
//         style={{ width: "100%", marginBottom: "5px" }}
//       />

//       <button onClick={sendMessage} style={{ width: "100%" }}>
//         Send
//       </button>
//     </div>
//   );
// };

// export default Chatbot;
