// Core
import { getFullApiUrl } from 'instruments';

const GROUP_ID = 'SmNFkgL6cFbH';
const TOKEN = '1h7f5k6gn3';
const url = 'https://lab.lectrum.io/react/api';
const api = getFullApiUrl(url, GROUP_ID);

export { GROUP_ID, TOKEN, api, url };
