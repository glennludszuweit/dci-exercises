import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header_img'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/81gzWyTlF1L._AC_SL1500_.jpg'
            alt=''
          />
        </div>
        <div className='welcome'>
          <h1>Welcome to React</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, cum?
            Quae illo veritatis laborum et eligendi delectus eius dolorem, ipsum
            repudiandae, ipsa provident at minus labore enim. Maiores delectus
            est voluptatibus incidunt minus non laudantium velit alias labore
            dolorem officiis quod adipisci, fugiat ipsam possimus similique qui
            sit hic nisi unde, laborum quos. Dignissimos inventore soluta fugiat
            delectus neque voluptate facilis minima suscipit, officiis maxime
            cum ea quis, minus magnam fuga itaque libero nihil debitis
            asperiores sit deleniti laudantium? Cupiditate asperiores
            dignissimos vel iste vero, praesentium similique nam natus illum
            ratione voluptas. Illo ea error quas est labore, laborum provident!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
