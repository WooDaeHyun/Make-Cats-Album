export default function Nodes({ $target, initialState, onClick, onPrevClick }) {
  const $nodes = document.createElement("div");
  $target.appendChild($nodes);
  $nodes.classList.add("Nodes");

  if (isObject(initialState)) {
    this.state = initialState;
  }

  this.setState = (nextState) => {
    const thisStateNodes = [...this.state.nodes];
    const nextStateNodes = [...nextState.nodes];

    if (
      isObject(nextState) &&
      JSON.stringify(thisStateNodes) !== JSON.stringify(nextStateNodes)
    ) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    $nodes.innerHTML = `
      ${
        isRoot
          ? ""
          : `
        <div class="Node">
          <img src="https://woodaehyun/images/prev.png">
        </div>  
      `
      }
      ${nodes
        .map(
          (node) => `
          <div class="Node" data-id="${node.id}">
            <img src="${
              node.type === "DIRECTORY"
                ? "https://woodaehyun/images/directory.png"
                : "https://woodaehyun/images/file.png"
            }">
            ${node.name}
          </div>
        `
        )
        .join("")}
      `;
  };

  this.render();

  $nodes.addEventListener("click", (e) => {
    const $node = e.target.closest(".Node");

    const { id } = $node.dataset;
    console.log(id);
    //id가 없는 경우는??
    if (!id) {
      //뒤로가기 누른 거 처리
    }

    const node = this.state.nodes.find((node) => node.id === id);

    if (node) {
      onClick(node);
    } else {
      onPrevClick();
    }
  });
}
