(() => {
  "use strict";

  const LANG_KEY = "elaraby.lang";
  const THEME_KEY = "elaraby.theme";
  const THEMES = ["system", "light", "dark"];

  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* storage unavailable; preference not persisted */ }
    },
  };

  const byId = (id) => document.getElementById(id);

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const externalLink = (href, className, text) => {
    const a = el("a", className, text);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  };

  const renderList = (container, items, renderItem) => {
    container.replaceChildren(...items.map(renderItem));
  };

  const renderExperience = (item) => {
    const li = el("li", "timeline-item");
    li.append(
      el("span", "period", item.period),
      el("h3", "role", item.role),
      el("p", "company", item.company),
      el("p", "summary", item.summary),
    );
    return li;
  };

  const renderTile = (item) => {
    const card = item.url ? externalLink(item.url, "tile") : el("div", "tile");
    card.append(el("span", "tile-tag", item.tag), el("h3", "", item.name), el("p", "", item.description));
    return card;
  };

  const renderStat = (item) => {
    const stat = el("div", "stat");
    stat.append(el("strong", "stat-value", item.value), el("span", "stat-label", item.label));
    return stat;
  };

  const renderButton = ({ label, href, style, external }) => {
    const button = external ? externalLink(href, `btn btn-${style}`, label) : el("a", `btn btn-${style}`, label);
    if (!external) button.href = href;
    return button;
  };

  const renderNav = (nav) => {
    renderList(byId("nav"), nav, ({ id, label }) => {
      const a = el("a", "", label);
      a.href = `#${id}`;
      return a;
    });
  };

  const renderThemeOptions = (labels, current) => {
    renderList(byId("themeSelect"), THEMES, (theme) => {
      const option = el("option", "", labels[theme]);
      option.value = theme;
      option.selected = theme === current;
      return option;
    });
  };

  const fillTextSlots = (copy) => {
    document.querySelectorAll("[data-text]").forEach((node) => {
      node.textContent = copy[node.dataset.text] ?? "";
    });
  };

  const renderLanguage = (lang) => {
    const copy = SITE_CONTENT[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = copy.pageTitle;

    fillTextSlots(copy);
    renderNav(copy.nav);
    renderThemeOptions(copy.themeLabels, currentTheme());

    byId("langToggle").textContent = copy.switchLabel;
    renderList(byId("bio"), copy.bio, (paragraph) => el("p", "", paragraph));

    renderList(byId("actions"), copy.buttons, renderButton);
    byId("btnContact").textContent = copy.contactButton;

    renderList(byId("focusList"), copy.focus, renderTile);
    renderList(byId("experienceList"), copy.experience, renderExperience);
    renderList(byId("projectsList"), copy.projects, renderTile);
    renderList(byId("statsList"), copy.stats, renderStat);
    renderList(byId("highlightsList"), copy.highlights, renderTile);
  };

  const renderStatic = () => {
    byId("handle").textContent = SITE_CONTENT.handle;
    byId("photo").src = SITE_CONTENT.photo;
    byId("btnContact").href = SITE_LINKS.email;
    renderList(byId("skillsList"), SITE_CONTENT.skills, (skill) => el("li", "chip", skill));
    byId("year").textContent = String(new Date().getFullYear());
  };

  const currentLang = () => (storage.get(LANG_KEY) === "ar" ? "ar" : "en");
  const currentTheme = () => {
    const saved = storage.get(THEME_KEY);
    return THEMES.includes(saved) ? saved : "system";
  };

  const applyTheme = (theme) => {
    if (theme === "system") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = theme;
    }
  };

  const init = () => {
    let lang = currentLang();
    renderStatic();
    applyTheme(currentTheme());
    renderLanguage(lang);

    byId("langToggle").addEventListener("click", () => {
      lang = lang === "en" ? "ar" : "en";
      storage.set(LANG_KEY, lang);
      renderLanguage(lang);
    });

    byId("themeSelect").addEventListener("change", (event) => {
      const theme = THEMES.includes(event.target.value) ? event.target.value : "system";
      storage.set(THEME_KEY, theme);
      applyTheme(theme);
    });
  };

  init();
})();
