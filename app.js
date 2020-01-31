
require('dotenv').config()
var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: process.env.API_key,
  consumer_secret: process.env.API_secret_key,
  access_token_key: process.env.Access_token,
  access_token_secret: process.env.access_token_secret
})

// ars-technica button document.querySelector("#onetrust-accept-btn-handler")
// guardian document.querySelector("#cmpContainer > div > div > div.css-13we0ur > div.css-14xb8m-buttonContainerStyles > button.css-8k87rr-button-defaultSize-iconDefault-iconRight-mobileButtonStyles")
// bof document.querySelector("body > div:nth-child(6) > div.bof-main-content > smart-slot > div > div.smart-slot__close-button-container.smart-slot-subscribe-to-daily-digest__close-button-container.smart-slot-campaign-3__close-button-container.smart-slot-position-global-screen-bottom__close-button-container > a > span")
// document.querySelector("body > div:nth-child(6) > div.bof-main-content > smart-slot > div > div.smart-slot__close-button-container.smart-slot-subscribe-to-daily-digest__close-button-container.smart-slot-campaign-3__close-button-container.smart-slot-position-global-screen-bottom__close-button-container > a > span")
//document.querySelector("body > div:nth-child(6) > div.bof-main-content > smart-slot > div > div.smart-slot__close-button-container.smart-slot-subscribe-to-daily-digest__close-button-container.smart-slot-campaign-3__close-button-container.smart-slot-position-global-screen-bottom__close-button-container > a > span > i")
const puppeteer = require('puppeteer')
let get = function() {


let pic
  (async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1280,
      height: 1920,
      deviceScaleFactor: 1,
    })
    await page.goto('https://www.theguardian.com/uk');
    await page.click("#cmpContainer > div > div > div.css-13we0ur > div.css-14xb8m-buttonContainerStyles > button.css-8k87rr-button-defaultSize-iconDefault-iconRight-mobileButtonStyles");
    pic = await  page.screenshot({ encoding: "base64" })

    client.post('media/upload', {media_data: pic}, function(error, media, response) {

      if (!error) {

        // If successful, a media object will be returned.
        console.log(media)

        // Lets tweet it
        var status = {
          status: 'https://www.theguardian.com/uk',
          media_ids: media.media_id_string // Pass the media id string
        }

        client.post('statuses/update', status, function(error, tweet, response) {
          if (!error) {
            console.log(tweet);
          }
        })

      }
    })

    await browser.close();
  })();





}


let get2 = function() {


let pic
  (async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1280,
      height: 1920,
      deviceScaleFactor: 1,
    })
    await page.goto('https://arstechnica.com/');
    await page.click("#onetrust-accept-btn-handler");
    pic = await  page.screenshot({ encoding: "base64" })

    client.post('media/upload', {media_data: pic}, function(error, media, response) {

      if (!error) {

        // If successful, a media object will be returned.
        console.log(media)

        // Lets tweet it
        var status = {
          status: 'https://arstechnica.com/',
          media_ids: media.media_id_string // Pass the media id string
        }

        client.post('statuses/update', status, function(error, tweet, response) {
          if (!error) {
            console.log(tweet);
          }
        })

      }
    })

    await browser.close();
  })();





}

let get3 = function() {


let pic
  (async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1280,
      height: 1920,
      deviceScaleFactor: 1,
    })
    await page.goto('https://www.businessoffashion.com/news');
    await page.click("body > div:nth-child(6) > div.bof-main-content > smart-slot > div > div.smart-slot__close-button-container.smart-slot-subscribe-to-daily-digest__close-button-container.smart-slot-campaign-3__close-button-container.smart-slot-position-global-screen-bottom__close-button-container > a > span > i");
    pic = await  page.screenshot({ encoding: "base64" })

    client.post('media/upload', {media_data: pic}, function(error, media, response) {

      if (!error) {

        // If successful, a media object will be returned.
        console.log(media)

        // Lets tweet it
        var status = {
          status: 'https://www.businessoffashion.com/news',
          media_ids: media.media_id_string // Pass the media id string
        }

        client.post('statuses/update', status, function(error, tweet, response) {
          if (!error) {
            console.log(tweet);
          }
        })

      }
    })

    await browser.close();
  })();





}

get()
get2()
get3()
