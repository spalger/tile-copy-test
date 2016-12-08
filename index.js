import { createWriteStream } from 'fs'

import tilelive from 'tilelive'
import tileliveHttp from 'tilelive-http'
import mbtiles from 'mbtiles'
import { fromCallback as fcb } from 'bluebird'

(async () => {
  mbtiles.registerProtocols(tilelive)
  tileliveHttp(tilelive, { retry: true })

  const input = process.env.INPUT
  const output = process.env.OUTPUT
  const progressLog = createWriteStream('tiles.progress.log')

  debugger

  await fcb(cb => tilelive.copy(
    input,
    output,
    {
      concurrency: 1,
      slow: 4000,
      type: 'scanline',
      minzoom: 18,
      maxzoom: 19,
      retry: true,
      timeout: 60000 * 10,
      onslow: (...args) => console.log(':SLOW  ', ...args),
      progress: (stats, progress) => progressLog.write(`${JSON.stringify({ stats, progress })}\n`),
    },
    cb,
  ))

  console.log('done')
})()
.catch(err => {
  console.log('FATAL ERROR', err.stack)
  process.exit(1)
})
