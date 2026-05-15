// import React from "react";

// const EventCard = ({ event, onView, onDelete, onDone }) => {
//   return (
//     <div style={{
//       background: "#020c1b",
//       borderRadius: "12px",
//       border: "1px solid #0ea5e9",
//       opacity: event.status === "done" ? 0.5 : 1
//     }}>
//       <img
//         src={event.image}
//         alt=""
//         style={{ width: "100%", height: "200px", objectFit: "cover" }}
//       />

//       <div style={{ padding: "15px" }}>
//         {/* Activity + Risk */}
//         <h3>
//           {event.activity === "abandoned_object"
//             ? "Abandoned Object"
//             : event.activity.toUpperCase()}
          
//           <span style={{
//             marginLeft: "10px",
//             padding: "4px 8px",
//             borderRadius: "6px",
//             fontSize: "12px",
//             background:
//               event.risk === "HIGH" ? "#ef4444" :
//               event.risk === "MEDIUM" ? "#facc15" :
//               "#22c55e",
//             color: "#000"
//           }}>
//             {event.risk}
//           </span>
//         </h3>

//         {/* Time */}
//         <p>{new Date(event.time).toLocaleString()}</p>

//         {/* Location */}
//         <p>{event.location}</p>

//         {/* Explanation */}
//         <p style={{ fontSize: "13px", color: "#94a3b8" }}>
//           {event.explanation}
//         </p>

//         {/* Buttons */}
//         <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//           <button onClick={() => onView(event)}>View</button>
//           <button onClick={() => onDone(event._id)}>Done</button>
//           <button onClick={() => onDelete(event._id)}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;






// EventCard.jsx
import { useState } from "react";

function EventCard({ event, onView, onDelete, onDone }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getActivityDetails = (activity) => {
    const details = {
      loitering: { icon: "🚶", color: "#f59e0b", bgColor: "#fffbeb", label: "Loitering" },
      crowd: { icon: "👥", color: "#ef4444", bgColor: "#fef2f2", label: "Crowd" },
      abandoned_object: { icon: "📦", color: "#8b5cf6", bgColor: "#f5f3ff", label: "Abandoned Object" }
    };
    return details[activity] || { icon: "⚠️", color: "#6b7280", bgColor: "#f3f4f6", label: activity };
  };

  const activityDetails = getActivityDetails(event.activity);
  const eventTime = new Date(event.time);
  const now = new Date();
  const timeDiff = Math.floor((now - eventTime) / 1000 / 60); // minutes ago

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: isHovered 
          ? "0 8px 25px rgba(0,0,0,0.1)" 
          : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(event)}
    >
      {/* Image Section */}
      <div style={{
        position: "relative",
        height: "200px",
        background: "#f1f5f9",
        overflow: "hidden"
      }}>
        {event.imageUrl && !imageError ? (
          <img
            src={event.imageUrl}
            alt={event.activity}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s"
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontSize: "64px",
            background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)"
          }}>
            {activityDetails.icon}
          </div>
        )}
        
        {/* Activity Badge */}
        <div style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: activityDetails.bgColor,
          color: activityDetails.color,
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backdropFilter: "blur(4px)"
        }}>
          <span>{activityDetails.icon}</span>
          {activityDetails.label}
        </div>
        
        {/* Status Badge */}
        <div style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: event.done ? "#10b981" : "#ef4444",
          color: "white",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "11px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}>
          {event.done ? "Resolved" : "Active"}
        </div>
        
        {/* Time Badge */}
        <div style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          background: "rgba(0,0,0,0.75)",
          color: "white",
          padding: "4px 10px",
          borderRadius: "8px",
          fontSize: "11px",
          fontWeight: "500",
          backdropFilter: "blur(4px)"
        }}>
          {timeDiff < 1 ? "Just now" : `${timeDiff} min ago`}
        </div>
      </div>
      
      {/* Content Section */}
      <div style={{ padding: "16px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px"
        }}>
          <div style={{
            fontSize: "13px",
            color: "#64748b",
            fontWeight: "500"
          }}>
            {eventTime.toLocaleDateString()}
          </div>
          <div style={{
            fontSize: "13px",
            fontFamily: "monospace",
            color: "#475569",
            fontWeight: "600"
          }}>
            {eventTime.toLocaleTimeString()}
          </div>
        </div>
        
        {event.location && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
            fontSize: "13px",
            color: "#475569"
          }}>
            <span>📍</span>
            <span>{event.location}</span>
          </div>
        )}
        
        {event.confidence && (
          <div style={{
            marginBottom: "16px"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              color: "#64748b",
              marginBottom: "4px"
            }}>
              <span>Confidence Score</span>
              <span>{(event.confidence * 100).toFixed(0)}%</span>
            </div>
            <div style={{
              height: "4px",
              background: "#f1f5f9",
              borderRadius: "2px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${(event.confidence * 100)}%`,
                height: "100%",
                background: event.confidence > 0.8 ? "#10b981" : event.confidence > 0.5 ? "#f59e0b" : "#ef4444",
                transition: "width 0.3s"
              }} />
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid #f1f5f9"
        }}>
          {!event.done && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDone(event._id);
              }}
              style={{
                flex: 1,
                padding: "8px",
                background: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#059669"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#10b981"}
            >
              ✓ Mark Resolved
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(event._id);
            }}
            style={{
              padding: "8px 16px",
              background: "#fee2e2",
              color: "#dc2626",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#fecaca"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#fee2e2"}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;