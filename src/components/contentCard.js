import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "gatsby";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ContentCard({ item }) {
  const hashtags = "#" + item.hashtags.join(" #");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: item.avatarBgColor }} aria-label="avatar">
            {item.avatar}
          </Avatar>
        }
        title={item.title}
        subheader={item.subHeader}
      />
      <Link to={item.cardContentLink} target="_blank">
        <CardMedia
          component={item.cardMediaComponent}
          alt={item.cardMediaAltText || item.title}
          src={item.cardMediaSrc}
          // style={{height: "150px"}}
        />
      </Link>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.cardContent} <br />
            {hashtags}
          </Typography>
        </CardContent>
    </Card>
  );
}

ContentCard.propTypes = {
  item: PropTypes.object,
};
