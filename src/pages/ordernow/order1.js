import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import {
  Image,
  Grid,
  Accordion,
  Checkbox,
  Space,
  Modal,
  Button,
  Container,
  Drawer,
} from "@mantine/core";
import "../css/order1.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const groceries = [
  {
    value: "Cash",
    description:
      "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000. Customize",
    box1: "Rear-Wheel Drive",
    cost1: "$29,490",
    box2: "Long Range All-Wheel Drive",
    cost2: "$34,490",
    box3: "Performance All-Wheel Drive",
    cost3: "$37,990",
  },
  {
    value: "Lease",
    description: "Include gas savings of $100 /mo. Customize",
    box1: "Rear-Wheel Drive",
    cost1: "$279/mo",
    box2: "Long Range All-Wheel Drive",
    cost2: "$329/mo",
    box3: "Performance All-Wheel Drive",
    cost3: "$409/mo",
  },
  {
    value: "Finance",
    description:
      "Include Federal Tax Credit and gas savings of $204 /mo. Customize",
    box1: "Rear-Wheel Drive",
    cost1: "$466/mo",
    box2: "Long Range All-Wheel Drive",
    cost2: "$550/mo",
    box3: "Performance All-Wheel Drive",
    cost3: "$609/mo",
  },
];

const cardata = [
  {
    value: "Grey",
    color: "grey",
    image1: "modely-grey",
    image2: "modely-grey1",
  },
  {
    value: "Black",
    color: "black",
    image1: "modely-black",
    image2: "modely-black4",
  },
  {
    value: "Red",
    color: "red",
    image1: "modely-red",
    image2: "modely-red5",
  },
  {
    value: "Blue",
    color: "blue",
    image1: "modely-blue",
    image2: "modely-blue3",
  },
  {
    value: "White",
    color: "white",
    image1: "modely-white",
    image2: "modely-white2",
  },
];

const carseat = [
  {
    value: "Black",
    color: "black",
    image1: "modely-black-inside",
  },
  {
    value: "White",
    color: "white",
    image1: "modely-white-inside",
  },
];
export default function Order1() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure();
  const [openedModal2, { open: openModal2, close: closeModal2 }] =
    useDisclosure();
  const [openedModal3, { open: openModal3, close: closeModal3 }] =
    useDisclosure();
  const [openedSeat, { open: openSeat, close: closeSeat }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  const handleCheckboxChange = (group, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [group]: value,
    });
  };

  const seats = carseat.map((s) => (
    <Accordion.Item key={s.value} value={s.value}>
      <Accordion.Control>
        <div className="d-flex">
          <Image
            src={`./img/ordernow/order1/${s.color}.avif`}
            className="img-fluid w-25"
          />
          <p className="d-flex justify-content-center align-items-center">
            {s.value}
          </p>
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <Image
          src={`./img/ordernow/order1/${s.image1}.png`}
          className="img-fluid"
        />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  const cars = cardata.map((car) => (
    <Accordion.Item key={car.value} value={car.value}>
      <Accordion.Control>
        <div className="d-flex">
          <Image
            src={`./img/ordernow/order1/${car.color}.avif`}
            className="img-fluid w-25"
          />
          <p className="d-flex justify-content-center align-items-center">
            {car.value}
          </p>
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <Image
          src={`./img/ordernow/order1/${car.image1}.png`}
          className="img-fluid"
        />
        <Image
          src={`./img/ordernow/order1/${car.image2}.png`}
          className="img-fluid"
        />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control className="bg-light">{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
      <Accordion.Panel>
        <div
          className="d-flex"
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "20px",
          }}>
          <Checkbox
            label={item.box1}
            checked={selectedOptions[item.value] === item.box1}
            onChange={() => handleCheckboxChange(item.value, item.box1)}
          />
          <Space w="200px" />
          <b>{item.cost1}</b>
        </div>
        <div
          className="d-flex"
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "20px",
          }}>
          <Checkbox
            label={item.box2}
            checked={selectedOptions[item.value] === item.box2}
            onChange={() => handleCheckboxChange(item.value, item.box2)}
          />
          <Space w="136px" />
          <b>{item.cost2}</b>
        </div>
        <div
          className="d-flex"
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "20px",
          }}>
          <Checkbox
            label={item.box3}
            checked={selectedOptions[item.value] === item.box3}
            onChange={() => handleCheckboxChange(item.value, item.box3)}
          />
          <Space w="135px" />
          <b>{item.cost3}</b>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="order-container">
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
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }} className="mt-3 left">
          <div className="carousel-container">
            <Carousel
              withIndicators
              height="100%"
              dragFree
              slideGap="md"
              align="start"
              className="fixed-carousel">
              <Carousel.Slide>
                <Image
                  src="./img/ordernow/order1/modely1.png"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/ordernow/order1/1.jpeg"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/ordernow/order1/2.jpeg"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/ordernow/order1/modely-black-inside.png"
                  className="img-fluid"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="./img/ordernow/order1/modely-black4.png"
                  className="img-fluid"
                />
              </Carousel.Slide>
            </Carousel>
          </div>
        </Grid.Col>
        <Grid.Col
          className="px-5 bg-dark text-light"
          span={{ base: 12, md: 12, lg: 4 }}>
          <div className="text-center mt-5 pt-5">
            <h2 className="fs-1">Model Y</h2>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Image
                  src="./img/ordernow/order1/modely1.png"
                  className="img-fluid one my-5"
                  style={{ display: "none " }}
                />
                <h3>260mi</h3>
                <p>Range (EPA est.)</p>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <h3>135mph</h3>
                <p>Top Speed</p>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <h3>6.6sec</h3>
                <p>0-60 mph</p>
              </Grid.Col>
            </Grid>
          </div>
          <Accordion variant="contained" radius="xl">
            {items}
          </Accordion>
          <Modal
            opened={openedModal}
            onClose={closeModal}
            withCloseButton={false}
            size="75%">
            <Carousel
              align="start"
              slideGap="sm"
              controlsOffset="lg"
              controlSize={20}>
              <Carousel.Slide>
                <Container>
                  <h1>Range and Performance</h1>
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <h5>Acceleration 0-60 mph</h5>
                      <div className="d-flex">
                        <p>Rear-Wheel Drive</p>
                        <Space w="30px" />
                        <p>6.6 sec</p>
                      </div>
                      <div className="d-flex">
                        <p>Long Range All-Wheel Drive</p>
                        <Space w="20px" />
                        <p> 4.8 sec</p>
                      </div>
                      <div className="d-flex">
                        <p>Performance All-Wheel Drive</p>
                        <Space w="20px" />
                        <p> 3.5 sec*</p>
                      </div>
                      <h5 className="mt-3">Top Speed</h5>
                      <div className="d-flex">
                        <p>Rear-Wheel Drive</p>
                        <Space w="30px" />
                        <p>135 mph</p>
                      </div>
                      <div className="d-flex">
                        <p>Long Range All-Wheel Drive</p>
                        <Space w="30px" />
                        <p>135 mph</p>
                      </div>
                      <div className="d-flex">
                        <p>Performance All-Wheel Drive</p>
                        <Space w="30px" />
                        <p>155 mph</p>
                      </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <h5>Range</h5>
                      <div className="d-flex">
                        <p>Rear-Wheel Drive </p>
                        <Space w="30px" />
                        <p>242 - 260 miles</p>
                      </div>
                      <div className="d-flex">
                        <p>Long Range All-Wheel Drive </p>
                        <Space w="20px" />
                        <p> 292 - 310 miles</p>
                      </div>
                      <div className="d-flex">
                        <p>Performance All-Wheel Drive </p>
                        <Space w="20px" />
                        <p>279 miles</p>
                      </div>
                      <p>
                        Range varies with wheel selection and is reflected under
                        each option
                      </p>
                      <h5>Drivetrain</h5>
                      <div className="d-flex">
                        <p>Rear-Wheel Drive </p>
                        <Space w="30px" />
                        <p>Rear-Wheel Drive</p>
                      </div>
                      <div className="d-flex">
                        <p>Long Range All-Wheel Drive </p>
                        <Space w="20px" />
                        <p>Dual Motor All-Wheel Drive</p>
                      </div>
                      <div className="d-flex">
                        <p>Performance All-Wheel Drive </p>
                        <Space w="20px" />
                        <p>Dual Motor All-Wheel Drive</p>
                      </div>
                    </Grid.Col>
                  </Grid>
                </Container>
              </Carousel.Slide>
              <Carousel.Slide withIndicators>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <div>
                      <Image
                        src="./img/ordernow/order1/model1.avif"
                        className="img-fluid w-75"
                      />
                    </div>
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Basic Autopilot</h2>
                      <p>
                        Enables your car to steer, accelerate and brake
                        automatically for other vehicles and pedestrians within
                        its lane. Advanced safety and convenience features are
                        designed to assist you with the most burdensome parts of
                        driving, alongside driver assistance features such as
                        emergency braking, collision warning and blind-spot
                        monitoring.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2.avif"
                      className="img-fluid w-75"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Easy Charging</h2>
                      <p>
                        Charge anywhere there is electricity. Most range used
                        for daily driving can be topped off using the Mobile
                        Connector Bundle and a 110V household outlet, or upgrade
                        to a 220V Tesla Wall Connector for the best home
                        charging experience. For long distance travel, Model Y
                        adds up to 160 miles of range in just 15 minutes using
                        Tesla’s Supercharger network, getting you back on the
                        road, sooner.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 8 }}
                    style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src="./img/ordernow/order1/model3.avif"
                      className="img-fluid w-75"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Over-the-Air Updates</h2>
                      <p>
                        Model Y gets better over time with frequent wireless
                        software updates, bringing you new features, more
                        entertainment, higher performance and range, increased
                        comfort and even better safety.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 8 }}
                    style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src="./img/ordernow/order1/model4.avif"
                      className="img-fluid w-75"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Sentry Mode</h2>
                      <p>
                        Continuous 360° monitoring protects your Tesla when left
                        unattended. Enabling Sentry Mode activates a “Standby”
                        state, like many home alarm systems, which uses the
                        car’s external cameras to help detect and protect
                        against potential threats.
                      </p>
                      <p>
                        All-new Live Camera, available with Premium
                        Connectivity, lets you remotely view your car's
                        surroundings while in park, and also honk, flash and
                        talk through the car’s speaker. Live Camera is
                        end-to-end encrypted and cannot be accessed by Tesla.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 8 }}
                    style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src="./img/ordernow/order1/model5.avif"
                      className="img-fluid w-75"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Expansive Storage</h2>
                      <p>
                        Model Y features 76 ft³ of cargo space accessible
                        through both the front trunk and the automatically
                        opening and closing rear trunk. Taking advantage of the
                        space traditionally occupied by bulky engines, gas tanks
                        and transmissions, the design of Model Y enables
                        disproportionately large amounts of storage for a car
                        its size, while bolstering occupant safety through a
                        more spacious, reinforced body and chassis.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 8 }}
                    style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src="./img/ordernow/order1/model6.avif"
                      className="img-fluid w-75"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Tesla Mobile App</h2>
                      <p>
                        Remotely control and monitor your Tesla with Phone Key
                        keyless driving, range & charging status, climate
                        control, live GPS location and more. You can even
                        schedule service and monitor your entire Tesla
                        ecosystem, including power flow from Powerwall or from
                        Solar Roof and Solar Panels.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
            </Carousel>
          </Modal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              className="text-dark mt-3"
              variant="filled"
              color="rgba(255, 255, 255, 1)"
              size="md"
              radius="xl"
              onClick={openModal}>
              Feature Details
            </Button>
          </div>
          <div className="mt-3">
            <div className="my-5">
              <h1>Paint</h1>
              <Drawer opened={opened} onClose={close}>
                <Accordion maw={400}>{cars}</Accordion>
              </Drawer>
              <Button
                className="text-dark mt-3"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                size="md"
                radius="xl"
                onClick={open}>
                See more
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <div className="my-5">
              <h1>Interior</h1>
              <Drawer opened={openedSeat} onClose={closeSeat} position="right">
                <Accordion maw={400}>{seats}</Accordion>
              </Drawer>
              <Button
                className="text-dark mt-3"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                size="md"
                radius="xl"
                onClick={openSeat}>
                See more
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <div className="my-5">
              <h1>Seating Layout</h1>
              <h2 className="text-center">
                <i class="bi bi-5-circle"></i>
              </h2>
              <p>
                <i class="bi bi-dot"></i>Second row with adjustable seatbacks
              </p>
              <p>
                <i class="bi bi-dot"></i>Fold-flat second row for maximum cargo
                storage
              </p>
              <p>
                <i class="bi bi-dot"></i>Electronic fold-flat releases in trunk
              </p>
              <h2 className="text-center">
                <i class="bi bi-7-circle"></i>
              </h2>

              <p>
                <i class="bi bi-dot"></i>Third row seating for two
              </p>
              <p>
                <i class="bi bi-dot"></i>Easy Entry into third row
              </p>
              <p>
                <i class="bi bi-dot"></i>Third row USB-C charging
              </p>
              <p>
                <i class="bi bi-dot"></i>Fold-flat second and third rows for
                maximum cargo storage
              </p>
              <p>
                <i class="bi bi-dot"></i>
                Electronic fold-flat releases in trunk
              </p>
            </div>
          </div>
          <Modal
            opened={openedModal3}
            onClose={closeModal3}
            withCloseButton={false}
            size="75%">
            <Carousel
              align="start"
              slideGap="sm"
              controlsOffset="lg"
              controlSize={20}>
              <Carousel.Slide withIndicators>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <div>
                      <Image
                        src="./img/ordernow/order1/model2-1.avif"
                        className="img-fluid"
                      />
                    </div>
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Glass Roof</h2>
                      <p>
                        The expansive Glass Roof provides passengers with a
                        brighter, more spacious experience and a seamless view
                        of the sky. Infrared and ultraviolet light is
                        effectively blocked before entering the cabin, reducing
                        heat and glare even when the sun is directly overhead.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2-2.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Center Display</h2>
                      <p>
                        Access everything on the expansive 15-inch touchscreen
                        including high-definition side and rearview camera
                        views, navigation, movies, music, games and more. Your
                        surroundings are visualized in real time while you drive
                        to display speed limit signs, upcoming traffic control
                        signals, pedestrians, cyclists and hazards in a
                        360-degree surround view.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2-3.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Wireless Charger</h2>
                      <p>
                        Easily charge two phones at once on a non-slip,
                        contoured surface. The integrated center console offers
                        deep storage space with two front and two rear USB-C
                        charging ports and tiered storage under the armrest.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>

              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2-4.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">All Vegan Interior</h2>
                      <p>
                        Softer than leather, yet far more durable and more
                        stain-resistant, our custom-engineered seating material
                        is fully vegan and significantly more sustainable than
                        traditional seating materials, maximizing comfort and
                        esthetics while maintaining our rigorous standards for
                        durability and stain resistance.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2-5.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Up to Seven Seats</h2>
                      <p>
                        Model Y provides maximum versatility – able to carry 7
                        passengers and their cargo. Each rear seat folds flat
                        independently, creating flexible storage for skis,
                        furniture, luggage and more. The liftgate opens to a low
                        trunk floor that makes loading and unloading easy and
                        quick.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model2-6.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Advanced Climate Control</h2>
                      <p>
                        Airflow and temperature are controlled entirely through
                        the display, allowing precise direction without ever
                        seeing or touching a physical vent. On hot days, Cabin
                        Overheat Protection ensures interiors always stay cool,
                        and our HEPA filtration system delivers the best
                        possible cabin air quality. In cold weather,
                        pre-conditioning automatically warms the cabin, prepares
                        the car’s battery to maximize range and efficiency.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
            </Carousel>
          </Modal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              className="text-dark mt-3"
              variant="filled"
              color="rgba(255, 255, 255, 1)"
              size="md"
              radius="xl"
              onClick={openModal3}>
              Feature Details
            </Button>
          </div>

          <h2 className="mt-5">Full Self-Driving Capability</h2>
          <p>
            Receive a 30 day trial of Full Self-Driving Capability with a new
            vehicle purchase.
          </p>
          <p>
            Your car will be able to drive itself almost anywhere with minimal
            driver intervention and will continuously improve
          </p>
          <Modal
            opened={openedModal2}
            onClose={closeModal2}
            withCloseButton={false}
            size="75%">
            <Carousel
              align="start"
              slideGap="sm"
              controlsOffset="lg"
              controlSize={20}>
              <Carousel.Slide withIndicators>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <div>
                      <Image
                        src="./img/ordernow/order1/model3-1.gif"
                        className="img-fluid"
                      />
                    </div>
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Auto Lane Change</h2>
                      <p>
                        While driving on the highway, Automatic Lane Change will
                        position your car in the optimal lane to prepare for
                        merges and exits while overtaking slow cars. Drivers are
                        given clear insight to upcoming lane changes as well as
                        customization to Auto Lane Change functionality.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model3-2.gif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Navigate on Autopilot</h2>
                      <p>
                        Automatic driving from highway on-ramp to off-ramp
                        includes automatic lane changes, Traffic-Aware Cruise
                        Control with complete stopping and re-engagement,
                        Autosteer, and overtaking slow cars in your lane.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model-3-3.gif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Autopark</h2>
                      <p>
                        Park with ease in both parallel and perpendicular
                        parking spaces with a single button tap on the Center
                        Display. Model Y will alert you to available parking
                        spots by continuously monitoring the space around you
                        while driving under 15 mph.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>

              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model3-4.gif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Smart Summon</h2>
                      <p>
                        Activated by the Tesla App, your parked car will come
                        find you anywhere in a parking lot, and even park or
                        unpark itself in tight spaces. Summon navigates complex
                        parking situations while abiding by lane markings and
                        stop signs, avoiding pedestrians and obstacles like
                        traffic cones, trash bins and rogue shopping carts.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model3-5.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">
                        Traffic Light and Stop Sign Control
                      </h2>
                      <p>
                        Traffic Light and Stop Sign Control is designed to
                        slowdown and stop for visible traffic lights or stop
                        signs that are detected when Traffic-Aware Cruise
                        Control or Autosteer is engaged.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
              <Carousel.Slide>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Image
                      src="./img/ordernow/order1/model3-6.avif"
                      className="img-fluid"
                    />
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4 }}
                    className="d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="mb-5">Full Self-Driving Computer</h2>
                      <p>
                        Tesla-designed silicon optimized for computer vision
                        enables detailed, onscreen environment visualization and
                        eventual Full Self-Driving Capability through
                        over-the-air software updates.
                      </p>
                    </div>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
            </Carousel>
          </Modal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              className="text-dark mt-3"
              variant="filled"
              color="rgba(255, 255, 255, 1)"
              size="md"
              radius="xl"
              onClick={openModal2}>
              Feature Details
            </Button>
          </div>
          <div className="mt-5">
            <Image
              src="./img/ordernow/order2/video.gif"
              className="img-fluid"
            />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
