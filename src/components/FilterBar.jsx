// const FilterBar = ({
//   activityFilter,
//   setActivityFilter,
//   fromTime,
//   setFromTime,
//   toTime,
//   setToTime
// }) => {
//   return (
//     <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      
//       <select value={activityFilter} onChange={(e) => setActivityFilter(e.target.value)}>
//         <option value="">All</option>
//         <option value="loitering">Loitering</option>
//         <option value="crowd">Crowd</option>
//         <option value="abandoned_object">Abandoned</option>
//       </select>

//       <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
//       <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} />

//     </div>
//   );
// };

// export default FilterBar;







// FilterBar.jsx
import { useState } from "react";

function FilterBar({ 
  activityFilter, 
  setActivityFilter, 
  fromTime, 
  setFromTime, 
  toTime, 
  setToTime,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  totalEvents,
  onClearFilters 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const activities = [
    { value: "", label: "All Events", icon: "🎯" },
    { value: "loitering", label: "Loitering", icon: "🚶" },
    { value: "crowd", label: "Crowd", icon: "👥" },
    { value: "abandoned_object", label: "Abandoned Object", icon: "📦" }
  ];

  const hasActiveFilters = activityFilter || fromTime || toTime || fromDate || toDate;

  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      overflow: "hidden"
    }}>
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: "16px 20px",
          background: "#fafbfc",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>🔍</span>
          <span style={{ fontWeight: "600" }}>Filters</span>
          {hasActiveFilters && (
            <span style={{
              background: "#3b82f6",
              color: "white",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "11px"
            }}>
              Active
            </span>
          )}
        </div>
        <span style={{
          transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.2s"
        }}>
          ▼
        </span>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div style={{ padding: "20px" }}>
          {/* Activity Filter */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#475569"
            }}>
              Activity Type
            </label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {activities.map(activity => (
                <button
                  key={activity.value}
                  onClick={() => setActivityFilter(activity.value)}
                  style={{
                    padding: "8px 16px",
                    background: activityFilter === activity.value ? "#3b82f6" : "#f1f5f9",
                    color: activityFilter === activity.value ? "white" : "#475569",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>{activity.icon}</span>
                  {activity.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date and Time Range - ON THE SAME LINE */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#475569"
            }}>
              Date & Time Range
            </label>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr 50px 1fr auto 1fr",
              gap: "8px",
              alignItems: "center"
            }}>
              {/* From Date */}
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "13px"
                }}
                placeholder="From Date"
              />
              
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>to</span>
              
              {/* To Date */}
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "13px"
                }}
                placeholder="To Date"
              />
              
              <span style={{ color: "#cbd5e0", textAlign: "center" }}>|</span>
              
              {/* From Time */}
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "13px"
                }}
              />
              
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>to</span>
              
              {/* To Time */}
              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "13px"
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "16px",
            borderTop: "1px solid #e2e8f0"
          }}>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b" }}>
                {totalEvents || 0}
              </span>
              <span style={{ fontSize: "13px", color: "#64748b", marginLeft: "6px" }}>
                events found
              </span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                style={{
                  padding: "6px 12px",
                  background: "#fee2e2",
                  border: "none",
                  borderRadius: "8px",
                  color: "#dc2626",
                  cursor: "pointer",
                  fontSize: "13px"
                }}
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;