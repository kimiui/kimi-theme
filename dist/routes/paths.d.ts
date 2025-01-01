export declare const paths: {
    comingSoon: string;
    maintenance: string;
    pricing: string;
    payment: string;
    page403: string;
    page404: string;
    page500: string;
    changelog: string;
    product: {
        root: string;
        checkout: string;
        details: (id: string) => string;
        demo: {
            details: string;
        };
    };
    posts: {
        root: string;
        details: (title: string) => string;
        demo: {
            details: string;
        };
    };
    auth: {
        signIn: string;
        verify: string;
        signUp: string;
        updatePassword: string;
        resetPassword: string;
    };
    dashboard: {
        root: string;
        mail: string;
        chat: string;
        kanban: string;
        calendar: string;
        fileManager: string;
        general: {
            app: string;
            ecommerce: string;
            analytics: string;
            banking: string;
            booking: string;
            file: string;
            course: string;
        };
        users: {
            root: string;
            new: string;
            cards: string;
            profile: string;
            account: string;
            edit: (id: string) => string;
            demo: {
                edit: string;
            };
        };
        products: {
            root: string;
            new: string;
            details: (id: string) => string;
            edit: (id: string) => string;
            demo: {
                details: string;
                edit: string;
            };
        };
        invoices: {
            root: string;
            new: string;
            details: (id: string) => string;
            edit: (id: string) => string;
            demo: {
                details: string;
                edit: string;
            };
        };
        posts: {
            root: string;
            new: string;
            details: (title: string) => string;
            edit: (title: string) => string;
            demo: {
                details: string;
                edit: string;
            };
        };
        orders: {
            root: string;
            details: (id: string) => string;
            demo: {
                details: string;
            };
        };
        jobs: {
            root: string;
            new: string;
            details: (id: string) => string;
            edit: (id: string) => string;
            demo: {
                details: string;
                edit: string;
            };
        };
        tours: {
            root: string;
            new: string;
            details: (id: string) => string;
            edit: (id: string) => string;
            demo: {
                details: string;
                edit: string;
            };
        };
        charts: {
            root: string;
        };
    };
    docs: {
        root: string;
        gettingStarted: string;
        introduction: string;
        foundation: {
            root: string;
            colors: string;
            typography: string;
            shadows: string;
            grid: string;
            icons: string;
        };
        components: {
            root: string;
            mui: {
                root: string;
                accordion: string;
                alert: string;
                autocomplete: string;
                avatar: string;
                badge: string;
                breadcrumbs: string;
                buttons: string;
                checkbox: string;
                chip: string;
                dataGrid: string;
                dialog: string;
                list: string;
                menu: string;
                pagination: string;
                pickers: string;
                popover: string;
                progress: string;
                radioButton: string;
                rating: string;
                slider: string;
                stepper: string;
                switch: string;
                table: string;
                tabs: string;
                textField: string;
                timeline: string;
                tooltip: string;
                transferList: string;
                treeView: string;
            };
            extra: {
                root: string;
                animate: string;
                carousel: string;
                chart: string;
                dnd: string;
                editor: string;
                formValidation: string;
                formWizard: string;
                image: string;
                label: string;
                lightbox: string;
                map: string;
                markdown: string;
                megaMenu: string;
                mutipleLanguage: string;
                navigationBar: string;
                organizationChart: string;
                scroll: string;
                scrollProgress: string;
                snackbar: string;
                upload: string;
                utilities: string;
                walktour: string;
            };
        };
    };
};
