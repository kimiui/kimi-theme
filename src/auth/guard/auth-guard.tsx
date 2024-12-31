'use client';

import { paths } from 'kimi-theme/routes/paths';
import { useState, useEffect, useCallback } from 'react';
import { SplashScreen } from 'kimi-theme/components/loading-screen';
import { useRouter, usePathname, useSearchParams } from 'routes-react';

import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Readonly<Props>) {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const { authenticated, loading } = useAuthContext();

  console.log('authenticated', authenticated);

  const [isChecking, setIsChecking] = useState<boolean>(true);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const checkPermissions = async (): Promise<void> => {
    if (loading) {
      return;
    }

    console.log('authenticated', authenticated);

    if (!authenticated) {
      const signInPath = paths.auth.signIn;

      const href = `${signInPath}?${createQueryString('returnTo', pathname)}`;

      console.log('href', href);

      router.replace(href);
      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading]);

  if (isChecking) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
