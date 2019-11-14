class GolfScore {
    constructor(time, color) {
        this.time = time;
        this.color = color;
    }
}

function saveData() {
    let admin = require("firebase-admin");
    let serviceAccount = require("./Firebase/golfproject-db222-firebase-adminsdk-un2g2-be7a0784d4");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://golfproject-db222.firebaseio.com"
    });
    let db = admin.database();
    let ref = db.ref("golf");

    let golfScore = new GolfScore(new Date().getTime(), "yellow");

    ref.push(golfScore);
}

saveData();