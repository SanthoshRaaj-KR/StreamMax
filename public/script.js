
  // TRENDING MOVIES SCROLLING
  const trendingScrollContainer = document.getElementById("scrollContainer");
  const trendingPrevButton = document.getElementById("prevButton");
  const trendingNextButton = document.getElementById("nextButton");

  if (trendingScrollContainer) {
    trendingNextButton.addEventListener("click", () => {
      trendingScrollContainer.scrollBy({ left: 900, behavior: "smooth" });
    });

    trendingPrevButton.addEventListener("click", () => {
      trendingScrollContainer.scrollBy({ left: -900, behavior: "smooth" });
    });
  }

  // GENRE MOVIES SCROLLING
  const genreScrollContainer = document.getElementById("movies-list");
  const genrePrevButton = document.getElementById("prevGenreButton");
  const genreNextButton = document.getElementById("nextGenreButton");

  if (genreScrollContainer) {
    genreNextButton.addEventListener("click", () => {
      genreScrollContainer.scrollBy({ left: 900, behavior: "smooth" });
    });

    genrePrevButton.addEventListener("click", () => {
      genreScrollContainer.scrollBy({ left: -900, behavior: "smooth" });
    });
  }
