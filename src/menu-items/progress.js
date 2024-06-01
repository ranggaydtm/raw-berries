// third-party
import { FormattedMessage } from 'react-intl';

import { IconLoader, IconBackhoe } from '@tabler/icons';

const icons = {
    IconLoader,
    IconBackhoe
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const onProgress = {
    id: 'onProgress',
    title: <FormattedMessage id="onProgress" />,
    type: 'group',
    children: [
        {
            id: 'coming-soon',
            title: <FormattedMessage id="coming-soon" />,
            type: 'item',
            url: '/on-progress/coming-soon',
            icon: icons.IconLoader,
            breadcrumbs: false
        },
        {
            id: 'under-construction',
            title: <FormattedMessage id="under-construction" />,
            type: 'item',
            url: '/on-progress/under-construction',
            icon: icons.IconBackhoe,
            breadcrumbs: false
        }
    ]
};

export default onProgress;
