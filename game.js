let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-days")
let count = 0

console.log(saveEl)

function increment() {
  count += +1
  countEl.innerHTML = count
}

// console.log(count)

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0

  console.log(count)
}

