import big from '../assets/big.jpeg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const BigImage = document.createElement('img');
image.src = big;

document.body.appendChild(BigImage);