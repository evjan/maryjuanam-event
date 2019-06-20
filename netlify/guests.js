import firebaseDB from './firebase';

const handler = async function handler(event) {
  try {
    const guests = [];
    const guestsDB = await firebaseDB.collection('guests').get();

    guestsDB.forEach(doc => guests.push(doc.data()));

    console.log(`returning ${guests.length} entries`);

    return {
      statusCode: 200,
      body: JSON.stringify(guests),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (err) {
    console.log('Error getting documents', err);
    return new Error(err);
  }
};

export { handler };
