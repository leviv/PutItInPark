import { locations } from "./location";
import { recs } from "./rec";
import { parks } from "./park";

/**
 * Approximate the backend API that this website used to use
 * We no longer get free heroku credits and I want this website up in a static form for posterity
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
  //   order_by: [{ field: "name", direction: dir }];
  //   single: true,
  // };
) => {
  let jsonResults;
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

  const singleResult = searchString !== null || (query && query.single);
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
      // Query filters
      if (query && query.filters) {
        let doesPassFilters = true;

        for (const filter of query.filters) {
          const queryName = filter.name;
          let value = data[queryName];
          // Handle weird boolean structure
          value = value === "False" ? "0" : value;
          value = value === "True" ? "1" : value;
          const queryOp = filter.op;
          const queryValue = filter.val;

          switch (queryOp) {
            case "eq":
              doesPassFilters = doesPassFilters && value == queryValue;
              break;
            case "neq":
              doesPassFilters = doesPassFilters && value != queryValue;
              break;
            case "le":
              doesPassFilters = doesPassFilters && value <= queryValue;
              break;
            case "ge":
              doesPassFilters = doesPassFilters && value >= queryValue;
              break;
          }

          if (!doesPassFilters) {
            // Debug console log
            // console.log(
            //   data,
            //   filter,
            //   queryOp,
            //   data[queryName],
            //   queryValue,
            //   data[queryName] <= queryValue
            // );
            break;
          }
        }

        return doesPassFilters;
      }

      return true;
    });
  }

  // Query Sort
  if (query && query.order_by?.length > 0) {
    // Assume we have only one orderBy because why wouldnt we
    const field = query.order_by[0].field;
    const direction = query.order_by[0].direction;

    jsonResults.sort((a, b) => {
      if (typeof a[field] === "string") {
        if (direction === "asc") {
          return a[field].localeCompare(b[field]);
        } else {
          return b[field].localeCompare(a[field]);
        }
      } else {
        if (direction === "asc") {
          return a[field] - b[field];
        } else {
          return b[field] - a[field];
        }
      }
    });
  }

  let totalPages = 1;

  if (paginated && jsonResults) {
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
