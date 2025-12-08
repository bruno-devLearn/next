/**
 * Representa um usuário no sistema de autenticação.
 *
 * @interface User
 * @property {string} email - Endereço de email do usuário utilizado para login
 * @property {string} password - Senha do usuário (deve ser enviada de forma segura)
 */
export interface User {
    email: string;
    password: string;
}
