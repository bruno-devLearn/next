"use client";

import { CiWarning } from "react-icons/ci";

export default function Error() {
    return (
        <div className="error-screen">
            <div className="error-box">
                <CiWarning className="error-icon" />
                <h2 className="error-title">Erro ao carregar os produtos</h2>
                <p className="error-desc">
                    Não foi possível buscar os dados no momento.
                </p>
                <button onClick={() => location.reload()} className="error-btn">
                    Tentar novamente
                </button>
            </div>
        </div>
    );
}
