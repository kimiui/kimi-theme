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
export declare const signInWithPassword: ({ email, password }: SignInParams) => Promise<void>;
/** **************************************
 * Sign up
 *************************************** */
export declare const signUp: ({ email, password, firstName, lastName, }: SignUpParams) => Promise<void>;
/** **************************************
 * Sign out
 *************************************** */
export declare const signOut: () => Promise<void>;
/** **************************************
 * Reset password
 *************************************** */
export declare const resetPassword: ({ email }: {
    email: string;
}) => Promise<void>;
/** **************************************
 * Verify email
 *************************************** */
export declare const verifyEmail: (email: string) => Promise<void>;
/** **************************************
 * Change password
 *************************************** */
export declare const changePassword: (password: string) => Promise<void>;
/** **************************************
 * Update password
 *************************************** */
export declare const updatePassword: ({ email, confirmationCode, newPassword, }: {
    email: string;
    confirmationCode: string;
    newPassword: string;
}) => Promise<void>;
/** **************************************
 * Confirm sign up
 *************************************** */
export declare const confirmSignUp: ({ email, confirmationCode, }: {
    email: string;
    confirmationCode: string;
}) => Promise<void>;
/** **************************************
 * Resend sign up code
 *************************************** */
export declare const resendSignUpCode: ({ username }: {
    username: string;
}) => Promise<void>;
