// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Ibeju-Lekki Local Government | Official Website",
//   description: "The official website of Ibeju-Lekki Local Government Area, Lagos State — home to Dangote Refinery and Lekki Free Trade Zone.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

//         {/* Inline loading screen — shows instantly on slow networks, before JS/CSS/images load */}
//         <style dangerouslySetInnerHTML={{ __html: `
//           #boot-loader {
//             position: fixed; inset: 0; z-index: 99999;
//             background: #0A1F14; color: #FAF7F0;
//             display: flex; align-items: center; justify-content: center;
//             font-family: Georgia, serif;
//             padding: 2rem;
//             transition: opacity 0.8s ease, visibility 0.8s;
//           }
//           #boot-loader.hide { opacity: 0; visibility: hidden; pointer-events: none; }
//           .boot-wrap { max-width: 900px; width: 100%; text-align: center; }
//           .boot-eyebrow {
//             font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
//             color: #C89B3C; margin-bottom: 1rem; font-family: system-ui, sans-serif;
//           }
//           .boot-title {
//             font-size: clamp(2rem, 7vw, 4.5rem);
//             font-weight: 600; line-height: 1.05; margin-bottom: 0.75rem;
//             letter-spacing: -0.02em;
//           }
//           .boot-title em { font-style: italic; color: #C89B3C; }
//           .boot-chairman {
//             font-size: clamp(0.85rem, 2vw, 1.05rem); color: rgba(250,247,240,0.65);
//             margin-bottom: 2.5rem; font-family: system-ui, sans-serif;
//           }
//           .boot-shield {
//             display: flex; justify-content: center; gap: 0.4rem;
//             flex-wrap: wrap; margin-bottom: 2rem;
//           }
//           .boot-letter {
//             width: clamp(42px, 9vw, 70px);
//             height: clamp(42px, 9vw, 70px);
//             border: 1.5px solid rgba(200,155,60,0.35);
//             border-radius: 12px;
//             display: flex; align-items: center; justify-content: center;
//             font-size: clamp(1.5rem, 4vw, 2.5rem);
//             font-weight: 700; color: #C89B3C;
//             opacity: 0; animation: bootPop 0.5s ease-out forwards;
//           }
//           .boot-letter:nth-child(1) { animation-delay: 0.05s; }
//           .boot-letter:nth-child(2) { animation-delay: 0.15s; }
//           .boot-letter:nth-child(3) { animation-delay: 0.25s; }
//           .boot-letter:nth-child(4) { animation-delay: 0.35s; }
//           .boot-letter:nth-child(5) { animation-delay: 0.45s; }
//           .boot-letter:nth-child(6) { animation-delay: 0.55s; }
//           .boot-letter:nth-child(7) { animation-delay: 0.65s; }
//           @keyframes bootPop {
//             from { opacity: 0; transform: translateY(10px) scale(0.9); }
//             to { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           .boot-pillars {
//             display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
//             font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
//             color: rgba(250,247,240,0.5); font-family: system-ui, sans-serif;
//             margin-bottom: 3rem;
//           }
//           .boot-pillars span { white-space: nowrap; }
//           .boot-progress {
//             width: min(300px, 60%); height: 2px; margin: 0 auto;
//             background: rgba(250,247,240,0.1); border-radius: 2px; overflow: hidden;
//           }
//           .boot-bar {
//             height: 100%; background: #C89B3C;
//             animation: bootBar 2.5s ease-in-out infinite;
//           }
//           @keyframes bootBar {
//             0% { width: 0%; margin-left: 0%; }
//             50% { width: 60%; margin-left: 20%; }
//             100% { width: 0%; margin-left: 100%; }
//           }
//           .boot-footer {
//             margin-top: 2rem; font-size: 10px; letter-spacing: 0.25em;
//             text-transform: uppercase; color: rgba(250,247,240,0.35);
//             font-family: system-ui, sans-serif;
//           }
//           @media (max-width: 640px) {
//             .boot-pillars { gap: 0.5rem; font-size: 9px; }
//           }
//         `}} />
//       </head>
//       <body>
//         {/* Boot loader — removed by inline script as soon as body paints */}
//         <div id="boot-loader">
//           <div className="boot-wrap">
//             <div className="boot-eyebrow">Ibeju-Lekki Local Government</div>
//             <h1 className="boot-title">The <em>SHIEELD</em> Agenda</h1>
//             <div className="boot-chairman">Hon. Abdullahi Sesan Olowa · Executive Chairman</div>
//             <div className="boot-shield">
//               <div className="boot-letter">S</div>
//               <div className="boot-letter">H</div>
//               <div className="boot-letter">I</div>
//               <div className="boot-letter">E</div>
//               <div className="boot-letter">E</div>
//               <div className="boot-letter">L</div>
//               <div className="boot-letter">D</div>
//             </div>
//             <div className="boot-pillars">
//               <span>Security</span>
//               <span>Health</span>
//               <span>Infrastructure</span>
//               <span>Education</span>
//               <span>Environment</span>
//               <span>Local Economy</span>
//               <span>Development</span>
//             </div>
//             <div className="boot-progress"><div className="boot-bar"></div></div>
//             <div className="boot-footer">Loading the official website</div>
//           </div>
//         </div>

//         <script dangerouslySetInnerHTML={{ __html: `
//           window.addEventListener('load', function() {
//             setTimeout(function() {
//               var l = document.getElementById('boot-loader');
//               if (l) {
//                 l.classList.add('hide');
//                 setTimeout(function() { l.remove(); }, 900);
//               }
//             }, 300);
//           });
//         `}} />

//         {children}
//       </body>
//     </html>
//   );
// }
// LAYEOFcat > app/layout.tsx << 'LAYEOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibeju-Lekki Local Government | Official Website",
  description: "The official website of Ibeju-Lekki Local Government Area, Lagos State — home to Dangote Refinery and Lekki Free Trade Zone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Inline loading screen — shows instantly on slow networks, before JS/CSS/images load */}
        <style dangerouslySetInnerHTML={{ __html: `
          #boot-loader {
            position: fixed; inset: 0; z-index: 99999;
            background: #0A1F14; color: #FAF7F0;
            display: flex; align-items: center; justify-content: center;
            font-family: Georgia, serif;
            padding: 2rem;
            transition: opacity 0.8s ease, visibility 0.8s;
          }
          #boot-loader.hide { opacity: 0; visibility: hidden; pointer-events: none; }
          .boot-wrap { max-width: 900px; width: 100%; text-align: center; }
          .boot-eyebrow {
            font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
            color: #C89B3C; margin-bottom: 1rem; font-family: system-ui, sans-serif;
          }
          .boot-title {
            font-size: clamp(2rem, 7vw, 4.5rem);
            font-weight: 600; line-height: 1.05; margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }
          .boot-title em { font-style: italic; color: #C89B3C; }
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
            border: 1.5px solid rgba(200,155,60,0.35);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 700; color: #C89B3C;
            opacity: 0; animation: bootPop 0.5s ease-out forwards;
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
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .boot-pillars {
            display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
            font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
            color: rgba(250,247,240,0.5); font-family: system-ui, sans-serif;
            margin-bottom: 3rem;
          }
          .boot-pillars span { white-space: nowrap; }
          .boot-progress {
            width: min(300px, 60%); height: 2px; margin: 0 auto;
            background: rgba(250,247,240,0.1); border-radius: 2px; overflow: hidden;
          }
          .boot-bar {
            height: 100%; background: #C89B3C;
            animation: bootBar 2.5s ease-in-out infinite;
          }
          @keyframes bootBar {
            0% { width: 0%; margin-left: 0%; }
            50% { width: 60%; margin-left: 20%; }
            100% { width: 0%; margin-left: 100%; }
          }
          .boot-footer {
            margin-top: 2rem; font-size: 10px; letter-spacing: 0.25em;
            text-transform: uppercase; color: rgba(250,247,240,0.35);
            font-family: system-ui, sans-serif;
          }
          @media (max-width: 640px) {
            .boot-pillars { gap: 0.5rem; font-size: 9px; }
          }
        `}} />
      </head>
      <body>
        {/* Boot loader — removed by inline script as soon as body paints */}
        <div id="boot-loader">
          <div className="boot-wrap">
            <div className="boot-eyebrow">Ibeju-Lekki Local Government</div>
            <h1 className="boot-title">The <em>SHIEELD</em> Agenda</h1>
            <div className="boot-chairman">Hon. Abdullahi Sesan Olowa · Executive Chairman</div>
            <div className="boot-shield">
              <div className="boot-letter">S</div>
              <div className="boot-letter">H</div>
              <div className="boot-letter">I</div>
              <div className="boot-letter">E</div>
              <div className="boot-letter">E</div>
              <div className="boot-letter">L</div>
              <div className="boot-letter">D</div>
            </div>
            <div className="boot-pillars">
              <span>Security</span>
              <span>Health</span>
              <span>Infrastructure</span>
              <span>Education</span>
              <span>Environment</span>
              <span>Local Economy</span>
              <span>Development</span>
            </div>
            <div className="boot-progress"><div className="boot-bar"></div></div>
            <div className="boot-footer">Loading the official website</div>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('load', function() {
            setTimeout(function() {
              var l = document.getElementById('boot-loader');
              if (l) {
                l.classList.add('hide');
                setTimeout(function() { l.remove(); }, 900);
              }
            }, 300);
          });
        `}} />

        {children}
      </body>
    </html>
  );
}
