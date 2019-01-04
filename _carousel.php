<section>
  <div class="card" id="cards-top">
    <p class="mt-3"><img src="img/megafone.png" width="70">
    Mais Destaque</p>
    <p class="mt-3"><img src="img/globo.png" width="70">
    Tenha seu Proprio Site</p>
    <p class="mt-3"><img src="img/desconto.png" width="70">
    Descontos Exclusivos</p>
    <p class="mt-3"><img src="img/pc.png" width="70">
    Acesse de qualquer lugar</p>
  </div>
</section>
<section>
 <div class="swiper-container">
  <div class="swiper-wrapper">
    <?php 
      $i = 0;
      while ( $i < 7) { 
        $i++;
        echo "<div class='swiper-slide' style='background-image:url(img/$i.png)'></div>"; 
      }
    ?>   
  </div>
</div>
</section>