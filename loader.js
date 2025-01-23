document.addEventListener("DOMContentLoaded", () => {
  const reinitializeListeners = () => {
    const loadProxiesButton = document.getElementById("loadProxies");
    if (loadProxiesButton) {
      loadProxiesButton.addEventListener("click", loadProxies);
    }

    const mainMenuButton = document.getElementById("mainMenu");
    if (mainMenuButton) {
      mainMenuButton.addEventListener("click", loadMainMenu);
    }
    const ProxyCheckerButton = document.getElementById("loadProxyChecker");
    if (ProxyCheckerButton) {
      ProxyCheckerButton.addEventListener("click", loadProxyChecker);
    }

    const gameSitesButton = document.getElementById("loadGameSites");
    if (gameSitesButton) {
      gameSitesButton.addEventListener("click", loadGameSites);
    }

    const loadCreditsButton = document.getElementById("loadCredits");
    if (loadCreditsButton) {
      loadCreditsButton.addEventListener("click", loadCredits);
    }

    const card1 = document.getElementById("card1");
    if (card1) {
      card1.addEventListener("click", loadGameSites);
    }

    const card2 = document.getElementById("card2");
    if (card2) {
      card2.addEventListener("click", loadShuttleSites);
    }

    const card3 = document.getElementById("card3");
    if (card3) {
      card3.addEventListener("click", loadRammerheadSites);
    }

    const card4 = document.getElementById("card4");
    if (card4) {
      card4.addEventListener("click", loadInterstellarSites);
    }
    const card5 = document.getElementById("card5");
    if (card5) {
      card5.addEventListener("click", loadUtopiaSites);
    }
  };

  const loadProxies = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./proxies/proxies.html")
      .then((response) => {
        if (!response.ok) throw new Error("Proxy file not found, contact Wasd");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();
      })
      .catch((error) => {
        console.error("Error loading Proxies HTML file:", error);
        body.innerHTML =
          "<p>Failed to load Proxies. Please check the console for details.</p>";
      });
  };

  const loadProxyChecker = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Proxy Checker/proxychecker.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading InterstellarSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load InterstellarSites. Please check the console for details.</p>";
      });
  };

  const loadCredits = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Credits/Credits.html")
      .then((response) => {
        if (!response.ok) throw new Error("Proxy file not found, contact Wasd");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();
      })
      .catch((error) => {
        console.error("Error loading Proxies HTML file:", error);
        body.innerHTML =
          "<p>Failed to load Proxies. Please check the console for details.</p>";
      });
  };

  const loadMainMenu = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./home/home.html")
      .then((response) => {
        if (!response.ok) throw new Error("Main Menu file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();
      })
      .catch((error) => {
        console.error("Error loading Main Menu HTML file:", error);
        body.innerHTML =
          "<p>Failed to load Main Menu. Please check the console for details.</p>";
      });
  };

  const loadGameSites = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Links/GameSites.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading GameSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load GameSites. Please check the console for details.</p>";
      });
  };

  const loadInterstellarSites = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Links/InterstellarSites.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading InterstellarSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load InterstellarSites. Please check the console for details.</p>";
      });
  };

  const loadShuttleSites = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Links/ShuttleSites.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading InterstellarSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load InterstellarSites. Please check the console for details.</p>";
      });
  };

  const loadRammerheadSites = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Links/RammerheadSites.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading InterstellarSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load InterstellarSites. Please check the console for details.</p>";
      });
  };
  const loadUtopiaSites = (e) => {
    e.preventDefault();

    const header = document.querySelector("header");
    const body = document.body;
    body.innerHTML = "";

    if (header) body.appendChild(header);

    fetch("./Links/UtopiaSites.html")
      .then((response) => {
        if (!response.ok) throw new Error("GameSites file not found");
        return response.text();
      })
      .then((html) => {
        body.innerHTML += html;

        reinitializeListeners();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {

            newScript.src = script.src;
          } else {

            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error("Error loading InterstellarSites HTML file:", error);
        body.innerHTML =
          "<p>Failed to load InterstellarSites. Please check the console for details.</p>";
      });
  };

  const loadScript = (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => console.log(`${src} loaded successfully.`);
    script.onerror = () => console.error(`Failed to load ${src}`);
    document.body.appendChild(script);
  };

  reinitializeListeners();
});