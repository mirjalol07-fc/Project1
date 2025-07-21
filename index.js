 function tekshir() {
    let a = document.getElementById("ball").value; 
    a = Number(a);

    if (a >= 90) {
      document.querySelector("h2").textContent = "5 ⭐⭐⭐⭐⭐";
    } else if (a >= 70) {
      document.querySelector("h2").textContent = "4 ⭐⭐⭐⭐";
    } else if (a >= 50) {
      document.querySelector("h2").textContent = "3 ⭐⭐⭐";
    } else {
      document.querySelector("h2").textContent = "2 ⭐⭐";
    }
  }
