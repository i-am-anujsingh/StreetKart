import React,{useState} from 'react';
import ResaleForm from '../components/postForm/ResaleMaterials.jsx'
import Container from '../components/container/Container.jsx'

export default function AddPost(){
  
  return (
    <div className='py-8'>
      <Container>
        <ResaleForm />
      </Container>
    </div>
  ) 
  
}


