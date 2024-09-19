export const getEntries = async () => {
  try {
    const res = await fetch("http://localhost:8080/media", { method: "GET" });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Get operation failed:", e);
  }
};

export const postEntry = async (name, author, type) => {
  const data = { name: name, author: author, type: type };

  const res = await fetch("http://localhost:8080/media", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteEntry = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/media/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.error("Delete operation failed:", e);
  }
};

export const editEntry = async (name, author, type, id) => {
  try {
    console.log(`${id}`);
    const data = { name: name, author: author, type: type };
    const res = await fetch(`http://localhost:8080/media/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error("Update operation failed:", e);
  }
};
