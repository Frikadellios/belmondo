const templates = [
  {
    name: 'Blank',
    repository: 'pages-cms/blank-template',
    suggested: 'website',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 3.79086 3.79086 2 6 2H12.0098C13.0707 2 14.0881 2.42143 14.8382 3.17157L20.8284 9.16176C21.5786 9.9119 22 10.9293 22 11.9902V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"/></svg>'
  },
  {
    name: 'Blog',
    repository: 'pages-cms/blog-template',
    suggested: 'blog',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 3.79086 3.79086 2 6 2H12.0098C13.0707 2 14.0881 2.42143 14.8382 3.17157L20.8284 9.16176C21.5786 9.9119 22 10.9293 22 11.9902V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"/></svg>'
  },
  {
    name: 'Next.js blog',
    repository: 'pages-cms/nextjs-blog-example',
    suggested: 'nextjs-blog',
    icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>'
  },
  {
    name: 'Astro blog',
    repository: 'pages-cms/astro-blog-example',
    suggested: 'astro-blog',
    icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Astro</title><path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"/></svg>'
  },
  // {
  //   name: 'Nuxt.js blog',
  //   repository: 'pages-cms/nuxtjs-blog-template',
  //   suggested: 'nuxtjs-blog',
  //   icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>'
  // },
  {
    name: 'Eleventy blog',
    repository: 'pages-cms/eleventy-blog-example',
    suggested: '11ty-blog',
    icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Eleventy</title><path d="M3.398 12V0h17.204v24H3.398zm13.17 6.07a1.07 1.07 0 00.373-.107c.432-.213.68-.672.877-1.626.076-.372 1.195-6.168 1.209-6.263.026-.186-.008-.382-.084-.476a.325.325 0 00-.087-.064l-.06-.031h-.291c-.253 0-.298 0-.348.02-.113.039-.207.156-.255.316-.011.038-.168.881-.348 1.873l-.328 1.802-.046-.21c-.56-2.547-.764-3.452-.794-3.532a.383.383 0 00-.103-.16c-.105-.107-.117-.11-.567-.11-.411 0-.422 0-.5.074-.086.079-.122.216-.111.42.006.115.045.27.688 2.784.663 2.587.751 2.943.787 3.177.046.3-.05.713-.208.893-.032.037-.037.039-.084.032-.028 0-.12-.027-.204-.051-.268-.078-.362-.072-.462.028-.096.096-.137.248-.138.51 0 .256.028.34.159.473.131.133.324.208.595.23.164.012.22.012.33-.001zm-1.896-1.712a.31.31 0 00.16-.192c.02-.058.022-.098.022-.356 0-.255-.003-.299-.021-.354-.04-.121-.136-.196-.278-.217-.041-.01-.2-.01-.355-.01-.365-.001-.378-.01-.446-.184-.068-.18-.096-.326-.113-.602a85.799 85.799 0 01-.012-1.94v-1.765h.35c.454 0 .507-.01.602-.113a.465.465 0 00.102-.24 3.273 3.273 0 000-.534c-.026-.16-.099-.271-.211-.322-.057-.025-.065-.026-.45-.03h-.392l-.003-1.22c-.003-1.09-.005-1.227-.021-1.278a.378.378 0 00-.201-.247c-.052-.024-.072-.025-.32-.029-.27 0-.356 0-.429.038-.087.042-.148.133-.185.278-.014.054-.032.346-.076 1.262l-.06 1.194s-.08 0-.18.01c-.206.01-.263.022-.327.086-.092.092-.12.19-.127.455-.01.334.02.487.115.588.075.081.134.1.345.106l.173.01v1.785c0 1.7.006 2.019.034 2.274.041.37.13.709.241.928.194.38.544.617.988.668h1.005l.07-.04zm-7.447 0c.098-.053.16-.154.2-.332.016-.077.018-.401.018-4.518 0-4.184-.001-4.44-.02-4.51-.05-.194-.19-.29-.378-.26-.035.01-.344.084-.686.175-.343.09-.684.18-.758.198-.17.043-.214.062-.281.126-.105.098-.122.185-.122.606 0 .416.016.5.12.604.094.095.189.1.456.03.103-.026.193-.048.2-.048.01 0 .014.784.017 3.763.003 3.436.005 3.77.021 3.84.048.202.113.296.236.34.034.013.133.016.487.014.435 0 .445 0 .49-.027zm3.203 0c.092-.046.152-.135.197-.29l.024-.084.003-4.435c.002-3.194 0-4.456-.01-4.509-.033-.2-.145-.308-.322-.308-.066 0-.198.03-.857.204-.56.147-.799.214-.849.239a.34.34 0 00-.17.184c-.024.06-.024.071-.024.479 0 .415 0 .417.026.483a.362.362 0 00.083.12c.1.1.172.105.456.034a5.46 5.46 0 01.208-.05c.008 0 .012 1.202.014 3.791l.003 3.79.026.086a.48.48 0 00.135.23c.078.062.085.063.57.06.414 0 .447 0 .487-.024z"/></svg>'
  },
  // {
  //   name: 'Hugo',
  //   repository: 'pages-cms/hugo-template',
  //   suggested: 'hugo-website',
  //   icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Hugo</title><path d="M11.754 0a3.998 3.998 0 00-2.049.596L3.33 4.532a4.252 4.252 0 00-2.017 3.615v8.03c0 1.473.79 2.838 2.067 3.574l6.486 3.733a3.88 3.88 0 003.835.018l7.043-3.966a3.817 3.817 0 001.943-3.323V7.752a3.57 3.57 0 00-1.774-3.084L13.817.541a3.998 3.998 0 00-2.063-.54zm.022 1.674c.413-.006.828.1 1.2.315l7.095 4.127c.584.34.941.96.94 1.635v8.462c0 .774-.414 1.484-1.089 1.864l-7.042 3.966a2.199 2.199 0 01-2.179-.01l-6.485-3.734a2.447 2.447 0 01-1.228-2.123v-8.03c0-.893.461-1.72 1.221-2.19l6.376-3.935a2.323 2.323 0 011.19-.347zm-4.7 3.844V18.37h2.69v-5.62h4.46v5.62h2.696V5.518h-2.696v4.681h-4.46V5.518Z"/></svg>'
  // },
  {
    name: 'Jekyll blog',
    repository: 'pages-cms/jekyll-blog-example',
    suggested: 'jekyll-blog',
    icon: '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Jekyll</title><path d="M8.073 24c-.348 0-.689-.063-1.02-.189-1.375-.525-2.104-2.02-1.726-3.402l-.015-.006.09-.226L12.399 2.01c.105-.27.057-.91.006-1.267-.016-.085-.016-.161.008-.24l.008-.023.006-.015V.458l.009-.019c.108-.292.45-.439 1.008-.439.673 0 1.602.21 2.551.573.797.307 1.523.689 2.033 1.075.602.45.842.854.707 1.2l-.031.045-.016.015c-.045.061-.09.12-.15.165-.314.271-.764.735-.84.945l-7.063 18.421-.016-.006c-.494.948-1.457 1.557-2.543 1.561H8.07l.003.006zm-2.187-3.718l-.02.05c-.447 1.201.162 2.557 1.364 3.018.271.105.551.154.837.154.971 0 1.83-.585 2.188-1.5l.027-.061 6.959-18.09c.146-.39.84-1.02.979-1.14l.016-.016c.012-.015.02-.015.02-.03 0-.06-.061-.27-.557-.645-.479-.36-1.154-.72-1.904-1.005-.868-.328-1.768-.539-2.368-.539-.39 0-.524.082-.545.126v.04c.016.104.147 1.035-.034 1.515l-6.962 18.12v.003zm8.95-11.507s-.964 1.109-1.843 1.509c-.88.398-1.529.293-2.32.756-.789.461-1.188 1.103-1.188 1.103L6.27 20.505c-.348.944.168 2.05 1.125 2.42.96.369 2.04-.12 2.412-1.056l5.029-13.094zM9.905 18.76c.104-.041.225 0 .266.105.042.104 0 .222-.105.264-.104.043-.225 0-.266-.104-.042-.097 0-.216.105-.265zm-1.014-1.802c-.152.068-.334 0-.397-.155-.07-.152 0-.334.154-.397.154-.07.335 0 .398.153.074.15.008.314-.155.39v.009zm.286-1.096c-.123-.288 0-.623.287-.758.285-.124.615 0 .75.285.121.289 0 .624-.285.757-.3.126-.629 0-.765-.285l.013.001zm2.426-2.258c.153-.074.335 0 .398.15.07.154 0 .336-.153.399-.155.07-.337 0-.399-.155-.074-.152 0-.334.154-.397v.003zm-1.293-1.379c.105-.042.226 0 .266.105.043.104 0 .226-.104.266-.104.042-.226 0-.265-.104-.044-.106.006-.227.103-.267zM13.681 1.14c.1-.261.993-.162 1.995.226.999.384 1.729.909 1.63 1.17-.104.264-.997.164-1.996-.221-1.005-.385-1.734-.91-1.632-1.176h.003z"/></svg>'
  }
]

export default templates
