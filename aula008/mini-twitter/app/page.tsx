import "./login.css";

export default function Home() {
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Bem-vindo</h1>
                    <span>Entre com seu nome de usuário</span>
                </div>
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="username" className="label-input">
                            Nome de usuário
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="input-field"
                            placeholder="Digite seu nome..."
                        />
                    </div>
                    <button className="login-button">Entrar</button>
                </form>
            </div>
        </div>
    );
}
