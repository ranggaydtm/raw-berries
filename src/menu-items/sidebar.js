/* eslint-disable no-unused-vars */
import { FormattedMessage } from 'react-intl';

import { IconLayout, IconLoader, IconBackhoe } from '@tabler/icons';

const icons = {
    IconLayout,
    IconLoader,
    IconBackhoe
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const sidebar = {
    id: 'sidebar',
    // title: <FormattedMessage id="sidebar" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            icon: icons.IconLayout,
            url: '/dashboard/default'
        },
        {
            id: 'coming-soon',
            title: 'Coming Soon',
            type: 'item',
            icon: icons.IconLoader,
            url: '/on-progress/coming-soon'
        },
        {
            id: 'under-construction',
            title: 'Under Construction',
            type: 'item',
            icon: icons.IconBackhoe,
            url: '/on-progress/under-construction'
        }
    ]
};

export default sidebar;
