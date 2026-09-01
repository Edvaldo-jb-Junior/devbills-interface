import {  useEffect } from "react";
import GoogleLoginButton from "../componets/GoogleLoginButton";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const { signInWithGoogle, authState } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
       try {
           await signInWithGoogle();
       } catch (error) {
           console.error("Erro ao fazer login com o Google", error);
       }
    };

    useEffect(() => {
        if (authState.user && !authState.loading) {
            navigate("/dashboard");
        }
    }, [authState.user, authState.loading, navigate]);

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
     <div className="max-w-md w-full space-y-8">
        <header>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">DevBills</h1>
            <p className="mt-2 text-center text-sm text-gray-600">Gerencie suas finanças de forma simples e eficiente</p>
        </header>

        <main className="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10 space-y-6">
            <section >
                <h2 className="text-lg font-medium text-gray-900">Faça login para continuar</h2>
                <p className="mt-2 text-sm text-gray-600">Acesse sua conta para começar a gerenciar suas finanças</p>
            </section>

            <GoogleLoginButton onClick={handleLogin} isloading={authState.loading} />

            {authState.error && (
                <div className="text-red-500 text-sm mt-2">
                    <p>{authState.error}</p>
                </div>
            )}

            <footer className="mt-6">
                <p className="bg-red-50 text-red-600 text-center">Ao fazer login, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
            </footer>
        </main>
     </div>
    </div>
    );
};

export default Login;
