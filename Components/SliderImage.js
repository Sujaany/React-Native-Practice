/*This is an Example of Slider Image Gallery in React Native*/
import React from 'react';
//import React in our project
import Gallery from 'react-native-image-gallery';
 
export default class SliderImage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
    };
    this.state = { items: [] };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      //Loop to make image array to show in slider    
      return {
        source: {
          uri: 'http://placehold.it/200x200?text=' + (i + 1),
        },
      };
    });
    that.setState({ items });
  }
  render() {
    //Image Slider
    return (
      <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        initialPage="1"
        //initial image to show
        images={this.state.items}
      />
    );
  }
}