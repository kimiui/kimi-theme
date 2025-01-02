import React from 'react';
interface CodeTabsProps {
    tabs: {
        [key: string]: string;
    };
    sx?: any;
}
declare const CodeTabs: React.FC<CodeTabsProps>;
export default CodeTabs;
