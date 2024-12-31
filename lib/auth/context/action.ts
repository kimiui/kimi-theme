import { setSession } from './utils';
import { STORAGE_KEY } from './constant';

// ----------------------------------------------------------------------

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ email, password }: SignInParams): Promise<void> => {
  try {
    const accessToken = 'token';
    setTimeout(() => {}, 1000);

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    setSession(accessToken);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpParams): Promise<void> => {
  try {
    const accessToken = 'token';
    setTimeout(() => {}, 1000);

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    sessionStorage.setItem(STORAGE_KEY, accessToken);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};

/** **************************************
 * Reset password
 *************************************** */
export const resetPassword = async ({ email }: { email: string }): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during reset password:', error);
    throw error;
  }
};

/** **************************************
 * Verify email
 *************************************** */
export const verifyEmail = async (email: string): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during verify email:', error);
    throw error;
  }
};

/** **************************************
 * Change password
 *************************************** */
export const changePassword = async (password: string): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during change password:', error);
    throw error;
  }
};

/** **************************************
 * Update password
 *************************************** */
export const updatePassword = async ({
  email,
  confirmationCode,
  newPassword,
}: {
  email: string;
  confirmationCode: string;
  newPassword: string;
}): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during update password:', error);
    throw error;
  }
};

/** **************************************
 * Confirm sign up
 *************************************** */

export const confirmSignUp = async ({
  email,
  confirmationCode,
}: {
  email: string;
  confirmationCode: string;
}): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during confirm email:', error);
    throw error;
  }
};

/** **************************************
 * Resend sign up code
 *************************************** */
export const resendSignUpCode = async ({ username }: { username: string }): Promise<void> => {
  try {
    setTimeout(() => {}, 1000);
  } catch (error) {
    console.error('Error during resend code:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------
