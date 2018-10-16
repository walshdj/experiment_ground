**Gitter**: https://gitter.im/waslhdj

**Project Board**: https://github.com/walshdj/experiment_ground/projects/1

**Wiki**: https://github.com/walshdj/experiment_ground/wiki

# Prerequisites
- NodeJS - Latest LTS Version: 8.12.0 (includes npm 6.4.1)
- download from https://nodejs.org/en/download/

## Test Installation
- on command line: `node -v` will return `v8.12.0`
- on command line: `npm -v` will return `v6.4.1`

# Clone Source Code

on command line `git clone https://github.com/walshdj/experiment_ground.git`

# Install Dev Dependencies

- `npm install --only=dev` installs dev dependencies used for project.

# Build
- `npm run build` creates release artifact `main.js` (linked to in `index.html` file) from `src/index.js`

# Run
- `npm run start` does the following

1. kicks off http server for serving the front end app available on http://localhost:1992/
2. sets up a 'fake' backend api using json-server available on http://localhost:3000 e.g http://localhost:3000/deals
