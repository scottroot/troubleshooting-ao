import { describe, it } from 'node:test'
import * as assert from 'node:assert'
import AoLoader from '@permaweb/ao-loader'
import fs from 'fs'
import { getDataItem } from './get-dataitem.js'

const env = {
  Process: {
    Id: 'AOS',
    Owner: 'Test',
    Tags: [
      { name: 'Name', 'Test': 'Test' }
    ]
  }
}

const msg = {
  Target: 'AOS',
  Owner: 'Test',
  ['Block-Height']: "1000",
  Id: "1234xyxfoo",
  Module: "WOOPAWOOPA",
  Tags: [{ name: 'Action', value: 'Eval' }],
  Data: `
local scott = require("scott")

return scott.hello()
      `
}

describe('Basic ao-loader tests.', function () {
  it('Test Load process.wasm: wasm64-unknown-emscripten-draft_2024_02_15', async () => {
    const options = { format: "wasm64-unknown-emscripten-draft_2024_02_15", computeLimit: 9e12 }
    const wasm = fs.readFileSync('process.wasm')
    console.log("WASM image loaded. Size:", (wasm.length / 1024 / 1024).toFixed(2), " MB")
    console.log("WASM module format:", options.format)
    console.log("WASM module compute limit:", options.computeLimit)
    let total_gas = 0
    const handle = await AoLoader(wasm, options)
    let result = await handle(null, msg, env)
    total_gas += result.GasUsed
  })

  it('Test Load process.wasm: wasm32-unknown-emscripten-draft_2024_02_15', async () => {
    const options = { format: "wasm32-unknown-emscripten-draft_2024_02_15", computeLimit: 9e12 }
    const wasm = fs.readFileSync('process.wasm')
    console.log("WASM image loaded. Size:", (wasm.length / 1024 / 1024).toFixed(2), " MB")
    console.log("WASM module format:", options.format)
    console.log("WASM module compute limit:", options.computeLimit)
    let total_gas = 0
    const handle = await AoLoader(wasm, options)
    let result = await handle(null, msg, env)
    total_gas += result.GasUsed
  })

  it('Test Load process.wasm: wasm32-unknown-emscripten', async () => {
    const options = { format: "wasm32-unknown-emscripten", computeLimit: 9e12 }
    const wasm = fs.readFileSync('process.wasm')
    console.log("WASM image loaded. Size:", (wasm.length / 1024 / 1024).toFixed(2), " MB")
    console.log("WASM module format:", options.format)
    console.log("WASM module compute limit:", options.computeLimit)
    let total_gas = 0
    const handle = await AoLoader(wasm, options)
    let result = await handle(null, msg, env)
    total_gas += result.GasUsed
  })
  
  it('Test Load process.wasm: wasm32-unknown-emscripten2', async () => {
    const options = { format: "wasm32-unknown-emscripten2", computeLimit: 9e12 }
    const wasm = fs.readFileSync('process.wasm')
    console.log("WASM image loaded. Size:", (wasm.length / 1024 / 1024).toFixed(2), " MB")
    console.log("WASM module format:", options.format)
    console.log("WASM module compute limit:", options.computeLimit)
    let total_gas = 0
    const handle = await AoLoader(wasm, options)
    let result = await handle(null, msg, env)
    total_gas += result.GasUsed
  })
  
  it('Test Load process.wasm: wasm32-unknown-emscripten3', async () => {
    const options = { format: "wasm32-unknown-emscripten3", computeLimit: 9e12 }
    const wasm = fs.readFileSync('process.wasm')
    console.log("WASM image loaded. Size:", (wasm.length / 1024 / 1024).toFixed(2), " MB")
    console.log("WASM module format:", options.format)
    console.log("WASM module compute limit:", options.computeLimit)
    let total_gas = 0
    const handle = await AoLoader(wasm, options)
    let result = await handle(null, msg, env)
    total_gas += result.GasUsed
  })

})
