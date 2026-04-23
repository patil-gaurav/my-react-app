const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Get users
export async function fetchUsers() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

// Post user
export async function createUser(user) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}

// Delete user
export async function deleteUser(userId) {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return true;
}