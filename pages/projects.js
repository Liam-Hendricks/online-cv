//Import the Link API to support client-side navigation
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Layout from "../components/MyLayout";
import { Carousel } from "react-bootstrap";

const projects = () => {
  return (
    <Layout>
       <section className="Drone-Flight-Planner">
        <div className="left-container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/RPAS_app/drone_image2.png"
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Drone Flight Planner</h3>
                <p>Login with facebook or create account</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                
                <img
                  className="img-carousel"
                  src="../static/RPAS_app/drone_image1.png"
                  alt="First slide"
                />
               
              </div>
              <Carousel.Caption>
                <h3>Dashboard</h3>
                <p>See active events and get latest weather</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/RPAS_app/drone_image3.png"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Document Upload</h3>
                <p>Upload or Load documents</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="right-container">
          <div className="right-text">
            <h4>Drone Planner App using MERN stack hosted on Heroku</h4>
            <br />
            <p>
              This is my final Cap Stone Project of my bootcamp ,where I apply
              everything I have learnt in the MERN stack.
              <br />
              While I was completing my bootcamp I was also undertaking a drone
              coarse for a RPAS lisence.
              <br />
              This is where this app idea came from.
              <br />
              It allows user to plan drone flights and have all the nessessary
              documents.
              <br />A user also has access to weather data using their gps
              location or can get weather data at a location of a planned
              flight.
            </p>
            <br/>
            <a className="visit-project" href="https://rpasflighplanner.herokuapp.com/" target='_blank'>visit project</a>
          </div>
        </div>
      </section>
      <section className="Minesweeper">
        <div className="left-container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/minesweeper/mine_image2.png"
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Minesweeper</h3>
                <p>Minesweeper board</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  className="img-carousel"
                  src="../static/minesweeper/mine_image3.png"
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Minesweeper</h3>
                <p>Try not hit a bomb and win</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/minesweeper/mine_image1.png"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Help Menu</h3>
                <p>Click on help to learn the rules</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="right-container">
          <div className="right-text">
            <h4>MineSweeper using React and hosted on Heroku</h4>
            <br />
            <p>
              This is one of my capstone projects after learning how to use
              react.
              <br />
              The task was to building a gaming using react.
              <br />
              I chose to build minesweeper.
              <br />
              This project was challenging but once I figured out the main
              logic, it all came together.
              <br />
              After testing and debugging this app ,I deployed and hosted it on
              Heroku.
              <br />
              Click on the 'try it out' link and see if you can win.
            </p>
            <br/>
            <a className="visit-project" href="https://morning-dusk-09436.herokuapp.com/" target='_blank'>visit project</a>
          </div>
        </div>
      </section>
      <section className="Itunes-Library">
        <div className="left-container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/Itunes/itunes_image1.png"
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Store Favourite Songs</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  className="img-carousel"
                  src="../static/Itunes/itunes_image2.png"
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Filter by Category and search</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img
                  src="../static/Itunes/itunes_image3.png"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Search results are updated while you type</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="right-container">
          <div className="right-text">
            <h4>Itunes Library API with React hosted on Heroku</h4>
            <br />
            <p>
              In this CapStone Project I applied my knowledge of using
              third-party api's with react and express.
              <br />
              This project uses the Itunes api and allows the user to search for
              media using different search catergories.
              <br />
              It also allows the user to store media they like on a favourites
              list which they can view.This project was also deployed on Heroku.
              <br />
              Click on 'try it out here' to see for yourself.
            </p>
            <br/>
            <a className="visit-project" href="https://immense-meadow-75751.herokuapp.com/" target='_blank'>visit project</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default projects;
