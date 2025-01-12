<template>
  <div class="our-contact">
    <div class="contact">
      <div class="contact-info">
        <h3 data-aos="zoom-in-up">Contact info</h3>
        <p data-aos="zoom-in-up">
          Numerous commentators have also referred to the supposed restaurant
          owner's eccentric habit of touting for custom outside his
          establishment, dressed in aristocratic fashion and brandishing a sword
        </p>

        <p data-aos="zoom-in-up">
          Numerous commentators have also referred to the supposed restaurant
          owner's eccentric habit of touting for custom outside his
          establishment, dressed in aristocratic fashion and brandishing a sword
        </p>
      </div>
      <div class="contact-city">
        <div style="display: flex; flex-direction: column; gap: 40px">
          <ul data-aos="zoom-in-up">
            <h5>Lambert - New York City</h5>
            <li>27th Brooklyn Toshkent Uzbekistan</li>
            <li>+998(99)999-99-99</li>
            <li>qwerty@gmail.com</li>
          </ul>
          <ul data-aos="zoom-in-up">
            <h5>Lambert - New York City</h5>
            <li>27th Brooklyn Toshkent Uzbekistan</li>
            <li>+998(99)999-99-99</li>
            <li>qwerty@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul data-aos="zoom-in-up">
            <h5>Lambert - New York City</h5>
            <li>27th Brooklyn Toshkent Uzbekistan</li>
            <li>+998(99)999-99-99</li>
            <li>qwerty@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="separator">
      <div class="bold-separator" data-aos="zoom-in-up">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>
    </div>

    <h2 data-aos="zoom-in-up">Our Location</h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.our-contact {
  width: 100%;
  position: relative;
  z-index: 3;
  background: var(--white);
  padding: 90px 150px;
  color: black;
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: column;

  .contact {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    .contact-info {
      width: 60%;
      h3 {
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        margin-bottom: 20px;
        color: var(--black);
      }

      p {
        text-align: left;
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 10px;
        color: var(--p-color);
      }
    }

    .contact-city {
      display: flex;
      justify-content: space-between;

      h5 {
        margin-bottom: 10px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        color: var(--black);
      }

      ul {
        list-style: none;
        li {
          padding: 6px 0;
          float: left;
          font-size: 14px;
          width: 100%;
          color: var(--p-color);
        }
      }
    }
  }

  .separator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0px;

    .bold-separator {
      width: auto;
      display: flex;
      place-items: center;
      align-items: baseline;
      gap: 100px;
      margin: 50px 0px;

      .line {
        width: 130px;
        height: 1px;
        background: var(--primary);
      }

      .dot {
        width: 8px;
        height: 8px;
        background: var(--black);
        border-radius: 50%;
      }
    }
  }

  h2 {
    text-align: center;
    width: 100%;
    font-size: 48px;
    font-family: "Playball", cursive;
    color: var(--primary);
  }
}

@media screen and (max-width: 1450px) {
  .our-contact {
    padding: 90px 30px;
  }
}

@media screen and (max-width: 992px) {
  .our-contact {
    .contact {
      display: flex;
      flex-direction: column;
      .contact-info {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .our-contact {
    .contact {
      .contact-city {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }

    .separator {
      .bold-separator {
        gap: 30px;
      }
    }

    h2 {
      font-size: 28px;
    }
  }
}
</style>
