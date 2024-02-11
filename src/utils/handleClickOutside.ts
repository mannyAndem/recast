export const handleClickOutside = (
  target: HTMLElement,
  callback: () => void
) => {
  const controller = new AbortController();
  const signal = controller.signal;

  window.addEventListener(
    "click",
    (e) => {
      const eventTarget = e.currentTarget as HTMLElement;

      if (eventTarget.id !== target.id) {
        console.log("okayyyyy");
        callback();
      }
    },

    { signal }
  );

  const unsubscribe = () => {
    controller.abort();
  };

  return unsubscribe;
};
