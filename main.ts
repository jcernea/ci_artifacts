import os from 'os'
import fs from 'fs'
import path from 'path'

fs.writeFileSync(path.resolve(__dirname, 'arch.txt'), os.arch())
