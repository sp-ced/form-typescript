import { useEffect } from "react";
import { del, get, patch, post, put } from "../request/Request";

const ApiFetch = () => {
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/todos?_limit=10");

    post(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      JSON.stringify({
        title: "Learn post method of API",
        completed: false,
      })
    );

    put(
      "https://jsonplaceholder.typicode.com/todos/5",
      JSON.stringify({
        title: "Learn post method of API",
        completed: false,
      })
    );

    patch(
      "https://jsonplaceholder.typicode.com/todos/1",
      JSON.stringify({
        title: "Learn patch method of API",
        completed: true,
      })
    );

    del("https://jsonplaceholder.typicode.com/todos/1");
  }, []);

  return <div>ApiFetch: refer to console</div>;
};

export default ApiFetch;
