"use client";

import { useEffect, useState } from "react";
import { Actions } from "./(form)/Actions";
import { BodyText } from "./(form)/BodyText";
import { TitleInput } from "./(form)/TitleInput";
import { Post } from "@/app/_utils/types";
import { useCreatePost } from "@/app/_utils/hooks";
import { redirect } from "next/navigation";

interface FormProps {
    setError: Dispatch<SetStateAction<boolean>>;
    setSucess: Dispatch<SetStateAction<boolean>>;
}

export function Form({ setError, setSucess }: FormProps) {
    const { mutate, isError, isPending, isSuccess } = useCreatePost();

    useEffect(() => {
        setError(isError);
        setSucess(isSuccess);

        if (isSuccess) {
            setTimeout(() => {
                redirect("/");
            }, 2000);
        }
    }, [isError, isSuccess, setError, setSucess]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const post: Post | null = title && body ? { title, body } : null;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!post) return;
        mutate(post);
    }

    return (
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <TitleInput title={title} setTitle={setTitle} />
            <BodyText body={body} setBody={setBody} />
            <Actions isPending={isPending} />
        </form>
    );
}
