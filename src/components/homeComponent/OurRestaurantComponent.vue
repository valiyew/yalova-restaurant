<template>
  <section class="our-restaurant">
    <div class="our-restaurant-img" data-aos="zoom-in-up">
      <img src="../../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="" />
    </div>
    <div class="our-restaurant-title">
      <h3 data-aos="zoom-in-up">Our restorans</h3>
      <div class="line" data-aos="zoom-in-up">
        <div>
          <div></div>
          <div></div>
        </div>
        <h5>Natoque penatibus</h5>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p data-aos="zoom-in-up">
        The History of Kitchens and Cooks gives further intimation on Mr
        Boulanger usual menu, stating confidently that "Boulanger served salted
        poultry and fresh eggs, all presented without a tablecloth on small
        marble tables". Numerous commentators have also referred to the supposed
        restaurant owner's eccentric habit of touting for custom outside his
        establishment, dressed in aristocratic fashion and brandishing a sword
        <br />
        <br />
        Restaurant owner's eccentric habit of touting for custom outside his
        establishment, dressed in aristocratic fashion and brandishing a sword
      </p>

      <router-link to="/gallery">
        <h4 data-aos="zoom-in-up">View Gallery</h4>
      </router-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.our-restaurant {
  width: 100%;
  position: relative;
  z-index: 3;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 90px 150px;

  .our-restaurant-title,
  .our-restaurant-img {
    width: 50%;
    margin: 50px 0px;
  }

  .our-restaurant-title {
    width: 100%;
    text-align: center;

    h3 {
      color: var(--primary);
      font-size: 48px;
      font-family: "Playball", cursive;
    }

    .line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        div {
          width: 30px;
          height: 1px;
          background: var(--primary);
        }
      }
      h5 {
        margin-top: 20px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 20px;
        font-family: "Source Sans Pro", sans-serif;
        color: var(--black);
      }
    }

    p {
      margin-top: 50px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 10px;
      font-family: "Source Sans Pro", sans-serif;
      color: var(--p-color);
    }

    a {
      text-decoration: none;
      h4 {
        text-align: left;
        font-size: 26px;
        font-weight: bold;
        color: var(--primary);
        font-family: "Playball", cursive;
        transition: 0.6s;

        &:hover {
          color: var(--black);
        }
      }
    }
  }

  .our-restaurant-img {
    width: 80%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 1450px) {
  .our-restaurant {
    padding: 50px 20px;
  }
}

@media screen and (max-width: 992px) {
  .our-restaurant {
    display: flex;
    flex-direction: column;

    .our-restaurant-title,
    .our-restaurant-img {
      margin: 30px 0px;
    }

    .our-restaurant-img {
      width: 100%;
      margin-top: 70px;
    }
  }
}

@media screen and (max-width: 576px) {
  .our-restaurant {
    .our-restaurant-title {
      h3 {
        font-size: 28px;
      }
    }
  }
}
</style>
