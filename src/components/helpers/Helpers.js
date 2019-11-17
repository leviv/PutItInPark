/**
 * A function to open the filter dropdown when the arrow icon is clicked
 */
export function expandFilters () {
  const filters= document.getElementById("augment-container");
  if (filters.classList.contains("collapsed")) {
    const sectionHeight = filters.scrollHeight;

    filters.style.height = sectionHeight + "px";

    filters.classList.remove("collapsed");
    document.getElementById("carat").style.transform = "rotate(180deg)";
  } else {
    filters.style.height = "98px";
    filters.classList.add("collapsed");
    document.getElementById("carat").style.transform = "rotate(0deg)";
  }
}
