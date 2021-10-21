<script>

</script>

<div class="phone-graphic">
  <div class="phone-screen">
    <img class="screen-display" src="chatter_main.png" alt="Chatter's main mobile view"/>
  </div>
</div>

<style>
.phone-graphic {
  height: 533px;
  background-color: rgb(85, 84, 84);
  border-radius: 36px;
  padding: 8px;
  grid-column: 1 / 5;
  grid-row: 1 / 1;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4),
              inset 0 -2px 8px rgba(0, 0, 0, 1);
}

.phone-screen {
  background-color: rgb(26, 26, 26);
  border-radius: 34px;
  height: 100%;
  display: flex;
  align-items: center;
}

.screen-display {
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 87%;
}
</style>