const app = Vue.createApp({
  data() {
    return {
      userName: "Renegan Ronin",
      userAge: 21,
      favoriteNumber: Math.random(),
      imageLink:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*",
    };
  },
});
app.mount("#assignment");
