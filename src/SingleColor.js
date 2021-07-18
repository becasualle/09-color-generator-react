import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  // from color array get string that we can use in css
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  // every time after we change alert - hide paragraph after 3 sec
  useEffect(() => {
    const timer = setTimeout(() => { setAlert(false) }, 3000);
    return () => { clearTimeout(timer) }
  }, [alert]);

  return (
    // if color darker than base we need to change text color
    // set background color using rgb values
    // style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
    // onclick = set alert to show paragraph and copy hexValue to clipboard
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {/* when alert is true give user feedback */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
