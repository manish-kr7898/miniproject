import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/2.jpg";
import image3 from "./../assets/images/3.jpg";
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
     <div className='Service'>
      <h1> Our Services</h1>
Leveraging cutting-edge technologies to build industry-leading digital products.
     </div>
     <div className="row" card>
  <div className="col-sm-4" card>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Web Devolpment</h5>
        <img className=" w-100" src={image1} alt="First slide" />
        <a href=" " class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4" card>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">IconContext(Internet of things)</h5>
        <img className=" w-100" src={image2} alt="First slide" />
        <a href=" " class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4" card>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Cloud Computing</h5>
        <img className=" w-100" src={image3} alt="First slide" />
        <a href=" " class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-4" card>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
        <img className=" w-100" src={image1} alt="First slide" />
        <a href="#" class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4" card>
    <div class="card" card>
      <div class="card-body" card>
        <h5 class="card-title">Artificial Intelligence</h5>
        <img className=" w-100" src={image2} alt="First slide" />
        <a href="#" class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4" card>
    <div class="card" card>
      <div class="card-body"card>
        <h5 class="card-title">It infrastructure</h5>
        <img className=" w-100" src={image3} alt="First slide" />
        <a href=" " class="btn btn-primary">Know more</a>
      </div>
    </div>
  </div>
  
</div>

  
    </>
  );
};

export default Sidebar;