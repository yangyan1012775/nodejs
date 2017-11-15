const fs = require('fs');
const path = require('path');
const os = require('os');
fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'));

