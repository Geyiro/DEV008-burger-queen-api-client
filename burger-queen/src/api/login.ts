import { User } from "../types";

interface LoginData {
  accessToken: string;
  user: User;
}

export async function login(email: string, password: string): Promise<LoginData | Error> {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    });

    if (!response.ok) {
      return new Error('Incorrect login or password')
    }

    return await response.json() as LoginData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error;
    } else {
      return new Error('Unexpected error')
    }
  } 
}
