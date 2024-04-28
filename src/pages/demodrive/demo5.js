import {
  Card,
  Text,
  Container,
  Grid,
  Image,
  Space,
  Button,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import "../css/demo5.css";
import { useState, useRef } from "react";
export default function Demo5() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/">
            <svg
              width="150px"
              height="100px"
              class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              color="black"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"></path>
            </svg>
          </Link>
        </div>
      </nav>
      <div className="bg-dark">
        <header className="demo">
          <Container className="d-flex justify-content-center align-items-center">
            <Image
              src="./img/demodrive/demo5/cybergraffity_desktop.avif"
              className="img-fluid"
            />
          </Container>
        </header>

        <section id="second" style={{ height: "80vh" }}>
          <Container>
            <Grid>
              <Grid.Col span={{ base: "12", md: "4", lg: "4" }}>
                <Card
                  className="text-light text-center"
                  style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                  <h1>11,000 LBS</h1>
                  <p>TOWING CAPACITY</p>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: "12", md: "4", lg: "4" }}>
                <Card
                  className="text-light text-center"
                  style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                  <h1>340 MILES*</h1>
                  <p>EST. RANGE</p>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: "12", md: "4", lg: "4" }}>
                <Card
                  className="text-light text-center"
                  style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                  <h1>2.6 SEC†</h1>
                  <p>0-60 MPH</p>
                  <Space h="50px" />
                </Card>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Card className="bg-dark">
              <Card.Section>
                <video
                  ref={videoRef}
                  src="./img/demodrive/demo5/t.webm"
                  className="img-fluid"
                />
                <div>
                  <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  BUILT FOR
                </Text>
                <Space
                  className="mx-3 mt-4"
                  h="50px"
                  style={{ border: "1px solid grey" }}
                />
                <Text
                  mt="xs"
                  c="dimmed"
                  size="sm"
                  className="d-flex justify-content-center align-items-center">
                  ANY PLANET
                </Text>
              </div>
              <h5 className="text-light">
                DURABLE AND RUGGED ENOUGH TO GO ANYWHERE. TACKLE ANYTHING WITH
                ELECTRONICALLY ADAPTIVE AIR SUSPENSION THAT OFFERS 12” OF TRAVEL
                AND 16” OF CLEARANCE.
              </h5>
            </Card>
          </Container>
        </section>

        <section>
          <Container>
            <Grid>
              <Grid.Col span={{ base: "12", md: "12", lg: "6" }}>
                <video
                  ref={videoRef}
                  src="./img/demodrive/demo5/v1.mp4"
                  className="img-fluid"
                />
                <div>
                  <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </Grid.Col>
              <Grid.Col
                className="d-flex justify-content-center align-items-center"
                span={{ base: "12", md: "12", lg: "6" }}>
                <div>
                  <h1>SHATTER-RESISTANT</h1>
                  <p>
                    ARMOR GLASS CAN RESIST THE IMPACT OF A BASEBALL AT 70 MPH OR
                    CLASS 4 HAIL. ACOUSTIC GLASS HELPS MAKE THE CABIN AS QUIET
                    AS OUTER SPACE.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col
                className="d-flex justify-content-center align-items-center"
                span={{ base: "12", md: "12", lg: "6" }}>
                <div>
                  <h1>NO PAINT, NO CHIPS</h1>
                  <p>
                    AN ULTRA-HARD STAINLESS-STEEL EXOSKELETON HELPS TO REDUCE
                    DENTS, DAMAGE AND LONG-TERM CORROSION. REPAIRS ARE SIMPLE
                    AND QUICK.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: "12", md: "12", lg: "6" }}>
                <video
                  ref={videoRef}
                  src="./img/demodrive/demo5/v2.mp4"
                  className="img-fluid"
                />
                <div>
                  <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section>
          <Container>
            <Card className="bg-dark">
              <Card.Section>
                <video
                  ref={videoRef}
                  src="./img/demodrive/demo5/t2.mp4"
                  className="img-fluid"
                />
                <div>
                  <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  BEYOND
                </Text>
                <Space
                  className="mx-3 mt-4"
                  h="50px"
                  style={{ border: "1px solid grey" }}
                />
                <Text
                  mt="xs"
                  c="dimmed"
                  size="sm"
                  className="d-flex justify-content-center align-items-center">
                  PREPARED
                </Text>
              </div>
              <h5 className="text-light">
                HAUL EVERYTHING YOU NEED WITH 2,500 POUNDS PAYLOAD AND 11,000
                POUNDS TOWING CAPACITY—THE EQUIVALENT OF AN AVERAGE AFRICAN
                ELEPHANT. THE SUPER-TOUGH COMPOSITE BED DOESN’T NEED A LINER AND
                IS BIG ENOUGH FOR 4'X8’ CONSTRUCTION MATERIALS.
              </h5>
            </Card>
          </Container>
        </section>

        <main id="line">
          <Container>
            <Card
              className="text-light"
              style={{ background: "rgba(0, 0, 0, 0.5)", width: "50%" }}>
              <h2>INTO THE</h2>
              <h1>WILD</h1>
              <p>
                TRAVEL UP TO 340 MILES* ON A SINGLE CHARGE—ENOUGH TO GET YOU
                INTO THE BACKCOUNTRY AND BEYOND. RECOVER UP TO 136 MILES OF
                RANGE WITH JUST 15 MINUTES OF SUPERCHARGING
              </p>
            </Card>
          </Container>
        </main>

        <section className="py-5">
          <Container>
            <Card className="bg-dark">
              <Card.Section>
                <video
                  ref={videoRef}
                  src="./img/demodrive/demo5/t3.mp4"
                  className="img-fluid"
                />
                <div>
                  <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  DOPAMINE
                </Text>
                <Space
                  className="mx-3 mt-4"
                  h="50px"
                  style={{ border: "1px solid grey" }}
                />
                <Text
                  mt="xs"
                  c="dimmed"
                  size="sm"
                  className="d-flex me-5 justify-content-center align-items-center">
                  ON TAP
                </Text>
                <h5 className="text-light">
                  GO 0-60 MPH IN JUST 2.6 SECONDS† IN BEAST MODE WHILE
                  MAINTAINING HIGH-SPEED STABILITY. WITH STEER-BY-WIRE AND REAR
                  STEERING, YOU GET THE HANDLING OF A SPORTS CAR AND A BETTER
                  TURNING RADIUS THAN MOST SEDANS.
                </h5>
              </div>
            </Card>
          </Container>
        </section>

        <section>
          <Container>
            <Carousel withIndicators height={500}>
              <Carousel.Slide>
                <Image
                  src="./img/demodrive/demo5/s1.avif"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/demodrive/demo5/s2.avif"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/demodrive/demo5/s3.avif"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/demodrive/demo5/s4.avif"
                  className="img-fluid"
                />
              </Carousel.Slide>
            </Carousel>
          </Container>
        </section>
      </div>
    </>
  );
}
