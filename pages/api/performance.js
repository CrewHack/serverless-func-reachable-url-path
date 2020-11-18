//const puppeteer = require('puppeteer');
const chromium = require('chrome-aws-lambda');

var performanceEntries, performanceTiming, callback;

/*export default (req, res) => {

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com'); // change to your website
  
  // Executes Navigation API within the page context
  const performanceEntries = JSON.parse(
      await page.evaluate(() => JSON.stringify(
          performance.getEntriesByType("navigation")[0]
      )) 
  );
  //console.log('performanceEntries', performanceEntries)

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(
        window.performance.timing // <-- deprecated
    )) 
  );
  //console.log('performanceTiming', performanceTiming)

  await browser.close();

})();  
  
  res.statusCode = 200
  res.json({ performance: 'Performance Results4' })
}*/

export default async function foo(req, res) {
  
  /*const browser = await puppeteer.launch(
    {
      product: 'chrome',
      exexutablePath: await chromium.executablePath
    }
  );*/
  
  //const browser = await puppeteer.launch(); 
  /*{
    executablePath: process.env.PUPPETEER_EXEC_PATH,
    args: ['--no-sandbox']
  }*/
  
  //const page = await browser.newPage();
  //await page.goto('https://example.com'); // change to your website
  
  /*// Executes Navigation API within the page context
  const performanceEntries = JSON.parse(
      await page.evaluate(() => JSON.stringify(
          performance.getEntriesByType("navigation")[0]
      )) 
  );*/

  let result = null;
  let browser = null;
 
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
 
    let page = await browser.newPage();
 
    await page.goto(event.url || 'https://example.com');
 
    result = await page.title();
  } catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  
  res.statusCode = 200
  res.json({ chromiumPath: "test" })
}

//puppeteerPath: puppeteer.executablePath()

// https://serverless-func-reachable-url-path.vercel.app/api/performance
