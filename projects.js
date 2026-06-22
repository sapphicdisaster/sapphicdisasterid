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
        url: "https://github.com/sapphicdisaster/t380-linux/",
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
        url: "https://github.com/sapphicdisaster/qutenote",
    },
    {
        name: "Ghast",
        status: "IN_DEV",
        desc: "A modular, performant Rust MIDI Tracker and Hardware Controller for Linux. Features a high-precision threaded MIDI engine, real-time internal DSP synthesis, and deep hardware integration for the Novation Launchpad.",
        stats: [
            "LANG: Rust",
            "AUDIO: cpal / ALSA / DSP",
            "HW: Novation Launchpad / Akai",
            "UI: egui TUI",
        ],
        url: null,
    },
    {
        name: "Gelatin",
        status: "COMPILING",
        desc: "A lightweight, modular Rust game engine inspired by MechWarrior and Titanfall. Built from the ground up for fluid movement, modular components, and rich environmental interaction, featuring seamless on-foot to mech gameplay and a highly performant wgpu rendering pipeline.",
        stats: [
            "LANG: Rust",
            "PHYSICS: Rapier3D",
            "GRAPHICS: wgpu / winit",
            "FOCUS: Fluid Movement / Interaction",
        ],
        url: null,
    },
];

// ─── Status badge class map ──────────────────────────────────────────────
const STATUS_STYLES = {
    ONLINE: "status_online",
    COMPILING: "status_compiling",
    DEPLOYED: "status_deployed",
    ARCHIVED: "status_archived",
    IN_DEV: "status_indev",
};
const STATUS_DEFAULT = "status_default";

// ─── Card renderer ───────────────────────────────────────────────────────
function renderCard(project) {
    const statusClass = STATUS_STYLES[project.status] ?? STATUS_DEFAULT;
    const tag = project.url ? "a" : "div";
    const href = project.url ? `href="${project.url}"` : "";
    const ariaRole = project.url ? "" : `role="region" tabindex="0" aria-label="Project: ${project.name}"`;

    const stats = project.stats
        .map((s) => `<div class="card_stat_line"><span class="bullet_sym" aria-hidden="true">&gt;</span> <span>${s}</span></div>`)
        .join("\n");

    return `
<${tag} ${href} ${ariaRole} class="project_card">
<div class="card_header">
  <div class="card_title_row">
    <span class="card_title_arrow" aria-hidden="true">&gt;</span>
    <h4 class="card_title">
      MODULE: ${project.name}
    </h4>
  </div>
  <span class="status_badge ${statusClass}" aria-label="Status: ${project.status}">
    ${project.status}
  </span>
</div>
<div class="card_details">
  <div class="card_stat_line"><span class="bullet_sym" aria-hidden="true">&gt;</span> <span>DESC: ${project.desc}</span></div>
  ${stats}
</div>
</${tag}>`;
}
