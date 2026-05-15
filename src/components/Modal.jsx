// const Modal = ({ event, onClose }) => {
//   if (!event) return null;

//   return (
//     <div style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: "rgba(0,0,0,0.7)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center"
//     }} onClick={onClose}>

//       <div style={{
//         background: "#020c1b",
//         padding: "20px",
//         borderRadius: "12px"
//       }} onClick={(e) => e.stopPropagation()}>

//         <img src={event.image} style={{ width: "300px" }} />

//         <h3>{event.activity}</h3>
//         <p>{event.explanation}</p>

//       </div>
//     </div>
//   );
// };

// export default Modal;









// Modal.jsx
import { useEffect } from "react";

function Modal({ event, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!event) return null;

  const eventTime = new Date(event.time);
  
  const getActivityDetails = (activity) => {
    const details = {
      loitering: { icon: "🚶", color: "#f59e0b", label: "Loitering Detection", description: "Person detected loitering in restricted area" },
      crowd: { icon: "👥", color: "#ef4444", label: "Crowd Formation", description: "Unusual crowd gathering detected" },
      abandoned_object: { icon: "📦", color: "#8b5cf6", label: "Abandoned Object", description: "Suspicious object left unattended" }
    };
    return details[activity] || { icon: "⚠️", color: "#6b7280", label: "Alert", description: "Suspicious activity detected" };
  };

  const activityDetails = getActivityDetails(event.activity);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.2s ease"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "20px",
          maxWidth: "90vw",
          width: "600px",
          maxHeight: "90vh",
          overflow: "auto",
          animation: "slideUp 0.3s ease"
        }}
      >
        {/* Header */}
        <div style={{
          padding: "24px",
          borderBottom: "1px solid #f1f5f9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <span style={{ fontSize: "28px" }}>{activityDetails.icon}</span>
            <div>
              <h2 style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "600",
                color: "#1e293b"
              }}>
                {activityDetails.label}
              </h2>
              <p style={{
                margin: "4px 0 0 0",
                fontSize: "13px",
                color: "#64748b"
              }}>
                {activityDetails.description}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#94a3b8",
              transition: "color 0.2s",
              padding: "4px"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#475569"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div style={{ padding: "24px" }}>
          {/* Time & Status */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px"
          }}>
            <div style={{
              padding: "12px",
              background: "#f8fafc",
              borderRadius: "12px"
            }}>
              <div style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px"
              }}>
                Detection Time
              </div>
              <div style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#1e293b"
              }}>
                {eventTime.toLocaleDateString()} at {eventTime.toLocaleTimeString()}
              </div>
            </div>
            
            <div style={{
              padding: "12px",
              background: event.done ? "#f0fdf4" : "#fef2f2",
              borderRadius: "12px"
            }}>
              <div style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px"
              }}>
                Status
              </div>
              <div style={{
                fontSize: "15px",
                fontWeight: "600",
                color: event.done ? "#10b981" : "#ef4444",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <span>{event.done ? "✓" : "⚠️"}</span>
                {event.done ? "Resolved" : "Active - Requires Attention"}
              </div>
            </div>
          </div>
          
          {/* Location */}
          {event.location && (
            <div style={{
              padding: "12px",
              background: "#f8fafc",
              borderRadius: "12px",
              marginBottom: "24px"
            }}>
              <div style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px"
              }}>
                Location
              </div>
              <div style={{
                fontSize: "14px",
                color: "#1e293b",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span>📍</span>
                {event.location}
              </div>
            </div>
          )}
          
          {/* Confidence Score */}
          {event.confidence && (
            <div style={{ marginBottom: "24px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "#64748b",
                marginBottom: "8px"
              }}>
                <span>Detection Confidence</span>
                <span style={{ fontWeight: "600" }}>{(event.confidence * 100).toFixed(0)}%</span>
              </div>
              <div style={{
                height: "8px",
                background: "#f1f5f9",
                borderRadius: "4px",
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
          
          {/* Additional Info */}
          <div style={{
            padding: "12px",
            background: "#fef3c7",
            borderRadius: "12px",
            borderLeft: `3px solid #f59e0b`
          }}>
            <div style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#92400e",
              marginBottom: "4px"
            }}>
              ⚠️ Security Recommendation
            </div>
            <div style={{
              fontSize: "13px",
              color: "#78350f"
            }}>
              {event.done 
                ? "This incident has been resolved and logged." 
                : "Immediate attention recommended. Review footage and initiate security protocol."}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Modal;