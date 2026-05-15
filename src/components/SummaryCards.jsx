// const SummaryCards = ({ loiter, crowd, abandoned }) => {
//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "15px",
//       marginBottom: "30px"
//     }}>
//       {[
//         ["Loitering", loiter],
//         ["Crowd", crowd],
//         ["Abandoned", abandoned],
//       ].map(([label, count], i) => (
//         <div key={i} style={{
//           background: "#020c1b",
//           padding: "18px",
//           borderRadius: "12px",
//           border: "1px solid #0ea5e9"
//         }}>
//           <h3 style={{ color: "#38bdf8" }}>{label}</h3>
//           <h1>{count}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SummaryCards;




// SummaryCards.jsx
import { useEffect, useState } from "react";

function SummaryCards({ loiter, crowd, abandoned, stats }) {
  const [animatedValues, setAnimatedValues] = useState({ loiter: 0, crowd: 0, abandoned: 0 });

  useEffect(() => {
    const duration = 1000;
    const step = 20;
    const increments = {
      loiter: loiter / (duration / step),
      crowd: crowd / (duration / step),
      abandoned: abandoned / (duration / step)
    };
    
    let current = { loiter: 0, crowd: 0, abandoned: 0 };
    const interval = setInterval(() => {
      let allCompleted = true;
      
      Object.keys(increments).forEach(key => {
        if (current[key] < eval(key)) {
          current[key] = Math.min(current[key] + increments[key], eval(key));
          allCompleted = false;
        }
      });
      
      setAnimatedValues({ ...current });
      
      if (allCompleted) clearInterval(interval);
    }, step);
    
    return () => clearInterval(interval);
  }, [loiter, crowd, abandoned]);

  const cards = [
    {
      title: "Loitering Events",
      value: Math.floor(animatedValues.loiter),
      total: loiter,
      icon: "🚶",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      borderColor: "#fed7aa",
      trend: stats?.loiteringTrend || "+12%"
    },
    {
      title: "Crowd Formations",
      value: Math.floor(animatedValues.crowd),
      total: crowd,
      icon: "👥",
      color: "#ef4444",
      bgColor: "#fef2f2",
      borderColor: "#fecaca",
      trend: stats?.crowdTrend || "+8%"
    },
    {
      title: "Abandoned Objects",
      value: Math.floor(animatedValues.abandoned),
      total: abandoned,
      icon: "📦",
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      borderColor: "#ddd6fe",
      trend: stats?.abandonedTrend || "-3%"
    }
  ];

  return (
    <div>
      {/* Stats Grid - Now only 3 cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px"
      }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              borderLeft: `4px solid ${card.color}`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "16px"
            }}>
              <div style={{
                fontSize: "36px",
                lineHeight: 1
              }}>
                {card.icon}
              </div>
              <div style={{
                background: card.bgColor,
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "600",
                color: card.color
              }}>
                {card.trend}
              </div>
            </div>
            
            <h3 style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "500",
              color: "#64748b",
              letterSpacing: "0.5px",
              textTransform: "uppercase"
            }}>
              {card.title}
            </h3>
            
            <div style={{
              marginTop: "12px",
              display: "flex",
              alignItems: "baseline",
              gap: "8px"
            }}>
              <span style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1e293b"
              }}>
                {card.value}
              </span>
              <span style={{
                fontSize: "14px",
                color: "#94a3b8"
              }}>
                total incidents
              </span>
            </div>
            
            {/* Progress Bar - Shows percentage of total incidents across all types */}
            <div style={{
              marginTop: "16px",
              height: "4px",
              background: "#f1f5f9",
              borderRadius: "2px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${(card.value / (loiter + crowd + abandoned)) * 100}%`,
                height: "100%",
                background: card.color,
                transition: "width 0.5s ease"
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummaryCards;