import React from 'react';
import './More.css';
import { MoreProducts } from '../../components';

export default function More({currId}) {
  return (
    <div className="ghost__more">
        <h1 className="ghost__more-heading">More Epic Flavors</h1>
        <MoreProducts currentId={currId}/>
    </div>
  )
}
