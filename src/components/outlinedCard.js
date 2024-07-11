import * as React from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
import SocialButton from "./socialButton";

const card = (
  <Card
    sx={{
      maxWidth: 345,
      backgroundColor: "whitesmoke",
      border: "0.5px beige solid",
      padding: "4px",
    }}
  >
    <CardContent>
      {/* <Avatar
        alt="HHaluk_github"
        src="https://avatars.githubusercontent.com/u/22790534?v=4"
        sx={{ width: 112, height: 112 }}
      /> */}
      <Typography
        sx={{ fontSize: 16, mt: 1 }}
        style={{ fontWeight: "600" }}
        color="text.secondary"
        gutterBottom
      >
        Hüseyin Haluk Nurbaki
      </Typography>
      <Typography
        sx={{ fontSize: 15, mt: 0.5 }}
        style={{ fontWeight: "300" }}
        color="text.secondary"
        gutterBottom
      >
        Toronto, ON
      </Typography>

      <Typography color="text.secondary">
        Hi 👋 <br />
        I'm a software engineer with 7+ years of experience. Currently, I'm part
        of a fintech startup, working as the head of DevSecOps. I've worked on
        high-impact projects across various countries and industries, including
        e-commerce, banking, and social networking. I enjoy designing and
        implementing solutions and witnessing products grow and evolve.
        <br />
        {/* <Link to="/content">Click here</Link> to see some of the tech
        blogs/videos I enjoyed recently. <br /> */}
        {/* <Link to="https://www.instagram.com/foto_abidin/">Click here</Link> to
        see my photography skills. */}
      </Typography>
    </CardContent>
    <CardActions style={{ justifyContent: "center" }}>
      <SocialButton
        alt="@Huseyinnurbaki"
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        sx={{ width: 42, height: 42 }}
        uri="https://github.com/Huseyinnurbaki"
      />

      <SocialButton
        alt="huseyinnurbaki.medium.com"
        src="https://www.svgrepo.com/show/342026/medium.svg"
        sx={{ width: 42, height: 42 }}
        uri="https://huseyinnurbaki.medium.com/"
      />
      <SocialButton
        alt="in/huseyinnurbaki"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
        sx={{ width: 42, height: 42 }}
        uri="https://www.linkedin.com/in/huseyinnurbaki/"
      />
      <SocialButton
        alt="email"
        src="https://i.pinimg.com/originals/98/d2/31/98d2319da826953b980d897c72bb3fd0.png"
        sx={{ width: 48, height: 48 }}
        uri="mailto:huseyin.nurbaki@gmail.com"
      />
      {/* <SocialButton
        alt="docker"
        src="https://icon-library.com/images/docker-icon/docker-icon-15.jpg"
        sx={{ width: 50, height: 50 }}
        uri="https://hub.docker.com/search?q=hhaluk&type=image"
      /> */}
      {/* <SocialButton
        alt="twitter"
        src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png"
        sx={{ width: 42, height: 42 }}
        uri="https://twitter.com/morothepriest"
      /> */}
    </CardActions>
  </Card>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
