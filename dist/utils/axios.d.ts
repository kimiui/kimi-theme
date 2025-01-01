import type { AxiosRequestConfig } from 'axios';
declare const axiosInstance: import("axios").AxiosInstance;
export default axiosInstance;
export declare const fetcher: (args: string | [string, AxiosRequestConfig]) => Promise<any>;
export declare const endpoints: {
    chat: {
        contacts: string;
        conversations: string;
        conversationDetail: string;
    };
    kanban: string;
    calendar: string;
    auth: {
        me: string;
    };
    mail: {
        list: string;
        details: string;
        labels: string;
    };
    posts: {
        list: string;
        details: string;
        relative: string;
    };
    products: {
        lists: string;
        details: string;
    };
};
