export function makeRouteButton(innerText, className) {
  return (
    <button className={className} data-name={innerText}>
      {innerText}
    </button>
  );
}

export function addClickEventByClassName(className, callback) {
  const buttons = document.getElementsByClassName(className);
  Array.prototype.forEach.call(buttons, (button) => {
    button.addEventListener("click", callback);
  });
}

export function addClickEventById(id, callback) {
  const button = document.getElementById(id);
  button.addEventListener("click", callback);
}
