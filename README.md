# Troubleshooting AO build & load

## Context for code in this repo
 - A new git repo was created. Cloned https://github.com/permaweb/ao.git to root, copied the ao/dev-cli/container folder to troubleshooting-ao folder root, deleted the ao folder.
 - Added 1 new .lua file (container/src/scott.lua)
 - Set up npm and installed @permaweb/ao-loader
 - Added build script to package.json
 - Copied test code into test folder

## Running
 - Install npm packages:
   ```
   npm i
   ```
 - Create AO module build. This builds the docker image and then runs it, using the container folder as the folder to bind. The output 'process.wasm' is copied from the container folder to the repo root.
   ```
   npm run build
   ```
 - Run Tests
   ```
   npm run test
   ```
# Observer errors related to wasm imports
