'use client';

import { useBoolean } from 'ahooks';
import { useEffect, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import { useRouter, useSearchParams } from 'routes-react';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks';
import { DashboardContent } from 'src/layouts/dashboard';
import { useGetMail, useGetMails, useGetLabels } from 'src/actions/mail';

import { Layout } from '../layout';
import { MailNav } from '../mail-nav';
import { MailList } from '../mail-list';
import { MailHeader } from '../mail-header';
import { MailCompose } from '../mail-compose';
import { MailDetails } from '../mail-details';

// ----------------------------------------------------------------------

const LABEL_INDEX = 'inbox';

export function MailView() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const selectedLabelId = searchParams.get('label') ?? LABEL_INDEX;

  const selectedMailId = searchParams.get('id') ?? '';

  const mdUp = useResponsive('up', 'md');

  const [openNav, openNavActions] = useBoolean();

  const [openMail, openMailActions] = useBoolean();

  const [openCompose, openComposeActions] = useBoolean();

  const { labels, labelsLoading, labelsEmpty } = useGetLabels();

  const {
    data: mails,
    isLoading: mailsLoading,
    error: mailsError,
    isEmpty: mailsEmpty,
  } = useGetMails(selectedLabelId);

  const { data: mail, isLoading: mailLoading, error: mailError } = useGetMail(selectedMailId);

  const firstMailId = mails?.[0]?.id || '';

  const handleToggleCompose = useCallback(() => {
    if (openNav) {
      openNavActions.setFalse();
    }
    openComposeActions.toggle();
  }, [openComposeActions, openNav, openNavActions]);

  const handleClickLabel = useCallback(
    (labelId: string) => {
      if (!mdUp) {
        openNavActions.setFalse();
      }

      if (labelId) {
        const href =
          labelId !== LABEL_INDEX
            ? `${paths.dashboard.mail}?label=${labelId}`
            : paths.dashboard.mail;
        router.push(href);
      }
    },
    [mdUp, openNavActions, router]
  );

  const handleClickMail = useCallback(
    (mailId: string) => {
      if (!mdUp) {
        openMailActions.setFalse();
      }

      const href =
        selectedLabelId !== LABEL_INDEX
          ? `${paths.dashboard.mail}?id=${mailId}&label=${selectedLabelId}`
          : `${paths.dashboard.mail}?id=${mailId}`;

      router.push(href);
    },
    [mdUp, selectedLabelId, router, openMailActions]
  );

  useEffect(() => {
    if (mailsError || mailError) {
      router.push(paths.dashboard.mail);
    }
  }, [mailsError, mailError, router]);

  useEffect(() => {
    if (!selectedMailId && firstMailId) {
      handleClickMail(firstMailId);
    }
  }, [firstMailId, handleClickMail, selectedMailId]);

  useEffect(() => {
    if (openCompose) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openCompose]);

  return (
    <>
      <DashboardContent
        maxWidth={false}
        sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
          Mail
        </Typography>

        <Layout
          sx={{
            p: 1,
            borderRadius: 2,
            flex: '1 1 auto',
            bgcolor: 'background.neutral',
          }}
          slots={{
            header: (
              <MailHeader
                onOpenNav={openNavActions.setTrue}
                onOpenMail={mailsEmpty ? undefined : openMailActions.setTrue}
                sx={{ display: { md: 'none' } }}
              />
            ),
            nav: (
              <MailNav
                labels={labels}
                empty={labelsEmpty}
                loading={labelsLoading}
                openNav={openNav}
                onCloseNav={openNavActions.setFalse}
                selectedLabelId={selectedLabelId}
                handleClickLabel={handleClickLabel}
                onToggleCompose={handleToggleCompose}
              />
            ),
            list: (
              <MailList
                mails={mails}
                empty={mailsEmpty}
                loading={mailsLoading || labelsLoading}
                openMail={openMail}
                onCloseMail={openMailActions.setFalse}
                onClickMail={handleClickMail}
                selectedLabelId={selectedLabelId}
                selectedMailId={selectedMailId}
              />
            ),
            details: (
              <MailDetails
                mail={mail}
                empty={mailsEmpty}
                loading={mailsLoading || mailLoading}
                renderLabel={(id: string) => labels.filter((label) => label.id === id)[0]}
              />
            ),
          }}
        />
      </DashboardContent>

      {openCompose && <MailCompose onCloseCompose={openComposeActions.setFalse} />}
    </>
  );
}
