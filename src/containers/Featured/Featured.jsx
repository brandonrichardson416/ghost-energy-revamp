import React from 'react'
import './Featured.css'
import { FeaturedProducts } from '../../components';
import { Link } from 'react-router-dom';

export default function Featured() {
  return (
    <div className="ghost__featured">
        <h1 className="ghost__featured-heading">Latest Flavors</h1>
        <FeaturedProducts/>
        <Link to='/products' className="ghost__cta">View All Flavors</Link>
    </div>
  )
}
