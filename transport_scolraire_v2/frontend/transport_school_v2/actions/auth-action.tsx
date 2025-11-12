'use server';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { LoginAuthSchema, SignUpAuthSchema } from '@/schema/schema';
import { cookies } from 'next/headers';
import { NEXT_PUBLIC_API_URL_STUDENT } from '@/lib/utils';
import Cookies from 'js-cookie';


/* -------------------------------
   Types
--------------------------------*/
type RegisterState = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        codeMassar?: string[];
        phoneNumber?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
    data?: Record<string, any>;
    message?: string;
} | null;

type LoginState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    data?: Record<string, any>;
    message?: string;
} | null;

/* -------------------------------
   Register
--------------------------------*/
export async function handelRegister(prevState: RegisterState, formData: FormData): Promise<RegisterState> {
    const authData = Object.fromEntries(formData.entries());
    const cleanData = Object.fromEntries(
        Object.entries(authData).filter(([key]) => !key.startsWith("$"))
    );

    const validateDataAuth = SignUpAuthSchema.safeParse(cleanData);
    if (!validateDataAuth.success) {
        return { errors: validateDataAuth.error.flatten().fieldErrors, data: cleanData };
    }

    const { confirmPassword, ...payload } = validateDataAuth.data;

    try {
        await axios.post(`${NEXT_PUBLIC_API_URL_STUDENT}/auth/register`, payload, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err: any) {
        if (axios.isAxiosError(err) && err.response) {
            return { message: err.response.data?.error || err.response.data?.message || 'Registration failed' };
        }
        return { message: 'Unexpected error occurred' };
    }

    return null;
}



/* -------------------------------
   Login
--------------------------------*/

export async function handleLogin(formData: FormData) {
    const authData = Object.fromEntries(formData.entries());

    // Validation avec zod
    const validatedFields = LoginAuthSchema.safeParse(authData);
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    try {
        const response = await axios.post(
            `${NEXT_PUBLIC_API_URL_STUDENT}/auth/login`,
            validatedFields.data,
            { headers: { 'Content-Type': 'application/json' } }
        );

        const data = response.data;

        if (!data.token) {
            return { message: 'Login successful, but no token was provided.' };
        }

        // Stockage côté client
        Cookies.set('token', data.token, { secure: true, sameSite: 'strict' });
        Cookies.set('user', JSON.stringify({ email: data.email }), { secure: true, sameSite: 'strict' });

        // Redirection côté client
        window.location.href = '/';

    } catch (err: any) {
        if (axios.isAxiosError(err) && err.response) {
            return { message: err.response.data?.error || 'Invalid email or password.' };
        }
        console.error('Unexpected login error:', err);
        return { message: 'An unexpected error occurred. Please try again.' };
    }
}


/* -------------------------------
   Logout
--------------------------------*/
export async function handleLogout() {
    const cookieStore = cookies();
    (await cookieStore).delete('token');
    (await cookieStore).delete('user');
    redirect('/');
}
