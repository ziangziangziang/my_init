conn = new Mongo();

const myDB = 'admin';

db = conn.getDB(myDB);
const myCollections = db.getCollectionNames();
print(`database ${myDB} have collections: ${myCollections}`);


db.createUser({
    user: 'pdfexe',
    pwd: 'foolbar',
    roles:[{role:'root', db:'admin'}],
});

db.createUser({
    user: 'ziangbot',
    roles:[{role:'readWrite', db:'ziangbot'}],
});
db.createUser({
    user: 'tamimi',
    roles:[{role:'readWrite', db:'ziangbot'}],
});
