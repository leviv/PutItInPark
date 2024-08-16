export const API_ENDPOINT = "https://putitinpark.herokuapp.com/api";

/**
 * A function to open the filter dropdown when the arrow icon is clicked
 */
export function expandFilters() {
  const filters = document.getElementById("augment-container");
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

/**
 * A function to convert a list of objects to a list of 3 object lists
 */
export function convertToRows(data) {
  const rows = data
    .map((x, i) => {
      return i % 4 === 0 ? data.slice(i, i + 4) : null;
    })
    .filter((x) => x != null);

  return rows;
}

/**
 * A function to convert a string seperated by dashes to one space seperated
 */
export function displayName(name) {
  if (name) {
    return name
      .replace(/-+/g, " ")
      .toLowerCase()
      .replace(/,/g, ", ")
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  } else {
    return "";
  }
}

/**
 * A function to convert a string seperated by spaces to one space dashes
 */
export function slugName(prefix, name) {
  if (name) {
    return prefix + name.replace(/\s+/g, "-");
  } else {
    return "";
  }
}

/**
 * A function to convert a number to one seperated by commas
 */
export function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
