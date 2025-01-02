export type UseCountdownSecondsReturn = {
    counting: boolean;
    countdown: number;
    startCountdown: () => void;
    setCountdown: React.Dispatch<React.SetStateAction<number>>;
};
export declare function useCountdownSeconds(initCountdown: number): UseCountdownSecondsReturn;
