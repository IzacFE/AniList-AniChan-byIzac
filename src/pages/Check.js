import React from "react";

export const Check = () => {
  var query = `
query ($id: Int) { 
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

  // Define our query variables and values that will be used in the query request
  var variables = {
    id: 1,
  };

  // Define the config we'll need for our Api request
  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  // Make the HTTP Api request
  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data);
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }

  return <div>Check</div>;
};
