"use client";

import { useState } from "react";
import { Error, Success } from "./_components/(form)/Skeletons";
import { BackBtn } from "./_components/BackBtn";
import { Form } from "./_components/Form";

export default function Page() {
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);

    return (
        <>
            <div className="max-w-2xl mx-auto p-6">
                <BackBtn />
                <h1 className="text-gray-900 mb-8">Criar Novo Post</h1>
                {error ? <Error /> : null}
                {sucess ? <Success /> : null}
                <Form setError={setError} setSucess={setSucess} />
            </div>
        </>
    );
}
