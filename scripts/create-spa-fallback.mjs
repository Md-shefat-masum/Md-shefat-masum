import { copyFile, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const distIndex = resolve('dist/index.html')
const distFallback = resolve('dist/404.html')

try {
  await stat(distIndex)
  await copyFile(distIndex, distFallback)
  console.log('Created dist/404.html SPA fallback')
} catch (error) {
  console.error('Unable to create SPA fallback:', error.message)
  process.exitCode = 1
}
