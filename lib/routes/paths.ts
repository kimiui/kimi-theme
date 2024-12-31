import { paramCase } from 'lib/utils/change-case';
import { _id, _postTitles } from 'lib/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  changelog: 'https://docs.kimistores.com/changelog',
  product: {
    root: `/product`,
    checkout: `/products/checkout`,
    details: (id: string) => `/products/${id}`,
    demo: { details: `/products/${MOCK_ID}` },
  },
  posts: {
    root: `/posts`,
    details: (title: string) => `/posts/${paramCase(title)}`,
    demo: { details: `/post/${paramCase(MOCK_TITLE)}` },
  },
  // AUTH
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
    verify: `${ROOTS.AUTH}/verify`,
    signUp: `${ROOTS.AUTH}/sign-up`,
    updatePassword: `${ROOTS.AUTH}/update-password`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
      course: `${ROOTS.DASHBOARD}/course`,
    },
    users: {
      root: `${ROOTS.DASHBOARD}/users`,
      new: `${ROOTS.DASHBOARD}/users/new`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/users/profile`,
      account: `${ROOTS.DASHBOARD}/users/account`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/users/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/users/${MOCK_ID}/edit`,
      },
    },
    products: {
      root: `${ROOTS.DASHBOARD}/products`,
      new: `${ROOTS.DASHBOARD}/products/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/products/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/products/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/products/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/products/${MOCK_ID}/edit`,
      },
    },
    invoices: {
      root: `${ROOTS.DASHBOARD}/invoices`,
      new: `${ROOTS.DASHBOARD}/invoices/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/invoices/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/invoices/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/invoices/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/invoices/${MOCK_ID}/edit`,
      },
    },
    posts: {
      root: `${ROOTS.DASHBOARD}/posts`,
      new: `${ROOTS.DASHBOARD}/posts/new`,
      details: (title: string) => `${ROOTS.DASHBOARD}/posts/${paramCase(title)}`,
      edit: (title: string) => `${ROOTS.DASHBOARD}/posts/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/posts/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DASHBOARD}/posts/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    orders: {
      root: `${ROOTS.DASHBOARD}/orders`,
      details: (id: string) => `${ROOTS.DASHBOARD}/order/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`,
      },
    },
    jobs: {
      root: `${ROOTS.DASHBOARD}/jobs`,
      new: `${ROOTS.DASHBOARD}/job/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/job/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/job/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`,
      },
    },
    tours: {
      root: `${ROOTS.DASHBOARD}/tours`,
      new: `${ROOTS.DASHBOARD}/tour/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/tour/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/tour/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`,
      },
    },
    charts: {
      root: `${ROOTS.DASHBOARD}/charts`,
    },
  },
  docs: {
    root: `/`,
    gettingStarted: `/getting-started`,
    introduction: `/introduction`,
    foundation: {
      root: `/foundation`,
      colors: `/foundation/colors`,
      typography: `/foundation/typography`,
      shadows: `/foundation/shadows`,
      grid: `/foundation/grid`,
      icons: `/foundation/icons`,
    },
    components: {
      root: `/components`,

      mui: {
        root: `/components/mui`,
        accordion: `/components/mui/accordion`,
        alert: `/components/mui/alert`,
        autocomplete: `/components/mui/autocomplete`,
        avatar: `/components/mui/avatar`,
        badge: `/components/mui/badge`,
        breadcrumbs: `/components/mui/breadcrumbs`,
        buttons: `/components/mui/buttons`,
        checkbox: `/components/mui/checkbox`,
        chip: `/components/mui/chip`,
        dataGrid: `/components/mui/data-grid`,
        dialog: `/components/mui/dialog`,
        list: `/components/mui/list`,
        menu: `/components/mui/menu`,
        pagination: `/components/mui/pagination`,
        pickers: `/components/mui/pickers`,
        popover: `/components/mui/popover`,
        progress: `/components/mui/progress`,
        radioButton: `/components/mui/radio-button`,
        rating: `/components/mui/rating`,
        slider: `/components/mui/slider`,
        stepper: `/components/mui/stepper`,
        switch: `/components/mui/switch`,
        table: `/components/mui/table`,
        tabs: `/components/mui/tabs`,
        textField: `/components/mui/textfield`,
        timeline: `/components/mui/timeline`,
        tooltip: `/components/mui/tooltip`,
        transferList: `/components/mui/transfer-list`,
        treeView: `/components/mui/tree-view`,
      },
      extra: {
        root: `/components/extra`,
        animate: `/components/extra/animate`,
        carousel: `/components/extra/carousel`,
        chart: `/components/extra/chart`,
        dnd: `/components/extra/dnd`,
        editor: `/components/extra/editor`,
        formValidation: `/components/extra/form-validation`,
        formWizard: `/components/extra/form-wizard`,
        image: `/components/extra/image`,
        label: `/components/extra/label`,
        lightbox: `/components/extra/lightbox`,
        map: `/components/extra/map`,
        markdown: `/components/extra/markdown`,
        megaMenu: `/components/extra/mega-menu`,
        mutipleLanguage: `/components/extra/mutiple-language`,
        navigationBar: `/components/extra/navigation-bar`,
        organizationChart: `/components/extra/organization-chart`,
        scroll: `/components/extra/scroll`,
        scrollProgress: `/components/extra/scroll-progress`,
        snackbar: `/components/extra/snackbar`,
        upload: `/components/extra/upload`,
        utilities: `/components/extra/utilities`,
        walktour: `/components/extra/walktour`,
      },
    },
  },
};
