var express = require('express');
var router = express.Router();
var axios = require("axios")
const cheerio = require("cheerio") ;



router.get("/:no", async (req,res)=>{
main2 = 'https://fc8.crichd.tv/'
  
  main = "https://m2.crichd.tv/"
  channelsLink = [
    "sky-sports-cricket-live-streaming",
    "ptv-sports-live-stream",
    "start-sports-1-live-stream",
    "willow-cricket-live-stream",
    "supersport-cricket-live-stream",
    "ten-sports-live-stream",
    "star-sports-hindi-live-stream",
    "willow-cricket-extra-live-stream",
    "a-sports-hd-live-streaming",
    "sky-sports-main-event-live-streaming",
    "sky-sports-action-live-streaming",
    "sky-sports-golf-live-streaming",
    "sky-sports-premier-league-live-streaming",
    "sky-sports-football-live-streaming",
    "willow-cricket-live-stream",
    "sky-sports-f1-live-streaming",
    "sky-sports-mix-live-streaming",
    "sky-sports-news-live-streaming",
    "bt-sport-1-live-streaming",
    "bt-sport-2-live-streaming",
    "bt-sport-3-live-streaming",
    "bt-sport-espn-live-streaming",
    "laliga-tv-live-streaming",
    "eurosport-1-live-streaming",
    "eurosport-2-live-streaming",
    "wwe-network",
    "premier-sports-live-streaming",
    "star-sports-2-live-stream",
    "geo-super-psl-t20-live-stream",
    "sony-espn-live-stream",
    "sony-six-ipl-live-streaming",
    "sky-sports-box-office-live-streaming",
    "ten-1-live-streaming"
    
    ]
    
    makeAdsUseless = 'sandbox="allow-same-origin allow-scripts  allow-forms"'
    
    
    async function fetchHTML(url) {
  const { data } = await axios.get(url)
 // return cheerio.load(data)
 return data
}
/*const $ = await fetchHTML(main+channelsLink[req.params.no]) */
const hpl = await fetchHTML(main+channelsLink[parseInt(req.params.no)])
  
ifr = hpl.substring(hpl.indexOf("<iframe")+1,hpl.indexOf('-media"')+1) ;

partsPutatogether = "<" + ifr + 'media "  ' +makeAdsUseless + ">" +"</iframe>"
  
  
  




  
 
  
 res.render("newstream",{iframecr:partsPutatogether,src:null})   
//,res.send(partsPutatogether)
// res.send("n")
})



    




module.exports = router ;