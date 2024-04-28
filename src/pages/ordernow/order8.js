import { Image, Grid, Input } from "@mantine/core";
import "../css/order1.css";
import { Link } from "react-router-dom";

export default function Order7() {
  return (
    <div className="order-container">
     
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 8 }} className="mt-3 left">
          <div className="carousel-container">
            <Image
              src="./img/ordernow/order8/powerwall-landing-hero-desktop.avif"
              className="img-fluid"
              style={{ height: "100%" }}
            />
          </div>
        </Grid.Col>
        <Grid.Col className="px-5" span={{ base: 12, md: 12, lg: 4 }}>
          <div className="my-5 py-5">
            <Image
              src="./img/ordernow/order8/powerwall-landing-hero-desktop.avif"
              className="img-fluid one my-5"
              style={{ display: "none " }}
            />
            <h1 className="text-center">Powerwall</h1>
            <h3 className="text-center">
              Store energy for intelligent home backup and grid independence,
              complete with remote monitoring anywhere, anytime.
            </h3>
            <Input.Wrapper label="Shopping Address" className="my-5">
              <Input placeholder="Input inside Input.Wrapper" />
            </Input.Wrapper>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
