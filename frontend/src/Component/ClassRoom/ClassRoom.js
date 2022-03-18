import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { UserContext } from "../../App";
import Chat from "../Chat/Chat";
import axios from "axios";
import stopMediaStream from "stop-media-stream";
import { io } from "socket.io-client";
const peer = new Peer();
let socket = io.connect("http://localhost:5000");

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
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
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
        // setRoomName(
        //   Object.values(peer)[2] || peer._socket._events.message.context._id
        // );
      }

      if (login.roleId == 3) {
        const res1 = await axios.get(
          `http://localhost:5000/course/getByid/${courseId}`
        );

        setRemotePeerId(res1.data.results[0].room_Id);
        // setRoomName(res1.data.results[0].room_Id);
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
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("omar");
      console.log(data);

      setMessages((messages) => [...messages, data]);
    });

    return () => socket.removeAllListeners();
  }, [socket]);

  const handler = async () => {
    // const res = await socket.on("connected");
    // console.log(res.id);
    // setFirst(`${res.id}+${login.userId}`);
    socket.emit("join_room", remotePeerId);
  };

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
  const message_handler = (e) => {
    e.preventDefault();
    console.log("omar");
    socket.emit(`message`, {
      room: remotePeerId,
      message: message,
      name: `${login.firstName}-${login.lastName}`,
    });

    setMessage("");
  };
  return (
    <div>
      {messages &&
        messages.map((element) => {
          return (
            <div>
              <p>{element.name}</p>
              <p>{element.message}</p>
            </div>
          );
        })}
      <form onSubmit={message_handler}>
        <input
          value={message}
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button type="submit">send</button>
      </form>
      <div></div>
      <div>
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
            handler();
          }}
        >
          call
        </button>
        <button
          onClick={() => {
            message_handler();
          }}
        >
          send
        </button>
        <button
          onClick={() => {
            // navigator.mediaDevices
            // .getUserMedia({ video: true, audio: false })
            // .then((mediaStream) => {
            //   stopMediaStream(mediaStream);
            // });
            if (login.roleId == 2) {
              if (streamtrack) {
                console.log("omar");
                streamtrack.forEach(function (track) {
                  if (track.readyState == "live") {
                    track.stop();
                  }
                });
              }
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
        <video ref={mycam} />
        {/* {toggle && <video ref={mycam} />} */}
        {/* <video ref={remoteVideo} /> */}
        {console.log(login.roleId)}
        {login.roleId == 3 && <video ref={remoteVideo} />}
      </div>
      ClassRoom
    </div>
  );
};

export default ClassRoom;
