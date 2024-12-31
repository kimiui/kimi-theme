'use client';

import type { IInvoice } from 'kimi-theme/types/invoice';

import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useRouter } from 'routes-react';
import { useForm } from 'react-hook-form';
import { paths } from 'kimi-theme/routes/paths';
import { _addressBooks } from 'kimi-theme/_mock';
import LoadingButton from '@mui/lab/LoadingButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { today, fIsAfter } from 'kimi-theme/utils/format-time';
import { Form, schemaHelper } from 'kimi-theme/components/hook-form';

import { InvoiceNewEditAddress } from './invoice-new-edit-address';
import { InvoiceNewEditDetails } from './invoice-new-edit-details';
import { InvoiceNewEditStatusDate } from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

export type NewInvoiceSchemaType = zod.infer<typeof NewInvoiceSchema>;

export const NewInvoiceSchema = zod
  .object({
    invoiceTo: zod
      .custom<IInvoice['invoiceTo'] | null>()
      .refine((data) => data !== null, { message: 'Invoice to is required!' }),
    createDate: schemaHelper.date({
      message: { required_error: 'Create date is required!' },
    }),
    dueDate: schemaHelper.date({
      message: { required_error: 'Due date is required!' },
    }),
    items: zod.array(
      zod.object({
        title: zod.string().min(1, { message: 'Title is required!' }),
        service: zod.string().min(1, { message: 'Service is required!' }),
        quantity: zod.number().min(1, { message: 'Quantity must be more than 0' }),
        // Not required
        price: zod.number(),
        total: zod.number(),
        description: zod.string(),
      })
    ),
    // Not required
    taxes: zod.number(),
    status: zod.string(),
    discount: zod.number(),
    shipping: zod.number(),
    totalAmount: zod.number(),
    invoiceNumber: zod.string(),
    invoiceFrom: zod.custom<IInvoice['invoiceFrom']>().nullable(),
  })
  .refine((data) => !fIsAfter(data.createDate, data.dueDate), {
    message: 'Due date cannot be earlier than create date!',
    path: ['dueDate'],
  });

// ----------------------------------------------------------------------

type Props = {
  currentInvoice?: IInvoice;
};

export function InvoiceNewEditForm({ currentInvoice }: Readonly<Props>) {
  const router = useRouter();

  const [loadingSave, loadingSaveActions] = useBoolean();

  const [loadingSend, loadingSendActions] = useBoolean();

  const defaultValues = useMemo(
    () => ({
      invoiceNumber: currentInvoice?.invoiceNumber || 'INV-1990',
      createDate: currentInvoice?.createDate || today(),
      dueDate: currentInvoice?.dueDate || null,
      taxes: currentInvoice?.taxes || 0,
      shipping: currentInvoice?.shipping || 0,
      status: currentInvoice?.status || 'draft',
      discount: currentInvoice?.discount || 0,
      invoiceFrom: currentInvoice?.invoiceFrom || _addressBooks[0],
      invoiceTo: currentInvoice?.invoiceTo || undefined,
      totalAmount: currentInvoice?.totalAmount || 0,
      items: currentInvoice?.items || [
        {
          title: '',
          description: '',
          service: '',
          quantity: 1,
          price: 0,
          total: 0,
        },
      ],
    }),
    [currentInvoice]
  );

  const methods = useForm<NewInvoiceSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewInvoiceSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleSaveAsDraft = handleSubmit(async (data) => {
    loadingSaveActions.setTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSaveActions.setFalse();
      router.push(paths.dashboard.invoices.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSaveActions.setFalse();
    }
  });

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSendActions.setTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSendActions.setFalse();
      router.push(paths.dashboard.invoices.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSendActions.setFalse();
    }
  });

  return (
    <Form methods={methods}>
      <Card>
        <InvoiceNewEditAddress />

        <InvoiceNewEditStatusDate />

        <InvoiceNewEditDetails />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          variant="outlined"
          loading={loadingSave && isSubmitting}
          onClick={handleSaveAsDraft}
        >
          Save as draft
        </LoadingButton>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleCreateAndSend}
        >
          {currentInvoice ? 'Update' : 'Create'} & send
        </LoadingButton>
      </Stack>
    </Form>
  );
}
