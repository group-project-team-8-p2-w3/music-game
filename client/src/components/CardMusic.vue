<template>
  <div>
      <h1>Ini Card Music</h1>
      <audio controls>
        <source :src="url">
      </audio>
  </div>
</template>

<script>
export default {
  name: 'CardMusic',
  props: ['url']
}
</script>
