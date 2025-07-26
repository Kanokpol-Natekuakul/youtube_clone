import React from 'react';
import Nav from '../conponents/Nav/Nav';
import Content from '../conponents/Contents/Content';
import Sidebar from '../conponents/Sidebar/Sidebar';

function MainLayout() {
  return (
  <section id="main-layout">
    <Nav></Nav>
    <Sidebar></Sidebar>
    <Content></Content>

  </section>
  );
}

export default MainLayout
