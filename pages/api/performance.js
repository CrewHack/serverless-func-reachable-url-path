const puppeteer = require('puppeteer');

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

/*async.function(function(response) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com'); // change to your website
  
    const performanceEntries = JSON.parse(
        await page.evaluate(() => JSON.stringify(
            performance.getEntriesByType("navigation")[0]
        )) 
    );

    if( typeof callback == 'function' ){
        callback(performanceEntries);
    }
});*/

/*module.exports = function(cb){
    if(typeof performanceEntries != 'undefined'){
        cb(performanceEntries); // If foo is already define, I don't wait.
    } else {
        callback = cb;
    }
}*/

// This function is async
export default = async (req, res) => {
  // This one is not though which means it can't use await inside
  // return dispatch => {

  // Instead it should likely be:
  return async res => {
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }
}

// https://serverless-func-reachable-url-path.vercel.app/api/performance
