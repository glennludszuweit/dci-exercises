const obj = {
  Apple: { price: 123, change: -4 },
  IBM: { price: 432, change: 3 },
  Microsoft: { price: 213, change: 23 },
};

// 1. Traverse the Object and RENDER the highest Price value

const highestPrice = Object.values(obj)
  .map((el) => el.price)
  .reduce((a, b) => Math.max(a, b));

const displayHighestPrice = Handlebars.compile(`
  <p>Highest Price: {{highestPrice}}</p>
`);
$('body').append(displayHighestPrice({ highestPrice }));

// 2. RENDER all keys as a String
const allKeysString = Object.entries(obj)
  .map(([key, value]) => `${key} ${Object.keys(value).join(' ')}`)
  .join(' ');

const displayAllKeysString = Handlebars.compile(`
  <p>All keys string: {{allKeysString}}</p>
`);
$('body').append(displayAllKeysString({ allKeysString }));

// 3. RENDER a TABLE
const tableOne = Handlebars.compile(`
  <table>
    <tr><th>Company</th><th>Price</th><th>Change</th></tr>
    {{#each obj}}
      <tr><td>{{@key}}</td><td>{{price}}</td><td>{{change}}</td></tr>
    {{/each}} 
  </table>
  <hr />
`);

$('body').append(tableOne({ obj }));

///////////////////////////////////////////////////////////////////////
const apiReply = [
  { t: 21, h: 29, r: 0 },
  { t: 25, h: 44, r: 36 },
  { t: 22, h: 48, r: 58 },
  { t: 26, h: 87, r: 73 },
  { t: 24, h: 67, r: 23 },
  { t: 16, h: 80, r: 43 },
  { t: 15, h: 83, r: 85 },
  { t: 5, h: 7, r: 51 },
  { t: 18, h: 67, r: 22 },
  { t: 7, h: 87, r: 78 },
  { t: 32, h: 17, r: 50 },
  { t: 18, h: 41, r: 61 },
  { t: 2, h: 68, r: 44 },
];

// 1. RENDER the average temperature, humidity, rain probability
let aveT = 0,
  aveH = 0,
  aveR = 0;
apiReply
  .map(({ t, h, r }) => Object.values({ t, h, r }))
  .forEach(([t, h, r]) => {
    aveT += t / apiReply.length;
    aveH += h / apiReply.length;
    aveR += r / apiReply.length;
  });

const averageTHR = Handlebars.compile(`
  <p>Average Temperature: ${aveT} <br /> 
     Average Humidity: ${aveH} <br /> 
     Average Rain: ${aveR}
  </p>
`);
$('body').append(averageTHR({ aveT, aveH, aveR }));

// 2. RENDER the HIGH and LOW temperatures
const lowestHighestTemp = apiReply
  .map(({ t }) => Object.values({ t }))
  .reduce((a, b) => a.concat(b));
const lowestTemp = Math.min(...lowestHighestTemp);
const highestTemp = Math.max(...lowestHighestTemp);

const displayLowestHighestTemp = Handlebars.compile(`
  <p>
    Lowest temperatur: {{lowestTemp}} <br />
    Highest temperature: {{highestTemp}} 
  </p>
`);
$('body').append(displayLowestHighestTemp({ lowestTemp, highestTemp }));

// 3. RENDER a TABLE
const tableTwo = Handlebars.compile(`
  <table>
    <tr><th>Temperature</th><th>Humidity</th><th>Rain</th></tr>
    {{#each apiReply}}
          <tr><td>{{t}}</td><td>{{h}}</td><td>{{r}}</td></tr>
    {{/each}} 
  </table>
  <hr />
`);
$('body').append(tableTwo({ apiReply }));

///////////////////////////////////////////////////////////////////////
const ridiculousResponse = [
  { t: [1, 3, 123, 435, 54345, 2] },
  { t: [36, 24114, 564, 3892, 3880, 5544] },
  { t: [81, 1016, 2467, 2779, 2599, 33090] },
  { t: [10, 6, 1083, 3278, 505, 32021] },
  { t: [37, 35836, 81, 1558, 122, 35594] },
  { t: [1, 3, 123, 435, 54345, 2] },
  { t: [36, 24114, 564, 3892, 3880, 5544] },
  { t: [81, 1016, 2467, 2779, 2599, 33090] },
  { t: [10, 6, 1083, 3278, 505, 32021] },
  { t: [37, 35836, 81, 1558, 122, 35594] },
  { t: [83, 13418, 1501, 771, 2643, 35322] },
];

// 1. RENDER the average for all Numbers
const averageNum = ridiculousResponse
  .map((el) =>
    el.t.reduce((a, t) => {
      return a + t / el.t.length;
    }, 0)
  )
  .reduce((a, b) => a + b / ridiculousResponse.length, 0);

const displayAverageNum = Handlebars.compile(`
  <p>
    Total average: {{averageNum}}
  </p>
`);
$('body').append(displayAverageNum({ averageNum }));

// 2. RENDER the HIGHEST and LOWEST numbers overall
const newridiculousResponse = ridiculousResponse
  .map((el) => el.t)
  .reduce((a, b) => a.concat(b));
const lowest = Math.min(...newridiculousResponse);
const highest = Math.max(...newridiculousResponse);

const lowestHighest = Handlebars.compile(`
  <p>
    Lowest number: {{lowest}} <br />
    Highest number: {{highest}} 
  </p>
`);
$('body').append(lowestHighest({ lowest, highest }));

// 3. RENDER the HIGHEST and LOWEST numbers for each COLUMN into a TABLE
const tableThree = Handlebars.compile(`
  <table>
    <tr><th>Lowest</th><th>Highest</th></tr>
    <tr><td>{{lowest}}</td><td>{{highest}}</td></tr>
  </table>
  <hr />
`);
$('body').append(tableThree({ lowest, highest }));
// BONUS: RENDER nice looking boxes
