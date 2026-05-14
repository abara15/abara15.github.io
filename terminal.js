(function() {
  var body = document.getElementById("terminal-body");
  var overlay = document.getElementById("terminal-overlay");

  var lines = [
    { type: "cmd",  prompt: "anthony@portfolio:~$", text: " ./launch-portfolio.sh" },
    { type: "out",  text: "Initialising environment...",              color: "" },
    { type: "out",  text: "Loading modules: [about] [exp] [skill] [proj] [edu] [cert]",  color: "" },
    { type: "out",  text: "✔ Identity verified",                  color: "green" },
    { type: "out",  text: "✔ Credentials authenticated",          color: "green" },
    { type: "out",  text: "✔ Infrastructure provisioned",         color: "green" },
    { type: "progress" },
    { type: "out",  text: "✔ Deployment complete",                color: "green" },
    { type: "out",  text: "→ Launching portfolio for Anthony Barakat...", color: "cyan" }
  ];

  function delay(ms) { return new Promise(function(r) { setTimeout(r, ms); }); }

  function animateProgress(done) {
    var pct = 0;
    var bar = document.getElementById("pbar");
    var pctEl = document.getElementById("ppct");
    var iv = setInterval(function() {
      pct += Math.floor(Math.random() * 6) + 2;
      if (pct >= 100) pct = 100;
      bar.style.width = pct + "%";
      pctEl.textContent = pct + "%";
      if (pct >= 100) { clearInterval(iv); setTimeout(done, 200); }
    }, 55);
  }

  function appendLine(line) {
    return new Promise(function(resolve) {
      if (line.type === "cmd") {
        var el = document.createElement("div");
        el.className = "terminal-line";
        el.innerHTML = "<span class=\"t-prompt\">" + line.prompt + "</span><span class=\"t-cmd\">" + line.text + "</span>";
        body.appendChild(el);
        requestAnimationFrame(function() { el.classList.add("visible"); resolve(); });

      } else if (line.type === "progress") {
        var wrap = document.createElement("div");
        wrap.className = "progress-wrap";
        wrap.innerHTML = "<div class=\"progress-label\">Deploying assets...</div><div class=\"progress-track\"><div class=\"progress-bar-outer\"><div class=\"progress-bar-inner\" id=\"pbar\"></div></div><div class=\"progress-pct\" id=\"ppct\">0%</div></div>";
        body.appendChild(wrap);
        requestAnimationFrame(function() { wrap.classList.add("visible"); animateProgress(resolve); });

      } else {
        var el = document.createElement("div");
        el.className = "terminal-line";
        el.innerHTML = "<span class=\"t-out " + (line.color || "") + "\">" + line.text + "</span>";
        body.appendChild(el);
        requestAnimationFrame(function() { el.classList.add("visible"); resolve(); });
      }
    });
  }

  async function run() {
    await delay(300);
    for (var i = 0; i < lines.length; i++) {
      await appendLine(lines[i]);
      body.scrollTop = body.scrollHeight;
      if (lines[i].type === "cmd") await delay(420);
      else if (lines[i].type === "progress") await delay(100);
      else await delay(270 + Math.random() * 180);
    }
    await delay(500);
    var cursor = document.createElement("span");
    cursor.className = "t-cursor";
    body.appendChild(cursor);
    await delay(950);
    overlay.classList.add("hidden");
  }

  run();
})();
