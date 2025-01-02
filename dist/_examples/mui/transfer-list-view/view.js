import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { SimpleTransferList } from './simple-transfer-list';
import { ScrollToViewTemplate } from '../../component-template';
import { EnhancedTransferList } from './enhanced-transfer-list';
// ----------------------------------------------------------------------
export function TransferListView() {
    const DEMO = [
        {
            name: 'Simple',
            component: (_jsx(ComponentBlock, { children: _jsx(SimpleTransferList, {}) })),
        },
        {
            name: 'Enhanced',
            component: (_jsx(ComponentBlock, { children: _jsx(EnhancedTransferList, {}) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Transfer List", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Transfer List' },
                    ], moreLink: ['https://mui.com/components/transfer-list'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
