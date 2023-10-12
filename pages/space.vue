<template>
  <div class="space-page container">
    <h1 class="space-page__title" data-aos="fade-right">Space</h1>

    <div class="card-list">
      <MuseumHighlight
        v-for="(n, i) in combinedData"
        :key="n.id"
        :data="n"
        data-aos="fade-up"
        :data-aos-delay="i < 4 ? 100 * i : 0"
      >
        <template v-slot:actions>
          <NuxtLink v-if="n.quiz" :href="n.quiz" target="_blank">
            <button class="quiz-button">Quiz</button>
          </NuxtLink>
        </template>

        <template v-slot:badge>
          <font-awesome-icon icon="fa-star" class="fa-2xl" />
        </template>
      </MuseumHighlight>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "SpacePage",
  mixins: [],
  props: {},
  data() {
    return {
      spaceHighlights: [
        {
          date: "2020-04-20 12:20:00",
          description:
            "Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.",
          id: 1,
          image: "",
          name: "Asteroids",
        },
        {
          date: "2020-05-20 15:50:00",
          description:
            "A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.",
          id: 9,
          image: "",
          name: "Comets",
        },
        {
          date: "2020-05-01 9:22:00",
          description:
            "The term planet is ancient, with ties to history, astrology, science, mythology, and religion.",
          id: 7,
          image: "",
          name: "Planets",
          news: {
            date: "2020-08-18 18:00:00",
            title: "Attend our talk about Jupiter with Dr. Hogarth",
          },
          quiz: "https://planetquiz.space",
        },
        {
          date: "2020-07-05 4:10:00",
          description:
            "A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.",
          id: 12,
          image: "",
          name: "Meteor showers",
          news: {
            title: "The Lyrids will peak at on April 21-22 2021, at night",
          },
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: "2020-06-01 11:45:00",
          info: "The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.",
          image: "",
          name: "Mauna Kea Observatories",
        },
      },
    };
  },
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.space-page {
  &__title {
    color: #f2f2f3;
    font-weight: 600;
    font-size: calc(36px + 8vw);
    font-family: "space mono", sans-serif;
    margin: 82px 0;
  }
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 28px;
  padding: 46px 0;
}

.quiz-button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 8px 12px;

  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  color: #f2f2f3;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}
</style>
