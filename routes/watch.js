var express = require('express');
var router = express.Router();
var axios = require("axios") ;
const cheerio = require("cheerio") ;




router.get('/:h', async (req,res)=>{
  
 //part = req.query.stream.replace(/"/g,"") 
  
  makeAdsUseless = 'sandbox="allow-same-origin allow-scripts  allow-forms"'
    
  
  async function fetchHTML(url) {
  const { data } = await axios.get(url)
return cheerio.load(data)
//return data
}

let addr = 'http://livetv.sx' ;

const $ = await fetchHTML(addr+req.url);

iframeRemaining = '<iframe  allowFullScreen="true" scrolling=no     sandbox="" frameborder="0 "width="700" height="480" ' ;

arr = []

 $('iframe').each((index, element) => {
      const $element = $(element);
      const x = $element.attr('src');
      console.log(x);
      arr.push(x);
    });  
  

  res.render('newstream',{src:arr[0]})


})






module.exports = router ;