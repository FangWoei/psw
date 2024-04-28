import { Container, Card, Text, Space, Button, Image } from "@mantine/core";
import "./css/shop.css";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";

export default function Shop() {
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
        <header className="shop">
          <Container>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  src="./img/ordernow/cybergraffity_desktop.avif"
                  className="img-fluid w-75"
                />
                <Button
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 95px",
                    whiteSpace: "nowrap",
                    marginLeft: "300px",
                  }}>
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Container>
        </header>

        <section>
          <Container>
            <h1 className="my-5 text-light text-center">BEST SELLERS</h1>
            <Carousel
              className="my-5 py-5"
              withIndicators
              height={200}
              slideSize="33.333333%"
              slideGap="lg"
              loop
              align="start"
              slidesToScroll={3}>
              <Carousel.Slide>
                <Image src="./img/ordernow/1.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/2.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/3.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/4.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/5.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/6.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/7.avif" className="img-fluid" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="./img/ordernow/8.avif" className="img-fluid" />
              </Carousel.Slide>
            </Carousel>
          </Container>
        </section>

        <section className="list text-center">
          <Container>
            <h1>CYBERTRUCK</h1>
            <h2>ACCESSORIES</h2>
            <Button
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "5px 95px",
                whiteSpace: "nowrap",
              }}>
              SHOP NOW
            </Button>
          </Container>
        </section>

        <main className="my-5">
          <Container size="xl">
            <Card shadow="sm" padding="xl" className="bg-dark">
              <Card.Section>
                <Image src="./img/ordernow/model3.avif" h={300} alt="No way!" />
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  MODEL 3
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
                  ACCESSORIES
                </Text>
                <Button
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 95px",
                    whiteSpace: "nowrap",
                    marginLeft: "750px",
                  }}>
                  SHOP NOW
                </Button>
              </div>
            </Card>
          </Container>
        </main>

        <main className="my-5">
          <Container size="xl">
            <Card shadow="sm" padding="xl" className="bg-dark">
              <Card.Section>
                <Image src="./img/ordernow/s.avif" h={300} alt="No way!" />
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  MODEL S
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
                  ACCESSORIES
                </Text>
                <Button
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 95px",
                    whiteSpace: "nowrap",
                    marginLeft: "750px",
                  }}>
                  SHOP NOW
                </Button>
              </div>
            </Card>
          </Container>
        </main>

        <main className="my-5">
          <Container size="xl">
            <Card shadow="sm" padding="xl" className="bg-dark">
              <Card.Section>
                <Image src="./img/ordernow/X.avif" h={300} alt="No way!" />
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  MODEL X
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
                  ACCESSORIES
                </Text>
                <Button
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 95px",
                    whiteSpace: "nowrap",
                    marginLeft: "750px",
                  }}>
                  SHOP NOW
                </Button>
              </div>
            </Card>
          </Container>
        </main>
        <main className="mt-5">
          <Container size="xl">
            <Card shadow="sm" padding="xl" className="bg-dark">
              <Card.Section>
                <Image src="./img/ordernow/y.avif" h={300} alt="No way!" />
              </Card.Section>
              <div className="text-light d-flex justify-content-start align-items-center">
                <Text fw={500} size="lg" mt="md">
                  MODEL Y
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
                  ACCESSORIES
                </Text>
                <Button
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 95px",
                    whiteSpace: "nowrap",
                    marginLeft: "750px",
                  }}>
                  SHOP NOW
                </Button>
              </div>
            </Card>
          </Container>
        </main>
      </div>
    </>
  );
}
