import React from 'react';
import CardMedia,{CardMediaProps} from '@material-ui/core/CardMedia';
const Logo: React.FC<CardMediaProps> = (props) => <CardMedia component="img" className={props.className} image="static/posLogo.png" title="POSLogo"/>
export default Logo;
