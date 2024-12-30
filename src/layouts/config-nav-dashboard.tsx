import { paths } from 'src/routes/paths';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    // subheader: 'Overview',
    items: [
      {
        title: 'Dashboard',
        path: paths.dashboard.root,
        icon: <Iconify icon="material-symbols:home-rounded" />,
      },
      // {
      //   title: 'Analytics',
      //   path: paths.dashboard.general.analytics,
      //   icon: <Iconify icon="bx:bxs-bar-chart-alt-2" />,
      // },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      // {
      //   title: 'Banking',
      //   path: paths.dashboard.general.banking,
      //   icon: <Iconify icon="bx:bxs-bank" />,
      // },
      // {
      //   title: 'Booking',
      //   path: paths.dashboard.general.booking,
      //   icon: <Iconify icon="bx:bxs-book" />,
      // },
      // {
      //   title: 'File',
      //   path: paths.dashboard.general.file,
      //   icon: <Iconify icon="bi:file-earmark" />,
      // },
      // {
      //   title: 'Course',
      //   path: paths.dashboard.general.course,
      //   icon: <Iconify icon="bx:bxs-book" />,
      // },
      {
        title: 'Users',
        path: paths.dashboard.users.root,
        icon: <Iconify icon="bx:bxs-user" />,
      },
      {
        title: 'Products',
        path: paths.dashboard.products.root,
        icon: <Iconify icon="bx:bxs-shopping-bags" />,
      },
      {
        title: 'Orders',
        path: paths.dashboard.orders.root,
        icon: <Iconify icon="bx:bxs-cart" />,
      },
      {
        title: 'Invoices',
        path: paths.dashboard.invoices.root,
        icon: <Iconify icon="bx:bxs-receipt" />,
      },
      // {
      //   title: 'Blog',
      //   path: paths.dashboard.posts.root,
      //   icon: <Iconify icon="bx:bxs-edit-location" />,
      //   children: [
      //     { title: 'List', path: paths.dashboard.posts.root },
      //     { title: 'Details', path: paths.dashboard.posts.demo.details },
      //     { title: 'Create', path: paths.dashboard.posts.new },
      //     { title: 'Edit', path: paths.dashboard.posts.demo.edit },
      //   ],
      // },
      // {
      //   title: 'Jobs',
      //   path: paths.dashboard.jobs.root,
      //   icon: <Iconify icon="bx:bxs-briefcase" />,
      //   children: [
      //     { title: 'Details', path: paths.dashboard.jobs.demo.details },
      //     { title: 'Create', path: paths.dashboard.jobs.new },
      //     { title: 'Edit', path: paths.dashboard.jobs.demo.edit },
      //   ],
      // },
      // {
      //   title: 'Tours',
      //   path: paths.dashboard.tours.root,
      //   icon: <Iconify icon="bx:bxs-plane-take-off" />,
      //   children: [
      //     { title: 'Details', path: paths.dashboard.tours.demo.details },
      //     { title: 'Create', path: paths.dashboard.tours.new },
      //     { title: 'Edit', path: paths.dashboard.tours.demo.edit },
      //   ],
      // },
      // {
      //   title: 'File manager',
      //   path: paths.dashboard.fileManager,
      //   icon: <Iconify icon="bi:folder" />,
      // },
    ],
  },
  {
    subheader: 'App',
    items: [
      {
        title: 'Mail',
        path: paths.dashboard.mail,
        icon: <Iconify icon="material-symbols:mail-rounded" />,
        info: (
          <Label color="error" variant="inverted">
            +32
          </Label>
        ),
      },
      {
        title: 'Chat',
        path: paths.dashboard.chat,
        icon: <Iconify icon="material-symbols:chat-rounded" />,
      },
      {
        title: 'Kanban',
        path: paths.dashboard.kanban,
        icon: <Iconify icon="material-symbols:view-kanban-rounded" />,
        caption: 'Task management tool',
      },
      {
        title: 'Calendar',
        path: paths.dashboard.calendar,
        icon: <Iconify icon="material-symbols:calendar-month-rounded" />,
      },
    ],
    // },
    // {
    //   subheader: "Template",
    //   items: [
    //     {
    //       title: "Components",
    //       path: paths.dashboard.components.root,
    //       icon: <Iconify icon="icon-park-solid:figma-component" />,
    //       children: [
    //         {
    //           title: "Foundation",
    //           path: paths.dashboard.components.foundation.root,
    //           children: [
    //             {
    //               title: "Color",
    //               path: paths.dashboard.components.foundation.colors,
    //             },
    //             {
    //               title: "Typography",
    //               path: paths.dashboard.components.foundation.typography,
    //             },
    //             {
    //               title: "Shadows",
    //               path: paths.dashboard.components.foundation.shadows,
    //             },
    //             {
    //               title: "Grid",
    //               path: paths.dashboard.components.foundation.grid,
    //             },
    //             {
    //               title: "Icons",
    //               path: paths.dashboard.components.foundation.icons,
    //             },
    //           ],
    //         },
    //         {
    //           title: "MUI",
    //           path: paths.dashboard.components.mui.root,
    //           children: [
    //             {
    //               title: "Accordion",
    //               path: paths.dashboard.components.mui.accordion,
    //             },
    //             { title: "Alert", path: paths.dashboard.components.mui.alert },
    //             {
    //               title: "Autocomplete",
    //               path: paths.dashboard.components.mui.autocomplete,
    //             },
    //             { title: "Avatar", path: paths.dashboard.components.mui.avatar },
    //             { title: "Badge", path: paths.dashboard.components.mui.badge },
    //             {
    //               title: "Breadcrumbs",
    //               path: paths.dashboard.components.mui.breadcrumbs,
    //             },
    //             {
    //               title: "Buttons",
    //               path: paths.dashboard.components.mui.buttons,
    //             },
    //             {
    //               title: "Checkbox",
    //               path: paths.dashboard.components.mui.checkbox,
    //             },
    //             { title: "Chip", path: paths.dashboard.components.mui.chip },
    //             {
    //               title: "Data Grid",
    //               path: paths.dashboard.components.mui.dataGrid,
    //             },
    //             { title: "Dialog", path: paths.dashboard.components.mui.dialog },
    //             { title: "List", path: paths.dashboard.components.mui.list },
    //             { title: "Menu", path: paths.dashboard.components.mui.menu },
    //             {
    //               title: "Pagination",
    //               path: paths.dashboard.components.mui.pagination,
    //             },
    //             {
    //               title: "Pickers",
    //               path: paths.dashboard.components.mui.pickers,
    //             },
    //             {
    //               title: "Popover",
    //               path: paths.dashboard.components.mui.popover,
    //             },
    //             {
    //               title: "Progress",
    //               path: paths.dashboard.components.mui.progress,
    //             },
    //             {
    //               title: "Radio button",
    //               path: paths.dashboard.components.mui.radioButton,
    //             },
    //             { title: "Rating", path: paths.dashboard.components.mui.rating },
    //             { title: "Slider", path: paths.dashboard.components.mui.slider },
    //             {
    //               title: "Stepper",
    //               path: paths.dashboard.components.mui.stepper,
    //             },
    //             { title: "Switch", path: paths.dashboard.components.mui.switch },
    //             { title: "Table", path: paths.dashboard.components.mui.table },
    //             { title: "Tabs", path: paths.dashboard.components.mui.tabs },
    //             {
    //               title: "TextField",
    //               path: paths.dashboard.components.mui.textField,
    //             },
    //             {
    //               title: "Timeline",
    //               path: paths.dashboard.components.mui.timeline,
    //             },
    //             {
    //               title: "Tooltip",
    //               path: paths.dashboard.components.mui.tooltip,
    //             },
    //             {
    //               title: "Transfer List",
    //               path: paths.dashboard.components.mui.transferList,
    //             },
    //             {
    //               title: "Tree View",
    //               path: paths.dashboard.components.mui.treeView,
    //             },
    //           ],
    //         },
    //         {
    //           title: "Extra",
    //           path: paths.dashboard.components.extra.root,
    //           children: [
    //             {
    //               title: "Animate",
    //               path: paths.dashboard.components.extra.animate,
    //             },
    //             {
    //               title: "Carousel",
    //               path: paths.dashboard.components.extra.carousel,
    //             },
    //             { title: "Chart", path: paths.dashboard.components.extra.chart },
    //             { title: "Dnd", path: paths.dashboard.components.extra.dnd },
    //             {
    //               title: "Editor",
    //               path: paths.dashboard.components.extra.editor,
    //             },
    //             {
    //               title: "Form Validation",
    //               path: paths.dashboard.components.extra.formValidation,
    //             },
    //             {
    //               title: "Form Wizard",
    //               path: paths.dashboard.components.extra.formWizard,
    //             },
    //             { title: "Image", path: paths.dashboard.components.extra.image },
    //             { title: "Label", path: paths.dashboard.components.extra.label },
    //             {
    //               title: "Lightbox",
    //               path: paths.dashboard.components.extra.lightbox,
    //             },
    //             { title: "Map", path: paths.dashboard.components.extra.map },
    //             {
    //               title: "Markdown",
    //               path: paths.dashboard.components.extra.markdown,
    //             },
    //             {
    //               title: "Mega Menu",
    //               path: paths.dashboard.components.extra.megaMenu,
    //             },
    //             {
    //               title: "Mutiple Language",
    //               path: paths.dashboard.components.extra.mutipleLanguage,
    //             },
    //             {
    //               title: "Navigation Bar",
    //               path: paths.dashboard.components.extra.navigationBar,
    //             },
    //             {
    //               title: "Organization Chart",
    //               path: paths.dashboard.components.extra.organizationChart,
    //             },
    //             {
    //               title: "Scroll",
    //               path: paths.dashboard.components.extra.scroll,
    //             },
    //             {
    //               title: "Scroll Progress",
    //               path: paths.dashboard.components.extra.scrollProgress,
    //             },
    //             {
    //               title: "Snackbar",
    //               path: paths.dashboard.components.extra.snackbar,
    //             },
    //             {
    //               title: "Upload",
    //               path: paths.dashboard.components.extra.upload,
    //             },
    //             {
    //               title: "Utilities",
    //               path: paths.dashboard.components.extra.utilities,
    //             },
    //             {
    //               title: "Walktour",
    //               path: paths.dashboard.components.extra.walktour,
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
  },
];
