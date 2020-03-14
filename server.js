const express = require('express')
const app = express()
const multer = require('multer')
const fs = require('fs');
const dir = './uploads';
const port = 3000

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)  //this is bad practice but used for this demo
      }
})

const upload = multer({ storage : storage}).single('upload')

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: __dirname + "/public" })
})

app.use(express.static(__dirname + '/public'));

app.post('/api/upload', (req,res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.end("Error Uploading File")
        }
        res.end("File is uploaded")
    })
})
let server = app.listen(port, () => {
    let host = server.address().address
    let port = server.address().port

    console.log(`Server running at http://${host}:${port}/`)
}) 
