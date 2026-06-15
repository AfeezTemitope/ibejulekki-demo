import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ibeju-Lekki Local Government | Official Website",
  description:
    "The official website of Ibeju-Lekki Local Government Area, Lagos State — home to Dangote Refinery and Lekki Free Trade Zone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Poppins — primary typeface */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        {/* ── Boot loader styles (inline so they fire before any CSS loads) ── */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #boot-loader {
            position: fixed; inset: 0; z-index: 99999;
            background: #111111; color: #FAF7F0;
            display: flex; align-items: center; justify-content: center;
            font-family: Georgia, serif;
            padding: 2rem;
            transition: opacity 0.8s ease, visibility 0.8s;
          }
          #boot-loader.hide { opacity: 0; visibility: hidden; pointer-events: none; }
          .boot-wrap { max-width: 900px; width: 100%; text-align: center; }
          .boot-eyebrow {
            font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
            color: #F5A623; margin-bottom: 1rem; font-family: system-ui, sans-serif;
          }
          .boot-title {
            font-size: clamp(2rem, 7vw, 4.5rem);
            font-weight: 600; line-height: 1.05; margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }
          .boot-title em { font-style: italic; color: #F5A623; }
          .boot-chairman {
            font-size: clamp(0.85rem, 2vw, 1.05rem); color: rgba(250,247,240,0.65);
            margin-bottom: 2.5rem; font-family: system-ui, sans-serif;
          }
          .boot-shield {
            display: flex; justify-content: center; gap: 0.4rem;
            flex-wrap: wrap; margin-bottom: 2rem;
          }
          .boot-letter {
            width: clamp(42px, 9vw, 70px);
            height: clamp(42px, 9vw, 70px);
            border: 1.5px solid rgba(245,166,35,0.25);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 700; color: rgba(245,166,35,0.5);
            opacity: 0; animation: bootPop 0.5s ease-out forwards;
            transition: all 0.5s ease;
          }
          .boot-letter.active {
            color: #111111;
            background: #F5A623;
            border-color: #F5A623;
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(245,166,35,0.5);
          }
          .boot-letter:nth-child(1) { animation-delay: 0.05s; }
          .boot-letter:nth-child(2) { animation-delay: 0.15s; }
          .boot-letter:nth-child(3) { animation-delay: 0.25s; }
          .boot-letter:nth-child(4) { animation-delay: 0.35s; }
          .boot-letter:nth-child(5) { animation-delay: 0.45s; }
          .boot-letter:nth-child(6) { animation-delay: 0.55s; }
          .boot-letter:nth-child(7) { animation-delay: 0.65s; }
          @keyframes bootPop {
            from { opacity: 0; transform: translateY(10px) scale(0.9); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          .boot-pillar-display {
            min-height: 70px; margin-bottom: 2rem;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            font-family: system-ui, sans-serif;
          }
          .boot-pillar-name {
            font-size: clamp(1rem, 2.5vw, 1.3rem);
            color: #F5A623; letter-spacing: 0.15em;
            text-transform: uppercase; font-weight: 600;
            margin-bottom: 0.5rem;
            opacity: 0; animation: fadeSlide 0.6s ease-out forwards;
          }
          .boot-pillar-desc {
            font-size: clamp(0.8rem, 1.8vw, 0.95rem);
            color: rgba(250,247,240,0.7); max-width: 500px;
            line-height: 1.5;
            opacity: 0; animation: fadeSlide 0.6s ease-out 0.15s forwards;
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .boot-progress {
            width: min(300px, 60%); height: 2px; margin: 0 auto;
            background: rgba(250,247,240,0.1); border-radius: 2px; overflow: hidden;
          }
          .boot-bar {
            height: 100%; background: #F5A623;
            animation: bootBar 2.5s ease-in-out infinite;
          }
          @keyframes bootBar {
            0%   { width: 0%;   margin-left: 0%; }
            50%  { width: 60%;  margin-left: 20%; }
            100% { width: 0%;   margin-left: 100%; }
          }
          .boot-footer {
            margin-top: 2rem; font-size: 10px; letter-spacing: 0.25em;
            text-transform: uppercase; color: rgba(250,247,240,0.35);
            font-family: system-ui, sans-serif;
          }
        `,
          }}
        />
      </head>

      <body>
        {/* ── BOOT LOADER ────────────────────────────────────────────────── */}
        <div id="boot-loader">
          <div className="boot-wrap">
            <div className="boot-eyebrow">Ibeju-Lekki Local Government</div>
            <h1 className="boot-title">
              The <em>SHIEELD</em> Agenda
            </h1>
            <div className="boot-chairman">
              Hon. Abdullahi Sesan Olowa · Executive Chairman
            </div>

            <div className="boot-shield" id="boot-shield">
              <div className="boot-letter" data-letter="S">S</div>
              <div className="boot-letter" data-letter="H">H</div>
              <div className="boot-letter" data-letter="I">I</div>
              <div className="boot-letter" data-letter="E1">E</div>
              <div className="boot-letter" data-letter="E2">E</div>
              <div className="boot-letter" data-letter="L">L</div>
              <div className="boot-letter" data-letter="D">D</div>
            </div>

            <div className="boot-pillar-display" id="boot-pillar">
              <div className="boot-pillar-name">Security</div>
              <div className="boot-pillar-desc">
                Safer streets and stronger community protection for every
                resident of Ibeju-Lekki.
              </div>
            </div>

            <div className="boot-progress">
              <div className="boot-bar" />
            </div>
            <div className="boot-footer">Loading the official website</div>
          </div>
        </div>

        {/* ── BOOT LOADER SCRIPT ─────────────────────────────────────────── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              var pillars = [
                { key: 'S',  name: 'Security',       desc: 'Safer streets and stronger community protection for every resident of Ibeju-Lekki.' },
                { key: 'H',  name: 'Health',          desc: 'Accessible primary healthcare and wellness programs across all wards.' },
                { key: 'I',  name: 'Infrastructure',  desc: 'Roads, drainage, and public works that connect and empower our communities.' },
                { key: 'E1', name: 'Education',       desc: 'Quality learning environments and opportunity for every child.' },
                { key: 'E2', name: 'Environment',     desc: 'A cleaner, greener Ibeju-Lekki — sustainable for future generations.' },
                { key: 'L',  name: 'Local Economy',   desc: 'Empowering small businesses, artisans, and local enterprise to thrive.' },
                { key: 'D',  name: 'Development',     desc: 'Planned, inclusive growth that benefits every community and ward.' },
              ];

              var startTime      = Date.now();
              var MIN_DISPLAY_MS = 3500;
              var pageLoaded     = false;
              var idx            = 0;
              var cycleInterval;
              var display = document.getElementById('boot-pillar');
              var letters = document.querySelectorAll('#boot-shield .boot-letter');

              function renderPillar(i) {
                var p = pillars[i];
                letters.forEach(function (el) {
                  el.classList.toggle('active', el.getAttribute('data-letter') === p.key);
                });
                display.innerHTML =
                  '<div class="boot-pillar-name">'  + p.name + '</div>' +
                  '<div class="boot-pillar-desc">' + p.desc + '</div>';
              }

              function startCycle() {
                renderPillar(0);
                cycleInterval = setInterval(function () {
                  idx = (idx + 1) % pillars.length;
                  renderPillar(idx);
                }, 1400);
              }

              function hideLoader() {
                clearInterval(cycleInterval);
                var l = document.getElementById('boot-loader');
                if (l) { l.classList.add('hide'); setTimeout(function () { l.remove(); }, 900); }
              }

              function tryHide() {
                if (!pageLoaded) return;
                var elapsed = Date.now() - startTime;
                if (elapsed >= MIN_DISPLAY_MS) { hideLoader(); }
                else { setTimeout(hideLoader, MIN_DISPLAY_MS - elapsed); }
              }

              setTimeout(startCycle, 800);

              window.addEventListener('load', function () { pageLoaded = true; tryHide(); });

              // safety net — never hang forever
              setTimeout(function () { pageLoaded = true; tryHide(); }, 15000);
            })();
          `,
          }}
        />

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <Header />

        {/* ── PAGE CONTENT ───────────────────────────────────────────────── */}
        {children}
      </body>
    </html>
  );
}