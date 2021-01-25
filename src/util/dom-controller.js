export function makeButtonByInnerText(innerText) {
  return (
    <button
      onClick={() => {
        this.setState({
          router: innerText,
        });
      }}
    >
      {innerText}
    </button>
  );
}

/* 버튼 이벤트를 어떻게 할지 고민
export function _addClickEventByClassName(className, callback) {
  document.addEventListener("click", (event) => {
    if (event.target.className === className) {
      
    }
  })
}
*/
