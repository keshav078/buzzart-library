import React from 'react'

import { BzButton } from 'buzzart-libs'
import 'buzzart-libs/dist/index.css'

const App = () => {
  return (
    <>
      <div className="col-md-12 p-4 text-center">
        Hi, This is testing of first component librabry.
        <div className="row">
            <div className="col-2">
              <BzButton id="btn-id" inputClass="btn btn-primary" label="Click Here 1"
                onClick={() => {alert('Button click Here 1 Clicked!')}}/>

            </div>
            <div className="col-2">
              <BzButton id="btn-id-2" inputClass="btn btn-primary" label="Click Here 2"
                onClick={() => {alert('Button click Here 2 Clicked!')}}/>

            </div>
        </div>
      </div>

    </>
  )
}

export default App
