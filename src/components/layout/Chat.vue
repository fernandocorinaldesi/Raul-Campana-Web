<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat icon :attendants="attendants">
      <p slot="header">
        Mandame un mensaje directo.
      </p>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        />
      </template>
      <small slot="footer"></small>
    </SocialChat>
  </div>
</template>

<script>
// ...
export default {
  name: "Chat",
  // ...
  data: () => ({
    attendants: [
      {
        app: "whatsapp",
        name: "Raul Campana",
        label: 'CLICK AQUI',
        number: "5491121832396",
        avatar: {
          src:
            "https://i.ibb.co/FwpW4wj/avatar.png",
          alt: "Raul Campana",
        },
      },
      // ...
    ],
  }),
};
</script>
