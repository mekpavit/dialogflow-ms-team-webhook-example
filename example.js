// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  response.json({
  	"fulfillmentMessages": [
      {
      	"payload": {
          	"skype": {
            	"type": "message",
              	"text": "xxxxx"
            }
        }
      },
      {
      	"payload": {
          	"skype": {
            	"type": "message",
              	"attachments": [
                  {
                  	"contentType": "application/vnd.microsoft.teams.card.list",
                    "content": {
                    	"title": "test list message",
                      	"items": [
                          {
                          	"type": "resultItem",
                            "title": "item 1",
                            "tap": {
                            	"type": "imBack",
                              	"value": "item 1 clicked!"
                            }
                          },
                          {
                          	"type": "resultItem",
                            "title": "item 2",
                            "tap": {
                            	"type": "imBack",
                              	"value": "item 2 clicked!"
                            }
                          }
                        ]
                    }
                  }
                ]
            }
        }
      }
    ]
  });
});
