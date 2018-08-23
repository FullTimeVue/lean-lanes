<template>
      <div class="lane">
        <h1 class="lane__title">{{ lane.name }}</h1>

        <div class="lane__cards">
          <Row
            v-for="card in lane.cards"
            :key="card.id"
            style="width: 360px; display: inline-block">
            <i-col span="22">

              <Card
                class="lane__cards__card"
                style="width:320px">

                {{ card.title }}

              </Card>

            </i-col>

            <i-col span="2">
              +
            </i-col>
          </Row>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    lane: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
.lane
  border-radius: 0.2em
  padding: 0.8em
  margin-top: 1.8em

  &__title
    font-weight: 400

  &__cards
    height: 18em
    padding: 1em 0

    &__card
      height: 14.5em
</style>
