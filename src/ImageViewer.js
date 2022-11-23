import { isObject } from "./validation.js";

export default function ImageViewer({ $target, onClose }) {
  const $imageViewer = document.createElement("div");
  $imageViewer.className = "ImageViewer Modal";
  $target.appendChild($imageViewer);

  this.state = {
    selectedImageUrl: null,
  };

  this.setState = (nextState) => {
    if (
      isObject(nextState) &&
      this.state.selectedImageUrl !== nextState.selectedImageUrl
    ) {
      console.log("ImageViewer >>>>", nextState);
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    $imageViewer.style.display = this.state.selectedImageUrl ? "block" : "none";

    $imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageUrl}" />
      </div>
    `;
  };
  this.render();

  window.addEventListener("keyup", (e) => {
    //esc누른 경우 onClose호출한다.
    if (e.key === "Escape" || e.key === "Backspace") {
      onClose();
    }
  });

  $imageViewer.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
}
