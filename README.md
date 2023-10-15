Please find the `spacePage.vue` at `pages/space.vue`
and `MuseumHighlight.vue` is under the `components` folder
```ts
// pages/space.vue
computed: {
    combinedData() {
      return [
        ...this.spaceHighlights,
        ..._.map(this.spacePartners, (data, id) => {
          return {
            id,
            description: data.info,
            date: data.createdAt,
            isPartner: true,
            ...data,
          };
        }),
      ].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
},
```

REQUIREMENTS

1. Cards displaying highlights from the space partners' API should have a different color branding from those in the museum's own data.
```html
// components/MuseumHighlight.vue
<div class="card" :class="{ 'card--is-partner': data.isPartner }">
<style>
.card--is-partner {
  background-color: rgba(238, 255, 143, 0.1);
}
</style>
```


2. While in this case the card only needs to work for the Space page, the card component needs to be done in such a way that it would be easily expandable to the other pages. The museum could have X number of pages and they could continually be adding new ones. As a developer, you don't know what those pages might be.



2.1.    Each page has a special badge in the top right corner of the card. This badge is different on every page, and could be an image, or some styled html elements, or a Font Awesome icon. The Space page has an image of a star. The Dinosaur page has a Font Awesome icon inside a circle. The Oceans page has two Font Awesome icons, a wave and a fish together. And so on...
```html
// pages/space.vue
<template v-slot:badge>
    <font-awesome-icon icon="fa-star" class="fa-2xl" />
</template>
```
```html
// components/MuseumHighlight.vue
<Badge>
    <slot name="badge" />
</Badge>
```

2.2     The data on the different pages (Space, Dinosaurs...) have commonalities but also differences. All highlights have a name, image, date they were posted, a brief description, and perhaps associated news. But all pages also have extra unique data. For example, on the space page, some highlights also include a link to a quiz on the topic. On the dinosaur card, we have a "Period" key to indicate when that dinosaur lived. On the Wildlife page, we have several additional keys: "Location", "Species", and "Endangered status".

```html
// pages/space.vue
<MuseumHighlight v-for="n in combinedData" :key="n.id" :data="n">
    <!-- <div v-if="n.Period">{{n.Period}}</div> -->
    <template v-slot:actions>
      <a v-if="n.quiz" :href="n.quiz" target="_blank">
        <button class="quiz-button">Quiz</button>
      </a>
    </template>
</MuseumHighlight>
```
```html
// components/MuseumHighlight.vue
<div class="card__extra">
    <slot />
</div>
```

1. Each card should have a "Refresh image" button which, when clicked, will replace that card's current image with a new image fetched from an API.
```html
<button class="card__button" @click="fetchImage">Refresh Image</button>
```

3.1     When implementing this functionality, assume that you have already received the new image from the API. E.g. const newImage = await getNewImage(); where you do not need to implement the getNewImage() function.
```ts
// components/MuseumHighlight.vue

async fetchImage() {
      // Fetch a new image for the highlight
      this.loading = true;
      await fetch(
        `https://source.unsplash.com/featured/?${this.data.name}`
      ).then((response) => {
        this.data.image = response.url;
      });
      this.loading = false;
    },
```
3.2     You only need to implement the code which will replace the current image with the new image for the relevant card.

1. The cards should be arranged in order of date created, with the most recent first.
```ts
//pages/space.vue
this.combinedData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});
```