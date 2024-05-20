# Troubleshooting AO build & load
The Dockerfile used here is just the stock version from the AO repo that builds wasm64, however I have also been testing the build/load process with 32bit. Adding the below to the Dockerfile and then building with buildarg like `docker build . -t p3rmaw3b/ao:v520 --build-arg MEMORY64=1` or not can specify which option to run.
```
ARG MEMORY64

ENV MEMORY64=${MEMORY64}

RUN if [ ! -z "$MEMORY64" ]; \
      then export LUA_CC='emcc -sWASM=1 -sMEMORY64=1 -sSUPPORT_LONGJMP=1'; \
      else export LUA_CC='emcc -sWASM=1 -U LUA_32BITS -sSUPPORT_LONGJMP=1'; \
    fi \
    && cd /lua-${LUA_VERSION} && make clean && make generic CC="${LUA_CC}"

```
  
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
