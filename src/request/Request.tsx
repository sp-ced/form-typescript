//Get method is used to retrieve or get the information from the given server using a given URL.
export const get = (url: string): void => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// post method is used for inserting new items in the backend server
export const post = (
  url: string,
  payload: BodyInit | null | undefined
): void => {
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//The PUT method is most often used to update an existing resource.
export const put = (
  url: string,
  payload: BodyInit | null | undefined
): void => {
  fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//The PATCH method is used to update the values of the resource properties.
export const patch = (
  url: string,
  payload: BodyInit | null | undefined
): void => {
  fetch(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//The DELETE method is used to delete a resource specified by its URI.
export const del = (url: string): void => {
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
