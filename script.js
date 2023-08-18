const gridContainer = document.getElementById("gridContainer");
    const resetButton = document.getElementById("resetButton");
    let isDrawing = false;

    function createGrid(numSquares) {
      gridContainer.innerHTML = "";
      gridContainer.style.gridTemplateColumns = `repeat(${numSquares}, 20px)`;
      gridContainer.style.gridTemplateRows = `repeat(${numSquares}, 20px)`;

      for (let i = 0; i < numSquares * numSquares; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mousedown", () => {
          isDrawing = true;
          cell.style.backgroundColor = getRandomColor();
        });
        cell.addEventListener("mousemove", () => {
          if (isDrawing) {
            cell.style.backgroundColor = getRandomColor();
          }
        });
        cell.addEventListener("mouseup", () => {
          isDrawing = false;
        });
        gridContainer.appendChild(cell);
      }
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    resetButton.addEventListener("click", () => {
      const numSquares = parseInt(prompt("Enter the number of squares per side:", 16));
      if (!isNaN(numSquares)) {
        createGrid(numSquares);
      }
    });

    // Initialize with default grid
    createGrid(16);