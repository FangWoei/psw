import "./css/home.css";
import { useState } from "react";
import { Container, Grid, Space, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* nav */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Container className="py-4">
          <div class="container-fluid d-flex">
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
            <Space w="100px" />

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/trade">
                    Trade-in
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/charge">
                    Help Me Charge
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/solar">
                    Schedule a Consultation
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/voting">
                    Supercharger Voting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>

      {/* nav */}
      <header id="one">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Model Y</h2>
            <h5>From $29,490*</h5>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              After Federal Tax Credit & Est. Gas Savings
            </p>
          </div>
          <Space h="250px" />
          <Grid className="mt-5">
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="order1"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="demo1"
                variant="filled"
                color="gray"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
          <p
            className="text-secondary text-center pt-3"
            style={{ fontSize: "14px" }}>
            *Price before incentives is $42,990, excluding taxes and fees.
            Subject to change.
          </p>
        </Container>
      </header>

      <section id="two">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Model 3</h2>
            <h5>From $299/mo*</h5>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              Est. Lease Price Before Gas Savings
            </p>
          </div>
          <Space h="250px" />
          <Grid className="mt-5">
            <Grid.Col span={6}>
              <Button
                variant="filled"
                component={Link}
                to="order2"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="filled"
                color="gray"
                component={Link}
                to="demo2"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
          <p
            className="text-light text-center pt-3"
            style={{ fontSize: "14px" }}>
            *Excludes taxes and fees with price subject to change. Available in
            select states.
          </p>
        </Container>
      </section>

      <section id="three">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Model X</h2>
            <h5>From $63,990*</h5>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              After Federal Tax Credit & Est. Gas Savings
            </p>
          </div>
          <Space h="250px" />
          <Grid className="mt-5">
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="order3"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="filled"
                color="gray"
                component={Link}
                to="demo3"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
          <p
            className="text-light text-center pt-3"
            style={{ fontSize: "14px" }}>
            *Price before incentives and savings is $77,990, excluding taxes and
            fees. Subject to change.
          </p>
        </Container>
      </section>

      <section id="four">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Model S</h2>
            <h5>From $66,490*</h5>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              After Est. Gas Savings
            </p>
          </div>
          <Space h="250px" />
          <Grid className="mt-5">
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="order4"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="filled"
                color="gray"
                component={Link}
                to="demo4"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
          <p
            className="text-dark text-center pt-3"
            style={{ fontSize: "14px" }}>
            *Price before savings is $72,990, excluding taxes and fees. Subject
            to change
          </p>
        </Container>
      </section>

      <main id="five">
        <Container className="my-5 py-5">
          <Space h="400px" />
          <Grid className="mt-5">
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="order5"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                variant="filled"
                color="gray"
                component={Link}
                to="demo5"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </main>

      <section id="six">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1 text-light">Solar Panels</h2>
          </div>
          <Space h="300px" />
          <Grid className="my-5">
            <Grid.Col span={6}>
              <Button
                component={Link}
                to="order6"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                className="btn"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "5px 95px",
                  whiteSpace: "nowrap",
                }}>
                Demo Drive
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section id="seven">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Solar Roof</h2>
            <p className="text-dark" style={{ fontSize: "14px" }}>
              Produce Clean Energy From Your Roof
            </p>
          </div>
          <Space h="300px" />
          <Grid className="mt-5">
            <Grid.Col span={12}>
              <Button
                component={Link}
                to="order7"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section id="eight">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1">Powerwall</h2>
          </div>
          <Space h="300px" />
          <Grid className="my-5">
            <Grid.Col span={12}>
              <Button
                component={Link}
                to="order8"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                className="text-dark"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Order Now
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section id="nine">
        <Container className="my-5 py-5">
          <div className="text-center">
            <h2 className="fs-1"> Accessories</h2>
          </div>
          <Space h="300px" />
          <Grid className="my-5">
            <Grid.Col span={12}>
              <Button
                className="text-dark"
                component={Link}
                to="shop"
                variant="filled"
                color="rgba(255, 255, 255, 1)"
                radius="sm"
                style={{ padding: "5px 95px", whiteSpace: "nowrap" }}>
                Shop Now
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
