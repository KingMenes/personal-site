export default function L3Harris({
  size = 18, // or any default size of your choice
  color = "black" // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M293.15 451H157.85C156.597 451 155.344 451 154.092 449.747L45.1 368.317C43.8472 367.064 42.5944 365.811 42.5944 364.558L0 233.017C0 231.764 0 230.511 0 229.258L42.5944 86.4417C42.5944 85.1889 43.8472 83.9361 45.1 82.6833L156.597 1.25278C157.85 0 159.103 0 160.356 0H290.644C291.897 0 293.15 0 294.403 1.25278L405.9 82.6833C407.153 83.9361 408.406 85.1889 408.406 86.4417L451 228.006C451 229.258 451 230.511 451 231.764L409.658 364.558C409.658 365.811 408.406 367.064 407.153 368.317L298.161 449.747C295.656 451 294.403 451 293.15 451ZM164.114 437.219H275.611C231.764 394.625 187.917 357.042 142.817 323.217C146.575 359.547 154.092 398.383 164.114 437.219ZM147.828 309.436C196.686 344.514 241.786 384.603 289.392 429.703C300.667 369.569 306.931 311.942 309.436 256.819C249.303 269.347 192.928 288.139 147.828 309.436ZM321.964 263.083C319.458 315.7 313.194 370.822 303.172 427.197L393.372 360.8C373.328 320.711 349.525 288.139 321.964 263.083ZM60.1333 362.053L146.575 425.944C137.806 389.614 131.542 353.283 127.783 318.206C101.475 331.986 78.925 347.019 60.1333 362.053ZM18.7917 245.544L52.6167 350.778C71.4083 335.744 93.9583 320.711 120.267 306.931C86.4417 284.381 53.8694 263.083 18.7917 245.544ZM330.733 251.808C357.042 276.864 380.844 306.931 399.636 344.514L433.461 239.281C400.889 240.533 365.811 245.544 330.733 251.808ZM137.806 160.356C134.047 204.203 134.047 250.556 139.058 296.908C185.411 275.611 240.533 256.819 299.414 244.292C264.336 217.983 228.006 201.697 190.422 184.158C172.883 176.642 155.344 169.125 137.806 160.356ZM18.7917 229.258C55.1222 248.05 90.2 269.347 124.025 293.15C120.267 248.05 120.267 202.95 122.772 160.356C82.6833 179.147 47.6056 202.95 18.7917 229.258ZM316.953 114.003C321.964 154.092 323.217 196.686 323.217 238.028C359.547 230.511 395.878 225.5 429.703 222.994C395.878 182.906 359.547 147.828 316.953 114.003ZM149.081 149.081C164.114 156.597 179.147 162.861 196.686 170.378C234.269 186.664 271.853 204.203 309.436 231.764C309.436 189.169 308.183 146.575 301.919 105.233C245.544 116.508 194.181 130.289 149.081 149.081ZM52.6167 101.475L21.2972 207.961C47.6056 185.411 80.1778 165.367 116.508 147.828C91.4528 134.047 71.4083 119.014 52.6167 101.475ZM325.722 102.728C363.306 131.542 397.131 164.114 427.197 199.192L397.131 95.2111C373.328 97.7167 349.525 100.222 325.722 102.728ZM164.114 17.5389C152.839 56.375 144.069 96.4639 139.058 137.806C184.158 119.014 234.269 103.981 289.392 95.2111C255.567 68.9028 215.478 45.1 164.114 17.5389ZM60.1333 88.9472C78.925 107.739 100.222 122.772 125.278 137.806C129.036 100.222 136.553 62.6389 146.575 26.3083L60.1333 88.9472ZM301.919 23.8028C306.931 45.1 310.689 67.65 314.447 90.2C336.997 86.4417 359.547 83.9361 382.097 82.6833L301.919 23.8028ZM187.917 13.7806C230.511 37.5833 266.842 60.1333 298.161 82.6833C294.403 60.1333 290.644 36.3306 284.381 13.7806C284.381 13.7806 187.917 13.7806 187.917 13.7806Z" fill={color}/>
    </svg>
  )
}