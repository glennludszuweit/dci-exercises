import React from 'react';
import './About.scss';

function About() {
  return (
    <div>
      <div className='about'>
        <div className='about_company'>
          <h2>About Our Philosphy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            perspiciatis itaque accusamus officiis aspernatur dicta, laudantium
            quae animi magnam libero harum consectetur cum nisi, mollitia ut
            assumenda, totam eos corrupti consequuntur voluptatem id saepe
            debitis earum? Minus sunt ab expedita laborum asperiores non,
            necessitatibus doloremque provident rerum eligendi fuga officia
            harum incidunt voluptatum doloribus, omnis perferendis accusantium
            enim saepe, debitis ex facere reprehenderit quisquam ipsa! Quam
            doloribus odit sed placeat, nesciunt expedita nemo, tempora laborum
            rem eligendi mollitia corporis, voluptatem saepe praesentium commodi
            in. Natus dolore quo inventore libero ex dolor accusantium
            aspernatur. Nam illo harum molestias veritatis dicta tenetur.
          </p>
        </div>

        <div className='about_img'>
          <h2>Meet Our Team</h2>
          <img
            src='https://media.glassdoor.com/l/60/b1/ba/45/meet-our-team-from-the-frankfurt-office.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default About;
