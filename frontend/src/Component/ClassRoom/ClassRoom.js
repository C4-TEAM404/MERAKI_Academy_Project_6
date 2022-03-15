import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { UserContext } from "../../App";
import Chat from "../Chat/Chat";
import axios from "axios";
import stopMediaStream from "stop-media-stream";

const peer = new Peer();
const ClassRoom = () => {
  const history = useNavigate();
  const { login, courseId, setRoomName } = useContext(UserContext);
  const [peerId, setPeerId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [remotePeerId, setRemotePeerId] = useState("");
  const [endcall, setEndcall] = useState({});
  const [endcallstudent, setEndcallstudent] = useState({});
  const [streamtrack, setStreamtrack] = useState({});
  const [streamtrackcall, setStreamtrackcall] = useState({});
  const [streamtrackcal2, setStreamtrackcal2] = useState({});
  const [toggle, setToggle] = useState(false);
  const remoteVideo = useRef(null);
  const mycam = useRef(null);

  useEffect(async () => {
    console.log("lmlml");
    peer.on("open", function (id) {
      console.log("id", id);
      setPeerId(id);
    });

    try {
      if (login.roleId == 2) {
        console.log(Object.values(peer)[2]);
        console.table(peer._socket._events.message.context._id);
        console.log(courseId);
        const res = await axios.put(
          "http://localhost:5000/course/updateroomid",
          {
            room_Id:
              Object.values(peer)[2] ||
              peer._socket._events.message.context._id,
            courseId,
          }
        );
        console.log(res);
        setRemotePeerId(
          Object.values(peer)[2] || peer._socket._events.message.context._id
        );
        setRoomName(
          Object.values(peer)[2] || peer._socket._events.message.context._id
        );
      }

      if (login.roleId == 3) {
        const res1 = await axios.get(
          `http://localhost:5000/course/getByid/${courseId}`
        );

        setRemotePeerId(res1.data.results[0].room_Id);
        setRoomName(res1.data.results[0].room_Id);
        console.log(res1);
      }

      // peer.on("call", (call) => {
      //   console.log(call);
      //   var getUserMedia =
      //     navigator.getUserMedia ||
      //     navigator.webkitGetUserMedia ||
      //     navigator.mozGetUserMedia;
      //   getUserMedia({ video: true, audio: true }, function (stream) {
      //     mycam.current.srcObject = stream;
      //     mycam.current.play();
      //     console.log("str", stream, "answe", call);
      //     call.answer(stream); // Answer the call with an A/V stream.
      //     call.on("stream", function (remoteStream) {
      //       remoteVideo.current.srcObject = remoteStream;
      //       remoteVideo.current.play();
      //       console.log(remoteVideo);
      //     });
      //   });
      // });
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    peer.on("call", (call) => {
      console.log(call);
      setEndcall(call);
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      getUserMedia({ video: true, audio: true }, function (stream) {
        mycam.current.srcObject = stream;
        mycam.current.play();
        setStreamtrack(stream.getTracks());
        console.log("str", stream, "answe", call);
        call.answer(stream); // Answer the call with an A/V stream.
        call.on("stream", function (remoteStream) {
          remoteVideo.current.srcObject = remoteStream;
          remoteVideo.current.play();
          console.log(remoteVideo);
        });
      });
    });
  }, []);

  const call = (peerId) => {
    setToggle(true);
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia({ video: true, audio: true }, function (stream) {
      mycam.current.srcObject = stream;
      mycam.current.play();
      setStreamtrackcall(stream.getTracks());
      var call = peer.call(peerId, stream);
      call.on("stream", function (remoteStream) {
        remoteVideo.current.srcObject = remoteStream;
        remoteVideo.current.play();
        console.log(remoteVideo);
        setStreamtrackcal2(remoteStream.getTracks());
      });
    });
  };

  // const answer1 = async () => {
  //   mycam.current.srcObject = str;
  //   mycam.current.play();
  //   peer.on("call", (call) => {
  //     console.log(call);
  //     var getUserMedia =
  //       navigator.getUserMedia ||
  //       navigator.webkitGetUserMedia ||
  //       navigator.mozGetUserMedia;
  //     getUserMedia({ video: true, audio: true }, function (stream) {
  //       call.answer(stream); // Answer the call with an A/V stream.
  //       call.on("stream", function (remoteStream) {
  //         remoteVideo.current.srcObject = remoteStream;
  //         remoteVideo.current.play();
  //         console.log(remoteVideo);
  //       });
  //     });
  //   });

  //   console.log("answe", answe, "str", str);
  //   answe.current.answer(str.current);
  // };
  return (
    <div>
      <Chat setRoomId={remotePeerId} toggle={toggle} />
      <br />
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
          // navigator.mediaDevices
          // .getUserMedia({ video: true, audio: false })
          // .then((mediaStream) => {
          //   stopMediaStream(mediaStream);
          // });
          if (login.roleId == 2) {
            streamtrack.forEach(function (track) {
              if (track.readyState == "live") {
                track.stop();
              }
            });
            streamtrackcall.forEach(function (track) {
              if (track.readyState == "live") {
                track.stop();
              }
            });
            endcall.close();
          } else if (login.roleId == 3) {
            streamtrackcall.forEach(function (track) {
              if (track.readyState == "live") {
                track.stop();
              }
            });
            streamtrackcal2.forEach(function (track) {
              if (track.readyState == "live") {
                track.stop();
              }
            });
          }

          setToggle(false);
        }}
      >
        end
      </button>
      {toggle && <video ref={mycam} />}
      {login.roleId != 2 && toggle && <video ref={remoteVideo} />}
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
