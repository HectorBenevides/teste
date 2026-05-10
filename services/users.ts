import { ApiUser } from "@/types/user";

type RandomUserResponse = {
  results: Array<{
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    phone: string;
  }>;
};

const USERS_API_URL = "https://randomuser.me/api/?results=12&nat=br";

export async function getUsers(): Promise<ApiUser[]> {
  const response = await fetch(USERS_API_URL);

  if (!response.ok) {
    throw new Error("Nao foi possivel carregar os usuarios.");
  }

  const users = (await response.json()) as RandomUserResponse;

  return users.results.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
  }));
}
