/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console: ["off"] */
import path from 'path'
import express from 'express'
import chalk from 'chalk'
import DashboardPlugin from 'webpack-dashboard/plugin'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config'

const app = express()
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

compiler.apply(new DashboardPlugin())

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
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
    )}            ${chalk.blue('│')}`,
  )
  console.log(
    `${chalk.blue('│')}  On your network:\t${chalk.green(
      `http://192.168.1.85:${PORT}/`,
    )}   ${chalk.blue('│')}`,
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
