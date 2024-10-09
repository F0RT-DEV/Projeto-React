import React from 'react'
import './Section.css'

export default function Section(){
    return (
      <section>
        <div className="list">
            <div className="item">
                <div className="item-image">
                    <img src="1.png" alt="image"/>
                </div>
                <div className="item-content">
                    <p className='car-information'>Unico Dono</p>
                    <h2>Ferrari</h2>
                    <p className='car-descricion'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus sapiente aliquam quis, 
                    mollitia adipisci maxime iusto, ex odit quas, labore aut. Sequi ipsum, inventore consectetur exercitationem ad magni quisquam voluptatem?</p>

                    <button>Saiba Mais</button>
                </div>
            </div>
        </div>
        <div className='arrows'>
            <button><img src="arrow.png" alt="" /></button>
            <button><img src="arrow.png" alt="" /></button>
        </div>
        <div className='indicators'>
            <div className="number">01</div>
            <ul>
                <li className='active'></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      </section>
    )
  }