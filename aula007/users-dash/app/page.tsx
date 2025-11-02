import { getUsers } from "./_utils/fecth";

export default async function Home() {
    const users = await getUsers();

    console.log(users);
    return <h1>teste</h1>;
}
