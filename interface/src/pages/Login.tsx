import GoogleLoginButton from "../componets/GoogleLoginButton";




const Login = () => {

    return (
    <div>
     <div>
        <header>
            <h1>DevBills</h1>
            <p>Gerencie suas finanças de forma simples e eficiente</p>
        </header>

        <main>
            <section>
                <h2>Faça login para continuar</h2>
                <p>Acesse sua conta para começar a gerenciar suas finanças</p>
            </section>

            <GoogleLoginButton />

            <footer>
                <p>Ao fazer login, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
            </footer>
        </main>
     </div>
    </div>
    );
};

export default Login;
