import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import porcheData from "../../porche-db.json";
import mercedesData from "../../mercedes-db.json";
import bmwData from "../../bmw-db.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    display: "inline-block",
  },
  description: {
    overflow: "hidden",
  },
});

export default function ImgMediaCard(props) {
  const [carInfo, setCarInfo] = useState([]);

  const { chosenModel } = props;
  const classes = useStyles();
  useEffect(() => {
    switch (chosenModel) {
      case "Porche":
        setCarInfo(porcheData.items);
        break;
      case "Bmw":
        setCarInfo(bmwData.items);
        break;
      case "Mercedes":
        setCarInfo(mercedesData.items);
        console.warn(mercedesData.items);
        break;
      default:
        break;
    }
  }, [chosenModel]);

  const render = carInfo.map((car) => {
    console.log("test function", car);
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={car.model}
            height="140"
            src={car.img}
            title={car.model}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
              {car.model}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {car.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return render;
}
