// Section 1
(function () {
  const openBtn1 = document.getElementById("openBtn1");
  const revel1 = document.getElementById("revel1");
  const coinMove1 = document.getElementById("coinMove1");
  const topBox1 = document.getElementById("topBox1");
  const dskLine1 = document.getElementById("dskLine1");
  const openBtnMobile1 = document.getElementById("openBtnmobile1");
  const revelMobile1 = document.getElementById("revelMobile1");
  const openBtnImg1 = openBtn1.querySelector("img");
  const openBtnMobileImg1 = openBtnMobile1.querySelector("img");

  openBtn1.addEventListener("click", () => {
    toggleRevelElement(
      openBtn1,
      revel1,
      coinMove1,
      topBox1,
      dskLine1,
      openBtnImg1
    );
  });

  openBtnMobile1.addEventListener("click", () => {
    revelMobile1.style.display =
      revelMobile1.style.display === "none" ? "block" : "none";
    toggleImageSrc(revelMobile1, openBtnMobileImg1);
  });

  // Initialize image state
  toggleImageSrc(revel1, openBtnImg1);
  toggleImageSrc(revelMobile1, openBtnMobileImg1);
})();

// Section 2
(function () {
  const openBtn2 = document.getElementById("openBtn2");
  const revel2 = document.getElementById("revel2");
  const coinMove2 = document.getElementById("coinMove2");
  const topBox2 = document.getElementById("topBox2");
  const dskLine2 = document.getElementById("dskLine2");
  const openBtnMobile2 = document.getElementById("openBtnmobile2");
  const revelMobile2 = document.getElementById("revelMobile2");
  const openBtnImg2 = openBtn2.querySelector("img");
  const openBtnMobileImg2 = openBtnMobile2.querySelector("img");

  openBtn2.addEventListener("click", () => {
    toggleRevelElement(
      openBtn2,
      revel2,
      coinMove2,
      topBox2,
      dskLine2,
      openBtnImg2
    );
  });

  openBtnMobile2.addEventListener("click", () => {
    revelMobile2.style.display =
      revelMobile2.style.display === "none" ? "block" : "none";
    toggleImageSrc(revelMobile2, openBtnMobileImg2);
  });

  revel2.classList.add("hidden");
  dskLine2.classList.add("hidden"); // Initially hide dskLine
  revelMobile2.style.display = "none"; // Initially hide revelMobile2

  // Initialize image state
  toggleImageSrc(revel2, openBtnImg2);
  toggleImageSrc(revelMobile2, openBtnMobileImg2);
})();

// Section 3
(function () {
  const openBtn3 = document.getElementById("openBtn3");
  const revel3 = document.getElementById("revel3");
  const coinMove3 = document.getElementById("coinMove3");
  const topBox3 = document.getElementById("topBox3");
  const dskLine3 = document.getElementById("dskLine3");
  const openBtnMobile3 = document.getElementById("openBtnmobile3");
  const revelMobile3 = document.getElementById("revelMobile3");
  const openBtnImg3 = openBtn3.querySelector("img");
  const openBtnMobileImg3 = openBtnMobile3.querySelector("img");

  openBtn3.addEventListener("click", () => {
    toggleRevelElement(
      openBtn3,
      revel3,
      coinMove3,
      topBox3,
      dskLine3,
      openBtnImg3
    );
  });

  openBtnMobile3.addEventListener("click", () => {
    revelMobile3.style.display =
      revelMobile3.style.display === "none" ? "block" : "none";
    toggleImageSrc(revelMobile3, openBtnMobileImg3);
  });

  revel3.classList.add("hidden");
  dskLine3.classList.add("hidden"); // Initially hide dskLine
  revelMobile3.style.display = "none"; // Initially hide revelMobile

  // Initialize image state
  toggleImageSrc(revel3, openBtnImg3);
  toggleImageSrc(revelMobile3, openBtnMobileImg3);
})();

// Shared functions
function toggleRevelElement(
  button,
  revel,
  coinMove,
  topBox,
  dskLine,
  imageElement
) {
  revel.classList.toggle("hidden");
  button.classList.toggle("active");
  toggleImageSrc(revel, imageElement);

  if (window.matchMedia("(min-width: 1024px)").matches) {
    if (!revel.classList.contains("hidden")) {
      coinMove.classList.remove("md:coin-desktop");
      coinMove.classList.add("md:coin-desktop-full");
      topBox.classList.remove("cs-bb");
      dskLine.classList.remove("hidden"); // Show dskLine when revel is shown on md screen
    } else {
      coinMove.classList.remove("md:coin-desktop-full");
      coinMove.classList.add("md:coin-desktop");
      topBox.classList.add("cs-bb");
      dskLine.classList.add("hidden"); // Hide dskLine when revel is hidden on md screen
    }
  } else {
    dskLine.classList.add("hidden"); // Always hide dskLine on screens below md
  }
}

function toggleImageSrc(revelElement, imageElement) {
  if (
    revelElement.style.display !== "none" &&
    !revelElement.classList.contains("hidden")
  ) {
    imageElement.src = "img/up.svg";
  } else {
    imageElement.src = "img/down.svg";
  }
}
