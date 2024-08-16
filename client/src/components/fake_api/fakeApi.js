import { locations } from "./location";
import { recs } from "./rec";
import { parks } from "./park";

/**
 * Approximate the backend API that this website used to use
 * We no longer get free heroku credits and I want this website up in a statc form for posterity
 */

// This could definitely be more robust but I just want it to work
export const fakeFetch = async (
  _endpoint,
  table,
  searchString,
  query,
  paginated
  // query shape per flaskAlchemy
  // query = {
  //   filters: [{ name: "rec_id", op: "eq", val: id }],
  //   single: true,
  // };
) => {
  let jsonResults;
  const singleResult = searchString || (query && query.single);
  let dataTable;
  let primaryColName;

  if (table.indexOf("locations") >= 0) {
    dataTable = locations;
    primaryColName = "name";
  }
  if (table.indexOf("nationalparks") >= 0) {
    dataTable = parks;
    primaryColName = "park_name";
  }
  if (table.indexOf("recreations") >= 0) {
    dataTable = recs;
    primaryColName = "rec_name";
  }

  if (singleResult) {
    let queryName;
    let queryValue;

    if (query && query.single) {
      queryName = query.filters[0].name;
      queryValue = query.filters[0].val;
    } else if (searchString) {
      queryName = primaryColName;
      queryValue = searchString;
    }

    jsonResults = dataTable.find((data) => data[queryName] === queryValue);
  } else {
    jsonResults = dataTable.filter((data) => {
      if (query) {
        const queryName = query.filters[0].name;
        // Assume op is always "eq"
        const queryValue = query.filters[0].val;

        return data[queryName] === queryValue;
      }

      return true;
    });
  }

  let totalPages = 1;

  if (paginated) {
    const resultsPerPage = paginated.resultsPerPage;
    const pageNumber = paginated.pageNumber - 1; // 1 indexed

    const start = resultsPerPage * pageNumber;
    const end =
      start + resultsPerPage < jsonResults.length
        ? start + resultsPerPage
        : jsonResults.length;

    totalPages = Math.ceil(jsonResults.length / resultsPerPage);
    jsonResults = jsonResults.slice(start, end);
  }

  if (jsonResults) {
    // Deep copy
    jsonResults = JSON.parse(JSON.stringify(jsonResults));
  }

  if (singleResult) {
    return Promise.resolve({
      json: () => {
        return jsonResults;
      },
    });
  }

  return Promise.resolve({
    json: () => {
      return { objects: jsonResults, total_pages: totalPages };
    },
  });
};
