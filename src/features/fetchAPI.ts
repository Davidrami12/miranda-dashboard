import { Notification } from '../components/notification/Notification';

const url = process.env.REACT_APP_API_URL;

export const fetchAPI = async (direction: string, method: string, data: {} | null): Promise<any> => {
  console.log("URL:", url + direction);
  console.log("Method:", method);
  console.log("Data:", data);
  
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


    console.log("Response:", response);

    if (!response.ok) {
      // If unauthorized (401) redirect to login
      if (response.status === 401) {
        Notification("Session expired. Please log in again.", "error");
      }
      throw new Error(`API returned status: ${response.status}`);
    }

    return response.json();

  } catch (error) {
    Notification(`An error occurred: ${error.message}`, "error");
    throw error;
  }
}