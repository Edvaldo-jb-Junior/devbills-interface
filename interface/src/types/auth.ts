export interface AuthState {
    user: {
        uid: string;
        displayName: string;
        email: string;
        photoURL: string | null;
    } | null;
    error: string | null;
    loading: boolean;
}