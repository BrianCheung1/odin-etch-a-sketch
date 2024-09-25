const container = document.querySelector("#container")
const button = document.querySelector("#size")

button.addEventListener("click", () => {
  let size = prompt("Enter number of rows for the grid (Min-1 Max-100)")
  while (size < 0 || size > 100) {
    size = prompt("Please enter number of rows between 1-100")
  }
  container.innerHTML = ""
  createGrid(size)
})

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    for (let j = 0; j < size; j++) {
      const col = document.createElement("div")
      col.classList.add("square")
      row.appendChild(col)
    }
    container.appendChild(row)
  }
}
