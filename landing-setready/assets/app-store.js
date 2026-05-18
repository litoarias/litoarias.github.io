(() => {
  const config = window.SETREADY_APPSTORE_CONFIG;
  if (!config) return;

  const fallback = config.fallback || {};
  const labels = config.labels || {};
  const country = ((navigator.language || "en-US").split("-")[1] || "US").toUpperCase();
  const lookupFor = (storeCountry) => "https://itunes.apple.com/lookup?id=" + encodeURIComponent(config.appStoreId) + "&country=" + encodeURIComponent(storeCountry) + "&entity=software";

  const text = (selector, value) => {
    if (value === undefined || value === null || value === "") return;
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = String(value);
    });
  };

  const attr = (selector, name, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((node) => {
      node.setAttribute(name, value);
    });
  };

  const formatSize = (bytes) => {
    const size = Number(bytes);
    if (!Number.isFinite(size) || size <= 0) return null;
    const mb = size / 1024 / 1024;
    return mb >= 100 ? Math.round(mb) + " MB" : mb.toFixed(1) + " MB";
  };

  const formatRating = (rating, count) => {
    const value = Number(rating);
    const total = Number(count);
    if (!Number.isFinite(value) || value <= 0 || !Number.isFinite(total) || total <= 0) return labels.ratingFallback || "New";
    return value.toFixed(1);
  };

  const apply = (data, isLive) => {
    const storeUrl = data.trackViewUrl || fallback.trackViewUrl || config.appStoreUrl;
    const icon = data.artworkUrl512 || data.artworkUrl100 || fallback.artworkUrl512;
    const screenshots = [...(data.screenshotUrls || []), ...(data.ipadScreenshotUrls || []), ...(fallback.screenshotUrls || [])];
    const languages = Array.isArray(data.languageCodesISO2A) && data.languageCodesISO2A.length ? data.languageCodesISO2A.length : (fallback.languageCodesISO2A || []).length;
    const rawMinOS = data.minimumOsVersion || fallback.minimumOsVersion;
    const minOS = /^ios\b/i.test(String(rawMinOS)) ? rawMinOS : "iOS " + rawMinOS + "+";
    const price = data.formattedPrice || fallback.formattedPrice;
    const description = data.description || "";

    text("[data-store='app-name']", data.trackName || fallback.trackName);
    text("[data-store='rating']", formatRating(data.averageUserRating, data.userRatingCount));
    text("[data-store='version']", data.version || fallback.version);
    text("[data-store='price']", price);
    text("[data-store='minimum-os']", minOS);
    text("[data-store='languages']", languages || "9");
    text("[data-store='content-rating']", data.contentAdvisoryRating || fallback.contentAdvisoryRating);
    text("[data-store-source]", isLive ? labels.live : labels.fallback);

    if (description) {
      document.querySelectorAll("[data-store='description']").forEach((node) => {
        if (node.dataset.keepCopy !== "true") node.textContent = description;
      });
    }

    attr("[data-store-link]", "href", storeUrl);
    attr("[data-store='icon']", "src", icon);
    screenshots.slice(0, 4).forEach((src, index) => {
      attr("[data-store-screenshot='" + index + "']", "src", src);
    });

    const size = formatSize(data.fileSizeBytes);
    if (size) text("[data-store='size']", size);
  };

  const fetchMatch = (storeCountry) => fetch(lookupFor(storeCountry), { cache: "no-store" })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("lookup failed")))
    .then((payload) => {
      const match = (payload.results || []).find((item) => String(item.trackId) === String(config.appStoreId) || item.bundleId === config.bundleId);
      if (!match) throw new Error("app not public in " + storeCountry);
      return match;
    });

  fetchMatch(country)
    .catch(() => country === "US" ? Promise.reject(new Error("no public app data")) : fetchMatch("US"))
    .then((match) => apply(match, true))
    .catch(() => apply(fallback, false));
})();