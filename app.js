
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
const puppeteer = require('puppeteer')
setInterval(function () {


let pic
  (async () => {
    const browser = await puppeteer.launch()
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



  //var data = canvas.toBuffer().toString('base64')

  // Make post request on media endpoint. Pass file data as media parameter
  // client.post('media/upload', {media_data: pic}, function(error, media, response) {
  //
  //   if (!error) {
  //
  //     // If successful, a media object will be returned.
  //     console.log(media)
  //
  //     // Lets tweet it
  //     var status = {
  //       status: '',
  //       media_ids: media.media_id_string // Pass the media id string
  //     }
  //
  //     client.post('statuses/update', status, function(error, tweet, response) {
  //       if (!error) {
  //         console.log(tweet)
  //       }
  //     })
  //
  //   }
  // })

}, 40000)


setInterval(function () {


let pic
  (async () => {
    const browser = await puppeteer.launch()
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



  //var data = canvas.toBuffer().toString('base64')

  // Make post request on media endpoint. Pass file data as media parameter
  // client.post('media/upload', {media_data: pic}, function(error, media, response) {
  //
  //   if (!error) {
  //
  //     // If successful, a media object will be returned.
  //     console.log(media)
  //
  //     // Lets tweet it
  //     var status = {
  //       status: '',
  //       media_ids: media.media_id_string // Pass the media id string
  //     }
  //
  //     client.post('statuses/update', status, function(error, tweet, response) {
  //       if (!error) {
  //         console.log(tweet)
  //       }
  //     })
  //
  //   }
  // })

}, 50000)
