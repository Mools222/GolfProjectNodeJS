const admin = require("firebase-admin");
const serviceAccount = require("./Firebase/golfproject-db222-firebase-adminsdk-un2g2-be7a0784d4");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://golfproject-db222.firebaseio.com"
});

class GolfScore {
    constructor(time, color) {
        this.time = time;
        this.color = color;
    }
}

exports.saveScore = function (ballColorString, courseNumber) {
    let database = admin.database();
    let reference = database.ref("golf/" + courseNumber);
    let golfScore = new GolfScore(new Date().getTime(), ballColorString);
    reference.push(golfScore, a => a);
};