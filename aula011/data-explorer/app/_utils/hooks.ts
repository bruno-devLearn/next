import { useState, useEffect } from "react";
import { UserDetailsResponse } from "./types";
import { getUser } from "./fetchData";

export function useGetData(id: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<UserDetailsResponse | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            setData(null);

            if (id) {
                const res = await getUser({
                    id,
                    setError,
                    setIsLoading,
                });

                if (res) setData(res);
            }
        };

        fetchUser();
    }, [id]);

    return {
        isLoading,
        error,
        data,
    };
}
