import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: 'https://api.kimistores.com' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response?.data ?? 'Something went wrong!')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: {
    contacts: '/api/chat/contacts',
    conversations: '/api/chat/conversations',
    conversationDetail: '/api/chat/conversations/:conversationId',
  },
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
  },
  mail: {
    list: '/api/mail',
    details: '/api/mail/:id',
    labels: '/api/mail/labels',
  },
  posts: {
    list: '/api/posts',
    details: '/api/posts/:title',
    relative: '/api/posts/relative',
  },
  products: {
    lists: '/api/products',
    details: '/api/products/:id',
  },
};
