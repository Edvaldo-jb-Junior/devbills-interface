import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AuthState } from "../types/auth";
import { firebaseAuth, googleAuthProvider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";


interface AuthContextProps {
    authState: AuthState;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}



const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ( {children}: {children: ReactNode}) => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        error: null,
        loading: false
    });

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            setAuthState({
                user:{
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                },
                error: null,
                loading: false
            });
        } else {
            setAuthState({
                user: null,
                error: null,
                loading: false
            });
        }
    }, (error) => {
        setAuthState({
            user: null,
            error: error.message,
            loading: false
        });
    }
);
    return () => unsubscribe();
}, []);

    const signInWithGoogle = async (): Promise<void> => {
        setAuthState( (prev) => ({...prev, loading: true}));

        try {
            await signInWithPopup(firebaseAuth, googleAuthProvider);
        } catch (error) { 
            console.error("Erro ao fazer login com o Google:", error);
            setAuthState( (prev) => ({...prev, loading: false, error: "Erro ao fazer login com o Google"}));
        }
    };

    const signOut = async (): Promise<void> => {
        try {
            await firebaseSignOut(firebaseAuth);
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
            setAuthState( (prev) => ({...prev, loading: false, error: "Erro ao fazer logout"}));
        }
    }

    return (
        <AuthContext.Provider value={{ authState, signInWithGoogle, signOut }}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
}

