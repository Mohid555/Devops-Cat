// import { useEffect, useState } from "react";
// import { getEvents, deleteEvent, markDone } from "../services/api";

// import EventCard from "../components/EventCard";
// import SummaryCards from "../components/SummaryCards";
// import FilterBar from "../components/FilterBar";
// import Modal from "../components/Modal";
// import Chatbot from "../components/Chatbot";

// function Dashboard() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const [activityFilter, setActivityFilter] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");

//   // ---------------- FETCH ----------------
//   const fetchEvents = async () => {
//     const data = await getEvents();
//     setEvents(data);
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ---------------- FILTER ----------------
//   const filteredEvents = events.filter((e) => {
//     let match = true;

//     if (activityFilter) {
//       match = match && e.activity === activityFilter;
//     }

//     if (fromTime || toTime) {
//       const eventTime = new Date(e.time).toTimeString().slice(0, 5);

//       if (fromTime) match = match && eventTime >= fromTime;
//       if (toTime) match = match && eventTime <= toTime;
//     }

//     return match;
//   });

//   // ---------------- SUMMARY ----------------
//   const loiterCount = filteredEvents.filter(e => e.activity === "loitering").length;
//   const crowdCount = filteredEvents.filter(e => e.activity === "crowd").length;
//   const abandonedCount = filteredEvents.filter(e => e.activity === "abandoned_object").length;

//   // ---------------- HANDLERS ----------------
//   const handleDelete = async (id) => {
//     await deleteEvent(id);
//     fetchEvents();
//   };

//   const handleDone = async (id) => {
//     await markDone(id);
//     fetchEvents();
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#020617",
//       color: "#e0f2fe",
//       padding: "20px"
//     }}>
//       <h1 style={{ marginBottom: "20px" }}>Surveillance Dashboard</h1>

//       <SummaryCards
//         loiter={loiterCount}
//         crowd={crowdCount}
//         abandoned={abandonedCount}
//       />

//       <FilterBar
//         activityFilter={activityFilter}
//         setActivityFilter={setActivityFilter}
//         fromTime={fromTime}
//         setFromTime={setFromTime}
//         toTime={toTime}
//         setToTime={setToTime}
//       />

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//         gap: "20px"
//       }}>
//         {filteredEvents.map((event) => (
//           <EventCard
//             key={event._id}
//             event={event}
//             onView={setSelectedEvent}
//             onDelete={handleDelete}
//             onDone={handleDone}
//           />
//         ))}
//       </div>

//       <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//         <Chatbot />
//     </div>
//   );
// }

// export default Dashboard;





// import { useEffect, useState } from "react";
// import { getEvents, deleteEvent, markDone } from "../services/api";
// import { useNavigate } from "react-router-dom";

// import EventCard from "../components/EventCard";
// import SummaryCards from "../components/SummaryCards";
// import FilterBar from "../components/FilterBar";
// import Modal from "../components/Modal";

// function Dashboard() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const [activityFilter, setActivityFilter] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");

//   const navigate = useNavigate();

//   // ---------------- FETCH ----------------
//   const fetchEvents = async () => {
//     const data = await getEvents();
//     setEvents(data);
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ---------------- FILTER ----------------
//   const filteredEvents = events.filter((e) => {
//     let match = true;

//     if (activityFilter) {
//       match = match && e.activity === activityFilter;
//     }

//     if (fromTime || toTime) {
//       const eventTime = new Date(e.time).toTimeString().slice(0, 5);

//       if (fromTime) match = match && eventTime >= fromTime;
//       if (toTime) match = match && eventTime <= toTime;
//     }

//     return match;
//   });

//   // ---------------- SUMMARY ----------------
//   const loiterCount = filteredEvents.filter(e => e.activity === "loitering").length;
//   const crowdCount = filteredEvents.filter(e => e.activity === "crowd").length;
//   const abandonedCount = filteredEvents.filter(e => e.activity === "abandoned_object").length;

//   // ---------------- HANDLERS ----------------
//   const handleDelete = async (id) => {
//     await deleteEvent(id);
//     fetchEvents();
//   };

//   const handleDone = async (id) => {
//     await markDone(id);
//     fetchEvents();
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#020617",
//       color: "#e0f2fe",
//       padding: "20px",
//       position: "relative"
//     }}>
      
//       <h1 style={{ marginBottom: "20px" }}>Surveillance Dashboard</h1>

//       {/* SUMMARY */}
//       <SummaryCards
//         loiter={loiterCount}
//         crowd={crowdCount}
//         abandoned={abandonedCount}
//       />

//       {/* FILTER */}
//       <FilterBar
//         activityFilter={activityFilter}
//         setActivityFilter={setActivityFilter}
//         fromTime={fromTime}
//         setFromTime={setFromTime}
//         toTime={toTime}
//         setToTime={setToTime}
//       />

//       {/* GRID */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//         gap: "20px"
//       }}>
//         {filteredEvents.map((event) => (
//           <EventCard
//             key={event._id}
//             event={event}
//             onView={setSelectedEvent}
//             onDelete={handleDelete}
//             onDone={handleDone}
//           />
//         ))}
//       </div>

//       {/* MODAL */}
//       <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

//       {/* 🤖 CHATBOT BUTTON */}
//       <div
//         onClick={() => navigate("/chat")}
//         style={{
//           position: "fixed",
//           bottom: "25px",
//           right: "25px",
//           background: "#0ea5e9",
//           borderRadius: "50%",
//           width: "65px",
//           height: "65px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           fontSize: "26px",
//           boxShadow: "0 0 15px rgba(14,165,233,0.6)",
//           transition: "0.3s"
//         }}
//       >
//         🤖
//       </div>

//     </div>
//   );
// }

// export default Dashboard;








// import { useEffect, useState } from "react";
// import { getEvents, deleteEvent, markDone } from "../services/api";
// import { useNavigate } from "react-router-dom";

// import EventCard from "../components/EventCard";
// import SummaryCards from "../components/SummaryCards";
// import FilterBar from "../components/FilterBar";
// import Modal from "../components/Modal";
// import Chatbot from "../components/Chatbot";
// function Dashboard() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activityFilter, setActivityFilter] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");

//   const navigate = useNavigate();

//   // ---------------- FETCH ----------------
//   const fetchEvents = async () => {
//     try {
//       const data = await getEvents();
//       setEvents(data);
//     } catch (error) {
//       console.error("Failed to fetch events:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ---------------- FILTER ----------------
//   const filteredEvents = events.filter((e) => {
//     let match = true;

//     if (activityFilter) {
//       match = match && e.activity === activityFilter;
//     }

//     if (fromTime || toTime) {
//       const eventTime = new Date(e.time).toTimeString().slice(0, 5);

//       if (fromTime) match = match && eventTime >= fromTime;
//       if (toTime) match = match && eventTime <= toTime;
//     }

//     return match;
//   });

//   // ---------------- SUMMARY ----------------
//   const loiterCount = filteredEvents.filter(e => e.activity === "loitering").length;
//   const crowdCount = filteredEvents.filter(e => e.activity === "crowd").length;
//   const abandonedCount = filteredEvents.filter(e => e.activity === "abandoned_object").length;

//   // ---------------- HANDLERS ----------------
//   const handleDelete = async (id) => {
//     await deleteEvent(id);
//     fetchEvents();
//   };

//   const handleDone = async (id) => {
//     await markDone(id);
//     fetchEvents();
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#f5f7fa",
//       padding: "0",
//       position: "relative"
//     }}>
      
//       {/* Header */}
//       <div style={{
//         background: "white",
//         borderBottom: "1px solid #e5e7eb",
//         padding: "24px 32px",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
//       }}>
//         <div style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center"
//         }}>
//           <div>
//             <h1 style={{
//               margin: 0,
//               fontSize: "28px",
//               fontWeight: "600",
//               color: "#111827",
//               letterSpacing: "-0.5px"
//             }}>Surveillance Dashboard</h1>
//             <p style={{
//               margin: "8px 0 0 0",
//               color: "#6b7280",
//               fontSize: "14px"
//             }}>Real-time event monitoring and management</p>
//           </div>
//           <div style={{
//             display: "flex",
//             gap: "12px",
//             alignItems: "center"
//           }}>
//             <div style={{
//               padding: "6px 12px",
//               background: "#f3f4f6",
//               borderRadius: "8px",
//               fontSize: "13px",
//               color: "#6b7280"
//             }}>
//               Live Updates: Every 3s
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{
//         maxWidth: "1400px",
//         margin: "0 auto",
//         padding: "32px"
//       }}>
//         {/* SUMMARY */}
//         <SummaryCards
//           loiter={loiterCount}
//           crowd={crowdCount}
//           abandoned={abandonedCount}
//         />

//         {/* FILTER */}
//         <div style={{ marginBottom: "32px" }}>
//           <FilterBar
//             activityFilter={activityFilter}
//             setActivityFilter={setActivityFilter}
//             fromTime={fromTime}
//             setFromTime={setFromTime}
//             toTime={toTime}
//             setToTime={setToTime}
//           />
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "80px",
//             background: "white",
//             borderRadius: "12px",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
//           }}>
//             <div style={{
//               fontSize: "16px",
//               color: "#6b7280"
//             }}>Loading events...</div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && filteredEvents.length === 0 && (
//           <div style={{
//             background: "white",
//             borderRadius: "12px",
//             padding: "80px",
//             textAlign: "center",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
//           }}>
//             <div style={{
//               fontSize: "48px",
//               marginBottom: "16px"
//             }}>📭</div>
//             <h3 style={{
//               margin: 0,
//               fontSize: "20px",
//               fontWeight: "500",
//               color: "#111827"
//             }}>No events found</h3>
//             <p style={{
//               margin: "8px 0 0 0",
//               color: "#6b7280",
//               fontSize: "14px"
//             }}>Try adjusting your filters or wait for new events</p>
//           </div>
//         )}

//         {/* GRID */}
//         {!loading && filteredEvents.length > 0 && (
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
//             gap: "24px"
//           }}>
//             {filteredEvents.map((event) => (
//               <EventCard
//                 key={event._id}
//                 event={event}
//                 onView={setSelectedEvent}
//                 onDelete={handleDelete}
//                 onDone={handleDone}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* MODAL */}
//       <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

//       {/* CHATBOT BUTTON */}
//       <div
//         onClick={() => navigate("/chat")}
//         style={{
//           position: "fixed",
//           bottom: "32px",
//           right: "32px",
//           background: "#3b82f6",
//           borderRadius: "50%",
//           width: "56px",
//           height: "56px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           fontSize: "24px",
//           boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
//           transition: "all 0.2s ease",
//           border: "none",
//           color: "white"
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.05)";
//           e.currentTarget.style.boxShadow = "0 6px 16px rgba(59, 130, 246, 0.4)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
//         }}
//       >
//         💬
//       </div>
//     </div>
//   );
// }

// export default Dashboard;










// // Dashboard.jsx
// import { useEffect, useState, useCallback } from "react";
// import { getEvents, deleteEvent, markDone } from "../services/api";
// import { useNavigate } from "react-router-dom";

// import EventCard from "../components/EventCard";
// import SummaryCards from "../components/SummaryCards";
// import FilterBar from "../components/FilterBar";
// import Modal from "../components/Modal";


// function Dashboard() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activityFilter, setActivityFilter] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [autoRefresh, setAutoRefresh] = useState(true);
//   const [lastUpdated, setLastUpdated] = useState(new Date());

//   const navigate = useNavigate();

//   // ---------------- FETCH ----------------
//   const fetchEvents = useCallback(async () => {
//     try {
//       const data = await getEvents();
//       setEvents(data);
//       setLastUpdated(new Date());
//     } catch (error) {
//       console.error("Failed to fetch events:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchEvents();
    
//     let interval;
//     if (autoRefresh) {
//       interval = setInterval(fetchEvents, 5000);
//     }
    
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [autoRefresh, fetchEvents]);

//   // ---------------- FILTER ----------------
//   const filteredEvents = events.filter((e) => {
//     let match = true;

//     if (activityFilter) {
//       match = match && e.activity === activityFilter;
//     }

//     // Date range filter
//     if (fromDate || toDate) {
//       const eventDate = new Date(e.time).toISOString().split('T')[0];
//       if (fromDate) match = match && eventDate >= fromDate;
//       if (toDate) match = match && eventDate <= toDate;
//     }

//     // Time range filter
//     if (fromTime || toTime) {
//       const eventTime = new Date(e.time).toTimeString().slice(0, 5);
//       if (fromTime) match = match && eventTime >= fromTime;
//       if (toTime) match = match && eventTime <= toTime;
//     }

//     return match;
//   });

//   // ---------------- SUMMARY ----------------
//   const summary = {
//     loiter: filteredEvents.filter(e => e.activity === "loitering").length,
//     crowd: filteredEvents.filter(e => e.activity === "crowd").length,
//     abandoned: filteredEvents.filter(e => e.activity === "abandoned_object").length
//   };

//   // ---------------- HANDLERS ----------------
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       await deleteEvent(id);
//       fetchEvents();
//     }
//   };

//   const handleDone = async (id) => {
//     await markDone(id);
//     fetchEvents();
//   };

//   const clearAllFilters = () => {
//     setActivityFilter("");
//     setFromTime("");
//     setToTime("");
//     setFromDate("");
//     setToDate("");
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#f8fafc",
//       position: "relative"
//     }}>
      
//       {/* Header */}
//       <div style={{
//         background: "white",
//         borderBottom: "1px solid #e2e8f0",
//         padding: "20px 32px",
//         boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
//         position: "sticky",
//         top: 0,
//         zIndex: 100
//       }}>
//         <div style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "16px"
//         }}>
//           <div>
//             <h1 style={{
//               margin: 0,
//               fontSize: "26px",
//               fontWeight: "700",
//               color: "#1e293b"
//             }}>
//               Surveillance Dashboard
//             </h1>
//             <p style={{
//               margin: "6px 0 0 0",
//               color: "#64748b",
//               fontSize: "13px"
//             }}>
//               Real-time threat detection & monitoring
//             </p>
//           </div>
          
//           <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
//             {/* Auto Refresh Toggle */}
//             <button
//               onClick={() => setAutoRefresh(!autoRefresh)}
//               style={{
//                 padding: "8px 16px",
//                 background: autoRefresh ? "#10b981" : "#ef4444",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "13px",
//                 fontWeight: "600"
//               }}
//             >
//               {autoRefresh ? "🟢 Auto Refresh ON" : "🔴 Auto Refresh OFF"}
//             </button>
            
//             {/* Last Updated */}
//             <div style={{
//               padding: "6px 12px",
//               background: "#f1f5f9",
//               borderRadius: "8px",
//               fontSize: "12px",
//               color: "#64748b"
//             }}>
//               Updated: {lastUpdated.toLocaleTimeString()}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{
//         maxWidth: "1400px",
//         margin: "0 auto",
//         padding: "32px"
//       }}>
//         {/* SUMMARY CARDS */}
//         <div style={{ marginBottom: "32px" }}>
//           <SummaryCards
//             loiter={summary.loiter}
//             crowd={summary.crowd}
//             abandoned={summary.abandoned}
//           />
//         </div>

//         {/* FILTER BAR */}
//         <div style={{ marginBottom: "32px" }}>
//           <FilterBar
//             activityFilter={activityFilter}
//             setActivityFilter={setActivityFilter}
//             fromTime={fromTime}
//             setFromTime={setFromTime}
//             toTime={toTime}
//             setToTime={setToTime}
//             fromDate={fromDate}
//             setFromDate={setFromDate}
//             toDate={toDate}
//             setToDate={setToDate}
//             totalEvents={filteredEvents.length}
//             onClearFilters={clearAllFilters}
//           />
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "80px",
//             background: "white",
//             borderRadius: "16px"
//           }}>
//             <div style={{ textAlign: "center" }}>
//               <div style={{
//                 width: "40px",
//                 height: "40px",
//                 border: "3px solid #e2e8f0",
//                 borderTopColor: "#3b82f6",
//                 borderRadius: "50%",
//                 animation: "spin 1s linear infinite",
//                 margin: "0 auto 16px"
//               }} />
//               <div style={{ fontSize: "14px", color: "#64748b" }}>
//                 Loading surveillance events...
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && filteredEvents.length === 0 && (
//           <div style={{
//             background: "white",
//             borderRadius: "16px",
//             padding: "80px",
//             textAlign: "center"
//           }}>
//             <div style={{ fontSize: "64px", marginBottom: "20px", opacity: 0.5 }}>📭</div>
//             <h3 style={{ margin: 0, fontSize: "20px", color: "#1e293b" }}>No events detected</h3>
//             <p style={{ margin: "8px 0 0 0", color: "#64748b", fontSize: "14px" }}>
//               {activityFilter || fromTime || toTime || fromDate || toDate 
//                 ? "Try adjusting your filters to see more results"
//                 : "Waiting for surveillance system to detect activities"}
//             </p>
//           </div>
//         )}

//         {/* GRID */}
//         {!loading && filteredEvents.length > 0 && (
//           <>
//             <div style={{
//               marginBottom: "20px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center"
//             }}>
//               <div style={{
//                 fontSize: "14px",
//                 color: "#64748b",
//                 fontWeight: "500"
//               }}>
//                 Showing {filteredEvents.length} of {events.length} events
//               </div>
//             </div>
            
//             <div style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
//               gap: "24px"
//             }}>
//               {filteredEvents.map((event) => (
//                 <EventCard
//                   key={event._id}
//                   event={event}
//                   onView={setSelectedEvent}
//                   onDelete={handleDelete}
//                   onDone={handleDone}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* MODAL */}
//       <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

//       {/* CHATBOT
//       <Chatbot /> */}

//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Dashboard;











import { useEffect, useState, useCallback } from "react";
import { getEvents, deleteEvent, markDone } from "../services/api";
import { useNavigate } from "react-router-dom";

import EventCard from "../components/EventCard";
import SummaryCards from "../components/SummaryCards";
import FilterBar from "../components/FilterBar";
import Modal from "../components/Modal";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activityFilter, setActivityFilter] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const navigate = useNavigate();

  // ---------------- FETCH ----------------
  const fetchEvents = useCallback(async () => {
    try {
      const data = await getEvents();
      setEvents(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();

    let interval;
    if (autoRefresh) {
      interval = setInterval(fetchEvents, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, fetchEvents]);

  // ---------------- FILTER ----------------
  const filteredEvents = events.filter((e) => {
    let match = true;

    if (activityFilter) {
      match = match && e.activity === activityFilter;
    }

    if (fromDate || toDate) {
      const eventDate = new Date(e.time).toISOString().split("T")[0];
      if (fromDate) match = match && eventDate >= fromDate;
      if (toDate) match = match && eventDate <= toDate;
    }

    if (fromTime || toTime) {
      const eventTime = new Date(e.time).toTimeString().slice(0, 5);
      if (fromTime) match = match && eventTime >= fromTime;
      if (toTime) match = match && eventTime <= toTime;
    }

    return match;
  });

  // ---------------- SUMMARY ----------------
  const summary = {
    loiter: filteredEvents.filter(e => e.activity === "loitering").length,
    crowd: filteredEvents.filter(e => e.activity === "crowd").length,
    abandoned: filteredEvents.filter(e => e.activity === "abandoned_object").length
  };

  // ---------------- HANDLERS ----------------
  const handleDelete = async (id) => {
    if (window.confirm("Delete this event?")) {
      await deleteEvent(id);
      fetchEvents();
    }
  };

  const handleDone = async (id) => {
    await markDone(id);
    fetchEvents();
  };

  const clearAllFilters = () => {
    setActivityFilter("");
    setFromTime("");
    setToTime("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      position: "relative"
    }}>

      {/* HEADER */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        padding: "20px",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ margin: 0 }}>Surveillance Dashboard</h1>
      </div>

      {/* MAIN */}
      <div style={{ padding: "20px" }}>

        <SummaryCards
          loiter={summary.loiter}
          crowd={summary.crowd}
          abandoned={summary.abandoned}
        />

        <FilterBar
          activityFilter={activityFilter}
          setActivityFilter={setActivityFilter}
          fromTime={fromTime}
          setFromTime={setFromTime}
          toTime={toTime}
          setToTime={setToTime}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          totalEvents={filteredEvents.length}
          onClearFilters={clearAllFilters}
        />

        {loading && <p>Loading...</p>}

        {!loading && filteredEvents.length === 0 && (
          <p>No events found</p>
        )}

        {!loading && filteredEvents.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {filteredEvents.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onView={setSelectedEvent}
                onDelete={handleDelete}
                onDone={handleDone}
              />
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* 🤖 CHAT BUTTON */}
      <div
        onClick={() => navigate("/chat")}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "#0ea5e9",
          color: "white",
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "26px",
          boxShadow: "0 0 15px rgba(14,165,233,0.6)"
        }}
      >
        🤖
      </div>

    </div>
  );
}

export default Dashboard;