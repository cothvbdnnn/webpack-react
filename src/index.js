import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import imgWebpack from './assets/images/webpack.png'
import './assets/css/style.scss'

ReactDOM.render(<App />, document.getElementById('root'))

function createImgElement() {
  const imgElement = document.createElement('img')
  imgElement.src = imgWebpack
  return imgElement
}

window.addEventListener('load', function(){
  document.getElementsByClassName('app')[0].appendChild(createImgElement())
})