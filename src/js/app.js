import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppRoutes } from './components/AppRoutes';
import { ForkRibbon } from './components/util/ForkRibbon';

import '../less/base.less';
import '../img/favicon.png';

injectTapEventPlugin(); // Needed for onTouchTap (Material UI)
ForkRibbon(); // Needed Challenges link

render(<AppRoutes />, document.getElementById('app'));
