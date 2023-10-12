<template>
  <!-- Display the available information for the highlight -->
  <div class="museum-highlight">
    <div class="card" :class="{ 'card--is-partner': data.isPartner }">
      <div class="card__image">
        <img
          :class="{ blurry: loading }"
          :src="data.image || `/images/${data.name.toLowerCase()}.jpg`"
          :alt="data.name.toLowerCase()"
        />
        <div class="card__title">
          {{ data.name }}
        </div>
      </div>
      <div class="card__content">
        <p>
          {{ data.description }}
        </p>

        <div class="card__news" v-if="data.news">
          <div class="card__news__title">News</div>
          <ul>
            <li>{{ data.news.title }}</li>
          </ul>
        </div>
        <div class="card__extra">
          <slot />
        </div>
      </div>
      <div class="card__actions">
        <slot name="actions" />

        <button class="card__button" @click="fetchImage">Refresh Image</button>
      </div>
    </div>
    <Badge>
      <slot name="badge" />
    </Badge>
  </div>
</template>

<script>
export default {
  name: "MuseumHighlight",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {},
  mixins: [],
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    newsDate() {
      // Highlight's news item date
    },
  },
  methods: {
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
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.museum-highlight {
  position: relative;
  .card {
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    color: #f2f2f3;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
    border-left: rgba(0, 0, 0, 0.5) 1px solid;

    &__image {
      position: relative;
      height: 300px;
      overflow: hidden;

      img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    &__title {
      font-family: "space mono", sans-serif;
      position: absolute;
      bottom: 0;
      padding: 12px;
      padding-top: 24px;
      letter-spacing: 2px;
      font-size: 24px;
      width: calc(100% - 24px);

      text-shadow: 0ch 0ch 2ch black;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }

    &__content {
      padding: 8px 12px;
      line-height: 32px;
    }

    &__news {
      &__title {
        font-family: "space mono", sans-serif;
        letter-spacing: 2px;
        font-size: 18px;
        font-weight: 600;
      }
      ul {
        margin-top: 8px;
        margin-left: -20px;
      }
    }

    &__extra {
      border-top: rgb(242, 242, 243, 0.2) 1px solid;
    }

    &__actions {
      display: flex;
      gap: 12px;

      margin: auto 12px 12px auto;
    }

    &__button {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      padding: 8px 12px;
      color: #f2f2f3;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }

    &--is-partner {
      background-color: rgba(238, 255, 143, 0.1);
    }
  }
}

.blurry {
  filter: blur(18px);
  transform: scale(1.2);
}
</style>
