import { Notification } from '../components/notification/Notification';

const url = process.env.REACT_APP_LOCAL_URL;

export const fetchAPI = async (direction: string, method: string, data: {} | null): Promise<any> => {
  try {
    let tokenStored: string | any = localStorage.getItem("auth");

    if (localStorage.getItem("auth")) {
      tokenStored = JSON.parse(tokenStored).token;
    }

    const response = await fetch(url + direction, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenStored}`,
      },
      body: data ? JSON.stringify(data) : null,
    });

    // Check if the response was successful
    if (!response.ok) {
      // If unauthorized (401), consider adding a redirect to login or token refresh logic
      if (response.status === 401) {
        Notification("Session expired. Please log in again.", "error");
        // You can throw an error or add other handling logic here
      }
      throw new Error(`API returned status: ${response.statusText}`);
    }

    return response.json();

  } catch (error) {
    Notification(`An error occurred: ${error.message}`, "error");
    throw error; // Propagate the error for further handling
  }
}