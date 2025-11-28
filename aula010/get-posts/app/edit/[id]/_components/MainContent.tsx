"use client";

import { BackBtn } from "@/app/create-post/_components/BackBtn";
import { Form } from "./Form";
import { Datum } from "@/app/_utils/types";
import { useState } from "react";
import { Error, Success } from "@/app/create-post/_components/(form)/Skeletons";

export function MainContent({ post }: { post: Datum }) {
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);

    return (
        <>
            <div className="max-w-2xl mx-auto p-6">
                {error ? <Error /> : null}
                {sucess ? <Success /> : null}
                <BackBtn />
                <h1 className="text-gray-900 mb-8">Editar Post</h1>
                <Form post={post} setError={setError} setSucess={setSucess} />
            </div>
        </>
    );
}
