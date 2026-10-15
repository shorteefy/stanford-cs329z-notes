// Tap a dotted term to open its definition below the paragraph.
// <button class="def" data-w="w-token">tokens</button> reads glossary.js;
// <button class="def" data-d="...">TA</button> carries its own text.
(function () {
  var G = window.GLOSSARY || {};
  var here = location.pathname.split("/").pop();

  function close(btn) {
    var box = document.getElementById(btn.getAttribute("aria-controls"));
    if (box) box.remove();
    btn.setAttribute("aria-expanded", "false");
  }

  function open(btn, i) {
    var block = btn.closest("p, li, dd") || btn.parentNode;
    // one definition per paragraph
    block.querySelectorAll('button.def[aria-expanded="true"]').forEach(close);
    var e = G[btn.dataset.w], box = document.createElement("div");
    box.className = "defbox";
    box.id = "def-" + i;
    var html = "<b>" + (e ? e.t : btn.textContent) + "</b> " + (e ? e.d : btn.dataset.d);
    if (e && e.h.split("#")[0] !== here) {
      var full = document.documentElement.lang === "en" ? "Full: lesson " : "पूरा: lesson ";
      html += ' <a href="' + e.h + '">' + full + Number(e.h.slice(0, 2)) + "</a>";
    }
    box.innerHTML = html;
    block.after(box);
    btn.setAttribute("aria-controls", box.id);
    btn.setAttribute("aria-expanded", "true");
  }

  document.querySelectorAll("button.def").forEach(function (btn, i) {
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-expanded") === "true") close(btn); else open(btn, i);
    });
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") document.querySelectorAll('button.def[aria-expanded="true"]').forEach(close);
  });
})();
