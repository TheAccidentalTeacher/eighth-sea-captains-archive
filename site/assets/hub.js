(function () {
  var list = document.getElementById("module-cards");
  (window.SITE_MODULES || []).forEach(function (m, i) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.href = m.href;
    link.innerHTML = '<span class="module-no">0' + (i + 1) + '</span><span><h3>' + m.title + '</h3><p>' + m.blurb + '</p><span class="tag core">' + m.status + '</span></span><span class="arrow" aria-hidden="true">→</span>';
    item.appendChild(link);
    list.appendChild(item);
  });
})();
