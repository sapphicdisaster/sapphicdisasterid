// ─────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        name: "SM-T380 Mainline Port",
        status: "ONLINE",
        desc: "Pioneered mainline Linux kernel porting on unsupported Qualcomm MSM8917 (gta2swifi), restoring full Alpine/Xfce functionality (GPU, WiFi, BT, touch, OSK).",
        stats: [
            "TARGET: gta2swifi / MSM8917",
            "KERNEL: mainline edge",
            "STATUS: PoC - fully functional",
        ],
        url: null,
    },
    {
        name: "AotearoaVolte",
        status: "DEPLOYED",
        desc: "Reverse-engineered Qualcomm modem stack and built custom C tooling to enable VoLTE on OnePlus 9R for New Zealand carriers (Spark NZ/Skinny), restoring critical call functionality.",
        stats: [
            "CARRIER: Spark NZ / Skinny",
            "DEVICE: OnePlus 9R (LE2101 lemonades)",
            "METHOD: Qualcomm modem RE + custom C",
        ],
        url: null,
    },
    {
        name: "MikeCenter",
        status: "ONLINE",
        desc: "Developed Rust-based media dashboard integrating CD/vinyl ripping, Navidrome networking, and automated UPnP port-mapping into a high-contrast, touch-friendly UI.",
        stats: [
            "LANG: Rust",
            "STACK: ALSA/cpal, FFmpeg, MusicBrainz, Discogs",
            "PLATFORM: Dedicated Linux media station",
        ],
        url: null,
    },
    {
        name: "qutenote",
        status: "ONLINE",
        desc: "Designed and implemented Qt-based cross-platform note app (desktop + Android) featuring rich text, image management, and an offline-first, ad-free experience.",
        stats: [
            "FRAMEWORK: Qt 6.10+",
            "FEATURES: Rich text, images, themes, local storage",
            "AVAIL: Win / Linux / macOS / Android",
        ],
        url: null,
    },
];

// ─── Status badge colour map ─────────────────────────────────────────────
const STATUS_STYLES = {
    ONLINE: {
        bg: "bg-tertiary-fixed-dim/20",
        text: "text-tertiary",
        border: "border-tertiary",
    },
    COMPILING: {
        bg: "bg-secondary-fixed-dim/20",
        text: "text-secondary",
        border: "border-secondary",
    },
    DEPLOYED: {
        bg: "bg-terminal-pink/20",
        text: "text-terminal-pink",
        border: "border-terminal-pink",
    },
    ARCHIVED: {
        bg: "bg-outline-variant/20",
        text: "text-outline",
        border: "border-outline",
    },
};
const STATUS_DEFAULT = {
    bg: "bg-outline-variant/20",
    text: "text-on-surface-variant",
    border: "border-outline-variant",
};

// ─── Card renderer ───────────────────────────────────────────────────────
function renderCard(project) {
    const style = STATUS_STYLES[project.status] ?? STATUS_DEFAULT;
    const tag = project.url ? "a" : "div";
    const href = project.url ? `href="${project.url}"` : "";
    const ariaRole = project.url ? "" : `role="region" tabindex="0" aria-label="Project: ${project.name}"`;

    const stats = project.stats
        .map((s) => `<span class="text-text-dim" aria-hidden="true">&gt;</span> <span class="text-text-dim">${s}</span>`)
        .join("\n");

    return `
<${tag} ${href} ${ariaRole}
class="border border-secondary-container bg-surface-container/40 p-4
       hover:bg-surface-container/80 hover:border-primary
       focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container/80
       transition-colors cursor-pointer group block">
<div class="flex items-start justify-between gap-2">
  <div class="flex items-center gap-2 mb-2 min-w-0">
    <span class="text-secondary group-hover:text-primary shrink-0" aria-hidden="true">&gt;</span>
    <h4 class="font-headline-lg-mobile text-text-bright tracking-wider
                 card-title transition-all duration-300 truncate m-0 text-base">
      MODULE: ${project.name}
    </h4>
  </div>
  <span class="font-label-ui text-[10px] shrink-0
               ${style.bg} ${style.text} border ${style.border} px-2 py-1"
               aria-label="Status: ${project.status}">
    ${project.status}
  </span>
</div>
<div class="pl-4 border-l border-outline-variant ml-1
            flex flex-col gap-1 text-text-dim text-sm font-body-md mt-2">
  <span><span aria-hidden="true">&gt;</span> DESC: ${project.desc}</span>
  ${stats}
</div>
</${tag}>`;
}
