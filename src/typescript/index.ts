import '../styles/index.css';
import { heading } from './component/heading';

const rootNode = document.getElementById('root') || (() => {
  const node = document.createElement('div');
  node.setAttribute('id', 'root');
  document.body.appendChild(node);
  return node
})();

rootNode.appendChild(heading('h1'));
rootNode.appendChild(heading('h2'));
rootNode.appendChild(heading('h3'));
rootNode.appendChild(heading('h4'));
rootNode.appendChild(heading('h5'));
rootNode.appendChild(heading('h6'));
