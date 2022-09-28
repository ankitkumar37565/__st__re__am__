//stream are way to handle reading writing files network communication or any kind of end to end communication
//program can interact each other passing stream through pipe (|) operator
//all streams are instance of eventEmitter
//stream makes memory and time efficient

//stream are collection of data like array or string difference is it might not avail one at a time
//we can pipe multiple node commands just like linux
// const grep=...//a stream for output grep
// const wc=...// a stream for input wc
const stream=require("stream")
const fs=require("fs")
const https=require("https")
const server=require("http").createServer()
// const file=fs.createWriteStream("./input.txt")
// for (let i=0;i<5e6;i++)
// {
//  file.write(`asdf:${i}\n`)
// }
// file.end()
// server.on("request",(req,res)=>{
//  fs.readFile("./input.txt",(err,data)=>{
//   if(err) throw err
//   res.end(data)
//  })
// })

server.on("request",(req,res)=>{
const src=fs.createReadStream("./input.txt")
src.pipe(res)
})
server.listen(8000)
//grep "localhost:8000"
//4 fundamental stream -Readable,Writeable,Duplex,Transform streams
//fs.createReadStream- source from which data can be read
//fs.createWriteStream-for destination to which data can be written
//duplex-data can be both read and write  ex-tcp socket
//transform- a duplex stream where data can be transform when read or write
// readableSrc.pipe(writeableDest)


//pipe method returns the destination stream which enables us to do chaining above
//for streams a(readable),b and c(duplex),d(writeable) we can
// const a=fs.createReadStream("./input.txt")
// const b=fs.createWriteStream("./input.txt")
// const c=fs.createWriteStream("./input.txt")
// a.pipe(b)
//types -readable-data emitter,writeable-data receiver,transform-emitter and receiver,duplex-emitter and receiver independent
// stream.push(/*..*/)
// stream.emit("error",err)
// stream.push(null)
//streams
// const readable=stream.readable
// const writeable=stream.writeable
// const transform=stream.transform
//pipe
// a.pipe(b).pipe(c)
//events
// const st=source()
// st.on("data",data=>{console.log(data)})
// st.on("error",err=>{console.log(err)})
// st.on("close",()=>{console.log("close")})
// st.on("finish",()=>{console.log("finish")})
//asumming source is a readable stream
//toggle source
// st.pause()
// st.resume()
// //automatically on source
// st.on("data",()=>{console.log("automatically on data")})