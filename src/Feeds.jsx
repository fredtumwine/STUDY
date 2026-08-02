import React from 'react'

function Feeds() {
  return (
    <div>
      <div className="relative h-screen">

    <svg
        className="absolute left-0 top-0 h-full w-[60%]"
        viewBox="0 0 700 900"
        preserveAspectRatio="none"
    >

        <defs>

            <linearGradient
                id="hero"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="10%"
            >

                <stop
                    offset="0%"
                    stopColor="#06B6D4"
                />

                <stop
                    offset="100%"
                    stopColor="#4338CA"
                />

            </linearGradient>

        </defs>

        <path

            fill="url(#hero)"

            d="
                M0 0
                H500
                C700 0 700 180 620 280
                C520 420 430 600 470 760
                C500 900 350 900 0 900
                Z
            "

        />

    </svg>

</div>
    </div>
  )
}

export default Feeds