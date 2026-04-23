import axios from "axios";

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

// Using axios
// Create axios instance (Best practice)

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Get Users
export async function axFetchUsers() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}

// Create User
export async function axCreateUser(user) {
  try {
    const response = await api.post("/", user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
}

// Delete User
export async function axDeleteUser(userId) {
  try {
    await api.delete(`/${userId}`);
    return true;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}