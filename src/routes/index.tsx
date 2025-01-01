import { lazy, Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Outlet, useRoutes } from 'react-router-dom';

import { Logo } from 'lib/components/logo';
import { LoadingScreen } from 'lib/components';
import { DashboardLayout } from 'lib/layouts/dashboard';

import { navData as docsNavData } from './config-nav-docs';

const IntroductionPage = lazy(() => import('../pages/introduction/page'));
const GettingStartedPage = lazy(() => import('../pages/getting-started/page'));

const ComponentsPage = lazy(() => import('../pages/components/page'));

// FOUNDATION
const ColorsPage = lazy(() => import('../pages/foundation/colors/page'));
const GridPage = lazy(() => import('../pages/foundation/grid/page'));
const IconsPage = lazy(() => import('../pages/foundation/icons/page'));
const ShadowsPage = lazy(() => import('../pages/foundation/shadows/page'));
const TypographyPage = lazy(() => import('../pages/foundation/typography/page'));

// MUI
const AccordionPage = lazy(() => import('../pages/components/mui/accordion/page'));
const AlertPage = lazy(() => import('../pages/components/mui/alert/page'));
const AutocompletePage = lazy(() => import('../pages/components/mui/autocomplete/page'));
const AvatarPage = lazy(() => import('../pages/components/mui/avatar/page'));
const BadgePage = lazy(() => import('../pages/components/mui/badge/page'));
const BreadcrumbsPage = lazy(() => import('../pages/components/mui/breadcrumbs/page'));
const ButtonsPage = lazy(() => import('../pages/components/mui/buttons/page'));
const CheckboxPage = lazy(() => import('../pages/components/mui/checkbox/page'));
const ChipPage = lazy(() => import('../pages/components/mui/chip/page'));
const DataGridPage = lazy(() => import('../pages/components/mui/data-grid/page'));
const DialogPage = lazy(() => import('../pages/components/mui/dialog/page'));
const ListPage = lazy(() => import('../pages/components/mui/list/page'));
const MenuPage = lazy(() => import('../pages/components/mui/menu/page'));
const PaginationPage = lazy(() => import('../pages/components/mui/pagination/page'));
const PickersPage = lazy(() => import('../pages/components/mui/pickers/page'));
const PopoverPage = lazy(() => import('../pages/components/mui/popover/page'));
const ProgressPage = lazy(() => import('../pages/components/mui/progress/page'));
const RadioButtonsPage = lazy(() => import('../pages/components/mui/radio-button/page'));
const RatingPage = lazy(() => import('../pages/components/mui/rating/page'));
const SliderPage = lazy(() => import('../pages/components/mui/slider/page'));
const SwitchPage = lazy(() => import('../pages/components/mui/switch/page'));
const TablePage = lazy(() => import('../pages/components/mui/table/page'));
const TabsPage = lazy(() => import('../pages/components/mui/tabs/page'));
const TextFieldPage = lazy(() => import('../pages/components/mui/textfield/page'));
const TimelinePage = lazy(() => import('../pages/components/mui/timeline/page'));
const TooltipPage = lazy(() => import('../pages/components/mui/tooltip/page'));
const TransferList = lazy(() => import('../pages/components/mui/transfer-list/page'));
const TreeViewPage = lazy(() => import('../pages/components/mui/tree-view/page'));

// EXTRA
const AnimatePage = lazy(() => import('../pages/components/extra/animate/page'));
const CarouselPage = lazy(() => import('../pages/components/extra/carousel/page'));
const ChartPage = lazy(() => import('../pages/components/extra/chart/page'));
const DndPage = lazy(() => import('../pages/components/extra/dnd/page'));
const EditorPage = lazy(() => import('../pages/components/extra/editor/page'));
const FormValidationPage = lazy(() => import('../pages/components/extra/form-validation/page'));
const FormWizardPage = lazy(() => import('../pages/components/extra/form-wizard/page'));
const ImagePage = lazy(() => import('../pages/components/extra/image/page'));
const LabelPage = lazy(() => import('../pages/components/extra/label/page'));
const LightboxPage = lazy(() => import('../pages/components/extra/lightbox/page'));
const MapPage = lazy(() => import('../pages/components/extra/map/page'));
const MarkdownPage = lazy(() => import('../pages/components/extra/markdown/page'));
const MegaMenuPage = lazy(() => import('../pages/components/extra/mega-menu/page'));
const MultiLanguagePage = lazy(() => import('../pages/components/extra/multi-language/page'));
const NavigationBarPage = lazy(() => import('../pages/components/extra/navigation-bar/page'));
const OrganizationChartPage = lazy(
  () => import('../pages/components/extra/organization-chart/page')
);
const ScrollPage = lazy(() => import('../pages/components/extra/scroll/page'));
const ScrollProgressPage = lazy(() => import('../pages/components/extra/scroll-progress/page'));
const SnackbarPage = lazy(() => import('../pages/components/extra/snackbar/page'));
const UploadPage = lazy(() => import('../pages/components/extra/upload/page'));
const UtilitiesPage = lazy(() => import('../pages/components/extra/utilities/page'));
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

                  <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                    v0.0.10
                  </Typography>
                </Stack>
              ),
              bottom: null,
            },
          }}
          slotProps={{
            header: { slotsDisplay: { notifications: false, settings: false, account: false } },
            sidebar: {
              toggleNav: { display: false },
              rootItem: {
                sx: {
                  minHeight: 20,
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: 'var(--nav-item-root-active-color)',
                  },
                },
              },
            },
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
