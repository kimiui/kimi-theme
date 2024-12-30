import type { IMail, IMailLabel } from 'src/types/mail';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type LabelsData = {
  labels: IMailLabel[];
};

export function useGetLabels() {
  const url = endpoints.mail.labels;

  const { data, isLoading, error, isValidating } = useSWR<LabelsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      labels: data?.labels || [],
      labelsLoading: isLoading,
      labelsError: error,
      labelsValidating: isValidating,
      labelsEmpty: !isLoading && !data?.labels.length,
    }),
    [data?.labels, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type MailsData = {
  data: IMail[];
};

export function useGetMails(labelId: string) {
  const url = labelId ? [endpoints.mail.list, { params: { labelId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<MailsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      data: data?.data ?? [],
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetMail(mailId: string) {
  const url = mailId ? [endpoints.mail.details.replace(':id', mailId)] : '';

  const { data, isLoading, error, isValidating } = useSWR<IMail>(url, fetcher, swrOptions);

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
