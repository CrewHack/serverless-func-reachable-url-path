const puppeteer = require('puppeteer');

var performanceEntries, performanceTiming;

export default (req, res) => {

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
}


// https://serverless-func-reachable-url-path.vercel.app/api/hello
