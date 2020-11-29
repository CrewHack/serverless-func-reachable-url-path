//import chrome from "chrome-aws-lambda";
//import puppeteer from "puppeteer";

/*const isDev = process.env.NODE_ENV === "development";
const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";*/
    

/*export const getOptions = async isDev => {
  
  if (isDev) {
    return {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }
  
  return {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };
};*/

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

export const getPerformance = async (req, res) => {

  /*var url = "https://allied-techs.com";

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();
  await page.goto(url); // change to your website
  
  const performanceEntries = JSON.parse(
      await page.evaluate(() => JSON.stringify(
          performance.getEntriesByType("navigation")[0]
      )) 
  );

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(
        performance.timing
    )) 
  );*/

  // api/performance/[userName]

  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, X-Secret-Key'
  )

  // check userName for valid format

  if (req.headers.authorization === undefined)
  {
    console.log("Not authorized.");
    res.statusCode = 401;
    res.json({"Authorization": "Unauthorized."});
    return {res};
  }
  else
  {

    if (req.headers['x-secret-key'] === undefined) 
    {
      console.log("Not authorized.");
      res.statusCode = 401;
      res.json({"Authorization": "Unauthorized."});
      return {res};
    }
    else // has Authorization & X-Secret-Key headers
    {

      // check if valid prefix
      /*if (! req.headers.authorization.includes("Apikey "))
      {
        console.log("Not authorized.");
        res.statusCode = 401;
        res.json({"Authorization": "Unauthorized."});
        return {res};
      }*/

      // put the URL in the POST body or GET URL query?

      // make sure Authorization & X-Secret-Key are in the correct format, if not don't bother w/Bubble DB lookup

      let userName = "stu@allied-techs.com";
      let apiKey = req.headers.authorization;
      let secretKey = req.headers['x-secret-key'];
      let apiHash = cryptr.encrypt(userName+"|"+apiKey+"|"+secretKey); 
      
      console.log(apiHash);

      console.log(cryptr.decrypt(apiHash));

      const response = await fetch("https://marketheart.allied-techs.com/api/1.1/obj/Urls");
      var myFetchedData = await response.json();

      // First see if this encrypted apiHash exists in Bubble DB ApiHash table. 
      // Then make sure this apiHash record has not exceeded it's daily plan limit.
      //// To check this, look at mostRecentDate, mostRecentDateCount & planCount
      //// The ApiHash table record gets created moment user purchases API plan
      //// Their API key and Secret Key are created for them
      //// Secret Key will only be available to them the moment of creation
      //// Before we show it to them we include it in apiHash
      //// So to start, check to see if has record

      ////// If has any records with Bubble ApiHash.apiHash = apiHash
      //////// Does the mostRecentDate match today's date?
      ////////// If so
      //////////// Update mostRecentDateCount + 1
      //////////// Check if mostRecentDateCount has exceeded planCount
      ////////////// If has exceeded count, return 401 Unauthorized  
      ////////////// If has not exceeded count, return 200 + response
      ////////// If not
      //////////// Add a new record
      ////////////// Set the mostRecentDate = today's date 
      ////////////// Set mostRecentDateCount = 1
      ////////////// Return 200 + response

      ////// If doesn't have record
      ////////Return 401 Unauthorized
      
      
      res.statusCode = 200;
      res.json(myFetchedData)

      return { res };
    }
  }

  //save to Bubble DB
  //const response = await fetch("https://marketheart.allied-techs.com/api/1.1/obj/Urls");
  //var myFetchedData = await response.json();

  //trigger Bubble Workflow
  /*var baseUrl = "https://marketheart.allied-techs.com/api/1.1/wf/testendpoint?url=";
  response = await fetch();*/

  //res.statusCode = 200
  //res.json(myFetchedData)

  //return { res };
};

export default getPerformance;

//https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings