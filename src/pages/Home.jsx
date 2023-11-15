import React from 'react'
import { useState, useEffect } from 'react'

//  https://api.mercadolibre.com/applications/$API_ID
const items = import.meta.env.API_ID;
const apiKey = import.meta.env.API_KEY;
function Home() {
    // console.log(items, apiKey)
    return (
        <div>
            <img src="../assets/images/banner.png" alt="" className='w-screen' />
            <div className='border-2 border-yellow m-8'>
                <div className='grid grid-flow-col columns-6'>
                    {/* Usar Links para repassar informações */}
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                    <div className='grid justify-center border-2'>
                        Teste
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home