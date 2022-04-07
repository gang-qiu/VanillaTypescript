import '../styles/index.css';
import StarIcon from '../images/icons/001-star.png'
import { heading } from './component/heading';

const imageSectionNode = document.getElementById('section-images');
if (imageSectionNode) {
  const imgNode = new Image();
  imgNode.src = StarIcon;
  imageSectionNode.appendChild(imgNode);
}
