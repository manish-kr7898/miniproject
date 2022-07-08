import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyle";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponents";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";



export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon/>,
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <ToysIcon />,
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.section} id='About'>
      
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt='about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "Our Services",
                heading: "Provide multiple of services ",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
              })}
              <br />
              {CardMedia({
              label: " ",
              Desc: " ",
              Icon: <AcUnitIcon />,
            })}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
         </Container>
     
    </Box>
  );
}