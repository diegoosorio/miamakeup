const $header = document.getElementById('header')
      const $modal = document.getElementById('modal');
      const $menu = document.getElementById('menu');
      const $burguerButton = document.getElementById('burguer-button');
      const consulta = window.matchMedia('(max-width: 768px)');
      const $angle = document.getElementById('angle');
      const iTag = document.getElementById("i-tag");

      iTag.setAttribute("class", "fas fa-angle-right");
      // $angle.appendChild(i);
      consulta.addListener(mediaQuery);

      mediaQuery();

      // Modal Image Gallery
      function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        document.getElementById("header").style.zIndex = "1";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
      }
      function over(element){
        console.log('activo');
        element.classList.add('over');
      }
      function leave(element){
        element.classList.remove('over');
      }
      function toggleMenu(){
        $menu.classList.toggle('active');
        if($menu.classList.contains('active')){
          $angle.classList.add('right');
          iTag.setAttribute("class", "fas fa-angle-left");
        }else{
          $angle.classList.remove('right');
          iTag.setAttribute("class", "fas fa-angle-right");
        }
      }
      function showMenu(){
        $menu.classList.add('active');
        $angle.classList.add('right');
        iTag.setAttribute("class", "fas fa-angle-left");
      }
      function hideMenu(){
        $menu.classList.remove('active');
        $angle.classList.remove('right');
        iTag.setAttribute("class", "fas fa-angle-right");
      }
      function mediaQuery(){
        if (consulta.matches) {
          $burguerButton.addEventListener('touchstart', toggleMenu);
          // iTag.addEventListener('touchstart', toggleMenu);
        } else {
          $burguerButton.removeEventListener('touchstart', toggleMenu);
          // iTag.addEventListener('touchstart', toggleMenu);
        }
      }
      //Lazy loading
      var bLazy = new Blazy({
        selector: 'img'
      });
      // Gestos touch
      var $body = document.body;

      var gestos = new Hammer($body);
      gestos.on('swipeleft', hideMenu);
      gestos.on('swiperight', showMenu);

      window.addEventListener("scroll", function(e){
        // console.log(window.scrollY);
        if(document.getElementById('portada').getBoundingClientRect().top < 150){
          document.getElementById('a-portada').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA;  background: rgba(255, 137, 170, 0.1)";
        }else {
          document.getElementById('a-portada').style =  "box-shadow: none; background:auto";
        }
        if(document.getElementById('about-me').getBoundingClientRect().top < 150){
          document.getElementById('a-about').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA; background: rgba(255, 137, 170, 0.1)";
          document.getElementById('a-portada').style =  "box-shadow: none; background:auto";
        }else {
          document.getElementById('a-about').style =  "box-shadow: none; background:auto";
        }
        if(document.getElementById('mi-experiencia').getBoundingClientRect().top < 150){
          document.getElementById('a-experiencia').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA; background: rgba(255, 137, 170, 0.1)";
          document.getElementById('a-about').style =  "box-shadow: none; background:auto";
        }else {
          document.getElementById('a-experiencia').style =  "box-shadow: none; background:auto";
        }
        if(document.getElementById('curso').getBoundingClientRect().top < 150){
          document.getElementById('a-curso').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA; background: rgba(255, 137, 170, 0.1)";
          document.getElementById('a-experiencia').style =  "box-shadow: none; background:auto";
        }else {
          document.getElementById('a-curso').style =  "box-shadow: none; background:auto";
        }
        if(document.getElementById('contact-me').getBoundingClientRect().top < 150){
          document.getElementById('a-contact').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA; background: rgba(255, 137, 170, 0.1)";
          document.getElementById('a-curso').style =  "box-shadow: none; background:auto";
        }else {
          document.getElementById('a-contact').style =  "box-shadow: none; background:auto";
        }
        // if((window.scrollY + window.innerHeight) == document.body.scrollHeight){
        //   document.getElementById('a-contact').style =  "box-shadow: inset 0px 3px 0px 0px #ff89AA; background: rgba(255, 137, 170, 0.1)";
        //   document.getElementById('a-curso').style =  "box-shadow: none; background:auto";
        // }else {
        //   document.getElementById('a-contact').style =  "box-shadow: none; background:auto";
        // }
      });