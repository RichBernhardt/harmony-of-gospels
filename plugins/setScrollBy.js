// https://stackoverflow.com/a/57796752
// https://nuxtjs.org/guides/directory-structure/plugins

export default ({ app }, inject) => {
  inject("setScrollBy", (scrollDiff) =>
    window.scrollBy({
      left: 0,
      top: scrollDiff,
      behavior: "smooth",
    })
  );
};
