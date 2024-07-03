export function login({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock login logic
        if (email === "jacob@gmail.com" && password === "1234567") {
          resolve("Login successful");
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000); 
    });
  }