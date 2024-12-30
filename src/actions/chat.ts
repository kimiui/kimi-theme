import type { IChatMessage, IChatParticipant, IChatConversation } from 'src/types/chat';

import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

import axios, { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const enableServer = false;

const swrOptions = {
  revalidateIfStale: enableServer,
  revalidateOnFocus: enableServer,
  revalidateOnReconnect: enableServer,
};

// ----------------------------------------------------------------------

type ContactsData = {
  data: IChatParticipant[];
  total: number;
};

export function useGetContacts({ page = 1, limit = 10 }: { page: number; limit: number }) {
  const url = [endpoints.chat.contacts, { params: { page, limit } }];

  const { data, isLoading, error, isValidating } = useSWR<ContactsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      total: data?.total ?? 0,
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.data.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type ConversationsData = {
  data: IChatConversation[];
  total: number;
};

export function useGetConversations({ page = 1, limit = 10 }: { page: number; limit: number }) {
  const url = [endpoints.chat.conversations, { params: { page, limit } }];

  const { data, isLoading, error, isValidating } = useSWR<ConversationsData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      total: data?.total ?? 0,
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetConversation(conversationId: string) {
  const url = conversationId
    ? [endpoints.chat.conversationDetail.replace(':conversationId', conversationId)]
    : '';

  const { data, isLoading, error, isValidating } = useSWR<IChatConversation>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      data,
      isLoading,
      error,
      isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export async function sendMessage(conversationId: string, messageData: IChatMessage) {
  const conversationsUrl = [endpoints.chat.conversations];

  const conversationUrl = [
    endpoints.chat.conversationDetail.replace(':conversationId', conversationId),
  ];

  /**
   * Work on server
   */
  if (enableServer) {
    const data = { conversationId, messageData };
    await axios.put(endpoints.chat.conversations, data);
  }

  /**
   * Work in local
   */
  mutate(
    conversationUrl,
    (currentData: any) => {
      const currentConversation: IChatConversation = currentData.conversation;

      const conversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, messageData],
      };

      return { ...currentData, conversation };
    },
    false
  );

  mutate(
    conversationsUrl,
    (currentData: any) => {
      const currentConversations: IChatConversation[] = currentData.conversations;

      const conversations: IChatConversation[] = currentConversations.map(
        (conversation: IChatConversation) =>
          conversation.id === conversationId
            ? {
                ...conversation,
                messages: [...conversation.messages, messageData],
              }
            : conversation
      );

      return { ...currentData, conversations };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function createConversation(conversationData: IChatConversation) {
  const url = [endpoints.chat.conversations];

  /**
   * Work on server
   */
  const data = { conversationData };
  const res = await axios.post(endpoints.chat.conversations, data);

  /**
   * Work in local
   */
  mutate(
    url,
    (currentData: any) => {
      const currentConversations: IChatConversation[] = currentData.conversations;

      const conversations: IChatConversation[] = [...currentConversations, conversationData];

      return { ...currentData, conversations };
    },
    false
  );

  return res.data;
}

// ----------------------------------------------------------------------

export async function clickConversation(conversationId: string) {
  /**
   * Work on server
   */
  if (enableServer) {
    await axios.get(endpoints.chat.conversationDetail.replace(':conversationId', conversationId), {
      params: { endpoint: 'mark-as-seen' },
    });
  }

  /**
   * Work in local
   */
  mutate(
    [endpoints.chat.conversations],
    (currentData: any) => {
      const currentConversations: IChatConversation[] = currentData.conversations;

      const conversations = currentConversations.map((conversation: IChatConversation) =>
        conversation.id === conversationId ? { ...conversation, unreadCount: 0 } : conversation
      );

      return { ...currentData, conversations };
    },
    false
  );
}
