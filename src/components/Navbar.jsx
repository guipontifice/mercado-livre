import React, { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

  function Navbar() {
    const ACCESS_TOKEN = import.meta.env.VITE_API_KEY; // Replace with your actual access token
    const STATUS_ID = 'active'; // Replace with your actual status ID
    const SITE_ID = import.meta.env.VITE_API_ID;
    const [searchTerm, setSearchTerm] = useState('');
    const history = useNavigate()
    const url = `https://api.mercadolibre.com/products/search?status=${STATUS_ID}&site_id=${SITE_ID}&q=${encodeURIComponent(searchTerm)}`;
    console.log(url)

    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    })
      .then(response => {
        // Handle the response
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
      console.log(searchTerm);
      history.push(`/search?term=${searchTerm}`)
      // Perform any action you want with the search term, such as making an API request.
    };

    return (
      <>
        <div className='xxs:hidden xs:hidden sm:hidden md:hidden w-screen bg-yellow h-24'>
          {/* Only LG */}
          <div className='flex justify-between'>
            <img className='w-40' src="../assets/images/mercado-livre-logo.jpg" alt="" />
            <div className='flex w-5/12 items-center'>
              <input type="text" name="search" id="search"
                className=" border-2  border-white rounded-md ml-10 mt-4 h-11 w-10/12 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-lg cursor-pointer hover:border-gray"
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleInputChange}
              >
              </input>
              <div className='flex border-2 rounded-md border-yellow h-12 mt-4 w-10 items-center justify-center bg-darkyellow cursor-pointer'
                onClick={handleSearchClick}
              >
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
            <div className='flex justify-between mt-4 '>
              <p className=' m-4  cursor-pointer hover:underline shrink-0'>Crie sua conta</p>
              <p className='m-4  cursor-pointer hover:underline'>Entre</p>
              <p className='m-4  cursor-pointer hover:underline'>Compras</p>
              <div className='m-4  cursor-pointer'>
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden w-screen bg-yellow'>
          <div className='flex justify-between'>
            <img className='w-40' src="../assets/images/mercado-livre-logo.jpg" alt="" />
            <div className='flex w-5/12 items-center'>
              <input type="text" name="search" id="search"
                className=" border-2  border-white rounded-md ml-10 mt-4 h-11 w-10/12 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-lg cursor-pointer hover:border-gray"
                placeholder="Buscar">
              </input>
              <div className='flex border-2 rounded-md border-yellow h-12 mt-4 w-10 items-center justify-center bg-darkyellow cursor-pointer'>
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }

export default Navbar