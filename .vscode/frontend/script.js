const API = "http://localhost:5001/api/auth";

// SIGNUP
async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert(data.msg);
  } catch (error) {
    console.error(error);
    alert("Signup failed");
  }
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.msg);

    // Optional: store token if returned
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
}