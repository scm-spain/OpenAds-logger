export const isDebugContext = ({window}) =>
  (window && window.document.location.search.indexOf('openads_debug') !== -1) ||
  false
