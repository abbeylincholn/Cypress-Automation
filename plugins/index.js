module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name === 'chrome') {
        // Add flag to allow cookies
        launchOptions.args.push('--disable-extensions')
        launchOptions.args.push('--enable-cookies')
      }
      return launchOptions
    })
  }
  