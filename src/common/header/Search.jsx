import React from "react"
import { Link } from "react-router-dom"
import NavMobile from "./NavMobile"
import {BsFillBagFill} from 'react-icons/bs'

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container f_flex'>
          <NavMobile />
          <div className='logo width '>
            <span className="name-brand">SHOP</span>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search....' />
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user profile icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa-solid fa-bag-shopping fs-5 icon-circle text-dark'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
