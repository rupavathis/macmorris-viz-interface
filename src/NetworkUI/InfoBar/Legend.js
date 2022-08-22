import './Legend.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

function Legend() {
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="graphLegend" >
                 <Card>
                    <CardContent>
                        <Typography className="legendCircleWrapper" variant="body2" color="textSecondary" component="p">
                           <div className="legendCircle poet"></div>
                            Catholic Poet
                        </Typography>
                        <Typography className="legendCircleWrapper" variant="body2" color="textSecondary" component="p">
                            <div className="legendCircle patron"></div>
                            Patron
                        </Typography>
                        <Typography className="legendCircleWrapper" variant="body2" color="textSecondary" component="p">
                            <div className="legendCircle poem"></div>
                            Connections
                        </Typography>
                    </CardContent>
                </Card> 
            </div>
    );
  }
  
  export default Legend;
  