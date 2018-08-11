<template>
  <div class="board-list">
    <h1 class="board-list__title">{{ $t('boards.myBoards') }}</h1>
    <Row :gutter="20">
      <Col
        v-for="board in boards"
        span="6"
        class="board-list__item"
        :key="board.id">

        <board-item
          :board="board"/>

      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'board-list',
  props: {
    boards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
.board-list
  &__title
    margin-bottom: 1em
    font-weight: 400

  &__item
    margin-top: 1.5em
</style>
