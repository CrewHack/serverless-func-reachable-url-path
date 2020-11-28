import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer";

const isDev = process.env.NODE_ENV === "development";
const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    

export const getOptions = async isDev => {
  
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
};

export const getPerformance = async (req, res) => {

  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, X-Secret-Key'
  )

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
    else // has Authorization & X-Secret-Key headers, check if valid values and then if authorized user
    {

      if (! req.headers.authorization.includes("Apikey "))
      {
        console.log("Not authorized.");
        res.statusCode = 401;
        res.json({"Authorization": "Unauthorized."});
        return {res};
      }

      var apiKey = req.headers.authorization.split("Apikey ")[1];
 
      console.log(apiKey)

    }
  }

  //save to Bubble DB
  const response = await fetch("https://marketheart.allied-techs.com/api/1.1/obj/Urls");
  var myFetchedData = await response.json();

  //trigger Bubble Workflow
  /*var baseUrl = "https://marketheart.allied-techs.com/api/1.1/wf/testendpoint?url=";
  response = await fetch();*/

  res.statusCode = 200
  res.json(myFetchedData)

  return { res };
};

export default getPerformance;

//https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings