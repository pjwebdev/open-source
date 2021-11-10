var galleryPlaces = document.querySelectorAll('.blog-post-text h6');
galleryPlaces.forEach(function(el) {
var match = el.textContent.match(/[a-zA-Z-]+/g);
if (match.length) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById(match[0]));
    el.textContent = '';
    el.appendChild(fragment);
}
})