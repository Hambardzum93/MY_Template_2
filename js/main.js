function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    // x.style.position = "fixed";
    // x.style.zIndex = "100";
  }
}
	
let m1 = document.getElementById("menuVertical");
let m2 = document.getElementById("menuVerticalTwo");
let m3 = document.getElementById("menuVerticalTree");
	function homeFunction(){
		m1.style.display = "none";
		m2.style.display = "block";
	}
	function homeBackFunction(){
		m2.style.display = "none";
		m3.style.display = "none";
		m1.style.display = "block";
	}
	function menuFunction(){
		m1.style.display = "none";
		m3.style.display = "block";
	}