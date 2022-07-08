import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/2.jpg";
import image3 from "./../assets/images/3.jpg";
import img4 from "./../assets/img4.jpg";
import img5 from "./../assets/img5.jpg";
import img6 from "./../assets/img6.jpg";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";
import { db } from "../firebase";

const CarouselContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Carousel className="w-100" px={100}>
          <Carousel.Item interval={2000}>
            <img className=" w-100" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className=" w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className=" w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
          {data.map((users) => (
            <Carousel.Item interval={2000}>
              <img
                className=" w-100 h-100 px-100 "
                src={users.img}
                alt="Third slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div class="col-6" Scroll>
        <h3>Notification </h3>

        <div class="demo2 demof">
          <ul>
            <li>
              <img src={img4} alt="Sample image" />
              <a href=" #">The world of Gilbert and George</a>
              <p>
                The art duo of Gilbert and George on how their work can ruffle
                feathers and the benefits of routine.
              </p>
            </li>

            <li class="odd">
              <img src={img5} alt="Sample image" />
              <a href=" #">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </li>

            <li>
              <img src={img6} alt="Sample image" />
              <a href=" #">From propaganda to pop artist</a>
              <p>
                Song Byeok had every reason to be pleased with his success. A
                gift for drawing led to a prestigious career as a propaganda
                artist and full membership in North Korea's communist party.
              </p>
            </li>
            <li class="odd">
              <img src={img5} alt="Sample image" />
              <a href=" #">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
