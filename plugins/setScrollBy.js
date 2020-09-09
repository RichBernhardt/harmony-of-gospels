// https://stackoverflow.com/a/57796752
// https://nuxtjs.org/guides/directory-structure/plugins
export default ({ app }, inject) => {
  inject(
    'setScrollBy', 
    (heightDiff) => window.scrollBy(0,heightDiff)
  )
}
