let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");

let turno = true;
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turno) {
    
      box.innerText = "o"; 
      turno = false;
    } else {
      box.innerText = "x"; // x plays
      turno = true;
    }
    box.disabled = true;

    winpattern.forEach((pattern) => {
      console.log(pattern);
      const [a, b, c] = pattern;
      
      if (
        document.getElementById(`${a}`).innerText &&
        document.getElementById(`${b}`).innerText &&
        document.getElementById(`${a}`).innerText
      ) {
        if (
          document.getElementById(`${a}`).innerText ===
            document.getElementById(`${b}`).innerText &&
          document.getElementById(`${a}`).innerText ===
            document.getElementById(`${c}`).innerText
        ) {
          alert("won");
        }
      }
    });
  });
});

resetbtn.addEventListener("click", () => {
    boxes.forEach(b=>{
        b.innerText = "";
        if(b.disabled){
            b.disabled = false;
        }
    })
});
