import { lazy, Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Logo } from 'kimi-theme/components/logo';
import { Outlet, useRoutes } from 'react-router-dom';
import { LoadingScreen } from 'kimi-theme/components';
import { DashboardLayout } from 'kimi-theme/layouts/dashboard';

import { navData as docsNavData } from './config-nav-docs';

const IntroductionPage = lazy(() => import('kimi-theme/pages/docs/introduction/page'));
const GettingStartedPage = lazy(() => import('kimi-theme/pages/docs/getting-started/page'));

const ComponentsPage = lazy(() => import('kimi-theme/pages/docs/components/page'));

// FOUNDATION
const ColorsPage = lazy(() => import('kimi-theme/pages/docs/foundation/colors/page'));
const GridPage = lazy(() => import('kimi-theme/pages/docs/foundation/grid/page'));
const IconsPage = lazy(() => import('kimi-theme/pages/docs/foundation/icons/page'));
const ShadowsPage = lazy(() => import('kimi-theme/pages/docs/foundation/shadows/page'));
const TypographyPage = lazy(() => import('kimi-theme/pages/docs/foundation/typography/page'));

// MUI
const AccordionPage = lazy(() => import('kimi-theme/pages/docs/components/mui/accordion/page'));
const AlertPage = lazy(() => import('kimi-theme/pages/docs/components/mui/alert/page'));
const AutocompletePage = lazy(
  () => import('kimi-theme/pages/docs/components/mui/autocomplete/page')
);
const AvatarPage = lazy(() => import('kimi-theme/pages/docs/components/mui/avatar/page'));
const BadgePage = lazy(() => import('kimi-theme/pages/docs/components/mui/badge/page'));
const BreadcrumbsPage = lazy(() => import('kimi-theme/pages/docs/components/mui/breadcrumbs/page'));
const ButtonsPage = lazy(() => import('kimi-theme/pages/docs/components/mui/buttons/page'));
const CheckboxPage = lazy(() => import('kimi-theme/pages/docs/components/mui/checkbox/page'));
const ChipPage = lazy(() => import('kimi-theme/pages/docs/components/mui/chip/page'));
const DataGridPage = lazy(() => import('kimi-theme/pages/docs/components/mui/data-grid/page'));
const DialogPage = lazy(() => import('kimi-theme/pages/docs/components/mui/dialog/page'));
const ListPage = lazy(() => import('kimi-theme/pages/docs/components/mui/list/page'));
const MenuPage = lazy(() => import('kimi-theme/pages/docs/components/mui/menu/page'));
const PaginationPage = lazy(() => import('kimi-theme/pages/docs/components/mui/pagination/page'));
const PickersPage = lazy(() => import('kimi-theme/pages/docs/components/mui/pickers/page'));
const PopoverPage = lazy(() => import('kimi-theme/pages/docs/components/mui/popover/page'));
const ProgressPage = lazy(() => import('kimi-theme/pages/docs/components/mui/progress/page'));
const RadioButtonsPage = lazy(
  () => import('kimi-theme/pages/docs/components/mui/radio-button/page')
);
const RatingPage = lazy(() => import('kimi-theme/pages/docs/components/mui/rating/page'));
const SliderPage = lazy(() => import('kimi-theme/pages/docs/components/mui/slider/page'));
const SwitchPage = lazy(() => import('kimi-theme/pages/docs/components/mui/switch/page'));
const TablePage = lazy(() => import('kimi-theme/pages/docs/components/mui/table/page'));
const TabsPage = lazy(() => import('kimi-theme/pages/docs/components/mui/tabs/page'));
const TextFieldPage = lazy(() => import('kimi-theme/pages/docs/components/mui/textfield/page'));
const TimelinePage = lazy(() => import('kimi-theme/pages/docs/components/mui/timeline/page'));
const TooltipPage = lazy(() => import('kimi-theme/pages/docs/components/mui/tooltip/page'));
const TransferList = lazy(() => import('kimi-theme/pages/docs/components/mui/transfer-list/page'));
const TreeViewPage = lazy(() => import('kimi-theme/pages/docs/components/mui/tree-view/page'));

// EXTRA
const AnimatePage = lazy(() => import('kimi-theme/pages/docs/components/extra/animate/page'));
const CarouselPage = lazy(() => import('kimi-theme/pages/docs/components/extra/carousel/page'));
const ChartPage = lazy(() => import('kimi-theme/pages/docs/components/extra/chart/page'));
const DndPage = lazy(() => import('kimi-theme/pages/docs/components/extra/dnd/page'));
const EditorPage = lazy(() => import('kimi-theme/pages/docs/components/extra/editor/page'));
const FormValidationPage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/form-validation/page')
);
const FormWizardPage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/form-wizard/page')
);
const ImagePage = lazy(() => import('kimi-theme/pages/docs/components/extra/image/page'));
const LabelPage = lazy(() => import('kimi-theme/pages/docs/components/extra/label/page'));
const LightboxPage = lazy(() => import('kimi-theme/pages/docs/components/extra/lightbox/page'));
const MapPage = lazy(() => import('kimi-theme/pages/docs/components/extra/map/page'));
const MarkdownPage = lazy(() => import('kimi-theme/pages/docs/components/extra/markdown/page'));
const MegaMenuPage = lazy(() => import('kimi-theme/pages/docs/components/extra/mega-menu/page'));
const MultiLanguagePage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/multi-language/page')
);
const NavigationBarPage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/navigation-bar/page')
);
const OrganizationChartPage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/organization-chart/page')
);
const ScrollPage = lazy(() => import('kimi-theme/pages/docs/components/extra/scroll/page'));
const ScrollProgressPage = lazy(
  () => import('kimi-theme/pages/docs/components/extra/scroll-progress/page')
);
const SnackbarPage = lazy(() => import('kimi-theme/pages/docs/components/extra/snackbar/page'));
const UploadPage = lazy(() => import('kimi-theme/pages/docs/components/extra/upload/page'));
const UtilitiesPage = lazy(() => import('kimi-theme/pages/docs/components/extra/utilities/page'));
// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '',
      element: (
        <DashboardLayout
          data={{
            nav: docsNavData,
            sidebar: {
              top: (
                <Stack sx={{ pl: 3.5, pt: 2.5, pb: 2.5 }} direction="row" alignItems="center">
                  <Logo />

                  <Typography
                    variant="h5"
                    sx={{ ml: 1, color: (theme) => theme.palette.primary.main }}
                  >
                    Kimi UI
                  </Typography>
                </Stack>
              ),
              bottom: null,
            },
          }}
          slotProps={{
            header: { slotsDisplay: { notifications: false, settings: false, account: false } },
            sidebar: { toggleNav: { display: false } },
          }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <GettingStartedPage />, index: true },
        { path: 'introduction', element: <IntroductionPage /> },
        { path: 'getting-started', element: <GettingStartedPage /> },
        {
          path: 'foundation',
          children: [
            { element: <ColorsPage />, index: true },
            { path: 'colors', element: <ColorsPage /> },
            { path: 'grid', element: <GridPage /> },
            { path: 'icons', element: <IconsPage /> },
            { path: 'shadows', element: <ShadowsPage /> },
            { path: 'typography', element: <TypographyPage /> },
          ],
        },
        {
          path: 'components',
          children: [
            { element: <ComponentsPage />, index: true },
            {
              path: 'mui',
              children: [
                { path: 'accordion', element: <AccordionPage /> },
                { path: 'alert', element: <AlertPage /> },
                { path: 'autocomplete', element: <AutocompletePage /> },
                { path: 'avatar', element: <AvatarPage /> },
                { path: 'badge', element: <BadgePage /> },
                { path: 'breadcrumbs', element: <BreadcrumbsPage /> },
                { path: 'buttons', element: <ButtonsPage /> },
                { path: 'checkbox', element: <CheckboxPage /> },
                { path: 'chip', element: <ChipPage /> },
                { path: 'data-grid', element: <DataGridPage /> },
                { path: 'dialog', element: <DialogPage /> },
                { path: 'list', element: <ListPage /> },
                { path: 'menu', element: <MenuPage /> },
                { path: 'pagination', element: <PaginationPage /> },
                { path: 'pickers', element: <PickersPage /> },
                { path: 'popover', element: <PopoverPage /> },
                { path: 'progress', element: <ProgressPage /> },
                { path: 'radio-button', element: <RadioButtonsPage /> },
                { path: 'rating', element: <RatingPage /> },
                { path: 'slider', element: <SliderPage /> },
                { path: 'switch', element: <SwitchPage /> },
                { path: 'table', element: <TablePage /> },
                { path: 'tabs', element: <TabsPage /> },
                { path: 'textfield', element: <TextFieldPage /> },
                { path: 'timeline', element: <TimelinePage /> },
                { path: 'tooltip', element: <TooltipPage /> },
                { path: 'transfer-list', element: <TransferList /> },
                { path: 'tree-view', element: <TreeViewPage /> },
              ],
            },

            {
              path: 'extra',
              element: <Outlet />,
              children: [
                { path: 'animate', element: <AnimatePage /> },
                { path: 'carousel', element: <CarouselPage /> },
                { path: 'chart', element: <ChartPage /> },
                { path: 'dnd', element: <DndPage /> },
                { path: 'editor', element: <EditorPage /> },
                { path: 'form-validation', element: <FormValidationPage /> },
                { path: 'form-wizard', element: <FormWizardPage /> },
                { path: 'image', element: <ImagePage /> },
                { path: 'label', element: <LabelPage /> },
                { path: 'lightbox', element: <LightboxPage /> },
                { path: 'map', element: <MapPage /> },
                { path: 'markdown', element: <MarkdownPage /> },
                { path: 'mega-menu', element: <MegaMenuPage /> },
                { path: 'multi-language', element: <MultiLanguagePage /> },
                { path: 'navigation-bar', element: <NavigationBarPage /> },
                { path: 'organization-chart', element: <OrganizationChartPage /> },
                { path: 'scroll', element: <ScrollPage /> },
                { path: 'scroll-progress', element: <ScrollProgressPage /> },
                { path: 'snackbar', element: <SnackbarPage /> },
                { path: 'upload', element: <UploadPage /> },
                { path: 'utilities', element: <UtilitiesPage /> },
              ],
            },
          ],
        },
      ],
    },
  ]);
}
