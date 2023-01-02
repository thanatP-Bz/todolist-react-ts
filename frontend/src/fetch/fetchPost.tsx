export const fetchPost = async (value: string) => {
  const response = await fetch("http://localhost:5000/api/v1/todo/create", {
    method: "POST",
    body: JSON.stringify({ todo: value }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log("error");
  }

  if (response.ok) {
    return data;
  }
};
