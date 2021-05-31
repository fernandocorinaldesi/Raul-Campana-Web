<template>
<div>
    <xns-audio-player-simple :playlist="songs"></xns-audio-player-simple>
</div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      songs: [
        {
          audio: "musica.mp3",
          artist: "Superstar",
          tittle: "Funky Disco House",
          album: "Alpha Zulu",
          cover: "https://i.ibb.co/z4Vg9SN/c2.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>