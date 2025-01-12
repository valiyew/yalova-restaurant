<template>
  <section class="discover">
    <div class="discover-title">
      <h3>Discover</h3>
      <div class="line">
        <div>
          <div></div>
          <div></div>
        </div>
        <h5>Our story</h5>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>
        The History of Kitchens and Cooks gives further intimation on Mr
        Boulanger usual menu, stating confidently that "Boulanger served salted
        poultry and fresh eggs, all presented without a tablecloth on small
        marble tables". Numerous commentators have also referred to the supposed
        restaurant owner's eccentric habit of touting for custom outside his
        establishment, dressed in aristocratic fashion and brandishing a sword
        <br />
        <br />
        Numerous commentators have also referred to the supposed restaurant
        owner's eccentric habit of touting for custom outside his establishment,
        dressed in aristocratic fashion and brandishing a sword
      </p>

      <h4>Discover our menu</h4>
    </div>
    <div class="discover-img">
      <img src="../../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.discover {
  width: 100%;
  position: relative;
  z-index: 3;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 90px 150px;

  .discover-title,
  .discover-img {
    width: 50%;
    margin: 50px 0px;
  }

  .discover-title {
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

    h4 {
      text-align: left;
      font-size: 26px;
      font-weight: bold;
      color: var(--primary);
      font-family: "Playball", cursive;
    }
  }

  .discover-img {
    width: 80%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 1450px) {
  .discover {
    padding: 50px 20px;
  }
}

@media screen and (max-width: 992px) {
  .discover {
    display: flex;
    flex-direction: column;

    .discover-title,
    .discover-img {
      margin: 30px 0px;
    }

    .discover-img {
      width: 100%;
      margin-top: 70px;
    }
  }
}

@media screen and (max-width: 576px) {
  .discover {
    .discover-title {
      h3 {
        font-size: 28px;
      }
    }
  }
}
</style>
