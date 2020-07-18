/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console: ["off"] */
import path from 'path'
import express from 'express'
import chalk from 'chalk'

const app = express()
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log('\n')
  console.log(
    chalk.blue('╭──────────────────────────────────────────────────╮'),
  )
  console.log(
    chalk.blue('│                                                  │'),
  )
  console.log(
    chalk.blue(
      `│    ─────  ${chalk.red('Briscola development server')}  ─────     │`,
    ),
  )
  console.log(
    chalk.blue('│                                                  │'),
  )
  console.log(
    `${chalk.blue('│')}  Local:\t\t${chalk.green(
      `http://localhost:${PORT}/`,
    )}     ${chalk.blue('│')}`,
  )
  console.log(
    `${chalk.blue('│')}  On your network:\t${chalk.green(
      `http://192.168.1.85:${PORT}/`,
    )}  ${chalk.blue('│')}`,
  )
  console.log(
    chalk.blue('│                                                  │'),
  )
  console.log(
    chalk.blue('╰──────────────────────────────────────────────────╯'),
  )
  console.log('\n')
  console.log('Press Ctrl+C to quit.\n\n')
})
