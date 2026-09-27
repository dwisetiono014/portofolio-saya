/* ==========================================
   PORTFOLIO — main.js
   Semua interaksi: tema, navigasi, animasi,
   filter proyek, modal, dan form kontak.
   ========================================== */

(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Icon SVG (bisa dipakai ulang) ---------- */
  const ICONS = {
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z"/>',
    instagram: '<path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.98c-3.14 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.81-.31 1.71-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.31 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.81.27 1.71.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.81.31-1.71.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.31-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.81-.27-1.71-.31C15.5 4.19 15.14 4.18 12 4.18Zm0 3.2a4.62 4.62 0 1 1 0 9.24 4.62 4.62 0 0 1 0-9.24Zm0 1.98a2.64 2.64 0 1 0 0 5.28 2.64 2.64 0 0 0 0-5.28Zm5.2-3.2a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"/>',
    x: '<path d="M17.53 3h3.1l-6.77 7.74L21.7 21h-6.2l-4.86-6.35L5.1 21H2l7.24-8.28L2.5 3h6.36l4.39 5.8L17.53 3Zm-1.09 16.1h1.72L7.63 4.8H5.79l10.65 14.3Z"/>',
    mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 6.5v.4L12 12.6l7.5-5.7v-.4L12 12.2Z"/>',
    phone: '<path d="M6.6 3h3.1l1.6 4-2 1.4a12 12 0 0 0 5.3 5.3l1.4-2 4 1.6v3.1a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"/>',
    pin: '<path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z"/>',
    up: '<path d="m12 6 7 7-1.4 1.4L12 8.8 6.4 14.4 5 13l7-7Z"/>',
    send: '<path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2v6.5Z"/>',
    code: '<path d="m8.7 16.6-4.3-4.3 4.3-4.3L7.3 6.6 1.6 12l5.7 5.4 1.4-1.4Zm6.6 0 4.3-4.3-4.3-4.3 1.4-1.4L22.4 12l-5.7 5.4-1.4-1.4Z"/>'
  };

  function icon(name, size) {
    const s = size || 18;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s +
      '" fill="currentColor" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  const escapeHtml = (str) =>
    String(str == null ? "" : str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ==========================================
     1. THEME (dark / light)
     ========================================== */
  const Theme = {
    key: "portfolio-theme",
    get() {
      return localStorage.getItem(this.key) ||
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    },
    set(mode) {
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem(this.key, mode);
      const btn = $(".theme-toggle");
      if (btn) btn.setAttribute("aria-label", mode === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap");
    },
    init() {
      this.set(this.get());
      const btn = $(".theme-toggle");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        this.set(next);
      });
    }
  };

  /* ==========================================
     2. HEADER + MOBILE NAV
     ========================================== */
  function initHeader() {
    const header = $(".header");
    const nav = $(".nav");
    const burger = $(".burger");

    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (burger && nav) {
      burger.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", String(open));
      });
      nav.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("open")) {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Tandai link nav yang sedang aktif
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    $$(".nav a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
    });
  }

  /* ==========================================
     3. REVEAL ON SCROLL
     ========================================== */
  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    items.forEach((el) => io.observe(el));
  }

  /* ==========================================
     4. HERO: TYPING EFFECT
     ========================================== */
  function initTyping() {
    const el = $("[data-typing]");
    if (!el || !D.typing) return;
    const words = D.typing;
    let w = 0, i = 0, deleting = false;

    const tick = () => {
      const word = words[w];
      i = deleting ? i - 1 : i + 1;
      el.textContent = word.slice(0, i);
      let wait = deleting ? 45 : 85;
      if (!deleting && i === word.length) {
        deleting = true;
        wait = 1600;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        wait = 400;
      }
      setTimeout(tick, wait);
    };
    setTimeout(tick, 500);
  }

  /* ==========================================
     5. COUNTER ANGKA
     ========================================== */
  function initCounters() {
    const nums = $$("[data-count]");
    if (!nums.length) return;

    const run = (el) => {
      const target = parseFloat(el.dataset.count) || 0;
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (el.dataset.suffix || "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) return nums.forEach(run);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach((el) => io.observe(el));
  }

  /* ==========================================
     6. SKILL BAR
     ========================================== */
  function initBars() {
    const bars = $$("[data-level]");
    if (!bars.length) return;
    const fill = (el) => {
      const wrap = el.closest(".bar") || el.parentElement;
      const bar = wrap.querySelector("i") || wrap;
      bar.style.width = el.dataset.level + "%";
    };
    if (!("IntersectionObserver" in window)) return bars.forEach(fill);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { fill(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach((el) => io.observe(el));
  }

  /* ==========================================
     7. KARTU PROYEK + FILTER + MODAL
     ========================================== */
  function projectCard(p, delay) {
    return (
      '<article class="card project reveal" data-category="' + escapeHtml(p.category) + '"' +
      (delay != null ? ' data-delay="' + delay + '"' : "") +
      ' data-id="' + p.id + '" tabindex="0" role="button" aria-label="Detail proyek ' + escapeHtml(p.title) + '">' +
        '<div class="project-thumb">' +
          '<span class="tag tag-float">' + escapeHtml(p.category) + '</span>' +
          escapeHtml(p.icon || "◆") +
        '</div>' +
        '<div class="project-body">' +
          '<div style="display:flex;align-items:center;gap:.6rem">' +
            '<h3>' + escapeHtml(p.title) + '</h3>' +
            '<span class="mono muted" style="font-size:.75rem">' + escapeHtml(p.year) + '</span>' +
          '</div>' +
          '<p>' + escapeHtml(p.desc) + '</p>' +
          '<div class="tags">' + p.tags.map((t) => '<span class="tag">' + escapeHtml(t) + "</span>").join("") + '</div>' +
        '</div>' +
      "</article>"
    );
  }

  function initProjects() {
    const grid = $("#projectGrid");
    if (!grid || !D.projects) return;

    const only = grid.dataset.featured === "true";
    const list = only ? D.projects.filter((p) => p.featured) : D.projects;
    grid.innerHTML = list.map((p, i) => projectCard(p, (i % 3) + 1)).join("");

    // Filter kategori
    const bar = $("#filters");
    if (bar && !only) {
      const cats = D.categories || ["Semua"];
      bar.innerHTML = cats.map((c, i) =>
        '<button type="button" class="filter' + (i === 0 ? " active" : "") + '" data-cat="' + escapeHtml(c) + '">' + escapeHtml(c) + "</button>"
      ).join("");

      bar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter");
        if (!btn) return;
        $$(".filter", bar).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.dataset.cat);
      });
    }

    // Modal detail
    const modal = $("#projectModal");
    if (modal) {
      grid.addEventListener("click", (e) => {
        const card = e.target.closest(".project");
        if (card) openModal(Number(card.dataset.id));
      });
      grid.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const card = e.target.closest(".project");
        if (card) { e.preventDefault(); openModal(Number(card.dataset.id)); }
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest(".modal-close")) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
      });
    }

    initReveal();

    function applyFilter(cat) {
      let shown = 0;
      $$(".project", grid).forEach((card) => {
        const show = cat === "Semua" || card.dataset.category === cat;
        card.hidden = !show;
        if (show) shown++;
      });
      let empty = $(".project-empty", grid.parentElement);
      if (shown === 0) {
        if (!empty) {
          empty = document.createElement("p");
          empty.className = "project-empty";
          grid.parentElement.appendChild(empty);
        }
        empty.textContent = "Belum ada proyek pada kategori ini.";
      } else if (empty) {
        empty.remove();
      }
    }

    function openModal(id) {
      const p = D.projects.find((x) => x.id === id);
      if (!p) return;
      $("#modalIcon").textContent = p.icon || "◆";
      $("#modalTitle").textContent = p.title;
      $("#modalDesc").textContent = p.longDesc || p.desc;
      $("#modalTags").innerHTML = p.tags.map((t) => '<span class="tag">' + escapeHtml(t) + "</span>").join("");
      $("#modalHigh").innerHTML = (p.highlights || [])
        .map((h) => "<li>" + escapeHtml(h) + "</li>")
        .join("");
      $("#modalFacts").innerHTML =
        [["Kategori", p.category], ["Tahun", p.year], ["Peran", p.role], ["Klien", p.client], ["Durasi", p.duration]]
          .filter((f) => f[1])
          .map((f) => "<div><b>" + escapeHtml(f[0]) + "</b><br><span>" + escapeHtml(f[1]) + "</span></div>")
          .join("");
      const links = $("#modalLinks");
      links.innerHTML =
        (p.demo ? '<a class="btn btn-sm btn-primary" href="' + escapeHtml(p.demo) + '" target="_blank" rel="noopener">Live Demo</a>' : "") +
        (p.repo ? '<a class="btn btn-sm" href="' + escapeHtml(p.repo) + '" target="_blank" rel="noopener">Kode Sumber</a>' : "");
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      const close = modal.querySelector(".modal-close");
      if (close) close.focus();
    }

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  /* ==========================================
     8. RENDER DARI DATA (konten dinamis)
     ========================================== */
  function fillText(sel, value) {
    $$(sel).forEach((el) => { if (value) el.textContent = value; });
  }

  function initDynamicContent() {
    if (!D) return;

    fillText("[data-name]", D.name);
    fillText("[data-role]", D.role);
    fillText("[data-tagline]", D.tagline);
    fillText("[data-email]", D.email);
    fillText("[data-phone]", D.phone);
    fillText("[data-location]", D.location);
    fillText("[data-available]", D.available);

    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

    // Inisial avatar
    $$("[data-initials]").forEach((el) => {
      el.textContent = D.initials || (D.shortName || "K").slice(0, 2).toUpperCase();
    });

    // Statistik
    const statsEl = $("[data-stats]");
    if (statsEl) {
      statsEl.innerHTML = D.stats.map((s, i) =>
        '<div class="stat reveal" data-delay="' + (i + 1) + '"><b data-count="' + s.value + '" data-suffix="' + escapeHtml(s.suffix || "") + '">0</b><span>' + escapeHtml(s.label) + "</span></div>"
      ).join("");
    }

    // Skill bar
    const skillsEl = $("[data-skills]");
    if (skillsEl) {
      skillsEl.innerHTML = D.skills.map((s, i) =>
        '<div class="skill reveal" data-delay="' + ((i % 4) + 1) + '">' +
          '<div class="skill-top"><span>' + escapeHtml(s.name) + "</span><b>" + s.level + "%</b></div>" +
          '<div class="bar"><i data-level="' + s.level + '"></i></div>' +
        "</div>"
      ).join("");
    }

    // Tools
    const toolsEl = $("[data-tools]");
    if (toolsEl) {
      toolsEl.innerHTML = D.tools.map((t, i) =>
        '<div class="tool reveal" data-delay="' + ((i % 6) + 1) + '"><i></i>' + escapeHtml(t) + "</div>"
      ).join("");
    }

    // Timeline
    const tlEl = $("[data-timeline]");
    if (tlEl) {
      tlEl.innerHTML = D.timeline.map((t, i) =>
        '<div class="tl-item reveal" data-delay="' + ((i % 4) + 1) + '">' +
          '<div class="tl-date">' + escapeHtml(t.year) + "</div>" +
          "<h3>" + escapeHtml(t.title) + "</h3>" +
          "<p>" + escapeHtml(t.desc) + "</p>" +
        "</div>"
      ).join("");
    }

    // Sertifikasi
    const certEl = $("[data-certifications]");
    if (certEl) {
      certEl.innerHTML = D.certifications.map((c, i) =>
        '<div class="card reveal" data-delay="' + ((i % 3) + 1) + '">' +
          '<span class="tag">' + escapeHtml(c.year) + "</span>" +
          "<h3 style='margin:.7rem 0 .2rem'>" + escapeHtml(c.title) + "</h3>" +
          '<p class="muted" style="font-size:.9rem">' + escapeHtml(c.issuer) + "</p>" +
        "</div>"
      ).join("");
    }

    // Link sosial
    $$("[data-socials]").forEach((box) => {
      box.innerHTML = D.socials.map((s) =>
        '<a class="social" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener" aria-label="' + escapeHtml(s.name) + '" title="' + escapeHtml(s.name) + '">' + icon(s.icon) + "</a>"
      ).join("");
    });

    // Marquee tools
    const mq = $("[data-marquee]");
    if (mq) {
      const line = D.tools.map((t) => "<b>" + escapeHtml(t) + "</b>").join("");
      mq.innerHTML = '<div class="marquee-track">' + line + line + "</div>";
    }
  }

  /* ==========================================
     9. FORM KONTAK + VALIDASI
     ========================================== */
  function initForm() {
    const form = $("#contactForm");
    if (!form) return;
    const note = $("#formNote");

    const rules = {
      name: (v) => (v.trim().length >= 3 ? "" : "Nama minimal 3 karakter."),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Format email belum benar."),
      subject: (v) => (v.trim().length >= 3 ? "" : "Subjek minimal 3 karakter."),
      message: (v) => (v.trim().length >= 15 ? "" : "Pesan minimal 15 karakter.")
    };

    const check = (input) => {
      const rule = rules[input.name];
      if (!rule) return true;
      const msg = rule(input.value);
      const field = input.closest(".field");
      const err = field ? field.querySelector(".err") : null;
      if (field) field.classList.toggle("invalid", !!msg);
      if (err) err.textContent = msg;
      return !msg;
    };

    Object.keys(rules).forEach((name) => {
      const input = form.elements[name];
      if (!input) return;
      input.addEventListener("blur", () => check(input));
      input.addEventListener("input", () => {
        if (input.closest(".field").classList.contains("invalid")) check(input);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valid = Object.keys(rules).map((n) => check(form.elements[n])).every(Boolean);
      const firstBad = form.querySelector(".field.invalid input, .field.invalid textarea");

      if (!valid) {
        showNote(note, "err", "Form belum lengkap. Periksa kembali isian yang ditandai merah.");
        if (firstBad) firstBad.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const label = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.textContent = "Mengirim..."; }

      // Ganti bagian ini dengan alamat email kamu (mis. EmailJS / Formspree)
      setTimeout(() => {
        if (btn) { btn.disabled = false; btn.innerHTML = label; }
        form.reset();
        showNote(note, "ok", "Pesan terkirim! Terima kasih sudah menghubungi saya.");
      }, 900);
    });
  }

  function showNote(note, type, text) {
    if (!note) return;
    note.className = "form-note show " + type;
    note.textContent = text;
  }

  /* ==========================================
     10. EFEK KURSOR + BACK TO TOP
     ========================================== */
  function initExtras() {
    // Back to top
    const top = $(".to-top");
    if (top) {
      top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      window.addEventListener("scroll", () => {
        top.classList.toggle("show", window.scrollY > 500);
      }, { passive: true });
    }

    // Cahaya mengikuti kursor pada kartu
    if (window.matchMedia("(hover: hover)").matches) {
      document.addEventListener("pointermove", (e) => {
        const card = e.target.closest(".card");
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      }, { passive: true });
    }
  }

  /* ==========================================
     BOOT
     ========================================== */
  function boot() {
    Theme.init();
    initDynamicContent();
    initHeader();
    initTyping();
    initCounters();
    initBars();
    initProjects();
    initForm();
    initReveal();
    initExtras();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
