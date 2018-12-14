const fs = require("fs");

const buffer = Buffer.from(`const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));`);
const buffer2 = Buffer.alloc(10*1024);

fs.access("./folder", fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err) {
        if(err.code === "ENOENT") {
            console.log("폴더 없음");
            fs.mkdir("./folder", (err) => {
                if(err) {
                    throw err;
                }
                console.log("폴더 만들기 성공");
                fs.open("./folder/file.js", "w+", (err, fd) => {
                    if(err) {
                        throw err;
                    }
                    console.log("빈 파일 만들기 성공", fd);
                    fs.rename("./folder/file.js", "./folder/newfile.js", (err) => {
                        if(err) {
                            throw err;
                        }
                        console.log("이름 바꾸기 성공");
                        fs.write(fd, buffer, 0, buffer.length, (err) => {
                            if(err) {
                                throw err;
                            }
                            console.log("JavaScript 코드 입력 성공");
                        });
                    });
                });
            });
        } else {
            throw err;
        }
    } else {
        console.log("이미 폴더 있음");
        // fs.open("./folder/newfile.js", "r+", (err, fd) => {
        //     if(err) {
        //         throw err;
        //     }
        //     console.log("파일 열기 성공", fd);
        //     fs.read(fd, buffer2, 0, buffer2.length, 0, (err) => {
        //         if(err) {
        //             throw err;
        //         }
        //         console.log(`파일 내용 입니다 : \n${buffer2.toString()}`);
        //     });
        // });
        fs.readFile("./folder/newfile.js", (err, data) => {
            if(err) {
                throw err;
            }
            console.log(`파일 열기 성공\n파일 내용입니다 : \n${data}`);
        })
    }
});