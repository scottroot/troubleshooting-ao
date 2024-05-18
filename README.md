# Troubleshooting AO build & load

## Context for code in this repo
 - Created this new repo for testing.
 - Cloned https://github.com/permaweb/ao.git to root.
 - Copied the ao/dev-cli/container folder to this repo root.
 - Deleted the ao folder.
 - Added 1 new .lua file (container/src/scott.lua)
 - Set up npm and installed @permaweb/ao-loader
 - Added build and test script to package.json
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
