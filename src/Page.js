import React, { Component } from 'react';
import './App.css';
import gangnam1 from './images/gangnam1.jpg';
import gangnam2 from './images/gangnam2.jpg';
import gangnam3 from './images/gangnam3.jpg';
import coex1 from './images/coex1.jpg';
import coex2 from './images/coex2.jpg';
import coex3 from './images/coex3.jpg';
import bongeunsa1 from './images/bongeunsa1.jpg';
import bongeunsa2 from './images/bongeunsa2.jpg';
import bongeunsa3 from './images/bongeunsa3.jpg';
import namsan1 from './images/namsan1.jpg';
import namsan2 from './images/namsan2.jpg';
import namsan3 from './images/namsan3.jpg';
import bukchon1 from './images/bukchon1.jpg';
import bukchon2 from './images/bukchon2.jpg';
import bukchon3 from './images/bukchon3.jpg';
import thumb_gangnam1 from './images/thumbs/gangnam1.jpg';
import thumb_gangnam2 from './images/thumbs/gangnam2.jpg';
import thumb_gangnam3 from './images/thumbs/gangnam3.jpg';
import thumb_coex1 from './images/thumbs/coex1.jpg';
import thumb_coex2 from './images/thumbs/coex2.jpg';
import thumb_coex3 from './images/thumbs/coex3.jpg';
import thumb_bongeunsa1 from './images/thumbs/bongeunsa1.jpg';
import thumb_bongeunsa2 from './images/thumbs/bongeunsa2.jpg';
import thumb_bongeunsa3 from './images/thumbs/bongeunsa3.jpg';
import thumb_namsan1 from './images/thumbs/namsan1.jpg';
import thumb_namsan2 from './images/thumbs/namsan2.jpg';
import thumb_namsan3 from './images/thumbs/namsan3.jpg';
import thumb_bukchon1 from './images/thumbs/bukchon1.jpg';
import thumb_bukchon2 from './images/thumbs/bukchon2.jpg';
import thumb_bukchon3 from './images/thumbs/bukchon3.jpg';

class Page extends Component {
  constructor(props) {
    super(props);
    this.locations = [
      {
        title: 'Gangnam',
        description: 'The name that got so popular on YouTube is the name of the street that is not far from my apartment. The place is vibrant and full of things to enjoy. It truly tells the world that Seoul is a city that never sleeps.',
        thumbs: [thumb_gangnam1, thumb_gangnam2, thumb_gangnam3],
        images: [gangnam1, gangnam2, gangnam3],
        hrefs: [null, null, null]
      },
      {
        title: 'COEX',
        description: 'Whether I need to go shopping or watch movies, this is the place to be. Making it the world\'s largest underground shopping mall, it has hundreds of shops, a food court, a movie theater, an aquarium, and a bookstore.',
        thumbs: [thumb_coex1, thumb_coex2, thumb_coex3],
        images: [coex1, coex2, coex3],
        hrefs: [null, null, null]
      },
      {
        title: 'Bongeunsa',
        description: 'A buddhist temple located at the center of the city. Once surrounded by nature is now surrounded by buidlings as Seoul grew in size. The magic happens when I walk into the temple and feel freed from the busy world.',
        thumbs: [thumb_bongeunsa1, thumb_bongeunsa2, thumb_bongeunsa3],
        images: [bongeunsa1, bongeunsa2, bongeunsa3],
        hrefs: [null, null, null]
      },
      {
        title: 'Namsan',
        description: 'Located at the heart of Seoul, I can enjoy the beautiful view of Seoul from the top of the Namsan Seoul Tower. As a matter of fact, Namsan is not the only mountain in Seoul. Seoul is truly a city surrounded by mountains.',
        thumbs: [thumb_namsan1, thumb_namsan2, thumb_namsan3],
        images: [namsan1, namsan2, namsan3],
        hrefs: ['https://unsplash.com/photos/XX3ooUPVBQw', 'https://unsplash.com/photos/GVQWTHpT1KE', 'https://unsplash.com/photos/Q0ziCeNEVFQ']
      },
      {
        title: 'Bukchon',
        description: 'While Seoul has modernized from a war-torn city to a modern megacity at an incredible speed, this part of Seoul still maintains its tradtion. Walking down these streets allows me to take a break from a busy modern life.',
        thumbs: [thumb_bukchon1, thumb_bukchon2, thumb_bukchon3],
        images: [bukchon1, bukchon2, bukchon3],
        hrefs: [null, null, null]
      }
    ];
  }

  render() {
    const page = this.props.page;

    if (page === 0) {
      return (
        <div className='page'>
          <div>
            <h1>Seoul</h1>
            <h3>South Korea</h3>
          </div>
          <a className='video-source' href='https://youtu.be/4hnfs7-jauA'>Video Source</a>
        </div>
      )
    } else if (page === 6) {
      return (
        <div className='page'>
          <div>
            <h2>Attributions</h2>
            <a href='https://thenounproject.com/term/korean/710113/'>Korean Icon by Oriol Sallés from The Noun Project</a>
            <a href='https://youtu.be/4hnfs7-jauA'>Seoul Video by Finnair on YouTube</a>
            <a href='https://unsplash.com/photos/XX3ooUPVBQw'>Namsan Photo 1 by rawkkim on Unsplash</a>
            <a href='https://unsplash.com/photos/GVQWTHpT1KE'>Namsan Photo 2 by Bundo Kim on Unsplash</a>
            <a href='https://unsplash.com/photos/Q0ziCeNEVFQ'>Namsan Photo 3 by zixuan Fu on Unsplash</a>
          </div>
        </div>
      )
    }

    const title = this.locations[page - 1].title;
    const description = this.locations[page - 1].description;
    const thumb1 = this.locations[page - 1].thumbs[0];
    const thumb2 = this.locations[page - 1].thumbs[1];
    const thumb3 = this.locations[page - 1].thumbs[2];
    const image1 = this.locations[page - 1].images[0];
    const image2 = this.locations[page - 1].images[1];
    const image3 = this.locations[page - 1].images[2];
    const href1 = this.locations[page - 1].hrefs[0];
    const href2 = this.locations[page - 1].hrefs[1];
    const href3 = this.locations[page - 1].hrefs[2];

    return (
      <div className='page'>
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            <img className='thumb' src={thumb1} alt='1' onClick={() => this.props.openModal(image1, href1)} />
            <img className='thumb' src={thumb2} alt='2' onClick={() => this.props.openModal(image2, href2)} />
            <img className='thumb' src={thumb3} alt='3' onClick={() => this.props.openModal(image3, href3)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
