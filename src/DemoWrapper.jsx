import { useState, useRef, useEffect } from "react";
import { CalendarCheck, Activity, Heart, Users, CreditCard, Sparkles, Bell, Shield, MapPin, Flame, Palette, ChevronRight, ExternalLink } from "lucide-react";
import App from "./App.jsx";
import config from "./demo.config.js";

const ICONS = { "Class Scheduling": CalendarCheck, "Practice Tracking": Activity, "Community Feed": Heart, "Teacher Profiles": Users, "Membership Tiers": CreditCard, "Events & Workshops": Sparkles, "Smart Notifications": Bell, "Admin Dashboard": Shield, "All-in-One Platform": MapPin, "Member Engagement": Flame, "Custom Branded": Palette };

export default function DemoWrapper() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  useEffect(() => { const h = () => setIsMobile(window.innerWidth < 1100); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);

  if (isMobile) return <App />;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f3f0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* LEFT SIDEBAR */}
      <aside style={{ width: 320, flexShrink: 0, position: "fixed", top: 0, left: 0, bottom: 0, overflowY: "auto", padding: "32px 28px", borderRight: "1px solid #e5e0d8" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: config.accent, textTransform: "uppercase", marginBottom: 20 }}>PROTOTYPE DEMO</p>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <LogoBox />
          <div>
            <h2 style={{ fontFamily: `'${config.displayFont}', Georgia, serif`, fontSize: 22, margin: 0, color: "#1a1a18", fontWeight: 700 }}>{config.name}</h2>
            <p style={{ fontSize: 13, color: "#7a7568", margin: 0 }}>{config.subtitle} App</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {config.features.map((f, i) => {
            const Icon = ICONS[f.title] || Sparkles;
            return (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Icon size={18} color={config.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "#1a1a18", margin: 0 }}>{f.title}</p>
                  <p style={{ fontSize: 13, color: "#7a7568", margin: "2px 0 0", lineHeight: 1.4 }}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: 12, color: "#a8a098", marginTop: 32, letterSpacing: "0.03em" }}>BUILT BY <span style={{ fontWeight: 700, color: "#7a7568" }}>LUMI</span> — <a href="https://LumiClass.App" target="_blank" rel="noopener" style={{ color: config.accent, textDecoration: "none", fontWeight: 600 }}>LumiClass.App</a></p>
      </aside>

      {/* CENTER — PHONE FRAME */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", marginLeft: 320, marginRight: 340, paddingTop: 24, paddingBottom: 24 }}>
        <div style={{ width: 390, minHeight: "100vh", position: "sticky", top: 24, background: "#fff", borderRadius: 20, boxShadow: "0 8px 40px rgba(0,0,0,.12), 0 1px 3px rgba(0,0,0,.08)", overflow: "hidden", transform: "translateZ(0)" }}>
          <div style={{ height: "calc(100vh - 48px)", overflow: "auto" }}>
            <App />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside style={{ width: 340, flexShrink: 0, position: "fixed", top: 0, right: 0, bottom: 0, overflowY: "auto", padding: "32px 28px", borderLeft: "1px solid #e5e0d8" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {config.salesCards.map((card, i) => {
            const Icon = ICONS[card.title] || (i === 1 ? Sparkles : Shield);
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "20px 18px", border: "1px solid #e5e0d8" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: config.accentLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Icon size={18} color={config.accent} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a18", margin: "0 0 6px" }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: "#7a7568", lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 24, background: config.accent, borderRadius: 14, padding: "22px 20px", color: "#fff" }}>
          <h3 style={{ fontFamily: `'${config.displayFont}', Georgia, serif`, fontSize: 20, margin: "0 0 8px", fontWeight: 600 }}>Ready to Launch?</h3>
          <p style={{ fontSize: 13, lineHeight: 1.5, margin: "0 0 16px", opacity: 0.9 }}>Get a custom loyalty app built for your studio — fully branded, data-driven, and ready to deploy.</p>
          <a href="https://LumiClass.App" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 8, background: "rgba(255,255,255,.18)", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,.25)" }}>
            Learn More <ExternalLink size={14} />
          </a>
        </div>
      </aside>
    </div>
  );
}

function LogoBox() {
  const [err, setErr] = useState(false);
  if (config.logoUrl && !err) return <img src={config.logoUrl} alt={config.name} onError={() => setErr(true)} style={{ width: 44, height: 44, borderRadius: 10, objectFit: "contain", background: "#fff" }} />;
  return <div style={{ width: 44, height: 44, borderRadius: 10, background: config.accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: `'${config.displayFont}', Georgia, serif`, fontSize: 18, color: "#fff", fontWeight: 700 }}>{config.logoMark}</div>;
}
