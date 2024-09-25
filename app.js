const container = document.querySelector("#container")
const button = document.querySelector("#size")
const squares = document.querySelectorAll("squares")

button.addEventListener("click", () => {
  let size = prompt("Enter number of rows for the grid (Min-1 Max-100)")
  while (size < 0 || size > 100) {
    size = prompt("Please enter number of rows between 1-100")
  }
  container.innerHTML = ""
  createGrid(size)
})

const gridSize = 600

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    for (let j = 0; j < size; j++) {
      const col = document.createElement("div")
      const squareSize = 600 / size
      col.classList.add("square")
      col.style.width = `${squareSize}px`
      col.style.height = `${squareSize}px`
      col.addEventListener("mouseover", () => {
        if (!col.style.backgroundColor) {
          col.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16)
        }
        if (!col.style.opacity) {
          col.style.opacity = 0.1
        } else {
          console.log("has opacity")
          if (col.style.opacity < 1) {
            col.style.opacity = parseFloat(col.style.opacity) + 0.1
          }
        }
      })

      row.appendChild(col)
    }
    container.appendChild(row)
  }
}
