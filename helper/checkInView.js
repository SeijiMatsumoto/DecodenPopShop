export const checkInView = (selector, setIsInView) => {
  const el = document.querySelector(selector);
  const rect = el.getBoundingClientRect();
  const posFromBottom = window.innerHeight - rect.y;
  if (posFromBottom > 200) {
    setIsInView(true);
  }
};
