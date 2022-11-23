import { isArray } from "./validation.js";

export default function Breadcrumb({ $target, initialState, onClick }) {
  const $breadcrumb = document.createElement("nav");
  $breadcrumb.className = "Breadcrumb";
  $target.appendChild($breadcrumb);

  if (isArray(initialState)) {
    this.state = initialState;
  }

  this.setState = (nextState) => {
    if (isArray(nextState) && this.state !== nextState) {
      console.log("Breadcrumb >>>>", nextState);
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    $breadcrumb.innerHTML = `
      <div class="Breadcrumb_item">Root</div>
      ${this.state
        .map(
          ({ id, name }) => `
        <div class="Breadcrumb_item" data-id="${id}">${name}</div>
      `
        )
        .join("")}
    `;
  };

  this.render();

  $breadcrumb.addEventListener("click", (e) => {
    const $breadcrumbItem = e.target.closest(".Breadcrumb_item");
    const { id } = $breadcrumbItem.dataset;
    onClick(id);
  });
}
