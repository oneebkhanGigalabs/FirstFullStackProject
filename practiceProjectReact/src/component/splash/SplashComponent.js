import "./SplashComponentStyle.css";
import { Fade, Typography } from "@material-ui/core";

function SplashComponent(checked) {
  return (
    <div className="splash-background">
      <Fade in={checked} timeout={(1000, 1000)}>
        <Typography variant={"h1"} align={"center"} className="Text">
          Blogs
        </Typography>
      </Fade>
    </div>
  );
}

export default SplashComponent;
