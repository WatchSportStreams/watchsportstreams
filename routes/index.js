var express = require('express');
var router = express.Router();
var axios = require("axios")
const cheerio = require("cheerio");
const https = require('https')

/* GET home page. */





router.get('/', async function(req, res) {


  async function fetchHTML(url) {
    const {
      data
    } = await axios.get(url)
    return cheerio.load(data)
  }

  const $ = await fetchHTML('https://fc6.crichd.com/new-home7')

  arrays = []
  g = []
  html = []
  html2 = []
  html3 = []
  html4 = []
  $('table  td ').each((index, element) => {
    g.push($(element).html())
    html.push($(element).html())

  });
  $('  table  td small').each((index, element) => {

    html2.push($(element).html())

  });

  $('  table  td h3').each((index, element) => {

    html3.push($(element).html())

  });

  $('   td a').each((index, element) => {

    html4.push($(element).html())

  });


  livearr = []
  $(' table tr ').each((index, element) => {

    livearr.push($(element).html())

  });




  liveFiltered = liveStatus(livearr)
  plays = livePlay(livearr)








  /* gnnx = html.filter((h, i)=> {
    return i > 6

  }) */

  html1 = removej(html)

  notwanted = '<a href="https://www.crichd.com/link.php" target="_blank" itemprop="url"><div style="min-height: 36px;" class="scheduleg"></div></a>'



  unwanted2 = '<div style="min-height: 36px;"></div>'

  unwanted3 = '<h3 style="font-size:x-small; font-family: inherit;"><a href="https://www.crichd.com/schedule/the-ashes-series-live-streaming" rel="tag">The Ashes</a></h3>'

  /* ngnnx = removeUnwanted(gnnx)

  var arrays = [], size = 5;

  while (ngnnx.length > 0)
    arrays.push(ngnnx.splice(0, size));

*/
  theLinks = watchLinks(html)


  liveComment = isArrayEmptyDoNecessary(liveFiltered, plays)

  for (i = 0; i < html1.length; i++) {
    arrays.push([html1[i], html2[i], html3[i], theLinks[i], liveComment[i]])
  }







  res.render('indexx', {
    arrays
  });
  /* res.render('channels', {
    html1, html3, html2
  })  */

  // res.send(html2)

});

router.get('/stream/:variableStream', async (req, res)=> {


  async function fetchHTML(url) {
    const {
      data
    } = await axios.get(url)
    return cheerio.load(data)
  }

  let multipleSource = []

  let title;

  constantWeb = 'https:\/\/www.crichd.com/';

  const $ = await fetchHTML(constantWeb+req.params.variableStream)

  let g = $('table td').each((index, element)=> {
    if (/href/.test($(element).html()) && /Watch/.test($(element).html())) {
      multipleSource.push($(element).html())
    }
  })

  title = $('h2').html();



  res.render('streamm',
    {
      title,
      multipleSource
    })
  //res.send(multipleSource)

  //res.send(title)





})




router.get('/watch/:no/:suffix', async (req, res)=> {



  async function fetchHTML(url) {
    const {
      data
    } = await axios.get(url)
    return cheerio.load(data)
    //return data
  }




  watch = ['https://hd.crichd.cx/', 'https://stream.crichd.ac/']


  let urls = watch[req.params.no]+req.params.suffix.toString();
  const $ = await fetchHTML(urls);

  iframeNewHome = await $('textarea').text();

  //iframeNewHome = iframeNewHome.toString()
  res.status(200)
  res.render('watchh',
    {
      iframeNewHome
    })


})








router.get('/specific/:sport', async function(req, res) {


  async function fetchHTML(url) {
    const {
      data
    } = await axios.get(url)
    return cheerio.load(data)
  }

  navLinks = 'https://www.crichd.com/';

  const $ = await fetchHTML(navLinks+req.params.sport)

  arrays = []
  g = []
  html = []
  html2 = []
  html3 = []
  html4 = []
  $('table  td ').each((index, element) => {
    g.push($(element).html())
    html.push($(element).html())

  });
  $('  table  td small').each((index, element) => {

    html2.push($(element).html())

  });

  $('  table  td h3').each((index, element) => {

    html3.push($(element).html())

  });

  $('   td a').each((index, element) => {

    html4.push($(element).html())

  });
  
  livearr = []
  $(' table tr ').each((index, element) => {

    livearr.push($(element).html())

  });




  liveFiltered = liveStatus(livearr)
  plays = livePlay(livearr)








  /* gnnx = html.filter((h, i)=> {
    return i > 6

  }) */

  html1 = removej(html)

  notwanted = '<a href="https://www.crichd.com/link.php" target="_blank" itemprop="url"><div style="min-height: 36px;" class="scheduleg"></div></a>'



  unwanted2 = '<div style="min-height: 36px;"></div>'

  unwanted3 = '<h3 style="font-size:x-small; font-family: inherit;"><a href="https://www.crichd.com/schedule/the-ashes-series-live-streaming" rel="tag">The Ashes</a></h3>'

  /* ngnnx = removeUnwanted(gnnx)

  var arrays = [], size = 5;

  while (ngnnx.length > 0)
    arrays.push(ngnnx.splice(0, size));

*/
  theLinks = watchLinks(html)

liveComment = isArrayEmptyDoNecessary(liveFiltered, plays)

  for (i = 0; i < html1.length; i++) {
    arrays.push([html1[i], html2[i], html3[i], theLinks[i], liveComment[i]])
  }







  res.render('indexx', {
    arrays
  });
  /* res.render('channels', {
    html1, html3, html2
  })  */

  // res.send(html2)

});













/*router.get("/watch",async(req,res)=>{
 /*async function fetchHTML(url) {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}

 let addr = 'http://livetv.sx' ;
/*const b$ = await fetchHTML(`${addr}${req.body.link}`)
  //ifr = b$('iframe').html()
 // res.send(`${addr}`+req.body.link)
  res.send(req.query.link)
//res.send("still working on")
//res.send(`${addr}${req.query.id}`)
}) */


/*
router.get('/no/:no', async(req, res)=> {

  links = [
    'http://livetv.sx/export/webmasters.php?s=0&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=1&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=2&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=3&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=4&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=5&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=6&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=7&lang=en&id=1157892',
    'http://livetv.sx/export/webmasters.php?s=8&lang=en&id=1157892'
  ];




  async function fetchHTML(url) {
    const {
      data
    } = await axios.get(url)
    return cheerio.load(data)
  }




  const b$ = await fetchHTML(links[req.params.no]);

  tt = []

  response = b$('tr td table tr td').each((index, element)=> {
    tt.push(b$(element).html())

  })

  var barrays = [],
  bsize = 5;

  while (tt.length > 0)
    barrays.push(tt.splice(0, bsize));


  res.render('index', {
    barrays
  });
  //res.send(arrays)





}) */








/*router.get("/no/:no",async (req,res)=>{
  //crichd
  main = "https://fc2.crichd.tv/" ;
  links = [
   "live-cricket-streaming",
   "soccer-live-stream",
   "american-football-live-streaming",
   "tennis-live-streaming",
   "motor-sports-live-stream",
   "rugby-live-stream",
   "basketball-live-streaming",
   "wwe-live-stream",
   "ufc-live-streaming",
   "boxing-live-streaming",
   "golf-live-streaming"
    ]
    async function fetchHTML(url) {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}
const $ = await fetchHTML(main+links[req.params.no])
  g = []
  html  = []
   $('body  table  tbody  tr td ').each((index, element) => {
g.push($(element).html())
html.push($(element).html())
});

var arrays = [], size = 7;

    while (g.length > 0)
      arrays.push(g.splice(0, size));
       htmlCleaned = html.filter((h)=>{
        return h[0] + h[1] + h[2] + h[3] =="<img"
      })

  //  console.log(arrays);
 res.render('index',{arrays});
 //res.send(arrays)
})  */



function removeUnwanted(h) {
  ft = []
  for (i = 0; i < h.length; i++) {
    if (h[i] !== notwanted) {
      ft.push(h[i])
    }
  }

  return ft

}



function removej(v) {
  hoott = []
  v.forEach((h)=> {
    if (/<i/.test(h)) {
      hoott.push(h)
    }
  })

  return hoott;
}


function watchLinks (g) {
  let links = [];

  g.forEach((h)=> {
    if (/itemprop="url">/.test(h) && /Watch/.test(h)) {
      links.push(h)
    }
  })

  return links;
}

function liveStatus(g) {
  let lives = []
  for (i = 0; i < g.length; i++) {
    if (/class="liveg"/.test(g[i])) {
      lives.push('<td class="liveg">  <div style="min-height: 36px;"></div> </td>')
    }
  }
  return lives
}


function livePlay(g) {
  let livesp = []
  for (i = 0; i < g.length; i++) {
    if (/class="scheduleg"/.test(g[i])) {
      livesp.push('<div style="min-height: 36px;" class="scheduleg"></div>')
    }
  }
  return livesp
}

function isArrayEmptyDoNecessary(a, b) {
  if (a.length == 0) {
    return b
  } else {
    return a.concat(b)
  }



}





module.exports = router;