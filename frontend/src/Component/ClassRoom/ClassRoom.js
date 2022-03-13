import React, { useState, useEffect, useRef } from "react";
import Peer from "peerjs";
import Webcam from "react-webcam";

const peer = new Peer();
const ClassRoom = () => {
  const [peerId, setPeerId] = useState("");
  const [remotePeerId, setRemotePeerId] = useState("");
  const [ans, setAns] = useState("");
  const remoteVideo = useRef(null);
  const currentUser = useRef(null);
  const mycam = useRef(null);

  const answe = useRef(null);
  const str = useRef(null);

  useEffect(() => {
    peer.on("open", function (id) {
      console.log(id);
      setPeerId(id);
    });

    peer.on("call", (call) => {
      console.log(call);
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      getUserMedia({ video: true, audio: true }, function (stream) {
        str.current = stream;
        answe.current = call;
        console.log("str", stream, "answe", call);
        // call.answer(stream); // Answer the call with an A/V stream.
        call.on("stream", function (remoteStream) {
          remoteVideo.current.srcObject = remoteStream;
          remoteVideo.current.play();
          console.log(remoteVideo);
        });
      });
    });
    console.log(peer);
  }, []);

  const call = (peerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia({ video: true, audio: true }, function (stream) {
      mycam.current.srcObject = stream;
      mycam.current.play();
      var call = peer.call(peerId, stream);
      call.on("stream", function (remoteStream) {
        remoteVideo.current.srcObject = remoteStream;
        remoteVideo.current.play();
        console.log(remoteVideo);
      });
    });
    console.log();
  };

  const answer1 = async () => {
    peer.on("call", (call) => {
      console.log(call);
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      getUserMedia({ video: true, audio: true }, function (stream) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on("stream", function (remoteStream) {
          remoteVideo.current.srcObject = remoteStream;
          remoteVideo.current.play();
          console.log(remoteVideo);
        });
      });
    });

    console.log("answe", answe, "str", str);
    answe.current.answer(str.current);
  };
  return (
    <div>
      {/* <Webcam /> */}
      <input
        type="text"
        value={remotePeerId}
        onChange={(e) => {
          setRemotePeerId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          call(remotePeerId);
        }}
      >
        call
      </button>
      <button
        onClick={() => {
          setAns(true);
          answer1();
        }}
      >
        answer
      </button>
      <video ref={mycam} />
      <video ref={remoteVideo} />
      ClassRoom
    </div>
  );
};

export default ClassRoom;

// //====================================================//Require
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import TextField from "@material-ui/core/TextField";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import PhoneIcon from "@material-ui/icons/Phone";
// import React, { useEffect, useRef, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import Peer from "simple-peer";
// import io from "socket.io-client";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// //CSS File
// import "./ClassRoom.css";

// const socket = io.connect("http://localhost:5000");
// const ClassRoom = () => {
//   const [me, setMe] = useState("");
//   const [stream, setStream] = useState();
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState("");
//   const [callerSignal, setCallerSignal] = useState();
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [idToCall, setIdToCall] = useState("");
//   const [callEnded, setCallEnded] = useState(false);
//   const [name, setName] = useState("");
//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         setStream(stream);
//         myVideo.current.srcObject = stream;
//       });

//     socket.on("me", (id) => {
//       setMe(id);
//     });

//     socket.on("callUser", (data) => {
//       setReceivingCall(true);
//       setCaller(data.from);
//       setName(data.name);
//       setCallerSignal(data.signal);
//     });
//   }, []);

//   const callUser = (id) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on("signal", (data) => {
//       socket.emit("callUser", {
//         userToCall: id,
//         signalData: data,
//         from: me,
//         name: name,
//       });
//     });
//     peer.on("stream", (stream) => {
//       userVideo.current.srcObject = stream;
//     });
//     socket.on("callAccepted", (signal) => {
//       setCallAccepted(true);
//       peer.signal(signal);
//     });

//     connectionRef.current = peer;
//     const answerCall = () => {
//       setCallAccepted(true);
//       const peer = new Peer({
//         initiator: false,
//         trickle: false,
//         stream: stream,
//       });
//       peer.on("signal", (data) => {
//         socket.emit("answerCall", { signal: data, to: caller });
//       });
//       peer.on("stream", (stream) => {
//         userVideo.current.srcObject = stream;
//       });

//       peer.signal(callerSignal);
//       connectionRef.current = peer;
//     };

//     const leaveCall = () => {
//       setCallEnded(true);
//       connectionRef.current.destroy();
//     };
//   };
//   // ====================================================
//   const answerCall = () => {
//     setCallAccepted(true);
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream,
//     });
//     peer.on("signal", (data) => {
//       socket.emit("answerCall", { signal: data, to: caller });
//     });
//     peer.on("stream", (stream) => {
//       userVideo.current.srcObject = stream;
//     });

//     peer.signal(callerSignal);
//     connectionRef.current = peer;
//   };

//   const leaveCall = () => {
//     setCallEnded(true);
//     connectionRef.current.destroy();
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center", color: "#fff" }}>Zoomish</h1>
//       <div className="container">
//         <div className="video-container">
//           <div className="video">
//             {stream && (
//               <video
//                 playsInline
//                 muted
//                 ref={myVideo}
//                 autoPlay
//                 style={{ width: "300px" }}
//               />
//             )}
//           </div>
//           <div className="video">
//             {callAccepted && !callEnded ? (
//               <video
//                 playsInline
//                 ref={userVideo}
//                 autoPlay
//                 style={{ width: "300px" }}
//               />
//             ) : null}
//           </div>
//         </div>
//         <div className="myId">
//           <TextField
//             id="filled-basic"
//             label="Name"
//             variant="filled"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ marginBottom: "20px" }}
//           />
//           <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AssignmentIcon fontSize="large" />}
//             >
//               Copy ID
//             </Button>
//           </CopyToClipboard>

//           <TextField
//             id="filled-basic"
//             label="ID to call"
//             variant="filled"
//             value={idToCall}
//             onChange={(e) => setIdToCall(e.target.value)}
//           />
//           <div className="call-button">
//             {callAccepted && !callEnded ? (
//               <Button variant="contained" color="secondary" onClick={leaveCall}>
//                 End Call
//               </Button>
//             ) : (
//               <IconButton
//                 color="primary"
//                 aria-label="call"
//                 onClick={() => callUser(idToCall)}
//               >
//                 <PhoneIcon fontSize="large" />
//               </IconButton>
//             )}
//             {idToCall}
//           </div>
//         </div>
//         <div>
//           {receivingCall && !callAccepted ? (
//             <div className="caller">
//               <h1>{name} is calling...</h1>
//               <Button variant="contained" color="primary" onClick={answerCall}>
//                 Answer
//               </Button>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClassRoom;
