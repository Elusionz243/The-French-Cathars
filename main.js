document.getElementById("who").addEventListener("click", fullscreenWho);
document.getElementById("what").addEventListener("click", fullscreenWhat);
document.getElementById("why").addEventListener("click", fullscreenWhy);
document
  .getElementById("learn")
  .addEventListener("click", fullscreenLearnMore);
document.getElementById("cathar-cross").addEventListener("click", openVideo);

function fullscreenWho() {
  let content = document.getElementById("who-content").innerHTML;
  let title = document.getElementById("who-title").innerText;
  document.querySelector(".overlay-content").innerHTML = content;
  document.querySelector(".overlay-title").innerText = title;
  document.getElementById("Fullscreen").style.width = "100%";
  document.querySelector(".overlay-content").classList.add("scrollbar");
}

function fullscreenWhat() {
  let content = document.getElementById("what-content").innerHTML;
  let title = document.getElementById("what-title").innerText;
  document.querySelector(".overlay-content").innerHTML = content;
  document.querySelector(".overlay-title").innerText = title;
  document.getElementById("Fullscreen").style.width = "100%";
  document.querySelector(".overlay-content").classList.add("scrollbar");
}

function fullscreenWhy() {
  let content = document.getElementById("why-content").innerHTML;
  let title = document.getElementById("why-title").innerText;
  document.querySelector(".overlay-content").innerHTML = content;
  document.querySelector(".overlay-title").innerText = title;
  document.getElementById("Fullscreen").style.width = "100%";
  document.querySelector(".overlay-content").classList.add("scrollbar");
}

function fullscreenLearnMore() {
  let content = document.getElementById("learn-more-content").innerHTML;
  let title = document.getElementById("learn-more-title").innerText;
  document.querySelector(".overlay-content").innerHTML = content;
  document.querySelector(".overlay-title").innerText = title;
  document.getElementById("Fullscreen").style.width = "100%";
  document.querySelector(".overlay-content").classList.add("scrollbar");
}

function openVideo() {
  let content = document.getElementById("video").innerHTML;
  document.querySelector(".overlay-content").innerHTML = content;
  document.getElementById("Fullscreen").style.width = "100%";
  document.querySelector(".overlay-title").style.border = "none";
}

function closeFullscreen() {
  if (document.getElementById("video").style.width === "100%") {
    document.getElementsByTagName("video").pause();
    document.getElementById("video").style.width = "0%";
  }
  document.getElementById("Fullscreen").style.width = "0%";
  setTimeout(() => {
    document.querySelector(".overlay-content").innerHTML = "";
    document.querySelector(".overlay-title").innerText = "";
  }, 350);
}
