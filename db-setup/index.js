const fb = require('firebase');
const admin = require('firebase-admin');
const data = require('./data.json');

admin.initializeApp({
  credential: admin.credential.cert('./service-account.json'),
  databaseURL: 'https://fir-levelup-default-rtdb.firebaseio.com'
});

async function resetDatabase() {
  // admin.database.enableLogging(true);
  console.log('Setting Realtime DB data...');
  await admin.database().ref().set(data);
  console.log('Finished with realtime db');

  for (const [collection, docObj] of Object.entries(data)) {
    console.log(`Creating the ${collection} colleciton...`)
    let batch = admin.firestore().batch();
    for (const [id, doc] of Object.entries(docObj)) {
      batch.set(
        admin.firestore().collection(collection).doc(id),
        { id, ...doc }
      );
    }
    await batch.commit();
    console.log(`Created the ${collection} colleciton...`);
  }

  console.log('RESET THE DATABASE!');
}

resetDatabase().then(() => process.exit(0));
