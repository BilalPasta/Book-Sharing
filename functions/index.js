// /**
//  * Copyright 2017 Google Inc. All Rights Reserved.
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */
// 'use strict';

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const os = require('os');
// const path = require('path');
// const gcs = require('@google-cloud/storage')();
// const spawn = require('child-process-promise').spawn;

// admin.initializeApp();

// // Cut off time. Child nodes older than this will be deleted.
// // const CUT_OFF_TIME = 0.5 * 60 * 60 * 1000; // 2 Hours in milliseconds.

// // /**
// //  * This database triggered function will check for child nodes that are older than the
// //  * cut-off time. Each child needs to have a `timestamp` attribute.
// //  */
// // exports.deleteOldBook = functions.database.ref('/BookDetails/{pushId}').onWrite( (change) => {
// //   const ref = change.after.ref.parent; // reference to the parent
// //   const now = Date.now();
// //   const cutoff = now - CUT_OFF_TIME;
// //   const oldItemsQuery = ref.orderByChild('timestamp').endAt(cutoff);
// //   const snapshot = await oldItemsQuery.once('value');
// //   // create a map with all children that need to be removed
// //   const updates = {};
// //   snapshot.forEach(child => {
// //     updates[child.key] = null;
// //   });
// //   // execute all updates in one go and return the result to end the function
// //   return ref.update(updates);
// // });





// exports.ResizeImage=functions.storage.object().onArchive(event=>{
//   // const object=event.data;
//   // const bucket=event.bucket;
//   // const contentType=event.contentType;
//   // const filePath=event.name;

//   // const desBucket=gcs.bucket(bucket);
//   // const tempFilePath=path.join(os.tmpdir,path.basename(filePath));
//   // const metadata={contentType:contentType};
//   // return desBucket.file(filePath).download({
//   //   destination:tempFilePath
//   // }).then(()=>{
//   //   return desBucket.upload(tempFilePath,{
//   //     destination:'renamed-'+path.basename(filePath),
//   //     metadata:metadata
//   //   })
//   // })
//   // console.log(event);
//   // return;


//   const object = event.data;
//     const bucket = object.bucket;
//     const contentType = object.contentType;
//     const filePath = object.name;
//     console.log('File change detected, function execution started');

//     if (object.resourceState === 'not_exists') {
//         console.log('We deleted a file, exit...');
//         return;
//     }

//     if (path.basename(filePath).startsWith('resized-')) {
//         console.log('We already renamed that file!');
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = { contentType: contentType };
//     return destBucket.file(filePath).download({
//         destination: tmpFilePath
//     }).then(() => {
//         return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
//     }).then(() => {
//         return destBucket.upload(tmpFilePath, {
//             destination: 'resized-' + path.basename(filePath),
//             metadata: metadata
//         })
//     });
// }

// )




const functions = require("firebase-functions");
const gcs = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange= functions.storage.object().onFinalize(event => {

    // const object = event.data;
    const bucket = event.bucket;
    const contentType = event.contentType;
    const filePath = event.name;
    console.log('File change detected, function execution started');
console.log(event);
    // if (object.resourceState === 'not_exists') {
    //     console.log('We deleted a file, exit...');
    //     return;
    // }

    if (path.basename(filePath).startsWith('resized-')) {
        console.log('We already renamed that file!');
        return;
    }

    const destBucket = gcs.bucket(bucket);
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };
    return destBucket.file(filePath).download({
        destination: tmpFilePath
    }).then(() => {
        return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
    }).then(() => {
        return destBucket.upload(tmpFilePath, {
            destination: 'resized-' + path.basename(filePath),
            metadata: metadata
        })
    });
});