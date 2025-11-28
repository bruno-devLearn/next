"use client";

import { Datum } from "@/app/_utils/types";
import { Actions } from "./Actions";
import { BodyText } from "./Body";
import { TitleInput } from "./TitleInput";
import { useEditPost } from "@/app/_utils/hooks";
import { useEffect, Dispatch, SetStateAction } from "react";
import { redirect } from "next/navigation";

interface FormProps {
    post: Datum;
    setError: Dispatch<SetStateAction<boolean>>;
    setSucess: Dispatch<SetStateAction<boolean>>;
}

export function Form({ post, setSucess, setError }: FormProps) {
    const { mutate, isPending, isError, isSuccess } = useEditPost();

    useEffect(() => {
        setError(isError);
        setSucess(isSuccess);

        if (isSuccess) {
            setTimeout(() => {
                redirect("/");
            }, 2000);
        }
    }, [isError, isSuccess, setError, setSucess]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const title = formData.get("title");
        const body = formData.get("body");

        if (!title || !body) {
            setError(true);
            return;
        }

        const postMonted = {
            title: title,
            body: body,
        };

        mutate({ id: post.id, post: postMonted });
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <TitleInput post={post} />
            <BodyText post={post} />
            <Actions isPending={isPending} />
        </form>
    );
}
