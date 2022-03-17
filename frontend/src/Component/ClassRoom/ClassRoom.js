import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { UserContext } from "../../App";
import axios from "axios";
import { io } from "socket.io-client";
import "./ClassRoom.css";
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
      }

      if (login.roleId == 3) {
        const res1 = await axios.get(
          `http://localhost:5000/course/getByid/${courseId}`
        );

        setRemotePeerId(res1.data.results[0].room_Id);
        console.log(res1);
      }
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

  //
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
    <div className="classRoomMainDiv">
      <div className="VideoCallDiv">
        <div class="row p-4 g-4  " style={{ width: "100%", height: "100%" }}>
          <div class="col-sm-5 d-flex   flex-column d-grid gap-4 ">
            <div class="card " style={{ height: "100%" }}>
              <div class="card-body">
                <div className="myCamDiv">
                  <video ref={mycam} className="myCam" />
                </div>
              </div>
            </div>
            <div class="card" style={{ height: "100%" }}>
              <div class="card-body d-flex flex-column justify-content-between">
                <div className="messagesMap">
                  {messages &&
                    messages.map((element) => {
                      return (
                        <div className="chatView shadow p-2 mb-4">
                          <p className="massageSender">
                            {element.name.split("-")[0]}
                            <br />
                            <p className="massageContain">{element.message}</p>
                            {Date}
                          </p>
                        </div>
                      );
                    })}
                </div>
                <div className="messageForm">
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
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="card" style={{ height: "100%" }}>
              <div class="card-body">
                {login.roleId === 3 && (
                  <video ref={remoteVideo} className="myCam" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button
            onClick={() => {
              call(remotePeerId);
              handler();
            }}
          >
            call
          </button>
        </div>

        <div>
          {" "}
          <button
            onClick={() => {
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
        </div>
      </div>
    </div>

    /*
      /////////////////////////////////////////////////////////////////////////
    

        /////////////////////////////////////////////////////////////////////////

       /////////////////////////////////////////////////////////////////////////
      <div className="VideoCallMainDiv">
        <input
          type="text"
          value={remotePeerId}
          onChange={(e) => {
            setRemotePeerId(e.target.value);
          }}
        />
    

     */
    // </div>
    /////////////////////////////////////////////////////////////////////////
  );
};

export default ClassRoom;
