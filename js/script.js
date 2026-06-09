/**************** TEMA 2 ***************/
document.querySelector("#link_pil").textContent = ">";

// link scale
document.querySelector(".link_og_pil").addEventListener("mouseover", link_mouseover);

function link_mouseover() {
  console.log("test");
  document.querySelector(".link_og_pil").classList.add("scale_link");
}

document.querySelector(".link_og_pil").addEventListener("mouseout", no_scale_link);

function no_scale_link() {
  document.querySelector(".link_og_pil").classList.remove("scale_link");
}
