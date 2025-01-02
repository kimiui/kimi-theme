import { z as zod } from 'zod';
type InputProps = {
    message?: {
        required_error?: string;
        invalid_type_error?: string;
    };
    minFiles?: number;
    isValidPhoneNumber?: (text: string) => boolean;
};
export declare const schemaHelper: {
    /**
     * Phone number
     * defaultValue === null
     */
    phoneNumber: (props?: InputProps) => zod.ZodEffects<zod.ZodString, string, string>;
    /**
     * date
     * defaultValue === null
     */
    date: (props?: InputProps) => zod.ZodPipeline<zod.ZodEffects<zod.ZodNullable<zod.ZodDate>, string | null, Date | null>, zod.ZodUnion<[zod.ZodNumber, zod.ZodString, zod.ZodDate, zod.ZodNull]>>;
    /**
     * editor
     * defaultValue === '' | <p></p>
     */
    editor: (props?: InputProps) => zod.ZodString;
    /**
     * object
     * defaultValue === null
     */
    objectOrNull: <T>(props?: InputProps) => zod.ZodEffects<zod.ZodEffects<zod.ZodType<T, zod.ZodTypeDef, T>, T & ({} | undefined), T>, T & ({} | undefined), T>;
    /**
     * boolean
     * defaultValue === false
     */
    boolean: (props?: InputProps) => zod.ZodEffects<zod.ZodBoolean, boolean, boolean>;
    /**
     * file
     * defaultValue === '' || null
     */
    file: (props?: InputProps) => zod.ZodEffects<zod.ZodType<string | File | null, zod.ZodTypeDef, string | File | null>, string | File | null, string | File | null>;
    /**
     * files
     * defaultValue === []
     */
    files: (props?: InputProps) => zod.ZodEffects<zod.ZodArray<zod.ZodType<string | File, zod.ZodTypeDef, string | File>, "many">, (string | File)[], (string | File)[]>;
};
export {};
